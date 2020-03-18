const usersModel = require("../models/UsersModel.js");
const response = require("./response");

module.exports = {
  processFetchUserDatas: async (req, res) => {
    await usersModel
        .findAll({
          where: {
            /* TODO : Cek menggunakan klausa LIKE */
            no_handphone: req.body.no_handphone
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

          res
              .status(code)
              .json(response.set(code, message, []));
        })
  },

  /* TODO : Gunakan Format Response sesuai contract */
  processRegisterAccount: async (req, res) => {
    await usersModel
        .create({
          id_user: req.body.id_user,
          nama: req.body.nama,
          no_headphone: req.body.no_headphone,
          password: req.body.password,
          alamat: req.body.alamat,
          role: req.body.role
        })
        .then(datas => {
          if (req.body.nama == null) {
            res.json({
              status: 401,
              massage: "Failed Create New Account",
              data: datas
            });
          } else {
            res.json({
              status: 200,
              massage: "Success Create New Account",
              data: datas
            });
          }
        })
        .catch(err => {
          res.json({
            status: 401,
            massage: "Failed Create New Account",
            data: err
          });
        });
  },

  processRegisterPhone: async (req, res) =>
      await usersModel
          .findAll({
            where: {
              /* TODO : Cek menggunakan klausa LIKE */
              no_handphone: req.body.no_handphone
            }
          })
          .then(datas => {
            let code;
            let message;

            if (datas.length === 1) {
              code = response.CODE_UNAUTHORIZED;
              message = "No Handphone Sudah Terdaftar";
            } else {
              code = response.CODE_SUCCESS;
              message = "No Handphone Valid.";
            }

            res
                .status(code)
                .json(response.set(code, message, []));
          })
};
