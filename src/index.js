import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './font.css';
import Home from '../src/Components/home/home';
import LoginPage from './Components/forms/loginpage';
import CreateAccountPage from './Components/forms/createAccountPage';
import App from './appholder';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PasswordGenerator, PasswordList } from "./appholder.js";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={LoginPage} />
        <Route exact path="/CreateAccount" component={CreateAccountPage} />
        <Route exact path="/Dashboard" component={App} />
        <Route exact path="/password-list" component={PasswordList} />
        <Route exact path="/password-generator" component={PasswordGenerator} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



reportWebVitals();
