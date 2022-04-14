import React from 'react'
import { useState } from "react"
import { useEffect } from 'react';
import './createaccountForm.css';
import accountImage from '../images/accountsymbol.png';

function Popup(props) {
    const initialValues = {username:"",email:"",password:""};
    const [formValues, setFormValues] = useState(initialValues);
    const handleChange = (event) => { 
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    }
  
    function accountcreation(event) {
        event.preventDefault();
        fetch('http://localhost:5000/accountcreation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formValues)
        })
        props.setTrigger(false)
        if(props.trigger == true)
            {
                setFormValues(initialValues);
            }
      }


  
    return  (
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
                <form onSubmit={accountcreation} >
                    <ul>
                    <li>   <label>Username:
                        <input
                            type="text"
                            name="username"
                            value={formValues.username }
                            onChange={handleChange}
                        />
                    </label> </li> 
                    <li>   <label>Email:
                        <input
                            type="text"
                            name="email"
                            value={formValues.email }
                            onChange={handleChange}
                        />
                    </label> </li> 
                 <li>   <label>Password:
                        <input
                            type="text"
                            name="password"
                            value={formValues.password }
                            onChange={handleChange}
                        />
                    </label> </li> 
           
                 <li>   <input type="submit" /> </li> 
                    </ul>
                    
                </form>
                </div>
            </div>


        </div>

    );
}

export default Popup