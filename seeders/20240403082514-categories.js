'use strict';
const { faker } = require('@faker-js/faker');

const categoriesList = [
  {
    title: "Комп'ютери",
    value: 'computers',
    desc: "Смартфони є найбільш популярним видом гаджетів на сьогоднішній день. Один невеликий пристрій поєднує в собі телефон, фотоапарат, персональний міні-комп'ютер, приставку, плеєр, калькулятор і багато іншого. Секрет такої популярності криється в багатофункціональності і саме цього спочатку прагнули творці перших смартфонів. На момент появи перших моделей смартфонів вже існували персональні комп'ютери і стільникові телефони, так що ідея полягала лише в тому, щоб об'єднати ці два види пристроїв, створивши 2 в 1. Перша така спроба ознаменувалася виходом IBM Simon в 1992 році. На сьогоднішній день цей гаджет можна назвати примітивним, але для того часу це був справжній прорив, за який люди викладали по 900 $ за одиницю. Не будемо вдаватися в детальні технічні характеристики і можливості цього гаджета і відзначимо лише те, що з тих пір почалася стрімка еволюція портативних гаджетів, яка з роками лише нарощує темп. Окремо варто згадати компанію Apple, яка на початку 2000- х представила світу свій перший iPhone. Почалася стрімка гонка між декількома компаніями-гігантами, яка триває досі. Далі ми розповімо про топові бренди, що займають лідируючі позиції на сучасному ринку смартфонів.",
    // filters: [{ key: 'display', values: [13, 14, 15, 16, 16.6, 17] }],
  },
  { title: 'Смартфони', value: 'smartphones' },
  { title: 'Холодильники', value: 'refrigerators' },
  { title: 'Телевізори', value: 'televisions' },
  { title: 'Монітори', value: 'monitors' },
  { title: 'Ноутбуки', value: 'laptops' },
  { title: 'Фото-техніка', value: 'photo_equip' },
  { title: 'Мікрохвильові печі', value: 'microwaves' },
  { title: 'Планшети', value: 'tablets' },
];

/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    console.log('2');
    return queryInterface.bulkInsert(
      'Categories',
      categoriesList.map((category) => ({
        category_name: category.title,
        category_value: category.value,
        description: category.desc || faker.lorem.sentence(16),
        filters: JSON.stringify([
          { field: 'category1', fieldKey: 'category1123', values: [1, 2, 3] },
          { field: 'category2', fieldKey: 'category11234', values: [1, 2, 3] },
          { field: 'category3', fieldKey: 'category11233', values: [1, 2, 3] },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {
        // ignoreDuplicates: true,
        updateOnDuplicate: ['filters', 'description'],
      },
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Categories', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
