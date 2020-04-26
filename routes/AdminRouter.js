const express = require("express");
const userController = require("../controller/UsersController");
const transactionControl = require("../controller/TransactionController");
const router = express.Router();
router.post("/login", userController.processFetchAdmin);
router.get("/order/status/:status", transactionControl.fetchStatusOrder);
router.put("/order/:no_nota", transactionControl.updateTransaction);

module.exports = router;