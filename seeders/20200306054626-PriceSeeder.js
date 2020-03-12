'use strict';

var faker = require("faker");
faker.locale = "en_IND";

module.exports = {
  up: (queryInterface, Sequelize) => {
        var data = [];

        for (let i = 1; i <= 5; i++) {
            data.push({
                kelas: faker.random.arrayElement(['REGULER', 'EXPRESS']),
                tipe: faker.random.arrayElement(['CUCI SELIMUT', 'CUCI BIASA', 'DUA JAM', 'SEHARI', 'RAPI BERSIH']),
                harga: faker.commerce.price(5000, 20000)
            });
        }

        return queryInterface.bulkInsert('prices', data, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example: */
      return queryInterface.bulkDelete('prices', null, {});
  }
};
