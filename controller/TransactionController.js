const transactionModel = require("../models/TransactionModel");
const priceModel = require("../models/PriceModel");
const userModel = require("../models/UsersModel");
const detailTransaction = require("../models/DetailTransactionModels");

detailTransaction.hasMany(userModel, { foreignKey: "id_user" });
userModel.belongsTo(detailTransaction, { foreignKey: "id_user" });

module.exports = {
  processFetchTransaction: async (req, res) => {
    detailTransaction
      .findAll({
        include: [userModel]
      })
      .then(datas => {
        res.status(200).json(datas);
      });
  }
};
