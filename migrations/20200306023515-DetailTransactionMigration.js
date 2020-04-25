'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("detail_transactions", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            bobot: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
            },
            status: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            noNota: {
                type: Sequelize.STRING,
                references: {
                    model: 'transactions',
                    key: 'noNota'
                }
            },
            idHarga: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'prices',
                    key: 'idHarga'
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
