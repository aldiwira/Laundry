const express = require("express");
const router = express.Router();
const priceController = require("../controller/PriceController.js");

router.get("/", priceController.fetchAllPriceDatas);
router.post("/", priceController.carryPriceData);
module.exports = router;
