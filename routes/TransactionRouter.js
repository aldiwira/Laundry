const express = require("express");
const router = express.Router();
const transactionControl = require("../controller/TransactionController.js");

router.get("/:id_user/status", transactionControl.fetchStatus);
router.get("/:id_user/history", transactionControl.fetchHistory);
router.post("/", transactionControl.processCreateTransaction);
// router.put("/:no_nota/:", transactionControl.processUpdateTransaction);

module.exports = router;
