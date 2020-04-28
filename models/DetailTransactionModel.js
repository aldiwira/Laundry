"use strict";

const sequelize = require('sequelize');
const db = require('../config/db');

module.exports = db.define(
    "detail_transactions", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    bobot: {
        type: sequelize.INTEGER
    },
    status: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    noNota: {
        type: sequelize.STRING,
        references: {
            model: "transactions",
            key: "no_nota"
        }
    },
    idHarga: {
        type: sequelize.INTEGER,
        references: {
            model: "prices",
            key: "id_harga"
        }
    },
    createdAt: {
        type: "TIMESTAMP",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
    },
    updatedAt: {
        type: "TIMESTAMP",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
    }
}, {
    timestamps: process.env.TIMESTAMPS,
    freezeTableName: true
}
);
