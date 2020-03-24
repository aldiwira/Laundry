const response = require('./response');
const transactionModel = require("../models/TransactionModel");
const detailTransaction = require("../models/DetailTransactionModels");

let code;
let message;

module.exports = {

    /**
     * [PUT] : /order/status/:id_detail_transaction
     */
    updateStatus: async (req, res) => {
        const transaction = await detailTransaction
            .findAll({
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