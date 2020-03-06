'use strict';
module.exports = (sequelize, DataTypes) => {
    const PriceModel = sequelize.define("prices", {
        id_harga: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, kelas: {
            type: DataTypes.STRING
        }, tipe: {
            type: DataTypes.STRING
        }, harga: {
            type: DataTypes.INTEGER
        },
    }, {
        freezeTableName: true
    });

    return PriceModel;
};