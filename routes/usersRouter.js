const express = require("express");

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

module.exports = router;
