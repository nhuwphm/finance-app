import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import CustomButton from '../Button/CustomButton';
import CustomInput from '../Input/CustomInput';

const SignUp = () => {
    return (
        <div className='main'>
          <div className='logo-container'>
                <p>SignUp Page - LOGO</p>
            </div>
        <form className='form'>
          <CustomInput
            label="E-mail"
            type="text"
            name="email"
            required
            id="email"
            test="input-email-test"
          />
          <CustomInput
            label="Name"
            type="text"
            name="name"
            required
            id="name"
            test="input-name-test"
          />
          <CustomInput
            label="Password"
            type="password"
            name="password"
            required
            id="password"
            test="input-pass-test"
          />
          <CustomInput
            label="Password confirm"
            type="password"
            name="password-repeat"
            required
            id="password-repeat"
            test="input-pass-confirm-test"
          />
          <CustomButton type="submit" title="Sign Up" />
        </form>
        <div className='link'>
          Already have an account?
          <Link to="/login" id="link-login">
            Log in
          </Link>
        </div>
      </div>
    );
  };
  
  export default SignUp;