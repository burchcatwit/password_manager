import React from 'react'
import { useState } from "react"
import './createaccountForm.css';
import accountImage from '../images/accountsymbol.png';

function Popup(props) {
    const [inputs, setInputs] = useState({})

    const handleChange = (event) => { 
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
  
    
    const handleSubmit = (event) => {
        event.preventDefualt();
        console.log(inputs);
    }
  
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className='closebutton_section'>
                <button className="close-btn" onClick={() => props.setTrigger(false)} > X </button>
                {props.children} 
                <div className='accountImage'>
                <img src={accountImage} className="App-AccountLogo" alt="logo" />
                </div>
                </div>
               
                <div className='login_section'>
                <form action = "/accountcreation" method = "POST" onSubmit={handleSubmit}>
                    <ul>
                 <li>   <label>Username:
                        <input
                            type="text"
                            name="username"
                            value={inputs.username || ""}
                            onChange={handleChange}
                        />
                    </label> </li> 
                  <li>  
                      <label>E-Mail:
                        <input
                            type="text"
                            name="password"
                            value={inputs.password || ""}
                            onChange={handleChange}
                        />
                    </label> 
                    </li>
                    <li>  
                      <label>Confirm E-Mail:
                        <input
                            type="text"
                            name="password"
                            value={inputs.password || ""}
                            onChange={handleChange}
                        />
                    </label> 
                    </li>
                    <li>  
                      <label>Password:
                        <input
                            type="text"
                            name="password"
                            value={inputs.password || ""}
                            onChange={handleChange}
                        />
                    </label> 
                    </li>
                    <li>  
                      <label>Confirm Password:
                        <input
                            type="text"
                            name="password"
                            value={inputs.password || ""}
                            onChange={handleChange}
                        />
                    </label> 
                    </li>
                 <li>   <input type="submit" /> </li> 
                    </ul>
                    
                </form>
                </div>
            </div>


        </div>

    ) : "";
}

export default Popup