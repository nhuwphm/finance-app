import React from 'react';
import './App.css'
import Dashboard from './components/pages/Dashboard/Dashboard';
import Transaction from './components/pages/Transaction/Transaction';
import Sidebar from './components/layout/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  function TestComponent() {
    return <div>Test Route Component</div>;
  } 
  
  return (
    <div className='app'>
      <Router>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </Router>

    </div>
    
  );
}

export default App;