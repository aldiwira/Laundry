"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("prices", {
            idHarga: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            kelas: {
                type: Sequelize.STRING
            },
            tipe: {
                type: Sequelize.STRING
            },
            harga: {
                type: Sequelize.INTEGER
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
        }, {
            timestamps: process.env.TIMESTAMPS,
            freezeTableName: true
        });
    },

    down: (queryInterface, _) => {
        return queryInterface.dropTable("users");
    }
};
