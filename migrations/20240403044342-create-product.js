'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      producerId: {
        // Додаємо поле для зовнішнього ключа
        type: Sequelize.INTEGER,
        allowNull: false, // Поле не може бути порожнім
        references: {
          model: 'Producers', // Таблиця, на яку посилається зовнішній ключ
          key: 'id', // Поле, на яке посилається зовнішній ключ
        },
        onUpdate: 'CASCADE', // Оновлюємо значення зовнішнього ключа при оновленні батьківського запису
        onDelete: 'CASCADE', // Встановлюємо значення зовнішнього ключа в NULL при видаленні батьківського запису
      },
      categoryId: {
        // Додаємо поле для зовнішнього ключа
        type: Sequelize.INTEGER,
        allowNull: false, // Поле не може бути порожнім
        references: {
          model: 'Categories', // Таблиця, на яку посилається зовнішній ключ
          key: 'id', // Поле, на яке посилається зовнішній ключ
        },
        onUpdate: 'CASCADE', // Оновлюємо значення зовнішнього ключа при оновленні батьківського запису
        onDelete: 'CASCADE', // Встановлюємо значення зовнішнього ключа в NULL при видаленні батьківського запису
      },

      product_name: {
        unique: true,
        type: Sequelize.STRING,
      },

      vendor_code: {
        unique: true,
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.TEXT,
      },
      product_characteristics: {
        type: Sequelize.JSON,
      },
      images: {
        type: Sequelize.TEXT,
      },
      bestseller: {
        type: Sequelize.BOOLEAN,
      },
      new: {
        type: Sequelize.BOOLEAN,
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
      },
      in_stock: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  },
};
