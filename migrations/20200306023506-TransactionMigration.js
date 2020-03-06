'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            "transactions",
            {
                no_nota: {
                    type: Sequelize.STRING,
                    primaryKey: true,
                },
                total_tagihan: {
                    type: Sequelize.INTEGER
                },
                pembayaran: {
                    type: Sequelize.INTEGER
                },
                status_pembayaran: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: false,
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
            },
            {
                timestamps: process.env.TIMESTAMPS, freezeTableName: true
            }
        );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('transactions');
  }
};
