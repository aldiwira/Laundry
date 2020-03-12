const express = require("express");
const router = express.Router();
const transactionControl = require("../controller/TransactionController");

router.get("/", transactionControl.processFetchTransaction);
router.post("/", transactionControl.processCreateTransaction);

module.exports = router;
