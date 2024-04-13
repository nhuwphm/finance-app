import React, { useRef, useState } from 'react';
import './Login.css';

const Login = () => {
    return(
        <div className='loginMain'>
            <div className='logo-container'>
                <p>Login Page - LOGO</p>
            </div>
            <form className='form'>
                <input label="E-mail"
                    type="text"
                    name="email"
                    id="email"
                    test="input-email-test" />
                
                <input label="Password"
                    type="password"
                    name="password"
                    id="password"
                    test="input-pass-test" />
            </form>

        </div>
    );

};

export default Login;