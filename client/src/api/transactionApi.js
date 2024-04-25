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
    const response = await axios.delete(API + '/transaction/' + id);
    return response.data;
  };
  
  export const postTransactions = async (transaction) => {
    const response = await axios.post(
      API + '/transaction/create',
      transaction
    );
    return response.data;
  };
  
  export const getTransactionsByCategoryId = async (id) => {
    const response = await axios.get(API + '/category/' + id + '/transactions');
    return response.data;
  }
  