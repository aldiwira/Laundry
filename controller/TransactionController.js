const transactionModel = require("../models/TransactionModel.js");
const priceModel = require("../models/PriceModel.js");
const userModel = require("../models/UsersModel.js");
const detailTransaction = require("../models/DetailTransactionModels.js");
const { queryTypes } = require("sequelize");
let uniqid = require("uniqid");

transactionModel.hasMany(detailTransaction, { foreignKey: "no_nota" });
transactionModel.hasMany(priceModel, { foreignKey: "id_harga" });

module.exports = {
  processFetchTransaction: async (req, res) => {
    const price = [{ model: priceModel, attributes: ["kelas"] }];
    const transactionDetail = [
      {
        model: detailTransaction,
        attributes: ["id_detail_transaction", "status", "bobot", "id_harga"]
      }
    ];
    const field = ["no_nota", "status_pembayaran", "createdAt", "updatedAt"];
    await transactionModel
      .findAll({
        attributes: field,
        include: transactionDetail
      })
      .then(datas => {
        res.status(200).json({
          status: 200,
          message: "Success Load Datas",
          data: datas
        });
      })
      .catch(err => {
        res.status(401).json({
          status: 401,
          message: "Failed Get Order",
          data: err
        });
      });
  },
  processCreateTransaction: async (req, res) => {
    let id_detail_transaction = uniqid.time();
    let no_nota = uniqid.time();
    let id_harga = req.body.id_harga;
    let id_user = req.body.id_user;
    let transaction_detil = {
      id_detail_transaction,
      bobot: 0,
      status: false,
      no_nota,
      id_harga
    };
    let transaction_node = {
      no_nota,
      total_tagihan: 0,
      pembayaran: 0,
      status_pembayaran: 0,
      id_user
    };
    for (let index = 0; index < id_harga.length; index++) {
      let i = id_harga[index];
      detailTransaction
        .create({
          id_detail_transaction,
          bobot: 0,
          status: false,
          no_nota,
          i
        })
        .then(datas => {
          res.status(200).json(datas);
        });
    }
  }
};
