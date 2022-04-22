import React from 'react'
import logo from './images/mainlogo.png';
import mockup from './images/MOCKUPS.png';
import LogIN from "./components/loginFORM.js"; 
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { useState } from 'react';
import './appholder.css';

import React, { useState } from "react";
import styled from "styled-components";

const theme = {
  red: {
    default: "#dc143c",
    hover: "#b22222"
  },
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "red"
};

function clickMe() {
  alert("You clicked me!");
}

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
            <li><Button onClick={(clickMe) => setButtonPopup(true)}> Log In</Button> </li>   
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
