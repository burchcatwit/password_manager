import React from 'react'
import logo from '../images/mainlogo.png';
import CreateForm from '../forms/createAccountPage';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from '../../appholder';
import './home.css';

function Home() {
  const [loginbuttonPopup, setloginButtonPopup] = useState(false);
  const [createbuttonPopup, setcreateButtonPopup] = useState(false);
  const [inPortal, setInPortal] = useState(false);

  return (

    <div className="appmain">
      <div className='main-header'>
        <div className='nav-logo'>
          <a href="http://localhost:3000" id="image">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
        </div>
        <div className='middle-header'>

        </div>
        <div className="outer-header">
          <h1>Spartan Security</h1>
        </div>
      </div>

      <div className='main-body'>
        <div className='logInBox'>
          <Link className='logInButton' to="/Login">
            <button className='logInButton' >  LOG IN </button>
          </Link>
        </div>
        <div className='signUpBox'>

          <Link className='signUpButton' to="/CreateAccount">
            <button className='signUpButton' > GET S.S </button>
          </Link>
        </div>
      </div>


    </div>




  );
}


export default Home;
