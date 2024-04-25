import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Transaction.css';

import { getCategoryName } from '../../../api/categoryApi';
import { deleteTransaction } from '../../../api/transactionApi';
import AddTransaction from './CreateTransaction';

import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  const [modalIsOpen, setModalIsOpen] = useState(false);


  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/transaction`);
        setTransactions(response.data);
        fetchCategoryNames(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching transactions:', error);
        setError('Failed to fetch transactions');
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const fetchCategoryNames = async (transactions) => {
    const newCategories = { ...categories };
    await Promise.all(transactions.map(async (transaction) => {
      if (!newCategories[transaction.categoryId]) {
        newCategories[transaction.categoryId] = 'Loading...'; 
        try {
          const categoryName = await getCategoryName(transaction.categoryId);
          newCategories[transaction.categoryId] = categoryName || 'Category not found';
        } catch (error) {
          console.error(`Error fetching category name for ID ${transaction.categoryId}:`, error);
          newCategories[transaction.categoryId] = 'Unknown category'; 
        }
      }
    }));
    setCategories(newCategories);
  };
  
  const handleDelete = async (id) => {
    try {
      await deleteTransaction(id);
      setTransactions(prevTransactions => prevTransactions.filter(transaction => transaction.id !== id));
    } catch (error) {
      console.error('Error deleting transaction:', error);
      setError('Failed to delete transaction');
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  
  

  return (
    <div className="transaction-container">
      <div className="transaction-header">
        <h1>Transactions</h1>
        <button onClick={openModal} className="transaction-button">
          CREATE TRANSACTIONS
        </button>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Add Transaction"
          className="Modal"
          overlayClassName="Overlay"
        >
          <AddTransaction closePanel={closeModal} />
        </ReactModal>
      </div>
      {loading && <p>Loading transactions...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Categories</th>
            <th>Date Created</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td style={{ color: transaction.type === 'income' ? 'green' : transaction.type === 'expense' ? '#f95e4a' : 'black', fontWeight:"bold" }}>{transaction.type}</td>
              <td>${transaction.amount.toFixed(2)}</td>
              <td>{categories[transaction.categoryId] || transaction.categoryId}</td>
              <td>{new Date(transaction.createdAt).toLocaleDateString()}</td>
              <td>{transaction.description || 'No description provided'}</td>
              <td>
                <button>Update</button> 
                <button onClick={() => handleDelete(transaction.id)} className='delete'>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" class="remove-svg"><path fill="none" d="M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"></path><path d="M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z"></path><path d="M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z"></path></svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transaction;