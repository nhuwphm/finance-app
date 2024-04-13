import React from 'react';
import './App.css';
import AuthProvider from './contexts/AuthContext';
import './firebase'
import Dashboard from './components/pages/Dashboard/Dashboard';
import Transaction from './components/pages/Transaction/Transaction';
import Login from './components/pages/auth/Login/Login';
import Layout from './components/layout/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/pages/auth/SignUp/SignUp';

function App() {
  return (
    <div className='app'>
      <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout><Dashboard /></Layout>} />
          <Route path="/transaction" element={<Layout><Transaction /></Layout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
       </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
