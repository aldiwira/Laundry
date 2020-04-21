const express = require("express");
const router = express.Router();
const userController = require("../controller/UsersController.js");
const transactionControl = require("../controller/TransactionController.js");

router.post("/login", userController.processFetchAdmin);
router.get("/order/new", transactionControl.fetchNewOrder);
router.put("/order/update/:no_nota", transactionControl.fetchNewOrder);

module.exports = router;