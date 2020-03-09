"use strict";
const Sequelize = require("sequelize");
const sequelize = require("../config/db");
const dotenv = require("dotenv/config");

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
