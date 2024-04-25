const prisma = require('../lib/prisma');

// calculate total income
const calculateTotalIncome = async (req, res) => {
    try {
        const totalIncome = await prisma.transaction.aggregate({
            _sum: {
                amount: true
            },
            where: {
                type: 'income'
            }
        });
        const sumValue = totalIncome._sum.amount;
        res.status(200).json(sumValue);
    } catch (error) {
        res.status(500).json(error);
    }
};

// calculate total expense
const calculateTotalExpense = async (req, res) => {
    try {
        const totalExpense = await prisma.transaction.aggregate({
            _sum: {
                amount: true
            },
            where: {
                type: 'expense'
            }
        });
        const sumValue = totalExpense._sum.amount;
        res.status(200).json(sumValue);
    } catch (error) {
        res.status(500).json(error);
    }
};

// calculate total balance
const calculateTotalBalance = async (req, res) => {
    try {
        const totalIncome = await prisma.transaction.aggregate({
            _sum: {
                amount: true
            },
            where: {
                type: 'income'
            }
        });
        const totalExpense = await prisma.transaction.aggregate({
            _sum: {
                amount: true
            },
            where: {
                type: 'expense'
            }
        });
        const sumIncome = totalIncome._sum.amount;
        const sumExpense = totalExpense._sum.amount;
        const totalBalance = sumIncome - sumExpense;
        res.status(200).json(totalBalance);
    } catch (error) {
        res.status(500).json(error);
    }
};

// calculate total income by category id
const calculateTotalIncomeByCategoryId = async (req, res) => {
    console.log('jump to cal income by category id');
    const id = req.params.id;
    try {
        const totalIncome = await prisma.transaction.aggregate({
            _sum: {
                amount: true
            },
            where: {
                type: 'income',
                categoryId: id
            }
        });
        const sumValue = totalIncome._sum.amount;
        console.log(sumValue);
        res.status(200).json(sumValue);
    } catch (error) {
        res.status(500).json(error);
    }
};

// calculate total expense by category id
const calculateTotalExpenseByCategoryId = async (req, res) => {
    const id = req.params.id;
    try {
        const totalExpense = await prisma.transaction.aggregate({
            _sum: {
                amount: true
            },
            where: {
                type: 'expense',
                categoryId: id
            }
        });
        const sumValue = totalExpense._sum.amount;
        res.status(200).json(sumValue);
    } catch (error) {
        res.status(500).json(error);
    }
};

// calculate total balance by category id
const calculateTotalBalanceByCategoryId = async (req, res) => {
    const id = req.params.id;
    try {
        const totalIncome = await prisma.transaction.aggregate({
            _sum: {
                amount: true
            },
            where: {
                type: 'income',
                categoryId: id
            }
        });
        const totalExpense = await prisma.transaction.aggregate({
            _sum: {
                amount: true
            },
            where: {
                type: 'expense',
                categoryId: id
            }
        });
        const sumIncome = totalIncome._sum.amount;
        const sumExpense = totalExpense._sum.amount;
        const totalBalance = sumIncome - sumExpense;
        res.status(200).json(totalBalance);
    } catch (error) {
        res.status(500).json(error);
    }
};

// calculate total income by date range
// endpoint: /api/calculation/total-income-by-date
// router example: /api/calculation/total-income-by-date?start=2023-07-17&end=2023-07-18
// note: this get request requires query parameters.
// date format: YYYY-MM-DD
const calculateTotalIncomeByDate = async (req, res) => {
    const start = req.query.start;
    const end = req.query.end;
    const startDate = start + 'T00:00:00.000Z'; // add time to the date to make it ISO format as required by prisma
    const endDate = end + 'T23:59:59.999Z'; // add time to the date to make it ISO format as required by prisma

    try {
        const totalIncome = await prisma.transaction.aggregate({
            _sum: {
                amount: true
            },
            where: {
                type: 'income',
                createdAt: {
                    gte: startDate,
                    lte: endDate
                }
            }
        });
        const sumValue = totalIncome._sum.amount;
        res.status(200).json(sumValue);
    } catch (error) {
        res.status(500).json(error);
    }
};


// calculate total expense by date range
// endpoint: /api/calculation/total-expense-by-date
// router example: /api/calculation/total-expense-by-date?start=2023-07-17&end=2023-07-18
// note: this get request requires query parameters.
// date format: YYYY-MM-DD
const calculateTotalExpenseByDate = async (req, res) => {
    const start = req.query.start;
    const end = req.query.end;
    const startDate = start + 'T00:00:00.000Z'; // add time to the date to make it ISO format as required by prisma
    const endDate = end + 'T23:59:59.999Z'; // add time to the date to make it ISO format as required by prisma

    try {
        const totalExpense = await prisma.transaction.aggregate({
            _sum: {
                amount: true
            },
            where: {
                type: 'expense',
                createdAt: {
                    gte: startDate,
                    lte: endDate
                }
            }
        });
        const sumValue = totalExpense._sum.amount;
        res.status(200).json(sumValue);
    } catch (error) {
        res.status(500).json(error);
    }
};

// calculate total balance by date range
// endpoint: /api/calculation/balance-by-date
// router example: /api/calculation/balance-by-date?start=2023-07-17&end=2023-07-18
// note: this get request requires query parameters.
// date format: YYYY-MM-DD
const calculateTotalBalanceByDate = async (req, res) => {
    const start = req.query.start;
    const end = req.query.end;
    const startDate = start + 'T00:00:00.000Z'; // add time to the date to make it ISO format as required by prisma
    const endDate = end + 'T23:59:59.999Z'; // add time to the date to make it ISO format as required by prisma

    try {
        const totalIncome = await prisma.transaction.aggregate({
            _sum: {
                amount: true
            },
            where: {
                type: 'income',
                createdAt: {
                    gte: startDate,
                    lte: endDate
                }
            }
        });
        const totalExpense = await prisma.transaction.aggregate({
            _sum: {
                amount: true
            },
            where: {
                type: 'expense',
                createdAt: {
                    gte: startDate,
                    lte: endDate
                }
            }
        });
        const sumIncome = totalIncome._sum.amount;
        const sumExpense = totalExpense._sum.amount;
        const totalBalance = sumIncome - sumExpense;
        res.status(200).json(totalBalance);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    calculateTotalIncome,
    calculateTotalExpense,
    calculateTotalBalance,
    calculateTotalIncomeByCategoryId,
    calculateTotalExpenseByCategoryId,
    calculateTotalBalanceByCategoryId,
    calculateTotalIncomeByDate,
    calculateTotalExpenseByDate,
    calculateTotalBalanceByDate
}
