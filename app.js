const express = require("express");
const apps = express();
const bodyParse = require("body-parser");
const dotenv = require("dotenv/config");
const usersRoute = require("./routes/usersRouter");

apps.get("/", (req, res) => res.send("Welcome Laundry"));
apps.use("/users", usersRoute);
apps.listen(process.env.PORT_RUN, () => {
  console.log("http://" + process.env.DB_HOST + ":" + process.env.PORT_RUN);
});
