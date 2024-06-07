'use strict';

const producersList = [
  'LG',
  'Asus',
  'MSI',
  'Samsung',
  'Xiaomi',
  'Acer',
  'Apple',
  'Redmi',
  'HP',
  'Dell',
  'iPhone',
  'Vestfrost',
  'Sony',
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
\\    return queryInterface.bulkInsert(
      'Producers',
      producersList.map((producer) => ({
        producer_name: producer,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {
        ignoreDuplicates: true,
        // updateOnDuplicate: ['category_name', 'category_value'],
      },
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Producers', null, {});
  },
};
