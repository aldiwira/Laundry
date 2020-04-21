"use strict";
const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const DetailTransactionModel = sequelize.define(
  "detail_transactions",
  {
    id_detail_transaction: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    bobot: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    no_nota: {
      type: Sequelize.STRING,
      references: {
        model: "transactions",
        key: "no_nota"
      }
    },
    id_harga: {
      type: Sequelize.INTEGER,
      references: {
        model: "prices",
        key: "id_harga"
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

module.exports = DetailTransactionModel;
