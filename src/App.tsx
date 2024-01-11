import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Login from "./component/User/Login";
import { PrivateRoute } from './routing/PrivateRoute';
import Home from "./component/Home/Home";
import "react-toastify/dist/ReactToastify.css";
import CalendarDemo from './component/FullCalendarDemo/CalendarDemo';
import './App.css';
import WorkOrderDemo from './component/WorkOrder/WorkOrderDemo';

import WorkDemo from './component/WorkOrder/WorkDemo';
import Menu from './component/WorkOrder/Menu';
import NavigationDemo from './component/WorkOrder/NavigationDemo';


import 'primereact/resources/themes/lara-light-indigo/theme.css';
 import 'primereact/resources/primereact.min.css';



function App() {
  return (
   
    <Router>
    <Routes>
      <Route  index path="/" element={<Login/>}/>
      <Route path="/navigationdemo" element={<NavigationDemo/>}/>
      <Route path="/calendar" element={<CalendarDemo/>}/>
      <Route path="/workdemo" element={<WorkDemo/>}/>
      <Route path="/workorder" element={<WorkOrderDemo/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route element={<PrivateRoute />}>
            <Route  path="/home" element={<Home />} />
      </Route>
    </Routes>
  </Router>
 
  );
}

export default App;
