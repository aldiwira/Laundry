const express = require("express");
const router = express.Router();
const transactionControl = require("../controller/TransactionController.js");

router.get("/", transactionControl.processFetchTransaction);
router.post("/", transactionControl.processCreateTransaction);
router.put("/one", transactionControl.processChangePaymentStatus);

module.exports = router;
