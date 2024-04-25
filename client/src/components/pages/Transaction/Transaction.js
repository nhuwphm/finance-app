import React, { useState, useEffect } from 'react';
import axios from 'axios';



function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  console.log('Base URL:', process.env.REACT_APP_API_BASE_URL);

  // Function to fetch transactions
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
    <div>
      <h1>Transactions</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            <div><strong>Type:</strong> {transaction.type}</div>
            <div><strong>Amount:</strong> ${transaction.amount}</div>
            <div><strong>Category ID:</strong> {transaction.categoryId}</div>
            <div><strong>Created At:</strong> {new Date(transaction.createdAt).toLocaleString()}</div>
            <div><strong>Description:</strong> {transaction.description || 'No description provided'}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transaction;
