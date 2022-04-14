import React from 'react'
import logo from './images/mainlogo.png';
import mockup from './images/MOCKUPS.png';
import LogIN from "./components/loginFORM.js"; 
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { useState } from 'react';
import './appholder.css';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <Router>
      <div className="appmain">
     <div className='main-header'>
      <div className='nav-logo'>
      <a href="http://localhost:3000" id="image">
              <img src={logo} className="App-logo" alt="logo" />
        </a>
      </div>
      <div className="inner">
          <ul className="nav-links">
            <li><button onClick={() => setButtonPopup(true)}> Log In</button> </li>   
            <LogIN trigger={buttonPopup} setTrigger={setButtonPopup}></LogIN> 
            
            <li>
              <a href="" id="getaccount"> Get S.S </a>
            </li>  
          </ul>
        </div>
     </div>
     <div className='main-body'>
     <img src={mockup} className="macMockup" alt="logo" /> 
       <Switch>
           <Route exact path ="/login">
             <LogIN />
           </Route>
           <Route exact path ="/createaccount">
             <LogIN />
           </Route>
       </Switch>
   
     </div>

   
    </div>
    </Router>
    

    
  );
}


export default App;
