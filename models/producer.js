'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Producer.hasMany(models.Product, {
        foreignKey: 'producerId', // Назва поля в таблиці Product, яке посилається на виробника
        as: 'ProducerProducts', // Назва асоціації
      });
    }
  }
  Producer.init(
    {
      producer_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Producer',
    },
  );
  return Producer;
};
