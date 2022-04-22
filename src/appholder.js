import logo from './icon.png';
import copy_logo from './baseline_content_copy_white_24dp.png';
import edit_logo from './baseline_edit_white_24dp.png';
import less_logo from './baseline_expand_less_white_24dp.png';
import more_logo from './baseline_expand_more_white_24dp.png';


import './appholder.css';
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import Checkbox from "./Checkbox";
import { createPassword } from "./passwordGenerators/createPassword";
import Collapsible from 'react-collapsible';
import copy from "copy-to-clipboard";  
import { Container } from './Container';

// needed for password obfuscation
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

// for buttons
import styled from "styled-components";

const theme = {
  red: {
    default: "#dc143c",
    hover: "#b22222"
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

export function NavHeader() {
  return (
    
    <nav className="nav">
      <div className="container">
        <a href="/" id="image">
              <img src={logo} className="App-logo" alt="logo" />
        </a>
        <div className="inner">
          <ul className="nav-links">
            <Button><Link to="/password-list">Password List</Link></Button>
            <Button><Link to="/password-generator">Password Generator</Link></Button>
          </ul>
        </div>
      </div>
    </nav>
  )
}


function CollapsibleLable(props) {
  return (
    <div style={{ display: 'flex'}}>
      <span>{props.siteName}</span>
      <img src={props.logo}/>
    </div>
  )
}


function PasswordEntry(props) {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

   const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
	
  let [editingUsername, setEditingUsername] = useState(false);
  let [editingPassword, setEditingPassword] = useState(false);
  let [editingNotes, setEditingNotes] = useState(false);
  let p = props.password;
  const onEditUsername = props.onEditUsername;
  const onEditPassword = props.onEditPassword;
  const onEditNotes = props.onEditNotes;
  return (
    <div class="info-grid" style={{ display: 'grid', gridTemplate: 'max-content max-content max-content / 800px 24px 24px'}}>       
      {editingUsername && <input type="text" value={p.siteUsername} onChange={(e) => onEditUsername(e.target.value)}></input> || <span>{"Username: " +  p.siteUsername }</span> }
          <a href="#" onClick={() => setEditingUsername(!editingUsername)}><img src={edit_logo} className="Function-button"/></a> 
          <a href="#" onClick={() => copy(p.siteUsername)}> <img src={copy_logo} className="Function-button"/></a>

      {editingPassword && <div>
        <Input
        type={values.showPassword ? "text" : "password"}
        onChange={(e) => onEditPassword(e.target.value)}
        value={p.sitePassword}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      /></div> || <span>{"Password: " + "*".repeat(p.sitePassword.length) }</span> }
          <a href="#" onClick={() => setEditingPassword(!editingPassword)}> <img src={edit_logo} className="Function-button"/> </a>
          <a href="#" onClick={() => copy(p.sitePassword)}> <img src={copy_logo} className="Function-button"/> </a>

      {editingNotes && <textarea value={p.OtherNotes} onChange={(e) => onEditNotes(e.target.value)}></textarea> || <span>Other Notes: {p.OtherNotes.split("\n").map(line => <>{line}<br/></>) }</span> }
        <a href="#" onClick={() => setEditingNotes(!editingNotes)}> <img src={edit_logo} className="Function-button"/> </a>
        <a href="#" onClick={() => copy(p.OtherNotes)}> <img src={copy_logo} className="Function-button"/> </a>
    </div>
  )
}


function updateData(password){
  fetch('http://localhost:5000/api/passwords', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(password)
  })
}

function deleteData(data){
  fetch('http://localhost:5000/api/passwords', {
    method: 'DELETE', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

async function importData(data) {
  await fetch('http://localhost:5000/api/import', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
}


export class PasswordList extends React.Component {
  state = {
    passwords: [],
    downloadLink: '',
    uploadLink: '',
  };

  constructor(props) {
    super(props);
   
  }

  triggerText = 'NEW PASSWORD';
  onSubmit = (event) => {
    let entry = {
      accountUsername: "Alexane_Schneider",
      siteUsername: event.target.name.value,
      sitePassword: event.target.password.value,
      OtherNotes: event.target.otherNotes.value,
      siteName: event.target.website.value,
    }
    updateData(entry);
  };
  
  updatePasswordUrl(passwords) {
    const data = new Blob([JSON.stringify(passwords)], { type: 'text/plain' })
    
    if (this.state.downloadLink !== '') {
      window.URL.revokeObjectURL(this.state.downloadLink);
    } 

    this.setState({ downloadLink: window.URL.createObjectURL(data) })
  }

  async fetchPasswords() {
    let response = await fetch("http://localhost:5000/api/passwords")
    let passwords = await response.json()
    
    this.setState({ passwords: passwords })
    this.updatePasswordUrl(passwords)
  }

  componentDidMount() {
    this.fetchPasswords()
  }

  editUsername(id, newUsername) {
    // Smear all the values from the old entry while replaces the password value with newPassword {...object, element to replace: replacement}
    const password = { ...this.state.passwords[id], siteUsername: newUsername };
    const passwords = Array.from(this.state.passwords);
    passwords[id] = password;
    this.setState({ passwords: passwords });
    this.updatePasswordUrl(passwords);
  }

  editPassword(id, newPassword) {
    // Smear all the values from the old entry while replaces the password value with newPassword {...object, element to replace: replacement}
    const password = { ...this.state.passwords[id], sitePassword: newPassword };
    const passwords = Array.from(this.state.passwords);
    passwords[id] = password;
    this.setState({ passwords: passwords });
    this.updatePasswordUrl(passwords);
  }

  editNotes(id, newNotes) {
    // Smear all the values from the old entry while replaces the password value with newPassword {...object, element to replace: replacement}
    const password = { ...this.state.passwords[id], OtherNotes: newNotes };
    const passwords = Array.from(this.state.passwords);
    passwords[id] = password;
    this.setState({ passwords: passwords });
    this.updatePasswordUrl(passwords);
  }

  async importPasswords(file) {
    let text = await file.text()
    let passwords = JSON.parse(text)
    await importData(passwords);
    await this.fetchPasswords();
  }

  async myfunction() {
	 let password = prompt("Please enter your master password to access password list");
          if(password != null) {
                return;
          }
  }

  render() {
	  for(let i = 0; i < 1; i++) {
        this.myfunction();
      }

    return (
      <main className = "content">
        <NavHeader />
          <h2>
            <span>Password List</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button theme="charcoal"> <a download="passwords.txt" href={this.state.downloadLink}> Export </a></Button>
            <Button theme="charcoal">
              <Container triggerText={this.triggerText} onSubmit={this.onSubmit}></Container>
            </Button> 
            <div> 
              <Button theme="charcoal"> Import 
              <input type="file" name = 'import' onChange={ e => this.importPasswords(e.target.files[0]) }></input> 
              </Button> 
            </div>
          </h2>
        { 
          this.state.passwords.map((p, i) => 
            <div key={i.toString()}>
              <Collapsible 
                  trigger={<CollapsibleLable siteName={p.siteName} logo={more_logo}/>}
                  triggerWhenOpen={<CollapsibleLable siteName={p.siteName} logo={less_logo}/>}
                  transitionTime={120}
              >
                <hr/>
                <PasswordEntry 
                  password={p}
                  onEditUsername={ (newUsername) => this.editUsername(i, newUsername) }
                  onEditPassword={ (newPassword) => this.editPassword(i, newPassword) }
                  onEditNotes={ (newNotes) => this.editNotes(i, newNotes) }
                />
                {/* Button should not be shown unless the edit button is clicked */}
                <div>
                  <Button theme="charcoal" onClick={() => updateData(p)}>
                    Update
                  </Button>
                  <Button theme="charcoal" onClick = {
                    () => {
                      deleteData(p); 
                      this.setState( _ => {
                        return { passwords: this.state.passwords.filter((_, j) => j !== i) }
                      });
                    }
                  }>
                    Delete
                  </Button>
                </div>
              </Collapsible>
              <hr/>
            </div>
          )
        }
      </main>
    )
  }
}

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
    const test_pass = createPassword(15, this.state.checkboxes.Symbols, this.state.checkboxes.Uppercase, this.state.checkboxes.Numbers)
    return (
      <main className = "content">
	 <NavHeader />
         <div className="rows">
          <div className="colomn">
            <form onSubmit={this.handleFormSubmit}>
               {this.createCheckboxes()}
            </form>
            <p>{ test_pass }
              <a href="#" onClick={() => copy(test_pass)}> <img src={copy_logo} className="Function-button"/></a></p>
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
      <NavHeader />  
      <h2>Password Manager</h2>
      <p>Welcome to the most secure password manager!</p>
    </main>
  );
}

export default App;
