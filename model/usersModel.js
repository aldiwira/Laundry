const Sequelize = require("sequelize");
const sequelize = require("../config/db");
const dotenv = require("dotenv/config");
const users = sequelize.define(
  "users",
  {
    id_user: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nama: {
      type: Sequelize.STRING
    },
    no_headphone: {
      type: Sequelize.STRING
    },
    alamat: {
      type: Sequelize.STRING
    },
    role: {
      type: Sequelize.SMALLINT
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
  { timestamps: process.env.TIMESTAMPS, freezeTableName: true }
);

module.exports = users;
