'use strict';
module.exports = (DataTypes, DataTypes) => {
    const TransactionModel = DataTypes.define("transactions", {
        no_nota: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        total_tagihan: {
            type: DataTypes.INTEGER
        },
        pembayaran: {
            type: DataTypes.INTEGER
        },
        status_pembayaran: {
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
        timestamps: process.env.TIMESTAMPS, freezeTableName: true
    });

    return TransactionModel;
};