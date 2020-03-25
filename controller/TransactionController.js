const transactionModel = require("../models/TransactionModel.js");
const priceModel = require("../models/PriceModel.js");
const userModel = require("../models/UsersModel.js");
const detailTransaction = require("../models/DetailTransactionModels.js");
const { queryTypes, Op } = require("sequelize");
const response = require("./response");
let uniqid = require("uniqid");
let bcrypt = require("bcrypt");
let code;
let data;
let message;

transactionModel.hasMany(detailTransaction, { foreignKey: "no_nota" });
detailTransaction.belongsTo(transactionModel);
module.exports = {
  //Select Join between trasaction and detail transaction
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
  //Make order with multiple id price
  //Price ID must as array json
  processCreateTransaction: async (req, res) => {
    let id_detail_transaction = uniqid.time();
    let no_nota = uniqid.time();
    let id_harga = req.body.id_harga;
    let id_user = req.body.id_user;
    const price_data = [];
    for (let index = 0; index < id_harga.length; index++) {
      let id_harga_now = id_harga[index];
      price_data.push({
        bobot: 0,
        status: false,
        no_nota,
        id_harga: id_harga_now
      });
    }
    await transactionModel
      .create(
        {
          no_nota,
          total_tagihan: 0,
          pembayaran: 0,
          status_pembayaran: 0,
          id_user: id_user,
          detail_transactions: price_data
        },
        {
          include: [detailTransaction]
        }
      )
      .then(datas => {
        code = response.CODE_SUCCESS;
        message = "Success Create Order";
        data = datas;
      })
      .catch(err => {
        code = response.CODE_FAILURE;
        message = "Failed Create Order";
        data = err;
      });
    res.status(code).send(response.set(code, message, data));
  },
  processChangePaymentStatus: async (req, res) => {
    try {
      let no_nota = req.body.no_nota;
      let status_pembayaran = req.body.status_pembayaran;
      //define the relation data
      const transactionDetail = [
        {
          model: detailTransaction,
          attributes: ["id_detail_transaction", "status", "bobot", "id_harga"]
        }
      ];
      //define of field data
      const field = ["no_nota", "status_pembayaran", "createdAt", "updatedAt"];
      //update process data
      const update_payment = await transactionModel.update(
        {
          status_pembayaran
        },
        {
          where: {
            no_nota: {
              [Op.like]: "%" + no_nota
            }
          }
        }
      );
      //this condition when payment status updated
      if (update_payment) {
        const updated_post = await transactionModel.findAll({
          attributes: field,
          include: transactionDetail,
          where: {
            no_nota: {
              [Op.like]: "%" + no_nota
            }
          }
        });
        code = response.CODE_SUCCESS;
        message = "Success Updated";
        data = updated_post;
      } else {
        code = response.CODE_FAILURE;
        message = "Failed Update data";
        data = [];
      }
      return res.status(code).json(response.set(code, message, data));
      throw new Error("Post not found");
    } catch (error) {
      code = response.CODE_FAILURE;
      message = "Failed Update data";
      data = [];
      return res.status(code).json(response.set(code, message, data));
    }
  },
  processFindByNota: async (req, res) => {
    let no_nota = req.body.no_nota;
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
        message = "Failed Get Order";
      });
    res.status(code).send(response.set(code, message, data));
  }
};
