"use strict";

module.exports = {
    up: (queryInterface, dataType) => {
        return queryInterface.createTable("users", {
            idUser: {
                type: dataType.STRING,
                primaryKey: true
            },
            nama: {
                type: dataType.STRING
            },
            noHp: {
                type: dataType.STRING
            },
            password: {
                type: dataType.STRING
            },
            alamat: {
                type: dataType.TEXT
            },
            peran: {
                type: dataType.SMALLINT,
                defaultValue: 0
            },
            createdAt: {
                type: "TIMESTAMP",
                defaultValue: dataType.literal("CURRENT_TIMESTAMP"),
                allowNull: false
            },
            updatedAt: {
                type: "TIMESTAMP",
                defaultValue: dataType.literal("CURRENT_TIMESTAMP"),
                allowNull: false
            }
        }, {
            timestamps: process.env.TIMESTAMPS,
            freezeTableName: true
        });
    },

    down: (queryInterface, _) => {
        return queryInterface.dropTable("users");
    }
};