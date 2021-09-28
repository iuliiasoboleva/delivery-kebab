const { DataTypes, Model } = require('sequelize');

class Products extends Model {}

module.exports = (sequelize) => {
  Products.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.STRING,
      },
      discount: {
        type: DataTypes.STRING,
      },
      coords: {
        type: DataTypes.INTEGER,
      },
      address: {
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
          onUpdate: 'cascade',
          onCreate: 'cascade',
        },
      },
      buyerId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id',
          onUpdate: 'cascade',
          onCreate: 'cascade',
        },
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: 'new',
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { sequelize, freezeTableName: true, modelName: 'products' },
  );
  return Products;
};
