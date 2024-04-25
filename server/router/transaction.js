const express = require("express");
const validate = require("../middleware/middleware");
const transactionSchema = require("../lib/transactionValidation");

const {
    getTransaction, 
    getTransactionById,
    getTransactionByCategoryId,
    createTransaction,
    deleteTransaction,
    updateTransaction
} = require("../actions/transactionAction");


const router = express.Router();

// get all transactions
// endpoint: /api/transaction
router.get("/", getTransaction);

router.get("/:id", getTransactionById);

router.get("/category/:id", getTransactionByCategoryId);

router.post("/create", validate(transactionSchema), createTransaction);

router.delete("/delete/:id", deleteTransaction);


router.put("/update/:id", validate(transactionSchema), updateTransaction);

module.exports = router;
