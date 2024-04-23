import React, { useRef, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Login.css';
import CustomButton from '../Button/CustomButton';
import CustomInput from '../Input/CustomInput';
import { useAuth } from '../../../../contexts/AuthContext';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useNavigate();
    const { currentUser } = useAuth();
    const { login } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
    
        try {
          setError('');
          setLoading(true);
          await login(emailRef.current.value, passwordRef.current.value);
          history('/');
        } catch {
          setError('Failed to sign in');
        }
        
        setLoading(false);
      }

      const handleEmailChange = (value) => {
        emailRef.current.value = value;
      };

      const handlePasswordChange = (value) => {
        passwordRef.current.value = value;
      };

      if (currentUser) {
        return <Navigate to="/" replace />;
      }
      
    return(
        <div className='loginMain'>
            <div className='logo-container'>
                <p>Login To Your Account</p>
            </div>
            <form onSubmit={handleSubmit} className='form'>
            {error && <p style={{ color: 'red' }}>{error}</p>}
                <CustomInput label="E-mail"
                    type="text"
                    inputRef={emailRef}
                    name="email"
                    onChange={handleEmailChange}
                    id="email"
                    test="input-email-test" />
                
                <CustomInput label="Password"
                    type="password"
                    name="password"
                    inputRef={passwordRef}
                    required
                    onChange={handlePasswordChange}
                    id="password"
                    test="input-pass-test" />

                <CustomButton
                    disabled={loading}
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