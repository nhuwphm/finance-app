import axios from 'axios'
import API from './api';

export const getTransactions = async () => {
    const response = await axios.get(API + '/transaction');
    return response.data;
  };
  
  export const getTransaction = async (id) => {
    const response = await axios.get(API + '/transaction/' + id);
    return response.data;
  };
  
  export const updateTransaction = async (id, transaction) => {
    const response = await axios.put(API + '/transaction/' + id, transaction);
    return response.data;
  };
  
  export const deleteTransaction = async (id) => {
    try {
      const response = await API.delete(`/transaction/delete/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting transaction:', error);
      throw error;
    }
  };
  
  export const postTransactions = async (transaction) => {
    try {
      const response = await API.post('/transaction/create', transaction);
      return response.data;
    } catch (error) {
      console.error('Error posting transaction:', error);
      throw error; 
    }
  };
  
  export const getTransactionsByCategoryId = async (id) => {
    const response = await axios.get(API + '/category/' + id + '/transactions');
    return response.data;
  }
  