"use strict";

import { STRING, SMALLINT, literal } from "sequelize";
import { define } from "../config/db";

module.exports = define("users", {
    idUser: {
        type: STRING,
        primaryKey: true
    },
    nama: {
        type: STRING
    },
    noHp: {
        type: STRING
    },
    password: {
        type: STRING
    },
    alamat: {
        type: STRING
    },
    peran: {
        type: SMALLINT,
        defaultValue: 0
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