import React from 'react'
import Home from '../src/Components/home/home';
import Portal from './appholder';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from '../src/Components/images/mainlogo.png';
import mockup from '../src/Components/images/MOCKUPS.png';
import LogIN from  '../src/Components/forms/loginFORM';
import CreateForm from '../src/Components/forms/createaccountForm'; 
import { useState } from 'react';


function App() {
  const [loginbuttonPopup, setloginButtonPopup] = useState(false);
  const [createbuttonPopup, setcreateButtonPopup] = useState(false);
  const [inPortal,setInPortal] = useState(false);
  return (
    <Router>
	<Switch>
	<Route exact path='/' component={Home}/>
	 </Switch>
	<Switch>  
        <Route path='/Dashboard' component={Portal}/>
	</Switch>
    </Router>
  );
}


export default App;
