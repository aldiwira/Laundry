const Sequelize = require("sequelize");
const sequelize = require("../config/db");
const Price = sequelize.define(
  "prices",
  {
    id_harga: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    kelas: {
      type: Sequelize.STRING
    },
    tipe: {
      type: Sequelize.STRING
    },
    harga: {
      type: Sequelize.INTEGER
    }
  },
  {
    freezeTableName: true
  }
);

module.exports = Price;
