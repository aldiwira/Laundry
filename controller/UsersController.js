const usersModel = require("../models/UsersModel.js");
const response = require("./response");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");
const uniqid = require("uniqid");

let code;
let data;
let message;

module.exports = {
  /**
   * Controller untuk login.
   * Sama seperti proses login pada umumnya terdapat validasi data
   * antara input yang dikirimkan user dan data yang terdapat pada database, seperti :
   * - Checking no handphone sudah terdaftar atau belum.
   * - Password menggunakan enkripsi dengan menggunakan password hashing function yaitu bcrypt.
   *
   * @param req
   * @param res
   * @returns {Promise<void>}
   */
  processFetchUserDatas: async (req, res) => {
    await usersModel
      .findOne({
        where: {
          no_handphone: {
            [Op.like]: "%" + req.body.no_handphone.trim()
          }
        }
      })
      .then(datas => {
        if (datas == null) {
          code = response.CODE_UNAUTHORIZED;
          message = "No Handphone Tidak Dikenali";
        } else {
          if (bcrypt.compareSync(req.body.password, datas.password)) {
            code = response.CODE_SUCCESS;
            message = "Berhasil Login.";
            data = datas;
          } else {
            code = response.CODE_UNAUTHORIZED;
            message = "Password Salah, Silahkan Ulangi Lagi";
          }
        }
        res.status(code).json(response.set(code, message, data));
      });
  },

  /**
   * Controller untuk melakukan pembuatan akun.
   *
   * @param req
   * @param res
   * @returns {Promise<void>}
   */
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
        code = response.CODE_SUCCESS;
        message = "Success Create New Account";
        data = datas;
      })
      .catch(err => {
        code = response.CODE_FAILURE;
        message = "Failed Create New Account";
        data = err;
      });
    res.status(code).send(response.set(code, message, data));
  },

  /**
   * Controller untuk Register no handphone.
   * Disini dilakukan verifikasi untuk mengecek apakah no handphone
   * yang di daftarkan valid atau tidak dengan mengecek no_handphone ada yang sama atau tidak.
   *
   * @param req
   * @param res
   * @returns {Promise<void>}
   */
  processRegisterPhone: async (req, res) => {
    await usersModel
      .findOne({
        where: {
          no_handphone: {
            [Op.like]: "%" + req.body.no_handphone.trim()
          }
        }
      })
      .then(datas => {
        if (datas == null) {
          code = response.CODE_SUCCESS;
          message = "No Handphone Valid.";
        } else {
          code = response.CODE_UNAUTHORIZED;
          message = "No Handphone Sudah Terdaftar";
        }

        res.status(code).json(response.set(code, message));
      });
  }
};
