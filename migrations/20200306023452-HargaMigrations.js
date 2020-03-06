'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("prices", {
            id_harga: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            }, kelas: {
                type: Sequelize.STRING
            }, tipe: {
                type: Sequelize.STRING
            }, harga: {
                type: Sequelize.INTEGER
            },
        }, {
            freezeTableName: true
        })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('prices');
  }
};
