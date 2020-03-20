'use strict';

const faker = require("faker");
const bcrypt = require("bcrypt");
faker.locale = "en_IND";

module.exports = {
  up: (queryInterface, _) => {
        var data = [];

        for (let i = 1; i <= 5; i++) {
            data.push({
                id_user: faker.random.uuid(),
                nama: faker.name.findName(),
                no_handphone: faker.phone.phoneNumber(),
                password: bcrypt.hashSync("password", 10),
                alamat: faker.address.secondaryAddress(),
                role: 0
            });
        }

        return queryInterface.bulkInsert('users', data, {});
  },

  down: (queryInterface, _) => {
      return queryInterface.bulkDelete('users', null, {});
  }
};
