const prisma = require("../lib/prisma");


const getTransaction = async (req, res) => {
  try {
    const { type } = req.query;
    
    // sort by amount descending and ascending
  
    // get all transactions
    const transactions = await prisma.transaction.findMany({
      where: {
        type: type,
      },
    });


    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get transaction by id
// endpoint: /api/transaction/:id
const getTransactionById = async (req, res) => {
  const id = req.params.id;
  try {
    const transaction = await prisma.transaction.findUnique({
      where: {
        id: id,
      },
    });
    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get all transactions by category id
// endpoint: /api/transaction/category/:id
const getTransactionByCategoryId = async (req, res) => {
  const id = req.params.id;
  try {
    const transactions = await prisma.transaction.findMany({
      where: {
        categoryId: id,
      },
    });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json(error);
  }
};

// create transaction
// endpoint: /api/transaction/create
const createTransaction = async (req, res) => {
  const { amount, description, type, categoryId, createdAt } = req.body;
  console.log(createdAt);
  try {
    if (categoryId) {
      const category = await prisma.category.findUnique({
        where: {
          id: categoryId,
        },
      });

      // Update category balance
      await prisma.category.update({
        where: {
          id: categoryId,
        },
        data: {
          balance: category.balance + amount,
        },
      });
    }

    const result = await prisma.transaction.create({
      data: {
        amount: amount,
        description: description,
        type: type,
        categoryId: categoryId,
        createdAt: createdAt || new Date(),
      },
    });
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// delete transaction
// endpoint: /api/transaction/delete/:id
const deleteTransaction = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await prisma.transaction.delete({
      where: {
        id: id,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

// update transaction
// endpoint: /api/transaction/update/:id
const updateTransaction = async (req, res) => {
  const id = req.params.id;
  const { amount, description, type, categoryId } = req.body;
  try {
    const result = await prisma.transaction.update({
      where: {
        id: id,
      },
      data: {
        amount: amount,
        description: description,
        type: type,
        categoryId: categoryId,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getTransaction,
  getTransactionById,
  getTransactionByCategoryId,
  createTransaction,
  deleteTransaction,
  updateTransaction,
};
