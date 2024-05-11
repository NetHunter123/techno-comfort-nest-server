'use strict';

const producersList = [
  'LG',
  'Asus',
  'Samsung',
  'Xiaomi',
  'Acer',
  'Apple',
  'Redmi',
  'HP',
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    console.log('1');
    return queryInterface.bulkInsert(
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
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Producers', null, {});
  },
};
