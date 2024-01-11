import React,{useState, useEffect} from 'react';
import data from '../../data.json';
import { motion } from "framer-motion";

const Navigation = ()=>{
    const [showSubMenu, setShowSubMenu] = useState([]);
    const [menuData, setMenuData]:any= useState([]);
    const variants:any = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
      };
    useEffect(()=>{
        setMenuData(data);
    },[]);

    const subMenuOnMouseEnterHandler = (e:any,subMenuId:any) => {
        console.log(subMenuId, 5555);
        setShowSubMenu((prev) => {
          console.log("running");
          let arr:any = [...prev];
            arr[subMenuId] = true;
          return arr;
        });
      };
      const subMenuOnMouseLeaveHandler = (e:any,subMenuId:any) => {
        setShowSubMenu((prev) => {
          console.log("running");
          let arr:any = [...prev];
       arr[subMenuId] = false;
          return arr;
        });
      };
    
      console.log(showSubMenu,'showSubMenu')
    return(
        <>
        <nav>
      <ul className='main-nav'>
        {menuData.map((el:any, i:any) => {
          if (!el.children) {
            return (
              <li key={el.id}>
                <a href='#' className='header-nav-link'>
                  <span>{el.name}</span>
                </a>
              </li>
            );
          }

          return (
            <li
              onMouseEnter={(event) => subMenuOnMouseEnterHandler(event,el.id)}
              onMouseLeave={(event) => subMenuOnMouseLeaveHandler(event,el.id)}
              key={el.id}
              className='header-nav-options options-hover'
            >
              <div className='header-nav-div'>
                <span>{el.name}</span>
              </div>
              <motion.ul
                variants={variants}
                animate={showSubMenu[el.id] ? "open" : "closed"}
                className='header-nav-ul'
              >
                {showSubMenu[el.id] &&
                  el.children.map((ele:any) => {
                    if (!ele.children) {
                      return (
                        <li key={ele.id} className='sub-menu-li'>
                          <a
                            href='#'
                            className='sub-menu-link'
                            style={{ textDecoration: "none" }}
                          >
                            <span>{ele.name}</span>
                          </a>
                        </li>
                      );
                    }

                    return (
                      <li
                        onMouseEnter={(event) => subMenuOnMouseEnterHandler(event,ele.id)}
                        onMouseLeave={(event) => subMenuOnMouseLeaveHandler(event,ele.id)}
                        key={ele.id}
                        className='sub-menu-options sub-menu-hover'
                      >
                        <div className='sub-menu-div'>
                          <span>{ele.name}</span>
                          <span className='arrow'>{"-->"}</span>
                        </div>
                        <motion.ul
                          variants={variants}
                          animate={showSubMenu[ele.id] ? "open" : "closed"}
                          className='sub-menu-ul'
                        >
                          {showSubMenu[ele.id] &&
                            ele.children.map((elem:any) => {
                              return (
                                <li key={elem.id} className='grand-child-link'>
                                  <a href='#'>
                                    <span>{elem.name}</span>
                                  </a>
                                </li>
                              );
                            })}
                        </motion.ul>
                      </li>
                    );
                  })}
              </motion.ul>
            </li>
          );
        })}
      </ul>
    </nav>
        
        </>
    )
}

export default Navigation;