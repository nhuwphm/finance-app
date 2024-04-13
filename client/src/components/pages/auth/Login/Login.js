import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import CustomButton from '../Button/CustomButton';

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

                <CustomButton
                    type="submit"
                    title="Log in"
                    test="btn-login-test"/>

                <div className='link'>
                    Don&apos;t have an account?
                    <Link to="/signup" id="link-signup">
                    Sign up
                    </Link>
                </div>
            </form>

        </div>
    );

};

export default Login;