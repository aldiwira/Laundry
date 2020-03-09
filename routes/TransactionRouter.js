const express = require("express");
const router = express.Router();
const transactionModel = require("../controller/TransactionController");

router.get("/", transactionModel.processFetchTransaction);

module.exports = router;
