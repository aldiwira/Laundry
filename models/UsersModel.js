'use strict';
module.exports = (sequelize, DataTypes) => {
    const UsersModel = sequelize.define("users",{
        id_user: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        nama: {
            type: DataTypes.STRING
        },
        no_headphone: {
            type: DataTypes.STRING
        },
        alamat: {
            type: DataTypes.STRING
        },
        role: {
            type: DataTypes.SMALLINT
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
    },{ 
        timestamps: process.env.TIMESTAMPS, 
        freezeTableName: true 
    });

    return UsersModel;
};
