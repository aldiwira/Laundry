const express = require("express");
const transactionControl = require("../controller/TransactionController.js");

const router = express.Router();
router.post("/", transactionControl.processCreateTransaction);
router.get("/:idUser/status", transactionControl.fetchStatus);
router.get("/:idUser/history", transactionControl.fetchHistory);

module.exports = router;
