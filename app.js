const express = require("express");
const apps = express();
const bodyparse = require("body-parser");
const conectionData = require("./config/db");
const dotenv = require("dotenv/config");
const usersRoute = require("./routes/UsersRouter");
const transactionRoute = require("./routes/TransactionRouter");
const priceRoute = require("./routes/PriceRouter");

//midleware unch
apps.use(express.json());
apps.use(express.urlencoded({ extended: true }));
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
apps.use(bodyparse.json());
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
apps.use("/price", priceRoute),
  //listen port
  apps.listen(process.env.PORT_RUN, () => {
    console.log("http://" + process.env.DB_HOST + ":" + process.env.PORT_RUN);
  });
