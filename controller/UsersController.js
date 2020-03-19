const usersModel = require("../models/UsersModel.js");
const response = require("./response");
const { Op } = require("sequelize");
let uniqid = require("uniqid");

module.exports = {
  processFetchUserDatas: async (req, res) => {
    await usersModel
      .findOne({
        where: {
          /* TODO : Cek menggunakan klausa LIKE */
          no_handphone: {
            [Op.like]: "%" + req.body.no_handphone + "%"
          }
        }
      })
      .then(datas => {
        let code;
        let message;

        if (datas.password === req.body.password) {
          /* TODO : Cek menggunakan verify password*/
          code = response.CODE_SUCCESS;
          message = "Berhasil Login.";
        } else {
          if (true) {
            /* TODO : Cek Lagi kalo [datas] ada data berarti : */
            code = response.CODE_UNAUTHORIZED;
            message = "Password Salah, Silahkan Ulangi Lagi";
          } else {
            /* Cek Lagi kalo [datas] tidak ada data berarti : */
            code = response.CODE_UNAUTHORIZED;
            message = "No Handphone Tidak Dikenali";
          }
        }

        res.status(code).json(response.set(code, message, datas));
      });
  },

  /* TODO : Gunakan Format Response sesuai contract */

  processRegisterAccount: async (req, res) => {
    await usersModel
      .create({
        id_user: uniqid.time(),
        nama: req.body.nama,
        no_handphone: req.body.no_handphone,
        password: req.body.password,
        alamat: req.body.alamat,
        role: 0
      })
      .then(datas => {
        let code = response.CODE_SUCCESS;
        let message = "Success Create New Account";
        res.status(code).json(response.set(code, message, datas));
      })
      .catch(err => {
        let code = response.CODE_FAILURE;
        let message = "Failed Create New Account";
        res.status(code).json(response.set(code, message, err));
      });
  },

  processRegisterPhone: async (req, res) => {
    await usersModel
      .findOne({
        where: {
          /* TODO : Cek menggunakan klausa LIKE */
          no_handphone: {
            [Op.like]: "%" + req.body.no_handphone + "%"
          }
        }
      })
      .then(datas => {
        let code;
        let message;
        let status;
        if (datas) {
          code = response.CODE_UNAUTHORIZED;
          message = "No Handphone Sudah Terdaftar";
          status = false;
        } else {
          code = response.CODE_SUCCESS;
          message = "No Handphone Valid.";
          status = true;
        }
        res.status(code).json(response.set(code, message, status));
      })
      .catch(err => {
        let code = response.CODE_FAILURE;
        let message = "No Handphone Sudah Terdaftar";
        res.status(code).json(response.set(code, message, datas));
      });
  }
};
