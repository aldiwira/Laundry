'use strict';

var faker = require("faker");
faker.locale = "en_IND";

module.exports = {
  up: (queryInterface, Sequelize) => {
        var data = [];

        for (let i = 1; i <= 10; i++) {
            data.push({
                no_nota: faker.random.alphaNumeric(),
                total_tagihan: faker.commerce.price(),
                pembayaran: faker.finance.amount(),
                status_pembayaran: faker.random.boolean()
            });
        }

        return queryInterface.bulkInsert('users', data, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example: */
      return queryInterface.bulkDelete('transactions', null, {});
  }
};
