'use strict';

import { STRING, INTEGER, BOOLEAN, literal } from "sequelize";
import { define } from "../config/db";

module.exports = define(
    "transactions", {
        noNota: {
            type: STRING,
            primaryKey: true
        },
        totalTagihan: {
            type: INTEGER
        },
        pembayaran: {
            type: INTEGER
        },
        statusPembayaran: {
            type: BOOLEAN,
            defaultValue: false
        },
        statusPengerjaan: {
            type: STRING,
            defaultValue: "MENUNGGU"
        },
        methodeDelivery: {
            type: STRING,
            allowNull: false
        },
        idUser: {
            type: STRING,
            references: {
                model: "users",
                key: "id_user"
            }
        },
        createdAt: {
            type: "TIMESTAMP",
            defaultValue: literal("CURRENT_TIMESTAMP"),
            allowNull: false
        },
        updatedAt: {
            type: "TIMESTAMP",
            defaultValue: literal("CURRENT_TIMESTAMP"),
            allowNull: false
        }
    },
    {
        timestamps: process.env.TIMESTAMPS,
        freezeTableName: true
    }
);
