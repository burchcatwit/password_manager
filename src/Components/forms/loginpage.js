import React from 'react'
import { useState } from "react"
import './loginFORM.css';
import accountImage from '../images/accountsymbol.png';

function LoginPage() {

    const initialValues = { username: "", password: "" };
    const [inputs, setInputs] = useState(initialValues);
    const [backOut, setBackOut] = useState({
        validate: false
    })
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    async function checkValidation(event) {
        event.preventDefault();
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs)
        })
            .then((response) => {
                if (response.status === 200) {
                    window.location.href = 'http://localhost:3000/Dashboard'
                }
            })
        setBackOut(true)
    }
    if (backOut === true) {
        window.location.href = 'http://localhost:3000'
        setInputs(initialValues);
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
                    <div className='title_section'><h1>LOG IN</h1></div>
                    <div className='login_form'>
                        <form className='loginFormSection' onSubmit={checkValidation} >
                            <ul>
                                <div>
                                    <li>   <label>Username:
                                        <input
                                            type="text"
                                            name="username"
                                            value={inputs.username}
                                            onChange={handleChange}
                                        />
                                    </label> </li>
                                </div>
                                <div className='submitButton'>
                                    <li>
                                        <label>Password:
                                            <input
                                                type="text"
                                                name="password"
                                                value={inputs.password}
                                                onChange={handleChange}
                                            />
                                        </label>
                                    </li>
                                </div>
                                <div className ="submitButton">
                                <li>   <input type="submit" /> </li>
                                </div>
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

export default LoginPage
