const express = require("express");
const apps = express();
const bodyParse = require("body-parser");
const dotenv = require("dotenv/config");
const con = require("./config/db");
const usersRoute = require("./routes/usersRouter");

apps.use(bodyParse.json());
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
