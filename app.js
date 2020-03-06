const express = require("express");
const apps = express();
const bodyParse = require("body-parser");
const dotenv = require("dotenv/config");
const con = require("./config/db");
const usersRoute = require("./routes/usersRouter");

apps.use(bodyParse.json());
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
apps.get("/", (req, res) => res.send("Welcome Laundry"));
apps.use("/users", usersRoute);
con
  .authenticate()
  .then(() => {
    console.log("Connection established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  })
  .finally();
apps.listen(process.env.PORT_RUN, () => {
  console.log("http://" + process.env.DB_HOST + ":" + process.env.PORT_RUN);
});
