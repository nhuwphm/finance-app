import axios from 'axios'
import API from './api';

export const getCategories = async () => {
    const response = await axios.get(API + '/category');
    return response.data;
  };
  
  export const getCategory = async (id) => {
    const response = await axios.get(API + '/category/' + id);
    return response.data;
  };
  
  export const postCategories = async (category) => {
    const response = await axios.post(API + '/category/create', category);
    return response.data;
  };
  
  export const updateCategory = async (id, category) => {
    const response = await axios.put(API + '/category/' + id, category);
    return response.data;
  };
  
  export const deleteCategory = async (id) => {
    const response = await axios.delete(API + '/category/' + id);
    return response.data;
  };