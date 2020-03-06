'use strict';
module.exports = (sequelize, DataTypes) => {
    const DetailTransactionModel = sequelize.define("detail_transactions", {
        id_detail_transaction: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        bobot: {
            type: DataTypes.INTEGER
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        createdAt: {
            type: "TIMESTAMP",
            defaultValue: DataTypes.literal("CURRENT_TIMESTAMP"),
            allowNull: false
        },
        updatedAt: {
            type: "TIMESTAMP",
            defaultValue: DataTypes.literal("CURRENT_TIMESTAMP"),
            allowNull: false
        }
    }, {
        timestamps: process.env.TIMESTAMPS,
        freezeTableName: true
    });

    DetailTransactionModel.associate = function (models) {
        // associations can be defined here
        DetailTransactionModel.hasMany(models.UsersModel, { as: 'id_user' })
        DetailTransactionModel.hasMany(models.PriceModel, { as: 'id_harga' })
        DetailTransactionModel.hasMany(models.TransactionModel, { as: 'no_nota' })
    };
    return DetailTransactionModel;
};