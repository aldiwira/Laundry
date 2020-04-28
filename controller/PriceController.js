const priceModel = require("../models/PriceModel.js");
const response = require("./response");

let code;
let data;
let message;

module.exports = {
  fetchAllPriceDatas: async (req, res) => {
    await priceModel
      .findAll()
      .then((datas) => {
        const message = "Berhasil Load Data Harga";
        res
          .status(response.CODE_SUCCESS)
          .json(response.set(response.CODE_SUCCESS, message, datas));
      })
      .catch((err) => {
        const message = "Gagal Load Data Harga";
        res
          .status(response.CODE_FAILURE)
          .json(response.set(response.CODE_FAILURE, message, null));
      });
    res.status(code).json(response.set(code, message, data));
  },

  carryPriceData: async (req, res) => {
    await priceModel
      .create(req.body)
      .then((datas) => {
        res.status(200).json(datas);
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  },

  update: async function (req, res) {
    // TODO : Logic Update Data.
  },
};
