'use strict';

var faker = require("faker");
faker.locale = "en_IND";

module.exports = {
  up: (queryInterface, Sequelize) => {
        var data = [];

        for (let i = 1; i <= 20; i++) {
            data.push({
                kelas: faker.commerce.product(),
                tipe: faker.commerce.productName(),
                harga: faker.commerce.price()
            });
        }

        return queryInterface.bulkInsert('users', data, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example: */
      return queryInterface.bulkDelete('prices', null, {});
  }
};
