const express = require("express");
const priceController = require("../controller/PriceController.js");

const router = express.Router();
router.get("/", priceController.fetchAllPriceDatas);
router.post("/", priceController.carryPriceData);
router.put("/:idHarga", priceController.update);
module.exports = router;
