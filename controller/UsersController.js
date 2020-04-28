const usersModel = require("../models/UsersModel.js");
const response = require("./response");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");
const uniqid = require("uniqid");

let code;
let data;
let message;
let SaltRound = 10;

module.exports = {
  /**
   * Controller untuk login.
   * Sama seperti proses login pada umumnya terdapat validasi data
   * antara input yang dikirimkan user dan data yang terdapat pada database, seperti :
   * - Checking no handphone sudah terdaftar atau belum.
   * - Password menggunakan enkripsi dengan menggunakan password hashing function yaitu bcrypt.
   */
  processFetchUserDatas: async (req, res) => {
    await usersModel
      .findOne({
        where: {
          noHp: {
            [Op.like]: "%" + req.body.noHp.trim(),
          },
        },
      })
      .then((datas) => {
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
            data = {};
          }
        }
        res.status(200).json(response.set(code, message, data));
      });
  },

  /**
   * Controller untuk login admin laundry.
   *
   * Dimana perbedaan dari login user dan admin
   * hanya berada pada kondisi where clause saat fetching data.
   */
  processFetchAdmin: async (req, res) => {
    await usersModel
      .findOne({
        where: {
          peran: 1,
          noHp: {
            [Op.like]: "%" + req.body.noHp.trim(),
          },
        },
      })
      .then((datas) => {
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
            data = {};
          }
        }
        res.status(200).json(response.set(code, message, data));
      });
  },

  /**
   * Controller untuk melakukan pembuatan akun.
   */
  processRegisterAccount: async function (req, res) {
    const password = bcrypt.hashSync(req.body.password, 10);
    await usersModel
      .create({
        idUser: uniqid.time(),
        nama: req.body.nama,
        noHp: req.body.noHp,
        password: password,
        alamat: req.body.alamat,
      })
      .then((datas) => {
        code = response.CODE_SUCCESS;
        message = "Success Create New Account";
        res.status(code).json(response.set(code, message, datas));
      })
      .catch((err) => {
        code = response.CODE_FAILURE;
        message = "Failed Create New Account";
        res.status(200).json(response.set(code, message, err));
      });
  },

  /**
   * Controller untuk Register no handphone.
   * Disini dilakukan verifikasi untuk mengecek apakah no handphone
   * yang di daftarkan valid atau tidak dengan mengecek no_handphone ada yang sama atau tidak.
   *
   */
  processRegisterPhone: async (req, res) => {
    await usersModel
      .findOne({
        where: {
          noHp: {
            [Op.like]: "%" + req.body.noHp.trim(),
          },
        },
      })
      .then((datas) => {
        if (datas == null) {
          code = response.CODE_SUCCESS;
          message = "No Handphone Valid.";
        } else {
          code = response.CODE_UNAUTHORIZED;
          message = "No Handphone Sudah Terdaftar";
        }

        res.status(200).json(response.set(code, message));
      });
  },
};
