"use strict";

import { INTEGER, BOOLEAN, STRING, literal } from "sequelize";
import { define } from "../config/db";

module.exports = define(
    "detail_transactions",
    {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        bobot: {
            type: INTEGER
        },
        status: {
            type: BOOLEAN,
            defaultValue: false
        },
        noNota: {
            type: STRING,
            references: {
                model: "transactions",
                key: "no_nota"
            }
        },
        idHarga: {
            type: INTEGER,
            references: {
                model: "prices",
                key: "id_harga"
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
