import React from 'react'
import logo from '../images/mainlogo.png';
import mockup from '../images/MOCKUPS.png';
import LogIN from  '../forms/loginFORM';
import CreateForm from '../forms/createaccountForm'; 
import { useState } from 'react';
import './home.css';

// for buttons
import styled from "styled-components";

const theme = {
  red: {
    default: "#b22222",
    hover: "#dc143c"
  },
  charcoal: {
    default: "#333333",
    hover: "#36454f"
  }
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 5px;
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

function Home() {
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
            <li><Button onClick={() => setloginButtonPopup(true)}> Log In</Button> </li>   
            <LogIN trigger={loginbuttonPopup} setTrigger={setloginButtonPopup}></LogIN> 
            
            <li><Button onClick={() => setcreateButtonPopup(true)}> Sign Up </Button> </li>   
            <CreateForm trigger={createbuttonPopup} setTrigger={setcreateButtonPopup}></CreateForm> 
           
          </ul>
        </div>
     </div>

     <div className='main-body'>
      <img src={mockup} className="macMockup" alt="logo" />
     </div>

   
    </div>

    

    
  );
}


export default Home;
