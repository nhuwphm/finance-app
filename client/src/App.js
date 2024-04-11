import React from 'react';
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Sidebar from './components/layout/Sidebar';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Profile from './components/pages/Profile/Profile';  



function App() {
  return (
    <Router>
      <div>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/Profile" element={<Profile/>} />
        </Routes>
      </div>
    </Router>
    //<Dashboard /> // 1st page displayed when ran


    // <Router>
    //   <div>
    //     <Sidebar />
    //     <Link to="/">Dashboard</Link>
    //     <Link to="/Profile">Profile</Link>
    //     <Routes>
    //       <Route exact path="/" component={<Dashboard/>} />
    //       <Route path="/Profile" component={<Profile/>} />
    //     </Routes>
    //   </div>
    // </Router>
  );
}


export default App;
