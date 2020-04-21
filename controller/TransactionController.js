const uniqid = require("uniqid");
const { Op } = require("sequelize");
const response = require('./response');
const userModel = require("../models/UsersModel");
const transactionModel = require("../models/TransactionModel.js");
const detailTransaction = require("../models/DetailTransactionModels.js");

let code;
let message;
const constraint = {
    attributes: ["no_nota", "status_pembayaran", "createdAt", "updatedAt"],
    include: [{
        model: detailTransaction,
        attributes: ["status", "bobot", "id_harga"]
    }],
    where: {}
};

transactionModel.belongsTo(userModel, { foreignKey: "id_user" })
transactionModel.hasMany(detailTransaction, { foreignKey: "no_nota" });


module.exports = {

    /** Load new Transaction /admin/new */
    fetchNewOrder: async(req, res) => {
        const _constraint = constraint;
        _constraint.attributes.push("status_pengerjaan");
        _constraint.include.push({
            model: userModel,
            attributes: ['nama', 'alamat']
        });
        _constraint.where = {
            status_pengerjaan: 'MENUNGGU',
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

    /** [GET] : /order/:id_user/status */
    fetchStatus: async (req, res) => {
        const _constraint = constraint;
        _constraint.attributes.push("status_pengerjaan");
        _constraint.where = {
            id_user: req.params.id_user,
            [Op.not]: {
                status_pengerjaan: 'DONE'
            }
        };

        await transactionModel
            .findAll(_constraint)
            .then(datas => {
                code = response.CODE_SUCCESS;
                message = "Success Load Transactions";
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

    /** [GET] : /order/:id_user/history */
    fetchHistory: async (req, res) => {
        const _constraint = constraint;
        _constraint.where = {
            id_user: req.params.id_user,
            status_pengerjaan: 'DONE',
        };

        await transactionModel
            .findAll(_constraint)
            .then(datas => {
                code = response.CODE_SUCCESS;
                message = "Success Load Transactions";
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

    /** [POST]: /order
     * Format Request : JSON :
     * id_user: "",
     * id_harga: []
     * */
    processCreateTransaction: async (req, res) => {
        const no_nota = uniqid.time();

        await transactionModel.create({
            no_nota: no_nota,
            id_user: req.body.id_user
        });

        await req.body.id_harga.forEach(price => detailTransaction.create({
            id_harga: price,
            no_nota: no_nota,
        }));

        code = response.CODE_SUCCESS;
        message = "Success Create Transactions";
        res.status(code)
            .json(response.set(code, message, true));
    },

    /** [PUT]: /order/:id_user/:no_nota/?status_pengerjaan=DONE */
    updateTransaction: async (req, res) => {
        const transaction = await transactionModel.findAll({
            where: req.params
        });

        console.log(transaction[0]);

        transaction[0]
            .status_pengerjaan = req.query.status_pengerjaan;

        await transaction[0]
            .save()
            .then(datas => {
                code = response.CODE_SUCCESS;
                message = "Success Saving Transactions";
                res.status(code)
                    .json(response.set(code, message, datas));
            })
            .catch(err => {
                code = response.CODE_FAILURE;
                message = "Failure Saving Transactions";
                res.status(code)
                    .json(response.set(code, message, err));
            });
    },

    /** [PUT]: /order/:id_user/:no_nota/?status_pembayaran=0&pembayaran=1000*/
    updatePayment: async (req, res) => {
        const transaction = await transactionModel.findAll({
            where: req.params
        });

        transaction[0].status_pembayaran = req.query.status_pembayaran;
        transaction[0].pembayaran = req.query.pembayaran;

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
                    .json(response.set(code, message, false));
            });
    },

    /** [PUT]: /order/status/:id_detail_transactions?status=true/false */
    updateStatus: async (req, res) => {
        const transaction = await detailTransaction.findAll({
            where: req.params
        });

        transaction[0]
            .status = req.query.status;

        await transaction[0]
            .save()
            .then(datas => {
                code = response.CODE_SUCCESS;
                message = "Success Load Transactions";
                res.status(code)
                    .json(response.set(code, message, datas));
            })
            .catch(err => {
                code = response.CODE_FAILURE;
                message = "Failure Load Transactions";
                res.status(code)
                    .json(response.set(code, message, err));
            });
    },
};
