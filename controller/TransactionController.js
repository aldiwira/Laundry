const transactionModel = require("../models/TransactionModel.js");
const priceModel = require("../models/PriceModel.js");
const userModel = require("../models/UsersModel.js");
const detailTransaction = require("../models/DetailTransactionModels.js");
const { queryTypes } = require("sequelize");
const response = require("./response");
let uniqid = require("uniqid");
let bcrypt = require("bcrypt");
let code;
let data;
let message;

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
        code = response.CODE_SUCCESS;
        data = datas;
        message = "Success Load Datas";
      })
      .catch(err => {
        code = response.CODE_FAILURE;
        data = err;
        message = "Failed Get Order";
      });
    res.status(code).send(response.set(code, message, data));
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
