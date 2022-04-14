import React from 'react'
import { useState } from "react"
import './createaccountForm.css';
import accountImage from '../images/accountsymbol.png';

function CreateAccountPage() {
    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [backOut, setBackOut] = useState({
        validate: false
    })
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
        .then((response) => {
            if (response.status === 200) {
                window.location.href = 'http://localhost:3000/Dashboard'
            }
        })
        setBackOut(true)
        if (backOut === true) {
            setFormValues(initialValues);
        }
    }

    if (backOut === true) {
        window.location.href = 'http://localhost:3000'
        setFormValues(initialValues);
    }


    return (
        <div className="Main-Body">
            <div className="Main-Header">
                <div className='closebutton_section'>
                    <button className="close-btn" onClick={() => setBackOut(true)} ><h1>&#8592;</h1>  </button>
                </div>
                <div className='accountAVI'>
                    <img src={accountImage} className="App-AccountLogo" alt="logo" />
                </div>
            </div>

            <div className="main-inner">
                <div className='login_section'>
                    <div className='title_section'><h1>Create Account</h1></div>
                    <div className='login_form'>
                        <form onSubmit={accountcreation} >
                            <ul>
                                <div className='submitButton'>
                                    <li>   <label>Username:
                                        <input
                                            type="text"
                                            name="username"
                                            value={formValues.username}
                                            onChange={handleChange}
                                        />
                                    </label> </li>
                                </div>

                                <div className='submitButton'>
                                    <li>   <label>Email:
                                        <input
                                            type="text"
                                            name="email"
                                            value={formValues.email}
                                            onChange={handleChange}
                                        />
                                    </label> </li>
                                </div>

                                <div className='submitButton'>
                                    <li>   <label>Password:
                                        <input
                                            type="text"
                                            name="password"
                                            value={formValues.password}
                                            onChange={handleChange}
                                        />
                                    </label> </li>
                                </div>


                                <li>   <input type="submit" /> </li>
                            </ul>

                        </form>

                       
                    </div>

                </div>
            </div>
            <div className='main-footer'>

            </div>

        </div>

    );
}

export default CreateAccountPage
