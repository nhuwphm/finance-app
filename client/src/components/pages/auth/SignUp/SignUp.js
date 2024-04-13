import React, { useRef, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './SignUp.css';
import CustomButton from '../Button/CustomButton';
import CustomInput from '../Input/CustomInput';
import { useAuth } from '../../../../contexts/AuthContext';

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const nameRef = useRef();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const { currentUser } = useAuth();

  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordConfirmRef.current.value !== passwordRef.current.value) {
      return setError('Passwords do not match');
    }
    try {
      setError(null);
      setLoading(true);
      await signup(
        nameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
      history('/');
    } catch {
      setError('Failed to create an account');
    }

    setLoading(false);
  }

  const handleEmailChange = (value) => {
    emailRef.current.value = value;
  };

  const handlePasswordChange = (value) => {
    passwordRef.current.value = value;
  };

  const handlePasswordConfirmChange = (value) => {
    passwordConfirmRef.current.value = value;
  };

  const handleNameChange = (value) => {
    nameRef.current.value = value;
  };

  if (currentUser) {
    return <Navigate to="/" replace />;
  }

    return (
        <div className='main'>
          <div className='logo-container'>
              <p>SignUp Page - LOGO</p>
          </div>
        <form onSubmit={handleSubmit} className='form'>
          <CustomInput
            label="E-mail"
            type="text"
            name="email"
            inputRef={emailRef}
            onChange={handleEmailChange}
            required
            id="email"
            test="input-email-test"
          />
          <CustomInput
            label="Name"
            type="text"
            name="name"
            inputRef={nameRef}
            onChange={handleNameChange}
            required
            id="name"
            test="input-name-test"
          />
          <CustomInput
            label="Password"
            type="password"
            name="password"
            inputRef={passwordRef}
            onChange={handlePasswordChange}
            required
            id="password"
            test="input-pass-test"
          />
          <CustomInput
            label="Password confirm"
            type="password"
            name="password-repeat"
            inputRef={passwordConfirmRef}
            onChange={handlePasswordConfirmChange}
            required
            id="password-repeat"
            test="input-pass-confirm-test"
          />
          <CustomButton disabled={loading} type="submit" title="Sign Up" />
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