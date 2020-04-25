'use strict';

const faker = require("faker");

async function up (queryInterface, _) {
    faker.locale = "id_ID";

    const bulkQuery = [];
    const users = [];
    const result = await queryInterface.sequelize.query(`SELECT idUser FROM users;`);
    result[0].forEach(res => users.push(res.id_user));

    for (let i = 1; i <= 50; i++) {
        const tagihan = faker.commerce.price(5000, 100000);
        const status = faker.random.boolean();
        const pembayaran = (status) ? tagihan : faker.commerce.price(5000, tagihan);

        bulkQuery.push({
            noNota: faker.internet.password(10),
            totalTagihan: tagihan,
            pembayaran: pembayaran,
            statusPembayaran: status,
            statusPengerjaan: faker.random.arrayElement(['MENUNGGU', 'SUDAH DIAMBIL', 'ON PROGGRESS', 'DONE']),
            methodeDelivery: faker.random.arrayElement(['ANTAR-JEMPUT', 'DATANG KE TOKO']),
            idUser: faker.random.arrayElement(users),
        });
    }

    return queryInterface.bulkInsert('transactions', bulkQuery, {});
}

function down (queryInterface, _) {
    return queryInterface.bulkDelete('transactions', null, {});
}

module.exports = { up, down };
