const express = require("express");
const router = express.Router();
const userController = require("../controller/usersController.js");

router.post("/register", userController.processRegisterPhone);
router.post("/register/account", userController.processRegisterAccount);
router.post("/login", userController.processFetchUserDatas);

module.exports = router;
