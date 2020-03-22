const express = require("express");
const router = express.Router();

const controller = require('../controller/StatusController');

router.get("/:id_user", controller.statusTransactionUser);
router.put("/:id_detail_transaction", controller.updateStatusTransactionUser);

module.exports = router;
