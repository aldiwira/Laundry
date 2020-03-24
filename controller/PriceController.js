const priceModel = require("../models/PriceModel.js");
const response = require("./response");

let code;
let data;
let message;

module.exports = {
  fetchAllPriceDatas: async (req, res) => {
    await priceModel
      .findAll()
      .then(datas => {
        message = "Success Load Data Price";
        code = response.CODE_SUCCESS;
        data = datas;
      })
      .catch(err => {
        message = "Success Load Data Price";
        code = response.CODE_FAILURE;
        data = null;
      });
    res.status(code).json(response.set(code, message, data));
  },
  carryPriceData: async (req, res) => {
    await priceModel
      .create({
        kelas: req.body.kelas,
        tipe: req.body.tipe,
        harga: req.body.harga
      })
      .then(datas => {
        res.status(200).json(datas);
      })
      .catch(err => {
        res.status(401).json(err);
      });
  }
};
