import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Transaction.css'; 

function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/transaction`);
        setTransactions(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setError('Failed to fetch transactions');
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="transaction-container">
      <div className="transaction-header">
        <h1>Transactions</h1>
        <Link to="/add-transaction" className="transaction-button">
           CREATE TRANSACTIONS
        </Link>
      </div>
      {loading && <p>Loading transactions...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Category Name</th>
            <th>Date Created</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.type}</td>
              <td>${transaction.amount.toFixed(2)}</td>
              <td>{transaction.categoryId}</td> {/* Adjust if you have category names */}
              <td>{new Date(transaction.createdAt).toLocaleString()}</td>
              <td>{transaction.description || 'No description provided'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transaction;
