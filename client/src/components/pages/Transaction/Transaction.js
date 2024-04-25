import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Transaction() {
  // State to store the transactions
  const [transactions, setTransactions] = useState([]);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/transaction'); 
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h1>Transaction Page</h1>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            <div>
              <strong>Type:</strong> {transaction.type}
            </div>
            <div>
              <strong>Amount:</strong> ${transaction.amount}
            </div>
            <div>
              <strong>Category ID:</strong> {transaction.categoryId}
            </div>
            <div>
              <strong>Created At:</strong> {new Date(transaction.createdAt).toLocaleString()}
            </div>
            <div>
              <strong>Description:</strong> {transaction.description || 'No description provided'}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transaction;
