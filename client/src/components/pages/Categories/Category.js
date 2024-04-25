import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Category.css';

import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

function Categories() {  

  return (
    <div className="transaction-container">
      <div className="transaction-header">
        <h1>Categories</h1>
        <button  className="transaction-button">
          CREATE CATEGORIES
        </button>
        
    </div>
    </div>
  );
}

export default Categories;