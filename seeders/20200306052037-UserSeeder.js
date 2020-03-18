'use strict';

var faker = require("faker");
faker.locale = "en_IND";

module.exports = {
  up: (queryInterface, Sequelize) => {
        var data = [];

        for (let i = 1; i <= 5; i++) {
            data.push({
                id_user: faker.random.uuid(),
                nama: faker.name.findName(),
                no_handphone: faker.phone.phoneNumber(),
                password: faker.internet.password(255, "password "),
                alamat: faker.address.secondaryAddress(),
                role: 0
            });
        }

        return queryInterface.bulkInsert('users', data, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  }
};
