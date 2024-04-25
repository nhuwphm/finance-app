import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Category.css'; 
import AddCategory from './CreateCategory';

import ReactModal from 'react-modal'; 
ReactModal.setAppElement('#root'); 

function CategoryTable() {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const baseUrl = process.env.REACT_APP_API_BASE_URL;

    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await axios.get(`${baseUrl}/category`);
          setCategories(response.data);
          setError(null);
        } catch (error) {
          console.error('Error fetching categories:', error);
          setError('Failed to fetch categories');
        } finally {
          setLoading(false);
        }
      };
  
      fetchCategories();
    }, []);
  
    const handleDelete = async (id) => {
      try {
        await axios.delete(`${baseUrl}/category/delete/${id}`);
        setCategories(prevCategories => prevCategories.filter(category => category.id !== id));
      } catch (error) {
        console.error('Error deleting category:', error);
        setError('Failed to delete category');
      }
    };
  
    const openModal = () => {
        setModalIsOpen(true);
      };
    
      const closeModal = () => {
        setModalIsOpen(false);
      };

    return (
      <div className="category-container">
        <div className="category-header">
        <h1>Categories</h1>
        <button onClick={openModal} className="category-button">
          CREATE CATEGORIES
        </button>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Add Category" // Changed label to "Add Category"
          className="Modal"
          overlayClassName="Overlay"
        >
          <AddCategory closePanel={closeModal} />
        </ReactModal>
      </div>
        {loading && <p>Loading categories...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <table className="category-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date Created</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map(category => (
              <tr key={category.id}>
                <td>{category.name}</td>
                <td>{new Date(category.createdAt).toLocaleDateString()}</td>
                <td>{category.description || 'No description provided'}</td>
                <td>
                  <button onClick={() => handleDelete(category.id)} className="delete">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default CategoryTable;
