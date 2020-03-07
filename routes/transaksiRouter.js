const express = require("express");
const router = express.Router();
const transaksiModel = require("../model/transaksiModel");

router.get("/", async (req, res) => {
  try {
    const xorder = await transaksiModel.findAll().then(datas => {
      res.status(200).json({
        status: 200,
        massage: "Success Load Data",
        data: datas
      });
    });
  } catch (error) {
    res.json({
      status: 401,
      massage: error
    });
  }
});

module.exports = router;
