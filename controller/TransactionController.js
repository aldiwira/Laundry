const transactionModel = require("../models/TransactionModel");
const priceModel = require("../models/PriceModel");
const userModel = require("../models/UsersModel");
const detailTransaction = require("../models/DetailTransactionModels");
const { queryTypes } = require("sequelize");

detailTransaction.belongsTo(transactionModel, { foreignKey: "no_nota" });

module.exports = {
  processFetchTransaction: async (req, res) => {
    await detailTransaction
      .findAll({
        include: [
          {
            model: transactionModel
          }
        ]
      })
      .then(datas => {
        res.status(200).json(datas);
      });
  }
};
