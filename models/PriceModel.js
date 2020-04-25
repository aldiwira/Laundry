'use strict';

import { INTEGER, STRING } from "sequelize";
import { define } from "../config/db";

module.exports = define("prices", {
    idHarga: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    kelas: {
        type: STRING
    },
    tipe: {
        type: STRING
    },
    harga: {
        type: INTEGER
    }
},
    {
        freezeTableName: true
    }
);