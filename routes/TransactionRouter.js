const express = require("express");
const router = express.Router();
const transactionControl = require("../controller/TransactionController.js");

router.get("/:id_user/status", transactionControl.fetchStatus);
router.get("/:id_user/history", transactionControl.fetchHistory);
router.post("/", transactionControl.processCreateTransaction);
router.put("/progress/:no_nota", transactionControl.updateTransaction);
router.put("/pembayaran/:no_nota", transactionControl.updatePayment);
router.put("/status/:id_detail_transaction", transactionControl.updateStatus);

module.exports = router;
