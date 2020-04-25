'use strict';

const faker = require("faker");

function up (queryInterface, _) {
    const bulkQuery = [];
    const data = {
        'REGULER': ['CUCI SELIMUT', 'CUCI BIASA', 'RAPI BERSIH'],
        'EXPRESS': ['DUA JAM', 'SEHARI']
    };

    for (const key in data) {
        data[key].forEach(res => bulkQuery.push({
            kelas: key,
            tipe: res,
            harga: faker.commerce.price(5000, 20000)
        }))
    }

    return queryInterface.bulkInsert('prices', bulkQuery, {});
}

function down (queryInterface, _) {
    return queryInterface.bulkDelete('prices', null, {});
}

module.exports = { up, down };