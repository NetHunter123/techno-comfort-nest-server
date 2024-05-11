'use strict';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Product, {
        foreignKey: 'categoryId', // Назва поля в таблиці Product, яке посилається на категорію
        as: 'CategoryProducts', // Назва асоціації
      });
    }
  }
  Category.init(
    {
      category_name: DataTypes.STRING,
      category_value: DataTypes.STRING,
      description: DataTypes.TEXT,
      filters: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Category',
    },
  );
  return Category;
};
