const express = require("express");
const apps = express();
const bodyparse = require("body-parser");
const conectionData = require("./config/db");
const dotenv = require("dotenv/config");
const usersRoute = require("./routes/usersRouter");

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
apps.get("/", (req, res) => res.send("Welcome Laundry"));

//endpoint users
apps.use("/user", usersRoute);

//listen port
apps.listen(process.env.PORT_RUN, () => {
  console.log("http://" + process.env.DB_HOST + ":" + process.env.PORT_RUN);
});
