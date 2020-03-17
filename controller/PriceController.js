const priceModel = require("../models/PriceModel.js");

module.exports = {
  fetchAllPriceDatas: async (req, res) => {
    await priceModel
      .findAll()
      .then(datas => {
        res.status(200).json(datas);
      })
      .catch(err => {
        res.status(401).json(err);
      });
  },
  carryPriceData: async (req, res) => {
    let priceData = {
      kelas: req.body.kelas,
      tipe: req.body.tipe,
      harga: req.body.harga
    };
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
