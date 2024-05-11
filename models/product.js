'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Producer, {
        foreignKey: 'producerId', // Назва поля в таблиці Product, яке посилається на виробника
        as: 'producer', // Назва асоціації
      });

      Product.belongsTo(models.Category, {
        foreignKey: 'categoryId', // Назва поля в таблиці Product, яке посилається на виробника
        as: 'CategoryProducts', // Назва асоціації
      });
    }
  }
  Product.init(
    {
      product_name: DataTypes.STRING,
      vendor_code: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      product_characteristics: DataTypes.TEXT,
      images: DataTypes.TEXT,
      bestseller: DataTypes.BOOLEAN,
      new: DataTypes.BOOLEAN,
      price: DataTypes.INTEGER,
      in_stock: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Product',
    },
  );
  return Product;
};
