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
  },

  carryPriceData: async (req, res) => {
    console.log("----------------------------------");
    console.log("Handle Request: Add New Data Price");
    console.log("request body :");
    console.log(req.body);

    await priceModel
      .create(req.body)
      .then((_) => {
        const message = "Berhasil Menambah data harga";
        res
          .status(response.CODE_SUCCESS)
          .json(response.set(response.CODE_SUCCESS, message, true));
      })
      .catch((_) => {
        const message = "Gagal Menambah Data Harga";
        res
          .status(response.CODE_FAILURE)
          .json(response.set(response.CODE_FAILURE, message, false));
      });
  },

  update: async function (req, res) {
    console.log("-----------------------------");
    console.log("Handle Request: Update Price");
    console.log("request parameters :");
    console.log(req.params);
    console.log("request body :");
    console.log(req.body);

    const price = await priceModel.findOne({ where: req.params });
    price.kelas = req.body.kelas;
    price.tipe = req.body.tipe;
    price.harga = req.body.harga;

    await price
      .save()
      .then((data) => {
        console.log("Result :");
        console.log(data.dataValues);
        const message = "Berhasil Update data harga";
        res
          .status(response.CODE_SUCCESS)
          .json(response.set(response.CODE_SUCCESS, message, true));
      })
      .catch((err) => {
        console.log(err);
        const message = "Gagal Update Data Harga";
        res
          .status(response.CODE_FAILURE)
          .json(response.set(response.CODE_FAILURE, message, false));
      });
  },
};
