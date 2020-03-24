const uniqid = require("uniqid");
const { Op } = require("sequelize");
const response = require('./response');
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

transactionModel.hasMany(detailTransaction, { foreignKey: "no_nota" });

module.exports = {

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
        _constraint.attributes.pop("status_pengerjaan");
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
            .json(response.set(code, message, ""));
    },

    /** [PUT]: /order */
    processUpdateTransaction: async (req, res) => {

    },
};
