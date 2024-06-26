import React from 'react';
import './App.css';
import AuthProvider from './contexts/AuthContext';
import './firebase'
import Dashboard from './components/pages/Dashboard/Dashboard';
import Transaction from './components/pages/Transaction/Transaction';
import Categories from './components/pages/Categories/Category';
import Login from './components/pages/auth/Login/Login';
import Layout from './components/layout/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/pages/auth/SignUp/SignUp';
import Profile from './components/pages/Profile/Profile';
import FinancialHelp from './components/pages/Financial Help/FinancialHelp';
import Report from './components/pages/Report/Report';

function App() {
  return (
    <div className='app'>
      <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout><Dashboard /></Layout>} />
          <Route path="/transaction" element={<Layout><Transaction /></Layout>} />
          <Route path="/categories" element={<Layout><Categories /></Layout>} />
          <Route path="/financial-help" element={<Layout><FinancialHelp /></Layout>} />
          <Route path="/report" element={<Layout><Report /></Layout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Layout><Profile /></Layout>} />
        </Routes>
       </AuthProvider>
      </Router>
    </div>
  );
}


export default App;
