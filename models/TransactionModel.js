const Sequelize = require("sequelize");
const sequelize = require("../config/db");
const dotenv = require("dotenv/config");
module.exports = sequelize.define(
  "transactions",
  {
    no_nota: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    total_tagihan: {
      type: Sequelize.INTEGER
    },
    pembayaran: {
      type: Sequelize.INTEGER
    },
    status_pembayaran: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    id_user: {
      type: Sequelize.STRING,
      references: {
        model: "users",
        key: "id_user"
      }
    },
    createdAt: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false
    },
    updatedAt: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false
    }
  },
  {
    timestamps: process.env.TIMESTAMPS,
    freezeTableName: true
  }
);
