import React from 'react';
import './App.css';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Transaction from './components/pages/Transaction/Transaction';
import Login from './components/pages/auth/Login/Login';
import Layout from './components/layout/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Dashboard /></Layout>} />
          <Route path="/transaction" element={<Layout><Transaction /></Layout>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
