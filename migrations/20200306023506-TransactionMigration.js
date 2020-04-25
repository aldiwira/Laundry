'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("transactions", {
            noNota: {
                type: Sequelize.STRING,
                primaryKey: true,
            },
            totalTagihan: {
                type: Sequelize.INTEGER
            },
            pembayaran: {
                type: Sequelize.INTEGER
            },
            statusPembayaran: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            statusPengerjaan: {
                type: Sequelize.STRING,
                defaultValue: "ON PROGGRESS",
            },
            methodeDelivery: {
                type: Sequelize.STRING,
            },
            idUser: {
                type: Sequelize.STRING,
                references: {
                    model: 'users',
                    key: 'idUser'
                }
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
            timestamps: process.env.TIMESTAMPS, freezeTableName: true
        });
    },

    down: (queryInterface, _) => {
        return queryInterface.dropTable("users");
    }
};
