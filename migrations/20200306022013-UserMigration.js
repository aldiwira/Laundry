"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "users",
      {
        id_user: {
          type: Sequelize.STRING,
          primaryKey: true
        },
        nama: {
          type: Sequelize.STRING
        },
        no_handphone: {
          type: Sequelize.STRING
        },
        password: {
          type: Sequelize.STRING
        },
        alamat: {
          type: Sequelize.STRING
        },
        role: {
          type: Sequelize.SMALLINT
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
        timestamps: process.env.TIMESTAMPS,
        freezeTableName: true
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  }
};
