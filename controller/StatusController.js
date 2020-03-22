const response = require('./response');
const transactionModel = require("../models/TransactionModel");
const detailTransaction = require("../models/DetailTransactionModels");

let code;
let message;

transactionModel.hasMany(detailTransaction, { foreignKey: "no_nota" });

module.exports = {

    /**
     * [GET] : /status/:id_user
     * param : id_user
     *
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    statusTransactionUser: async (req, res) => {
        await transactionModel
            .findAll({
                attributes: ["no_nota", "status_pembayaran", "status_pengerjaan",],
                include: [{
                    model: detailTransaction,
                    attributes: ["id_detail_transaction", "status", "bobot", "id_harga"]
                }],
                where: req.params,
            })
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

    /**
     * [PUT] : /status/:id_detail_transaction
     *
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    updateStatusTransactionUser: async (req, res) => {
        const transaction = await detailTransaction
            .findAll({
                where: req.params
            });

        transaction[0]
            .status = req.body.status;

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