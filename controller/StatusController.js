const transactionModel = require("../models/TransactionModel.js");
const priceModel = require("../models/PriceModel.js");
const userModel = require("../models/UsersModel.js");
const detailTransaction = require("../models/DetailTransactionModels.js");
const { queryTypes, Op } = require("sequelize");
const response = require("./response");
const url = require("url");
let code;
let data;
let message;
transactionModel.hasMany(detailTransaction, { foreignKey: "no_nota" });
detailTransaction.belongsTo(transactionModel);

module.exports = {
  processFetchDataStatus: async (req, res) => {
    let no_nota = req.body.no_nota;
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
        include: transactionDetail,
        where: {
          no_nota: {
            [Op.like]: "%" + no_nota
          }
        }
      })
      .then(datas => {
        code = response.CODE_SUCCESS;
        data = datas;
        message = "Success Load Datas";
      })
      .catch(err => {
        code = response.CODE_FAILURE;
        data = err;
        message = "Failed Load Datas";
      });
    res.status(code).send(response.set(code, message, data));
  },
  processFetchDataByIdUser: async (req, res) => {
    let id_user = req.params.id_user;
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
        include: transactionDetail,
        where: {
          id_user: {
            [Op.like]: "%" + id_user
          }
        }
      })
      .then(datas => {
        code = response.CODE_SUCCESS;
        data = datas;
        message = "Success Load Datas";
      })
      .catch(err => {
        code = response.CODE_FAILURE;
        data = err;
        message = "Failed Load Datas";
      });
    res.status(code).send(response.set(code, message, data));
  }
};
