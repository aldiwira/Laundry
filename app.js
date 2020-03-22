const express = require("express");
const apps = express();
const bodyparse = require("body-parser");
const conectionData = require("./config/db");
const dotenv = require("dotenv/config");
const usersRoute = require("./routes/UsersRouter.js");
const transactionRoute = require("./routes/TransactionRouter.js");
const priceRoute = require("./routes/PriceRouter.js");
const statusRoute = require('./routes/StatusRoute');

// midleware
apps.use(express.json());
apps.use(express.urlencoded({ extended: true }));
apps.use(bodyparse.json());
apps.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  // allow preflight
  if (req.method === "OPTIONS") {
    res.send(200);
  } else {
    next();
  }
});
//welcome
apps.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    Message: "Welcome To DeLaundry"
  });
});
//endpoint users
apps.use("/user", usersRoute);
apps.use("/order", transactionRoute);
apps.use("/status", statusRoute);
apps.use("/prices", priceRoute);
//listen port
apps.listen(process.env.PORT_RUN, () => {
  console.log("http://" + process.env.DB_HOST + ":" + process.env.PORT_RUN);
});
