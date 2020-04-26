'use strict';

const sequelize = require('sequelize');
const db = require('../config/db');

module.exports = db.define(
    "transactions", {
        noNota: {
            type: sequelize.STRING,
            primaryKey: true
        },
        totalTagihan: {
            type: sequelize.INTEGER
        },
        pembayaran: {
            type: sequelize.INTEGER
        },
        statusPembayaran: {
            type: sequelize.BOOLEAN,
            defaultValue: false
        },
        statusPengerjaan: {
            type: sequelize.STRING,
            defaultValue: "MENUNGGU"
        },
        methodeDelivery: {
            type: sequelize.STRING,
            allowNull: false
        },
        idUser: {
            type: sequelize.STRING,
            references: {
                model: "users",
                key: "id_user"
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
    },
    {
        timestamps: process.env.TIMESTAMPS,
        freezeTableName: true
    }
);
