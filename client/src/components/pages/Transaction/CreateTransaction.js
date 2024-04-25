import React, { useState } from 'react';
import './CreateTransaction.css'; 
import { postTransactions } from '../../../api/transactionApi'
import { Navigate, useNavigate } from 'react-router-dom'; 

function AddTransaction({ closePanel }) {
  const [formData, setFormData] = useState({
    categoryId: '',
    amount: '',
    type: '', 
    date: '', 
    description: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const completeDate = `${formData.date}T00:00:00.000Z`;
      const dataToSend = {
        ...formData,
        amount: Number(formData.amount),
        createdAt: completeDate,
      };
      const response = await postTransactions(dataToSend);
      console.log('Transaction Saved:', response);
      window.location = '/transaction';

    } catch (error) {
      console.error('Error saving transaction:', error);
    }
  };

  return (
    <div className="add-transaction-form">
      <h2>Create New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Category ID:</label>
          <input
            type="text"
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Type:</label>
          <select name="type" value={formData.type} onChange={handleChange} required>
            <option value="">Select Type</option>
            <option value="income">income</option>
            <option value="expense">expense</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date Created:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="submit-btn">Submit</button>
          <button type="button" onClick={closePanel} className="cancel-btn">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddTransaction;
