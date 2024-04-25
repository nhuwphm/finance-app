const express = require("express");

const {
  getAllCategories,
  getCategoryById,
  createCategory,
  deleteCategory,
  changeCategoryName
} = require("../actions/categoryAction");

const validate = require("../middleware/middleware");
const categorySchema = require("../lib/categoryValidation");

const router = express.Router();


router.get("/", getAllCategories);

router.get("/:id", getCategoryById);

router.post("/create", validate(categorySchema), createCategory);

router.delete("/delete/:id", deleteCategory);


router.put("/name/:id", validate(categorySchema), changeCategoryName);

module.exports = router;
