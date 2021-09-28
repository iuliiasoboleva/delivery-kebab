const { DataTypes, Model } = require('sequelize');

class Users extends Model {}

module.exports = (sequelize) => {
  Users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      coords: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      role: {
        type: DataTypes.INTEGER,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { sequelize, freezeTableName: true, modelName: 'users' },
  );
  return Users;
};
