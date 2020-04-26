const Sequelize = require("sequelize");
const env = process.env.NODE_ENV;
const config = require("./config.json")[env];
const db = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db
  .authenticate()
  .then(() => console.log("Connection established successfully.") )
  .catch(err => console.error("Unable to connect to the database:", err))
  .finally();
  
module.exports = db;
