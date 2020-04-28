const express = require("express");
const userController = require("../controller/UsersController.js");

const router = express.Router();
router.post("/register", userController.processRegisterPhone);
router.post("/register/account", userController.processRegisterAccount);
router.post("/login", userController.processFetchUserDatas);

module.exports = router;
