import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './App.css';
import Home from '../src/Components/home/home';
import Portal from './appholder.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from '../src/Components/images/mainlogo.png';
import mockup from '../src/Components/images/MOCKUPS.png';
import LogIN from  '../src/Components/forms/loginFORM';
import CreateForm from '../src/Components/forms/createaccountForm'; 
import { useState } from 'react';
import { PasswordGenerator, PasswordList } from "./appholder.js";


ReactDOM.render(
  <React.StrictMode>
    <Router>
	<Switch>
	<Route exact path='/' component={Home}/>
	 </Switch>
	<Switch>  
        <Route exact path='/Dashboard' component={Portal}/>
	</Switch>
	<Switch>
	<Route exact path='/password-list' element={<PasswordList/>} />
	</Switch>
	<Switch>
	<Route exact path='/password-generator' element={<PasswordGenerator/>} />
	</Switch>
    </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );



reportWebVitals();
