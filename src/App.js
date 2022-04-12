import React from 'react'
import logo from './images/mainlogo.png';
import mockup from './images/MOCKUPS.png';
import LogIN from "./Components/loginFORM"; 
import CreateForm from "./Components/createaccountForm"; 
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { useState } from 'react';
import './App.css';

function App() {
  const [loginbuttonPopup, setloginButtonPopup] = useState(false);
  const [createbuttonPopup, setcreateButtonPopup] = useState(false);
  const [inPortal,setInPortal] = useState(false);

  return (

      <div className="appmain">
     <div className='main-header'>
      <div className='nav-logo'>
      <a href="http://localhost:3000" id="image">
              <img src={logo} className="App-logo" alt="logo" />
        </a>
      </div>
      <div className="inner">
          <ul className="nav-links">
            <li><button onClick={() => setloginButtonPopup(true)}> Log In</button> </li>   
            <LogIN trigger={loginbuttonPopup} setTrigger={setloginButtonPopup}></LogIN> 
            
            <li><button onClick={() => setcreateButtonPopup(true)}> Get S.S. </button> </li>   
            <CreateForm trigger={createbuttonPopup} setTrigger={setcreateButtonPopup}></CreateForm> 
           
          </ul>
        </div>
     </div>

     <div className='main-body'>
      <img src={mockup} className="macMockup" alt="logo" />
     </div>
     <div className='main-footer'>
        <h1>footer</h1>
     </div>
   
    </div>

    

    
  );
}


export default App;