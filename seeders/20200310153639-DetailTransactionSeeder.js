'use strict';

const faker = require("faker");

async function up (queryInterface, _) {
    faker.locale = "id_ID";
    const transactionRows = await queryInterface.sequelize.query(`SELECT noNota FROM transactions;`);
    const priceRows = await queryInterface.sequelize.query(`SELECT idHarga FROM prices;`);

    let transactions = [];
    transactionRows[0].forEach(res => transactions.push(res.no_nota));

    let prices = [];
    priceRows[0].forEach(res => prices.push(res.id_harga));

    let bulkQuery = [];
    for (let i = 1; i <= 100; i++) {
        bulkQuery.push({
            bobot: faker.commerce.price(1, 10),
            status: faker.random.boolean(),
            noNota: faker.random.arrayElement(transactions),
            idHarga: faker.random.arrayElement(prices)
        });
    }

    return queryInterface.bulkInsert('detail_transactions', bulkQuery, {});
}

function down (queryInterface, _) {
    return queryInterface.bulkDelete('detail_transactions', null, {});
}

module.exports = { up, down };
