import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './font.css';
import App, { NavHeader } from './App';
import { PasswordGenerator, PasswordList } from './App';
>>>>>>> main
import reportWebVitals from './reportWebVitals';
import './font.css';
import Home from '../src/Components/home/home';
import App from './appholder';
import { NavHeader } from './appholder.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PasswordGenerator, PasswordList } from "./appholder.js";

ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Router>
	<Switch>
	<Route exact path="/" component={Home}/>
	</Switch>
	<Switch>  
        <Route exact path="/Dashboard" component={App}/>
	</Switch>
	<Switch>
	<Route exact path="/password-list" component={PasswordList} />
	</Switch>
	<Switch>
	<Route exact path="/password-generator" component={PasswordGenerator} />
	</Switch>
    </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );


=======
    <BrowserRouter>
      <NavHeader/>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="password-list" element={<PasswordList/>} />
        <Route path="password-generator" element={<PasswordGenerator/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
>>>>>>> main

reportWebVitals();
