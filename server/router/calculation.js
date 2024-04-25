const express = require("express");
const router = express.Router();
const validate = require("../middleware/middleware");

const {
    calculateTotalIncome,
    calculateTotalExpense,
    calculateTotalBalance,
    calculateTotalIncomeByCategoryId,
    calculateTotalExpenseByCategoryId,
    calculateTotalBalanceByCategoryId,
    calculateTotalIncomeByDate,
    calculateTotalExpenseByDate,
    calculateTotalBalanceByDate
} = require("../actions/calculationActions");

router.get("/total-income", calculateTotalIncome);
router.get("/total-expense", calculateTotalExpense);
router.get("/balance", calculateTotalBalance);
router.get("/total-income-by-categoryid/:id", calculateTotalIncomeByCategoryId);
router.get("/total-expense-by-categoryid/:id", calculateTotalExpenseByCategoryId);
router.get("/balance-by-categoryid/:id", calculateTotalBalanceByCategoryId);
router.get("/total-income-by-date", calculateTotalIncomeByDate);
router.get("/total-expense-by-date", calculateTotalExpenseByDate);
router.get("/balance-by-date", calculateTotalBalanceByDate);


module.exports = router;