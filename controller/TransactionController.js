const uniqid = require("uniqid");
const { Op } = require("sequelize");
const response = require('./response');
const userModel = require("../models/UsersModel");
const transactionModel = require("../models/TransactionModel.js");
<<<<<<< HEAD
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
=======
const detailTransaction = require("../models/DetailTransactionModel.js");

let code;
let message;
const constraint = {
    attributes: ["noNota", "statusPembayaran", "createdAt", "updatedAt"],
    include: [{
        model: detailTransaction,
        attributes: ["id", "status", "bobot", "idHarga"]
    }],
    where: {}
};

transactionModel.belongsTo(userModel, { foreignKey: "idUser" })
transactionModel.hasMany(detailTransaction, { foreignKey: "noNota" });

module.exports = {

    /** [USER][POST]: /order
     * Format Request : JSON :
     * id_user: "",
     * id_harga: []
     * */
    processCreateTransaction: async function (req, res) {
        const no_nota = uniqid.time();
        await transactionModel.create({
            noNota: no_nota,
            idUser: req.body.id_user,
            methodeDelivery: req.body.methodeDelivery
        });
        await req.body.id_harga.forEach(price => detailTransaction.create({
            idUser: price,
            noNota: no_nota,
        }));

        code = response.CODE_SUCCESS;
        message = "Success Create Transactions";
        res.status(code)
            .json(response.set(code, message, true));
    },

    /** [ADMIN][GET] : /admin/order/new */
    fetchStatusOrder: async function (req, res) {
        var status;
        if (req.params.status == 'new') {
            status = 'MENUNGGU';
        } else if (req.params.status == 'on_proggress') {
            status = 'ON PROGGRESS';
        } else if (req.params.status == 'history') {
            status = 'DONE';
        }

        const _constraint = constraint;
        _constraint.attributes.push("statusPengerjaan");
        _constraint.include.push({
            model: userModel,
            attributes: ['nama', 'alamat']
        });
        _constraint.where = {
            'statusPengerjaan': status
        };

        await transactionModel
            .findAll(_constraint)
            .then(datas => {
                code = response.CODE_SUCCESS;
                message = "Success Load New Transaction";
                res.status(code)
                   .json(response.set(code, message, datas));
            })
            .catch(err => {
                code = response.CODE_FAILURE;
                message = "Failure Load Transactions";
                res.status(code)
                   .json(response.set(code, message, err));
            })
    },

    /** [USER][GET] : /order/:id_user/status */
    fetchStatus: async function (req, res) {
        const _constraint = constraint;
        _constraint.attributes.push("statusPengerjaan");
        _constraint.where = {
            idUser: req.params.idUser,
            [Op.not]: {
                statusPengerjaan: 'DONE'
            }
        };

        await transactionModel
            .findAll(_constraint)
            .then(datas => {
                code = response.CODE_SUCCESS;
                message = "Berhasil Load Data Order";
                res.status(code)
                    .json(response.set(code, message, datas));
            })
            .catch(err => {
                code = response.CODE_FAILURE;
                message = "Gagal Load Data Order";
                res.status(code)
                    .json(response.set(code, message, err));
            })
    },

    /** [USER][GET] : /order/:id_user/history */
    fetchHistory: async function (req, res) {
        const _constraint = constraint;
        _constraint.where = {
            idUser: req.params.idUser,
            statusPengerjaan: 'DONE',
        };

        await transactionModel
            .findAll(_constraint)
            .then(datas => {
                code = response.CODE_SUCCESS;
                message = "Berhasil Load Data History";
                res.status(code)
                   .json(response.set(code, message, datas));
            })
            .catch(err => {
                code = response.CODE_FAILURE;
                message = "Gagal Load Data History";
                res.status(code)
                   .json(response.set(code, message, err));
            })
    },

    /** [ADMIN][PUT]: /admin/order/:noNota/ *
     * DATA: 
     * - status_pengerjaan={ON PROGGRESS, DONE} */
    updateTransaction: async (req, res) => {
        const transaction = await transactionModel.findAll({
            where: req.params
        });

        transaction[0]
            .statusPengerjaan = req.body.statusPengerjaan;

        await transaction[0]
            .save()
            .then(datas => {
                code = response.CODE_SUCCESS;
                message = "Success Saving Transactions";
                res.status(code)
                   .json(response.set(code, message, true));
            })
            .catch(err => {
                code = response.CODE_FAILURE;
                message = "Failure Saving Transactions";
                res.status(code)
                   .json(response.set(code, message, err));
            });
    },

    /** [ADMIN][PUT]: /order/:no_nota
     * DATA :
     * - statusPembayaran=0
     * - pembayaran=1000
     **/
    updatePayment: async function (req, res) {
        const transaction = await transactionModel.findOne({
            where: req.params
        });

        transaction.statusPembayaran = true;
        transaction.pembayaran = req.query.pembayaran;

        await transaction
            .save()
            .then(_ => {
                code = response.CODE_SUCCESS;
                message = "Success Saving Transactions";
                res.status(code)
                    .json(response.set(code, message, true));
            })
            .catch(_ => {
                code = response.CODE_FAILURE;
                message = "Failure Saving Transactions";
                res.status(code)
                    .json(response.set(code, message, false));
            });
    },

    /** [PUT]: /admin/order/status/:id */
    updateStatusPerItem: async (req, res) => {
        const transaction = await detailTransaction.findOne({
            where: req.params
        });

        transaction.status = true;

        await transaction
            .save()
            .then(_ => {
                code = response.CODE_SUCCESS;
                message = "Berhasil Mengupdate data.";
                res.status(code)
                    .json(response.set(code, message, true));
            })
            .catch(_ => {
                code = response.CODE_FAILURE;
                message = "Gagal mengupdate data.";
                res.status(code)
                    .json(response.set(code, message, false));
            });
    },
>>>>>>> f48be0e90915ec963763af8dfd368bd3d963dfa2
};
