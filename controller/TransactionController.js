const transactionModel = require("../models/TransactionModel");
const priceModel = require("../models/PriceModel");
const userModel = require("../models/UsersModel");
const detailTransaction = require("../models/DetailTransactionModels");
const { queryTypes } = require("sequelize");
let uniqid = require("uniqid");

transactionModel.hasMany(detailTransaction, { foreignKey: "no_nota" });

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
    let transaction_detil = {
      id_detail_transaction,
      bobot: 0,
      status: false,
      no_nota: uniqid.time(),
      id_harga: req.body.id_harga
    };
    let transaction_node = {
      id_detail_transaction,
      total_tagihan: 0,
      pembayaran: 0,
      status_pembayaran: 0,
      id_user: req.body.id_user
    };
  }
};
