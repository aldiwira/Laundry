const uniqid = require("uniqid");
const { Op } = require("sequelize");
const response = require('./response');
const userModel = require("../models/UsersModel");
const transactionModel = require("../models/TransactionModel.js");
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
};
