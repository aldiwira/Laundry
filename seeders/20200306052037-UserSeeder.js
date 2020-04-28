'use strict';

const faker = require("faker");
const bcrypt = require("bcrypt");
const uniqid = require("uniqid");

function up (queryInterface, _) {
    faker.locale = "id_ID";
    let bulkQuery = [];
    for (let i = 1; i <= 5; i++) {
        const alamat = faker.address.streetName() + ", " + faker.address.city();
        bulkQuery.push({
            idUser: uniqid.time(),
            nama: faker.name.findName(),
            noHp: faker.phone.phoneNumber(),
            password: bcrypt.hashSync("password", 10),
            alamat: alamat,
        });
    }

    return queryInterface.bulkInsert('users', bulkQuery, {});
}

function down (queryInterface, _) {
    return queryInterface.bulkDelete('users', null, {});
}

module.exports = { up, down };