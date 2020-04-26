const express = require("express");
const userController = require("../controller/UsersController");
const transactionControl = require("../controller/TransactionController");

const router = express.Router();
router.post("/login", userController.processFetchAdmin);
router.get("/order/:status", transactionControl.fetchStatusOrder);
router.put("/order/:noNota", transactionControl.updateTransaction);
router.put("/order/item/:id", transactionControl.updateStatusPerItem);
router.put("/order/pembayaran/:noNota", transactionControl.updatePayment);

module.exports = router;