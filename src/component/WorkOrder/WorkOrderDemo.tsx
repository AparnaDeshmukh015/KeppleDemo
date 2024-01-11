
 import React,{useEffect, useState} from "react";
//  import data from '../../data.json';
 const WorkOrderDemo = () =>{
    const[buildData]:any=useState([]);
    const[wingData, setWingData]:any=useState([]);
    const[floorData, setFloorData]: any=useState([]);
    
    useEffect(()=>{
        // setBuildData(data?.structure_hierarchy_list);
    },[buildData]);

    const handlerBuilding = (e:any, building:any) => {
        setWingData(building?.node_child);
    }
    const handlerWing = (e:any, wing:any) => {
          setFloorData(wing?.node_child)
    }

    const handleFloor = (e:any, floor:any) => {
        console.log(floor, 6666);
    }
    return (
        <>
            <div className="grid grid-flow-col auto-cols-max gap-4">
                {buildData.map((build:any, id:any)=>{
                    return(<>
                    <div className="tile bg-amber-500 col-span-1 md:col-span-2 lg:col-span-3" key={id}>
                        <button className="tile-marker" onClick={(e)=> handlerBuilding(e,build)}>{build?.node_name}</button>
                    </div>
                    </>)
                })}
            </div>
            <div className="grid grid-flow-col auto-cols-max gap-4">
                {wingData.map((wing:any, id:any)=>{
                    return(<>
                    <div className="tile bg-amber-500 col-span-1 md:col-span-2 lg:col-span-3" key={id}>
                        <button className="tile-marker" onClick={(e)=> handlerWing(e,wing)}>{wing?.node_name}</button>
                    </div>
                    </>)
                })}
            </div>
            <div className="grid grid-flow-col auto-cols-max gap-4">
                {floorData.map((floor:any, id:any)=>{
                    return(<>
                    <div className="tile bg-amber-500 col-span-1 md:col-span-2 lg:col-span-3" key={id}>
                        <button className="tile-marker" onClick={(e)=> handleFloor(e, floor)}>{floor?.node_name}</button>
                    </div>
                    </>)
                })}
            </div>
   </>
       

    )
  }

  export default WorkOrderDemo;