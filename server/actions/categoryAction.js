const prisma = require('../lib/prisma');


const getAllCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
};


const getCategoryById = async (req, res) => {
  const id = req.params.id;
  try {
    const category = await prisma.category.findUnique({
      where: {
        id: id,
      },
    });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
};


const createCategory = async (req, res) => {
  const { name, description, createdAt } = req.body;
  try {
    const result = await prisma.category.create({
      data: {
        name: name,
        description: description,
        createdAt: createdAt,
      },
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};


const deleteCategory = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await prisma.category.delete({
      where: {
        id: id,
      },
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};


const changeCategoryName = async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  try {
    const result = await prisma.category.update({
      where: {
        id: id,
      },
      data: {
        name: name,
      },
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  deleteCategory,
  changeCategoryName,
};
