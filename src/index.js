import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App, { NavHeader } from './App';
import { PasswordGenerator, PasswordList } from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();