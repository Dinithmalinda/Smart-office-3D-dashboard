import './App.css';
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { Pagecontext } from './components/AuthContext'
import {  BrowserRouter as Router, Switch,  Route, Redirect} from "react-router-dom";

import Login from "./Pages/login.jsx";
import Dashboard from './components/dashboard';
import Cctv from './components/cctv';
import SideBar from './components/sidebar';
import Navigator from './components/navigator';
import Sensors from './components/sensors';
import Switches from './components/switches';
import Cotable from './components/cotable';
import Coreport from './components/coreport';
import Rulechain from './components/rulechain';
import Useraccounts from './components/useraccounts';
import Useractivities  from './components/useractivities';


function App() {
  const[contectvalue,setContectvalue]=useState([]);
  
  return (  
    

<Router>  
        
        <Switch>
        <Route path="/login"><Login/></Route>         
        <Pagecontext.Provider value={{contectvalue,setContectvalue}}> 
        <Route path={"/home"}>  <SideBar/><Navigator/></Route>      
        <Route path={"/dashboard"}><SideBar/><Dashboard /></Route>
        <Route path={"/cctv"}><SideBar/> <Cctv/></Route>  
        <Route path={"/sensors"}><SideBar/> <Sensors/></Route>   
        <Route path={"/switches"}><SideBar/> <Switches/></Route> 
        <Route path={"/cotable"}><SideBar/> <Cotable/></Route> 
        <Route path={"/coreport"}><SideBar/> <Coreport/></Route> 
        <Route path={"/rulechain"}><SideBar/> <Rulechain/></Route> 
        <Route path={"/useraccounts"}><SideBar/> <Useraccounts/></Route> 
        <Route path={"/useractivities"}><SideBar/> <Useractivities /></Route>
      
        </Pagecontext.Provider>
         </Switch>
         <Route exact path={"/"}><Redirect to="/login" /></Route>
 </Router>  
       
  );
}

export default App;
