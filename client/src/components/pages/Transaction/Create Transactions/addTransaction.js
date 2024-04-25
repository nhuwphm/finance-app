import axios from 'axios';

const createTransactionData = async () => {
  const data = {
    amount: 100,
    description: "Example transaction",
    type: "expense",
    categoryId: "your-category-id",
    createdAt: "2024-04-24T09:28:31.332Z"
  };

  try {
    const response = await axios.post('http://localhost:5001/api/transaction/create', data);
    console.log(response.data);
  } catch (error) {
    console.error('Error creating transaction:', error.response);
  }
};

createTransactionData();
