'use strict';

const sequelize = require('sequelize');
const db = require('../config/db');

module.exports = db.define("prices", {
    idHarga: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    kelas: {
        type: sequelize.STRING
    },
    tipe: {
        type: sequelize.STRING
    },
    harga: {
        type: sequelize.INTEGER
    }
},
    {
        freezeTableName: true
    }
);