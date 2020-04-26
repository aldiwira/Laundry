"use strict";

const sequelize = require('sequelize');
const db = require('../config/db');

module.exports = db.define("users", {
    idUser: {
        type: sequelize.STRING,
        primaryKey: true
    },
    nama: {
        type: sequelize.STRING
    },
    noHp: {
        type: sequelize.STRING
    },
    password: {
        type: sequelize.STRING
    },
    alamat: {
        type: sequelize.STRING
    },
    peran: {
        type: sequelize.SMALLINT,
        defaultValue: 0
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