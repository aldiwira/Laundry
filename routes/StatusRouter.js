const express = require("express");
const router = express.Router();
const statusController = require("../controller/StatusController.js");

router.get("/", statusController.processFetchDataStatus);
module.exports = router;
