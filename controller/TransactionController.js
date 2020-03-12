const transactionModel = require("../models/TransactionModel");
const priceModel = require("../models/PriceModel");
const userModel = require("../models/UsersModel");
const detailTransaction = require("../models/DetailTransactionModels");
const { queryTypes } = require("sequelize");

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
        res.status(200).json(datas);
      });
  },
  processCreateTransaction: async (req, res) => {}
};
