'use strict';

var faker = require("faker");
faker.locale = "en_IND";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transactionRows = await queryInterface.sequelize.query(`SELECT no_nota FROM transactions;`);
    const priceRows = await queryInterface.sequelize.query(`SELECT id_harga FROM prices;`);

    var transactions = [];
    transactionRows[0].forEach(res => transactions.push(res.no_nota));

    var prices = [];
    priceRows[0].forEach(res => prices.push(res.id_harga));

    var data = [];
    for (let i = 1; i <= 100; i++) {
      data.push({
        bobot: faker.commerce.price(1, 10),
        status: faker.random.boolean(),
        no_nota: faker.random.arrayElement(transactions),
        id_harga: faker.random.arrayElement(prices)
      });
    }

    return queryInterface.bulkInsert('detail_transactions', data, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkDelete('detail_transactions', null, {});
  }
};
