const priceModel = require("../models/PriceModel.js");
const response = require("./response");

module.exports = {
  fetchAllPriceDatas: async (req, res) => {
    await priceModel
      .findAll()
      .then(datas => {
        const message = "Berhasil Load Data Harga";
        res.status(response.CODE_SUCCESS)
            .json(response.set(response.CODE_SUCCESS, message, datas));
      })
      .catch(err => {
        const message = "Gagal Load Data Harga";
        res.status(response.CODE_FAILURE)
            .json(response.set(response.CODE_FAILURE, message, null));
      });
  },

  carryPriceData: async (req, res) => {
    await priceModel
      .create(req.body)
      .then(_ => {
          const message = "Berhasil Menambah data harga";
          res.status(response.CODE_SUCCESS)
              .json(response.set(response.CODE_SUCCESS, message, true));
      })
      .catch(_ => {
          const message = "Gagal Menambah Data Harga";
          res.status(response.CODE_FAILURE)
              .json(response.set(response.CODE_FAILURE, message, false));
      });
  },

  update: async function (req, res) {
      const price = await priceModel.findOne({
          where: req.params
      });
      
      price.kelas = req.body.kelas;
      price.tipe = req.body.tipe;
      price.harga = req.body.harga;

      await price
        .save()
        .then(_ => {
            const message = "Berhasil Update data harga";
            res.status(response.CODE_SUCCESS)
                .json(response.set(response.CODE_SUCCESS, message, true));
        })
        .catch(_ => {
            const message = "Gagal Update Data Harga";
            res.status(response.CODE_FAILURE)
                .json(response.set(response.CODE_FAILURE, message, false));
        });
    }
};
