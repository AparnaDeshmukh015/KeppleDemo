import React,{useState, useEffect} from 'react';

import dataDemo from '../../dataDemo.json';
import { motion } from "framer-motion";

const NavigationDemo = ()=>{
    const [showSubMenu, setShowSubMenu] = useState([]);
    const[status, setStatus] = useState(false);
    const [menuData, setMenuData]:any= useState([]);
    const [showId, setShowId] =useState();
    const [showSubId, setShowSubId] =useState();
    const variants:any = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
      };
    useEffect(()=>{
        setMenuData(dataDemo.structure_hierarchy_list);
    },[]);

    const subMenuOnMouseEnterHandler = (e:any,subMenuId:any, id:any) => {
      e.preventDefault();
      setStatus(false);
        console.log(subMenuId, 5555, id);
        setShowSubMenu((prev) => {
          console.log("running");
          let arr:any = [...prev];
            
            arr[subMenuId] = true;
            setShowId(id);
            setStatus(true);
          return arr;
        });
        
      };
      const subMenuNestedOnMouseEnterHandler = (e:any,subMenuId:any, id:any) => {
       
        console.log(id);
        setShowSubMenu((prev) => {
          console.log("running");
          let arr:any = [...prev];
            
          arr[subMenuId] = true;
          setShowSubId(id);
            setStatus(true);
          return arr;
        });
      };
    
    
    return(
        <>
        <nav>
      <ul className='main-nav'>
        {menuData.map((el:any, i:any) => {
          
          if (!el.node_child) {
            return (
              <li key={el.node_id}>
                <a href='#' className='header-nav-link'>
                  <span>{el.node_name}</span>
                </a>
              </li>
            );
          }

          return (
            <>
             {console.log(el.node_id, 7777, showId)}
            <li
              onClick={(event) => subMenuOnMouseEnterHandler(event,el.node_id, i)}
              key={el.node_id}
              className='header-nav-options options-hover'
            >
              <div className='header-nav-div'>
                <span>{el.node_name}</span>
              </div>
             
               {showId === i ? <motion.ul
                variants={variants}
                animate={showSubMenu[el.node_id] ? "open" : "closed"}
                className='header-nav-ul'
              >
                <>
               
                {showSubMenu[el.node_id] && status &&
                  el.node_child.map((ele:any, index:any) => {
                    
                    if (!ele.node_child && status) {
                      return (
                        <li key={ele.node_id} className='sub-menu-li'
                        style={{display:status ? "block" : "none"}}
                        >
                          <a
                            href='#'
                            className='sub-menu-link'
                            style={{ textDecoration: "none" }}
                          >
                            <span>{ele.node_name}</span>
                          </a>
                        </li>
                      );
                    }

                    return (
                      <li
                        onClick={(event) => subMenuNestedOnMouseEnterHandler(event,ele.node_id, index)}
                        //  onMouseLeave={(event) => subMenuOnMouseLeaveHandler(event,ele.node_id)}
                        key={ele.node_id}
                        className='sub-menu-options sub-menu-hover'
                      >
                        <div className='sub-menu-div'>
                          <span>{ele.node_name}</span>
                          <span className='arrow'>{"-->"}</span>
                        </div>
                       
                        {showSubId === index ?<ul
                          // variants={variants}
                          // animate={showSubMenu[ele.node_id] ? "open" : "closed"}
                          className='sub-menu-ul '
                        >
                          {showSubMenu[ele.node_id] &&
                            ele.node_child.map((elem:any) => {
                              return (
                                <li key={elem.node_id}>
                                  <a href='#'>
                                    <span>{elem.node_name}</span>
                                  </a>
                                </li>
                              );
                            })}
                        </ul>:''}
                        
                      </li>
                    );
                  })}
                  </>
              </motion.ul> :''}
            </li>
            </>
          );
        })}
      </ul>
    </nav>
        
        </>
    )
}

export default NavigationDemo;