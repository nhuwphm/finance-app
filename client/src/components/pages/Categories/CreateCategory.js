import React, { useState } from 'react';
import './CreateCategory.css'; 
import { postCategories } from '../../../api/categoryApi';
import { useNavigate } from 'react-router-dom';

function AddCategory({ closePanel }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    createdAt: ''
  });

  const navigate = useNavigate();

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
      const completeDate = formData.createdAt ? `${formData.createdAt}T00:00:00.000Z` : new Date().toISOString();
      const dataToSend = {
        ...formData,
        createdAt: completeDate
      };
      const response = await postCategories(dataToSend);
      console.log('Category Saved:', response);
      window.location = '/categories';
    } catch (error) {
      console.error('Error saving category:', error);
    }
  };

  return (
    <div className="add-category-form">
      <h2>Create New Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
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
        <div className="form-group">
          <label>Date Created:</label>
          <input
            type="date"
            name="createdAt"
            value={formData.createdAt}
            onChange={handleChange}
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

export default AddCategory;