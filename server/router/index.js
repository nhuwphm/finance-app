const express = require("express");
const transactionRouter = require("./transaction");
const categoryRouter = require("./category");
const calculationRouter = require("./calculation");


const router = express.Router();

const appRoutes = [
    {
        path: "/transaction",
        route: transactionRouter,
    },
    {
        path: "/category",
        route: categoryRouter,
    },
    {
        path: "/calculation",
        route: calculationRouter,
    },

]

appRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

console.log("Router is running");

module.exports = router;