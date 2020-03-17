const usersModel = require("../models/UsersModel.js");

module.exports = {
  processFetchUserDatas: async (req, res) => {
    let noHead = req.query.no_headphone;
    let pass = req.query.password;
    try {
      const users = await usersModel
        .findAll({
          where: {
            no_headphone: noHead,
            password: pass
          }
        })
        .then(datas => {
          if (datas[0].no_headphone != noHead && datas[0].password != pass) {
            res.json({
              status: 401,
              massage: "Failed login"
            });
          } else {
            res.json({
              status: 200,
              massage: "Success Login",
              data: datas
            });
          }
        });
    } catch (error) {
      res.json({
        status: 401,
        massage: "Failed login",
        data: error
      });
    }
  },
  processRegisterAccount: async (req, res) => {
    let dataUser = {
      id_user: req.body.id_user,
      nama: req.body.nama,
      no_headphone: req.body.no_headphone,
      password: req.body.password,
      alamat: req.body.alamat,
      role: req.body.role
    };
    try {
      const users = await usersModel
        .create({
          dataUser
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
    } catch (error) {
      res.json({
        status: 401,
        massage: "Failed Create New Account",
        data: error
      });
    }
  },
  processRegisterPhone: async (req, res) => {
    try {
      let noHead = req.query.no_headphone;
      let no_head = "";
      let users = await usersModel
        .findAll({
          where: {
            no_headphone: noHead
          }
        })
        .then(datas => {
          if (datas[0] != null) {
            no_head = datas[0].no_headphone;
          } else {
            no_head = "";
          }
          console.log(no_head);
          if (no_head != noHead) {
            res.json({
              status: 200,
              massage: "Success Register " + noHead,
              data: datas
            });
          } else {
            res.json({
              status: 401,
              massage: "No. Telepon Sudah Terdaftar",
              data: false
            });
          }
        });
    } catch (err) {
      console.log(err);
    }
  }
};
