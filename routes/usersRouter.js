const express = require("express");
const parseJson = require("parse-json");
const router = express.Router();
const usersModel = require("../model/usersModel");

router.get("/", async (req, res) => {
  try {
    const users = await usersModel.findAll();
    res.json({
      status: 200,
      massage: "Success fetch data.",
      datas: users
    });
  } catch (error) {
    res.json({ massage: error });
  }
});

router.post("/", async (req, res) => {
  const users = await usersModel
    .create({
      nama: req.body.nama,
      no_headphone: req.body.no_headphone,
      alamat: req.body.alamat,
      role: req.body.role
    })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json({ massage: err });
    });
});

router.post("/register", async (req, res) => {
  try {
    const noHead = req.query.no_headphone;
    const users = await usersModel
      .findAll({
        where: {
          no_headphone: noHead
        }
      })
      .then(data => {
        const notelp = data[0].no_headphone;
        if (notelp == noHead) {
          res.json({
            status: 401,
            massage: "No. Telepon Sudah Terdaftar",
            data: false
          });
        } else {
          res.json({
            status: 200,
            massage: "Success Register " + req.query.no_headphone,
            data: true
          });
        }
      });
  } catch (err) {
    console.log(err);
  }
});
router.post("/register/account", async (req, res) => {
  try {
    const users = await usersModel
      .create({
        nama: req.body.nama,
        no_headphone: req.body.no_headphone,
        alamat: req.body.alamat,
        role: req.body.role
      })
      .then(datas => {
        res.json({
          status: 200,
          massage: "Success Create New Account",
          data: datas
        });
      });
  } catch (error) {
    res.json({
      status: 401,
      massage: "Failed Create New Account",
      data: error
    });
  }
});
module.exports = router;
