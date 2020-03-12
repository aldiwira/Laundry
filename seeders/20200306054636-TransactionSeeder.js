'use strict';

var faker = require("faker");
faker.locale = "en_IND";

module.exports = {
  up: async (queryInterface, Sequelize) => {
      const result = await queryInterface.sequelize.query(`SELECT id_user FROM users;`);

      var users = [];
      result[0].forEach(res => users.push(res.id_user));

      var data = [];
      for (let i = 1; i <= 25; i++) {
          const tagihan = faker.commerce.price(5000, 100000);
          const status = faker.random.boolean();
          const pembayaran = (status) ? tagihan : faker.commerce.price(5000, tagihan);

          data.push({
              no_nota: faker.internet.password(10),
              total_tagihan: tagihan,
              pembayaran: pembayaran,
              status_pembayaran: status,
              id_user: faker.random.arrayElement(users)
          });
      }

      return queryInterface.bulkInsert('transactions', data, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example: */
      return queryInterface.bulkDelete('transactions', null, {});
  }
};
