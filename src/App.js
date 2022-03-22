import logo from './icon.png';
import './App.css';
import { Link } from "react-router-dom";
import React from "react";
import Checkbox from "./Checkbox";
import { createPassword } from "./createPassword";



export function NavHeader() {
  return (
    
    <nav className="nav">
      <div className="container">
        <a href="http://localhost:3000" id="image">
              <img src={logo} className="App-logo" alt="logo" />
        </a>
        <div className="inner">
          <ul className="nav-links">
            <Link to="/password-list">My Passwords</Link>
            <Link to="/password-generator">Password Generator</Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}




export function PasswordList() {
  var passwords = [
    {password: "asdfasdf", site: "google.com"},
    {password: "asdofuiqpiuwe", site: "netflix.com"},
    {password: "pqweiii", site: "bestbuy.com"},
  ]
  return (
    <main className = "content">
      <h2>Password List</h2>
      { passwords.map((p, i) => <p key={i.toString()}>{ p.site }: {p.password} </p>) }
    </main>
  )
}


//This + Checkbox.js partly from http://react.tips/checkboxes-in-react-16/

const OPTIONS = ["Uppercase", "Symbols", "Numbers"];

export class PasswordGenerator extends React.Component {

  state = {
    checkboxes:{
      Uppercase: false,
      Symbols: false,
      Numbers: false
    }
  };

  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      // BONUS: Can you explain why we pass updater function to setState instead of an object?
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
      type="submit"
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <main className = "content">
         <div className="rows">
          <div className="colomn">
            <form onSubmit={this.handleFormSubmit}>
               {this.createCheckboxes()}
            </form>
            <p>{ createPassword(15, this.state.checkboxes.Symbols, this.state.checkboxes.Uppercase, this.state.checkboxes.Numbers) }</p>
           </div>
         </div>
      </main>
    );
  }
}

export function _PasswordGenerator() {
  return (
    <main className = "content">
      <h2>Password Generator</h2>
    </main>
  )
}














function App() {
  return (
    <main className = "content">
      <h2>Password Manager</h2>
      <p>Welcome to the most secure password manager!</p>
    </main>
  );
}

export default App;
