import React from 'react';
import{Outlet, Navigate} from 'react-router-dom';

export const PrivateRoute = () => {
    
    let  userid = localStorage.getItem("token") == null ? false : true;
    console.log(userid, 78555)
    return (
        <>
            {userid ? <Outlet  /> : <Navigate to="/Login" />};
        </>
    );

}