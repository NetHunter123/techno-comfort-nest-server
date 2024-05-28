'use strict';
const { faker } = require('@faker-js/faker');
// const { Category } = require('../src/categories/entities/category.entity');
// const { Category } = require('../src/categories/entities/category.entity');
/** @type {import("sequelize-cli").Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    console.log('3');

    const productsStatic = [
      //Десктопи
      {
        product_name: 'HP Pavilion Gaming Desktop',
        description:
          "HP Pavilion Gaming Desktop - це потужний настільний комп'ютер для геймерів з вражаючою графікою і високою продуктивністю. Завдяки процесору Intel Core i5 і відеокарті NVIDIA GeForce GTX 1650, він готовий до найвимогливіших ігор.",

        producerId: 8,
        categoryId: 1,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Процесор',
            fieldKey: 'processor',
            value: 'Intel Core i5-11400F',
          },
          {
            field: "Оперативна пам'ять",
            fieldKey: 'ram',
            value: '8GB',
          },
          {
            field: "Тип пам'яті",
            fieldKey: 'ram_type',
            value: 'DDR4',
          },
          {
            field: 'Накопичувач',
            fieldKey: 'storage',
            value: '512GB',
          },
          {
            field: 'Тип накопичувача',
            fieldKey: 'storage_type',
            value: 'SSD',
          },
          {
            field: 'Відеокарта',
            fieldKey: 'video_card',
            value: 'NVIDIA GeForce GTX 1650',
          },
          {
            field: 'Порти',
            fieldKey: 'ports',
            value: '4x USB-A, 1x USB-C, 1x HDMI, 1x DisplayPort',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Dell XPS Tower Special Edition',
        description:
          "Dell XPS Tower Special Edition - це високопродуктивний настільний комп'ютер з елегантним дизайном та потужними характеристиками. Завдяки процесору Intel Core i7 і відеокарті NVIDIA GeForce GTX 1660 Ti, він ідеально підходить для роботи та гри.",

        producerId: 10,
        categoryId: 1,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Процесор',
            fieldKey: 'processor',
            value: 'Intel Core i7-11700F',
          },
          {
            field: "Оперативна пам'ять",
            fieldKey: 'ram',
            value: '16GB',
          },
          {
            field: "Тип пам'яті",
            fieldKey: 'ram_type',
            value: 'DDR4',
          },
          {
            field: 'Накопичувач',
            fieldKey: 'storage',
            value: '1TB',
          },
          {
            field: 'Тип накопичувача',
            fieldKey: 'storage_type',
            value: 'SSD',
          },
          {
            field: 'Відеокарта',
            fieldKey: 'video_card',
            value: 'NVIDIA GeForce GTX 1650',
          },
          {
            field: 'Порти',
            fieldKey: 'ports',
            value: '3x USB-A, 2x USB-C, 1x HDMI, 1x DisplayPort',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Acer Aspire TC',
        description:
          "Acer Aspire TC - це доступний настільний комп'ютер для щоденного використання з вражаючими можливостями. Завдяки процесору Intel Core i3 і великому обсягу оперативної пам'яті, він забезпечує швидку роботу та відмінну продуктивність.",

        producerId: 6,
        categoryId: 1,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Процесор',
            fieldKey: 'processor',
            value: 'Intel Core i3-10100',
          },
          {
            field: "Оперативна пам'ять",
            fieldKey: 'ram',
            value: '12GB',
          },
          {
            field: "Тип пам'яті",
            fieldKey: 'ram_type',
            value: 'DDR4',
          },
          {
            field: 'Накопичувач',
            fieldKey: 'storage',
            value: '256GB + 1TB',
          },
          {
            field: 'Тип накопичувача',
            fieldKey: 'storage_type',
            value: 'SSD + HDD',
          },
          {
            field: 'Відеокарта',
            fieldKey: 'video_card',
            value: 'Intel UHD Graphics 630',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        product_name: faker.lorem.sentence(2),
        description:
          "HP Pavilion Gaming Desktop - це потужний настільний комп'ютер для геймерів з вражаючою графікою і високою продуктивністю. Завдяки процесору Intel Core i5 і відеокарті NVIDIA GeForce GTX 1650, він готовий до найвимогливіших ігор.",

        producerId: 8,
        categoryId: 1,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Процесор',
            fieldKey: 'processor',
            value: 'Intel Core i5-11400F',
          },
          {
            field: "Оперативна пам'ять",
            fieldKey: 'ram',
            value: '8GB',
          },
          {
            field: "Тип пам'яті",
            fieldKey: 'ram_type',
            value: 'DDR4',
          },
          {
            field: 'Накопичувач',
            fieldKey: 'storage',
            value: '512GB',
          },
          {
            field: 'Тип накопичувача',
            fieldKey: 'storage_type',
            value: 'SSD',
          },
          {
            field: 'Відеокарта',
            fieldKey: 'video_card',
            value: 'NVIDIA GeForce GTX 1650',
          },
          {
            field: 'Порти',
            fieldKey: 'ports',
            value: '4x USB-A, 1x USB-C, 1x HDMI, 1x DisplayPort',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: faker.lorem.sentence(2),
        description:
          "HP Pavilion Gaming Desktop - це потужний настільний комп'ютер для геймерів з вражаючою графікою і високою продуктивністю. Завдяки процесору Intel Core i5 і відеокарті NVIDIA GeForce GTX 1650, він готовий до найвимогливіших ігор.",

        producerId: 8,
        categoryId: 1,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Процесор',
            fieldKey: 'processor',
            value: 'Intel Core i5-11400F',
          },
          {
            field: "Оперативна пам'ять",
            fieldKey: 'ram',
            value: '8GB',
          },
          {
            field: "Тип пам'яті",
            fieldKey: 'ram_type',
            value: 'DDR4',
          },
          {
            field: 'Накопичувач',
            fieldKey: 'storage',
            value: '512GB',
          },
          {
            field: 'Тип накопичувача',
            fieldKey: 'storage_type',
            value: 'SSD',
          },
          {
            field: 'Відеокарта',
            fieldKey: 'video_card',
            value: 'NVIDIA GeForce GTX 1650',
          },
          {
            field: 'Порти',
            fieldKey: 'ports',
            value: '4x USB-A, 1x USB-C, 1x HDMI, 1x DisplayPort',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: faker.lorem.sentence(2),
        description:
          "HP Pavilion Gaming Desktop - це потужний настільний комп'ютер для геймерів з вражаючою графікою і високою продуктивністю. Завдяки процесору Intel Core i5 і відеокарті NVIDIA GeForce GTX 1650, він готовий до найвимогливіших ігор.",

        producerId: 8,
        categoryId: 1,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Процесор',
            fieldKey: 'processor',
            value: 'Intel Core i5-11400F',
          },
          {
            field: "Оперативна пам'ять",
            fieldKey: 'ram',
            value: '8GB',
          },
          {
            field: "Тип пам'яті",
            fieldKey: 'ram_type',
            value: 'DDR4',
          },
          {
            field: 'Накопичувач',
            fieldKey: 'storage',
            value: '512GB',
          },
          {
            field: 'Тип накопичувача',
            fieldKey: 'storage_type',
            value: 'SSD',
          },
          {
            field: 'Відеокарта',
            fieldKey: 'video_card',
            value: 'NVIDIA GeForce GTX 1650',
          },
          {
            field: 'Порти',
            fieldKey: 'ports',
            value: '4x USB-A, 1x USB-C, 1x HDMI, 1x DisplayPort',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        product_name: faker.lorem.sentence(2),
        description:
          "HP Pavilion Gaming Desktop - це потужний настільний комп'ютер для геймерів з вражаючою графікою і високою продуктивністю. Завдяки процесору Intel Core i5 і відеокарті NVIDIA GeForce GTX 1650, він готовий до найвимогливіших ігор.",

        producerId: 8,
        categoryId: 1,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Процесор',
            fieldKey: 'processor',
            value: 'Intel Core i5-11400F',
          },
          {
            field: "Оперативна пам'ять",
            fieldKey: 'ram',
            value: '8GB',
          },
          {
            field: "Тип пам'яті",
            fieldKey: 'ram_type',
            value: 'DDR4',
          },
          {
            field: 'Накопичувач',
            fieldKey: 'storage',
            value: '512GB',
          },
          {
            field: 'Тип накопичувача',
            fieldKey: 'storage_type',
            value: 'SSD',
          },
          {
            field: 'Відеокарта',
            fieldKey: 'video_card',
            value: 'NVIDIA GeForce GTX 1650',
          },
          {
            field: 'Порти',
            fieldKey: 'ports',
            value: '4x USB-A, 1x USB-C, 1x HDMI, 1x DisplayPort',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: faker.lorem.sentence(2),
        description:
          "HP Pavilion Gaming Desktop - це потужний настільний комп'ютер для геймерів з вражаючою графікою і високою продуктивністю. Завдяки процесору Intel Core i5 і відеокарті NVIDIA GeForce GTX 1650, він готовий до найвимогливіших ігор.",

        producerId: 8,
        categoryId: 1,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Процесор',
            fieldKey: 'processor',
            value: 'Intel Core i5-11400F',
          },
          {
            field: "Оперативна пам'ять",
            fieldKey: 'ram',
            value: '8GB',
          },
          {
            field: "Тип пам'яті",
            fieldKey: 'ram_type',
            value: 'DDR4',
          },
          {
            field: 'Накопичувач',
            fieldKey: 'storage',
            value: '512GB',
          },
          {
            field: 'Тип накопичувача',
            fieldKey: 'storage_type',
            value: 'SSD',
          },
          {
            field: 'Відеокарта',
            fieldKey: 'video_card',
            value: 'NVIDIA GeForce GTX 1650',
          },
          {
            field: 'Порти',
            fieldKey: 'ports',
            value: '4x USB-A, 1x USB-C, 1x HDMI, 1x DisplayPort',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: faker.lorem.sentence(2),
        description:
          "HP Pavilion Gaming Desktop - це потужний настільний комп'ютер для геймерів з вражаючою графікою і високою продуктивністю. Завдяки процесору Intel Core i5 і відеокарті NVIDIA GeForce GTX 1650, він готовий до найвимогливіших ігор.",

        producerId: 8,
        categoryId: 1,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Процесор',
            fieldKey: 'processor',
            value: 'Intel Core i5-11400F',
          },
          {
            field: "Оперативна пам'ять",
            fieldKey: 'ram',
            value: '8GB',
          },
          {
            field: "Тип пам'яті",
            fieldKey: 'ram_type',
            value: 'DDR4',
          },
          {
            field: 'Накопичувач',
            fieldKey: 'storage',
            value: '512GB',
          },
          {
            field: 'Тип накопичувача',
            fieldKey: 'storage_type',
            value: 'SSD',
          },
          {
            field: 'Відеокарта',
            fieldKey: 'video_card',
            value: 'NVIDIA GeForce GTX 1650',
          },
          {
            field: 'Порти',
            fieldKey: 'ports',
            value: '4x USB-A, 1x USB-C, 1x HDMI, 1x DisplayPort',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        product_name: faker.lorem.sentence(2),
        description:
          "HP Pavilion Gaming Desktop - це потужний настільний комп'ютер для геймерів з вражаючою графікою і високою продуктивністю. Завдяки процесору Intel Core i5 і відеокарті NVIDIA GeForce GTX 1650, він готовий до найвимогливіших ігор.",

        producerId: 8,
        categoryId: 1,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Процесор',
            fieldKey: 'processor',
            value: 'Intel Core i5-11400F',
          },
          {
            field: "Оперативна пам'ять",
            fieldKey: 'ram',
            value: '8GB',
          },
          {
            field: "Тип пам'яті",
            fieldKey: 'ram_type',
            value: 'DDR4',
          },
          {
            field: 'Накопичувач',
            fieldKey: 'storage',
            value: '512GB',
          },
          {
            field: 'Тип накопичувача',
            fieldKey: 'storage_type',
            value: 'SSD',
          },
          {
            field: 'Відеокарта',
            fieldKey: 'video_card',
            value: 'NVIDIA GeForce GTX 1650',
          },
          {
            field: 'Порти',
            fieldKey: 'ports',
            value: '4x USB-A, 1x USB-C, 1x HDMI, 1x DisplayPort',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: faker.lorem.sentence(2),
        description:
          "HP Pavilion Gaming Desktop - це потужний настільний комп'ютер для геймерів з вражаючою графікою і високою продуктивністю. Завдяки процесору Intel Core i5 і відеокарті NVIDIA GeForce GTX 1650, він готовий до найвимогливіших ігор.",

        producerId: 8,
        categoryId: 1,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Процесор',
            fieldKey: 'processor',
            value: 'Intel Core i5-11400F',
          },
          {
            field: "Оперативна пам'ять",
            fieldKey: 'ram',
            value: '8GB',
          },
          {
            field: "Тип пам'яті",
            fieldKey: 'ram_type',
            value: 'DDR4',
          },
          {
            field: 'Накопичувач',
            fieldKey: 'storage',
            value: '512GB',
          },
          {
            field: 'Тип накопичувача',
            fieldKey: 'storage_type',
            value: 'SSD',
          },
          {
            field: 'Відеокарта',
            fieldKey: 'video_card',
            value: 'NVIDIA GeForce GTX 1650',
          },
          {
            field: 'Порти',
            fieldKey: 'ports',
            value: '4x USB-A, 1x USB-C, 1x HDMI, 1x DisplayPort',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: faker.lorem.sentence(2),
        description:
          "HP Pavilion Gaming Desktop - це потужний настільний комп'ютер для геймерів з вражаючою графікою і високою продуктивністю. Завдяки процесору Intel Core i5 і відеокарті NVIDIA GeForce GTX 1650, він готовий до найвимогливіших ігор.",

        producerId: 8,
        categoryId: 1,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Процесор',
            fieldKey: 'processor',
            value: 'Intel Core i5-11400F',
          },
          {
            field: "Оперативна пам'ять",
            fieldKey: 'ram',
            value: '8GB',
          },
          {
            field: "Тип пам'яті",
            fieldKey: 'ram_type',
            value: 'DDR4',
          },
          {
            field: 'Накопичувач',
            fieldKey: 'storage',
            value: '512GB',
          },
          {
            field: 'Тип накопичувача',
            fieldKey: 'storage_type',
            value: 'SSD',
          },
          {
            field: 'Відеокарта',
            fieldKey: 'video_card',
            value: 'NVIDIA GeForce GTX 1650',
          },
          {
            field: 'Порти',
            fieldKey: 'ports',
            value: '4x USB-A, 1x USB-C, 1x HDMI, 1x DisplayPort',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        product_name: faker.lorem.sentence(2),
        description:
          "HP Pavilion Gaming Desktop - це потужний настільний комп'ютер для геймерів з вражаючою графікою і високою продуктивністю. Завдяки процесору Intel Core i5 і відеокарті NVIDIA GeForce GTX 1650, він готовий до найвимогливіших ігор.",

        producerId: 8,
        categoryId: 1,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Процесор',
            fieldKey: 'processor',
            value: 'Intel Core i5-11400F',
          },
          {
            field: "Оперативна пам'ять",
            fieldKey: 'ram',
            value: '8GB',
          },
          {
            field: "Тип пам'яті",
            fieldKey: 'ram_type',
            value: 'DDR4',
          },
          {
            field: 'Накопичувач',
            fieldKey: 'storage',
            value: '512GB',
          },
          {
            field: 'Тип накопичувача',
            fieldKey: 'storage_type',
            value: 'SSD',
          },
          {
            field: 'Відеокарта',
            fieldKey: 'video_card',
            value: 'NVIDIA GeForce GTX 1650',
          },
          {
            field: 'Порти',
            fieldKey: 'ports',
            value: '4x USB-A, 1x USB-C, 1x HDMI, 1x DisplayPort',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: faker.lorem.sentence(2),
        description:
          "HP Pavilion Gaming Desktop - це потужний настільний комп'ютер для геймерів з вражаючою графікою і високою продуктивністю. Завдяки процесору Intel Core i5 і відеокарті NVIDIA GeForce GTX 1650, він готовий до найвимогливіших ігор.",

        producerId: 8,
        categoryId: 1,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Процесор',
            fieldKey: 'processor',
            value: 'Intel Core i5-11400F',
          },
          {
            field: "Оперативна пам'ять",
            fieldKey: 'ram',
            value: '8GB',
          },
          {
            field: "Тип пам'яті",
            fieldKey: 'ram_type',
            value: 'DDR4',
          },
          {
            field: 'Накопичувач',
            fieldKey: 'storage',
            value: '512GB',
          },
          {
            field: 'Тип накопичувача',
            fieldKey: 'storage_type',
            value: 'SSD',
          },
          {
            field: 'Відеокарта',
            fieldKey: 'video_card',
            value: 'NVIDIA GeForce GTX 1650',
          },
          {
            field: 'Порти',
            fieldKey: 'ports',
            value: '4x USB-A, 1x USB-C, 1x HDMI, 1x DisplayPort',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: faker.lorem.sentence(2),
        description:
          "HP Pavilion Gaming Desktop - це потужний настільний комп'ютер для геймерів з вражаючою графікою і високою продуктивністю. Завдяки процесору Intel Core i5 і відеокарті NVIDIA GeForce GTX 1650, він готовий до найвимогливіших ігор.",

        producerId: 8,
        categoryId: 1,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Процесор',
            fieldKey: 'processor',
            value: 'Intel Core i5-11400F',
          },
          {
            field: "Оперативна пам'ять",
            fieldKey: 'ram',
            value: '8GB',
          },
          {
            field: "Тип пам'яті",
            fieldKey: 'ram_type',
            value: 'DDR4',
          },
          {
            field: 'Накопичувач',
            fieldKey: 'storage',
            value: '512GB',
          },
          {
            field: 'Тип накопичувача',
            fieldKey: 'storage_type',
            value: 'SSD',
          },
          {
            field: 'Відеокарта',
            fieldKey: 'video_card',
            value: 'NVIDIA GeForce GTX 1650',
          },
          {
            field: 'Порти',
            fieldKey: 'ports',
            value: '4x USB-A, 1x USB-C, 1x HDMI, 1x DisplayPort',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },

      //Телефони
      {
        product_name: 'iPhone 13 Pro',
        description:
          'iPhone 13 Pro - це потужний смартфон з передовими функціями камери, вражаючим дисплеєм та високою продуктивністю. Завдяки потужному процесору A15 Bionic він пропонує неймовірну швидкість та ефективність.',
        producerId: 11,
        categoryId: 2,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Діагональ дисплея',
            fieldKey: 'display_diagonal',
            value: '6.1',
          },
          {
            field: 'Тип Дисплею',
            fieldKey: 'display_type',
            value: 'Super OLED',
          },
          {
            field: 'Процесор',
            fieldKey: 'processor',
            value: 'Apple A15 Bionic',
          },
          {
            field: "Оперативна пам'ять",
            fieldKey: 'ram',
            value: '6GB',
          },
          {
            field: 'Накопичувач',
            fieldKey: 'storage',
            value: '64GB',
          },
          {
            field: 'Камера',
            fieldKey: 'camera',
            value: '112MP',
          },
          {
            field: 'Операційна система',
            fieldKey: 'os',
            value: 'iOS 15',
          },
          {
            field: 'Колір',
            fieldKey: 'color',
            value: 'Сірий',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Samsung Galaxy S22 Ultra',
        description:
          'Samsung Galaxy S22 Ultra - це флагманський смартфон з потужними функціями камери, величезним дисплеєм і високою продуктивністю. Його майстерна камера забезпечує вражаючі знімки навіть у складних умовах освітлення.',
        producerId: 6,
        categoryId: 2,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Діагональ дисплея',
            fieldKey: 'display_diagonal',
            value: '6.8',
          },
          {
            field: 'Тип Дисплею',
            fieldKey: 'display_type',
            value: 'Dynamic AMOLED 2X',
          },
          {
            field: 'Процесор',
            fieldKey: 'processor',
            value: 'Exynos 2200',
          },
          {
            field: "Оперативна пам'ять",
            fieldKey: 'ram',
            value: '8GB',
          },
          {
            field: 'Накопичувач',
            fieldKey: 'storage',
            value: '128GB',
          },
          {
            field: 'Камера',
            fieldKey: 'camera',
            value: '108MP',
          },
          {
            field: 'Операційна система',
            fieldKey: 'os',
            value: 'Android 12',
          },
          {
            field: 'Колір',
            fieldKey: 'color',
            value: 'Чорний',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Xiaomi Mi 12',
        description:
          'Xiaomi Mi 12 - це високоякісний смартфон з інноваційним дизайном, потужними характеристиками та передовими функціями камери. Він пропонує високу продуктивність та швидкий доступ до найсучасніших технологій.',
        producerId: 5,
        categoryId: 2,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Діагональ дисплея',
            fieldKey: 'display_diagonal',
            value: '6.7',
          },
          {
            field: 'Тип Дисплею',
            fieldKey: 'display_type',
            value: 'AMOLED',
          },
          {
            field: 'Процесор',
            fieldKey: 'processor',
            value: 'Qualcomm Snapdragon 8 Gen 2',
          },
          {
            field: "Оперативна пам'ять",
            fieldKey: 'ram',
            value: '8GB',
          },
          {
            field: 'Накопичувач',
            fieldKey: 'storage',
            value: '256GB',
          },
          {
            field: 'Камера',
            fieldKey: 'camera',
            value: '108MP',
          },
          {
            field: 'Операційна система',
            fieldKey: 'os',
            value: 'MIUI 14',
          },
          {
            field: 'Колір',
            fieldKey: 'color',
            value: 'Синій',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },

      //Холодильники
      {
        product_name: 'LG GC-Q257CBFC',
        description:
          'Холодильник LG InstaView - це сучасне рішення для зберігання продуктів. За допомогою технології InstaView ви можете швидко побачити, що знаходиться всередині холодильника без необхідності відкривати його.',
        producerId: 1,
        categoryId: 3,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Вид холодильника',
            fieldKey: 'refrigerator_type',
            value: 'Окремостоячий',
          },
          {
            field: "Загальний корисний об'єм холодильника",
            fieldKey: 'total_capacity',
            value: '647',
          },
          {
            field: "Корисний об'єм холодильної камери",
            fieldKey: 'refrigerating_chamber',
            value: '414',
          },
          {
            field: "Корисний об'єм морозильної камери",
            fieldKey: 'freezer_capacity',
            value: '233',
          },
          {
            field: 'Клас енергоспоживання',
            fieldKey: 'energy_efficiency',
            value: 'A+',
          },
          {
            field: 'Ширина',
            fieldKey: 'width',
            value: '91,3',
          },
          {
            field: 'Висота',
            fieldKey: 'height',
            value: '179',
          },
          {
            field: 'Глибина',
            fieldKey: 'depth',
            value: '73,8',
          },
          {
            field: 'Вага',
            fieldKey: 'Weight',
            value: '63',
          },
          {
            field: 'Тип компресора',
            fieldKey: 'compressor_type',
            value: 'Інверторний',
          },
          {
            field: 'Кількість камер',
            fieldKey: 'cameras_count',
            value: 'Дві Камери',
          },
          {
            field: 'Колір',
            fieldKey: 'color',
            value: 'Сірий',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Samsung BRR297230WW',
        description:
          'Холодильник Samsung - це центр кухні, який пропонує безліч інноваційних функцій. За допомогою вбудованого дисплея ви можете замовляти продукти, вести список покупок та контролювати календарні події.',
        producerId: 4,
        categoryId: 3,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Вид холодильника',
            fieldKey: 'refrigerator_type',
            value: 'Вбудований',
          },
          {
            field: "Загальний корисний об'єм холодильника",
            fieldKey: 'total_capacity',
            value: '289',
          },
          {
            field: "Корисний об'єм холодильної камери",
            fieldKey: 'refrigerating_chamber',
            value: '289',
          },
          {
            field: "Корисний об'єм морозильної камери",
            fieldKey: 'freezer_capacity',
            value: '',
          },
          {
            field: 'Клас енергоспоживання',
            fieldKey: 'energy_efficiency',
            value: 'A+',
          },
          {
            field: 'Ширина',
            fieldKey: 'width',
            value: '54',
          },
          {
            field: 'Висота',
            fieldKey: 'height',
            value: '177,5',
          },
          {
            field: 'Глибина',
            fieldKey: 'depth',
            value: '55',
          },
          {
            field: 'Вага',
            fieldKey: 'Weight',
            value: '63',
          },
          {
            field: 'Тип компресора',
            fieldKey: 'compressor_type',
            value: 'Інверторний',
          },
          {
            field: 'Кількість камер',
            fieldKey: 'cameras_count',
            value: 'Одна Камера',
          },
          {
            field: 'Колір',
            fieldKey: 'color',
            value: 'Білий',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Vestfrost CNF289XB',
        description:
          'Холодильник Vestfrost - це високоякісний холодильник з багатьма корисними функціями. За допомогою технології VitaFresh ваші продукти залишаються свіжими набагато довше, а функція NoFrost запобігає заморожуванню льоду.',
        producerId: 12,
        categoryId: 3,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Вид холодильника',
            fieldKey: 'refrigerator_type',
            value: 'Окремостоячий',
          },
          {
            field: "Загальний корисний об'єм холодильника",
            fieldKey: 'total_capacity',
            value: '268',
          },
          {
            field: "Корисний об'єм холодильної камери",
            fieldKey: 'refrigerating_chamber',
            value: '194',
          },
          {
            field: "Корисний об'єм морозильної камери",
            fieldKey: 'freezer_capacity',
            value: '74',
          },
          {
            field: 'Клас енергоспоживання',
            fieldKey: 'energy_efficiency',
            value: 'A+',
          },
          {
            field: 'Ширина',
            fieldKey: 'width',
            value: '54',
          },
          {
            field: 'Висота',
            fieldKey: 'height',
            value: '180',
          },
          {
            field: 'Глибина',
            fieldKey: 'depth',
            value: '59,5',
          },
          {
            field: 'Вага',
            fieldKey: 'Weight',
            value: '52',
          },
          {
            field: 'Тип компресора',
            fieldKey: 'compressor_type',
            value: 'Звичайний',
          },
          {
            field: 'Кількість камер',
            fieldKey: 'cameras_count',
            value: 'Одна Камера',
          },
          {
            field: 'Колір',
            fieldKey: 'color',
            value: 'Нержавіюча сталь',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },

      //Телевізори
      {
        product_name: 'Samsung UE43CU7100UXUA',
        description:
          'Телевізор Samsung UE43CU7100UXUA - це високоякісний 4K телевізор з технологією Quantum Dot, яка забезпечує яскравість і насиченість кольорів. Завдяки технології Direct Full Array він має рівномірне підсвічування та глибокі чорні кольори.',
        producerId: 4,
        categoryId: 4,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Діагональ Екрана',
            fieldKey: 'screen_diagonal',
            value: '43',
          },
          {
            field: 'Тип Екрана',
            fieldKey: 'screen_type',
            value: 'LED',
          },
          {
            field: 'Частота Екрана',
            fieldKey: 'screen_frequency',
            value: '120',
          },
          {
            field: 'Bluetooth',
            fieldKey: 'bluetooth',
            value: 'Так',
          },
          {
            field: 'ТВ процесор',
            fieldKey: 'tv_processor',
            value: 'Neo Quantum Processor 4K',
          },
          {
            field: 'Кількість динаміків',
            fieldKey: 'speakers_count',
            value: '2',
          },

          {
            field: 'Потужність звуку',
            fieldKey: 'sound_power',
            value: '20 Вт',
          },
          {
            field: 'Колір',
            fieldKey: 'color',
            value: 'Сірий',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'LG OLED55C36LC',
        description:
          'Телевізор LG OLED55C36LC - це найбільш реалістичний 4K телевізор завдяки технології OLED, яка забезпечує глибокі чорні кольори та яскравість. Завдяки технології α9 Gen 3 AI Processor він покращує якість зображення та забезпечує реалістичні деталі.',
        producerId: 1,
        categoryId: 4,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Діагональ Екрана',
            fieldKey: 'screen_diagonal',
            value: '55',
          },
          {
            field: 'Тип Екрана',
            fieldKey: 'screen_type',
            value: 'OLED',
          },
          {
            field: 'Частота Екрана',
            fieldKey: 'screen_frequency',
            value: '120',
          },
          {
            field: 'Bluetooth',
            fieldKey: 'bluetooth',
            value: 'Так',
          },
          {
            field: 'ТВ процесор',
            fieldKey: 'tv_processor',
            value: 'α9',
          },
          {
            field: 'Кількість динаміків',
            fieldKey: 'speakers_count',
            value: '2',
          },
          {
            field: 'Потужність звуку',
            fieldKey: 'sound_power',
            value: '40 Вт',
          },
          {
            field: 'Колір',
            fieldKey: 'color',
            value: 'Чорний',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Sony KD50X75WL',
        description:
          'Телевізор Sony KD50X75WL - це високоякісний OLED телевізор з потужним процесором і вражаючою якістю зображення. Завдяки технології Acoustic Surface Audio він забезпечує чудовий звук прямо з екрану.',
        producerId: 13,
        categoryId: 4,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Діагональ Екрана',
            fieldKey: 'screen_diagonal',
            value: '55',
          },
          {
            field: 'Тип Екрана',
            fieldKey: 'screen_type',
            value: 'LED',
          },
          {
            field: 'Частота Екрана',
            fieldKey: 'screen_frequency',
            value: '50',
          },
          {
            field: 'Bluetooth',
            fieldKey: 'bluetooth',
            value: 'Так',
          },
          {
            field: 'ТВ процесор',
            fieldKey: 'tv_processor',
            value: 'Crystal Processor 4K',
          },
          {
            field: 'Кількість динаміків',
            fieldKey: 'speakers_count',
            value: '2',
          },
          {
            field: 'Потужність звуку',
            fieldKey: 'sound_power',
            value: '20 Вт',
          },
          {
            field: 'Колір',
            fieldKey: 'color',
            value: 'Чорний',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },

      //Монітори
      {
        product_name: 'LG 27UP850N-W',
        description:
          'Монітор LG 27UK850-W - це ідеальне поєднання якості зображення, функціональності та елегантного дизайну. Завдяки високій роздільній здатності та широкому колірному охопленню він ідеально підходить для професійної роботи та розваг.',
        producerId: 1,
        categoryId: 5,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Діагональ Екрана',
            fieldKey: 'screen_diagonal',
            value: '27',
          },
          {
            field: 'Тип Матриці',
            fieldKey: 'matrix_type',
            value: 'IPS',
          },
          {
            field: 'Роздільна здатність екрану',
            fieldKey: 'resolution',
            value: '4К Ultra HD (3840x2160)',
          },
          {
            field: 'Частота Екрана',
            fieldKey: 'screen_frequency',
            value: '60 Гц',
          },
          {
            field: 'Співвідношення сторін',
            fieldKey: 'aspect_ratio',
            value: '16:9',
          },
          {
            field: 'Вбудовані динаміки',
            fieldKey: 'built_speakers',
            value: 'Так',
          },
          {
            field: 'Час відгуку',
            fieldKey: 'response_time',
            value: '5 мс',
          },
          {
            field: 'Колір',
            fieldKey: 'color',
            value: 'Сріблястий',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Asus ROG Swift PG27AQ',
        description:
          'Монітор ASUS ROG Swift PG27AQ - це ідеальний вибір для геймерів, які шукають високу швидкість оновлення та чіткість зображення. Забезпечує миттєву відповідь та плавний геймплей.',
        producerId: 1,
        categoryId: 5,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Діагональ Екрана',
            fieldKey: 'screen_diagonal',
            value: '27',
          },
          {
            field: 'Тип Матриці',
            fieldKey: 'matrix_type',
            value: 'IPS',
          },
          {
            field: 'Частота Екрана',
            fieldKey: 'screen_frequency',
            value: '360 Гц',
          },
          {
            field: 'Роздільна здатність екрану',
            fieldKey: 'resolution',
            value: 'WQHD (2560x1440)',
          },
          {
            field: 'Співвідношення сторін',
            fieldKey: 'aspect_ratio',
            value: '16:9',
          },
          {
            field: 'Час відгуку',
            fieldKey: 'response_time',
            value: '2 мс',
          },
          {
            field: 'Колір',
            fieldKey: 'color',
            value: 'Чорний',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Samsung Odyssey G7',
        description:
          'Монітор Samsung Odyssey G7 - це ідеальний вибір для геймерів, які цінують якість зображення та високу швидкість оновлення. Завдяки кривій панелі та підтримці технології G-Sync він забезпечує іммерсивний геймплей без будь-яких затримок.',
        producerId: 4,
        categoryId: 5,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Діагональ Екрана',
            fieldKey: 'screen_diagonal',
            value: '43',
          },
          {
            field: 'Тип Матриці',
            fieldKey: 'matrix_type',
            value: 'VA',
          },
          {
            field: 'Частота Екрана',
            fieldKey: 'screen_frequency',
            value: '144 Гц',
          },
          {
            field: 'Роздільна здатність екрану',
            fieldKey: 'resolution',
            value: '4К Ultra HD (3840x2160)',
          },
          {
            field: 'Співвідношення сторін',
            fieldKey: 'aspect_ratio',
            value: '16:9',
          },
          {
            field: 'Час відгуку',
            fieldKey: 'response_time',
            value: '1 мс',
          },
          {
            field: 'Вбудовані динаміки',
            fieldKey: 'built_speakers',
            value: 'Так',
          },
          {
            field: 'Колір',
            fieldKey: 'color',
            value: 'Біло-чорний',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },

      //Ноутбуки
      {
        product_name: 'Asus Tuf Dash f15',
        description:
          'Ноутбук Asus Tuf Dash f15 забезпечує потужну продуктивність і високу якість графіки для геймерів та професіоналів. Завдяки новітньому процесору Intel Tiger Lake і відеокарті GeForce 1080TI він здатен впоратися з найвимогливішими завданнями.',

        producerId: 2,
        categoryId: 6,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Діагональ дисплея',
            fieldKey: 'display_diagonal',
            value: '12.6',
          },
          {
            field: 'Тип Дисплею',
            fieldKey: 'display_type',
            value: 'FHD',
          },
          {
            field: 'Процесор',
            fieldKey: 'processor',
            value: 'Intel Core i7-11800H',
          },
          {
            field: "Оперативна пам'ять",
            fieldKey: 'ram',
            value: '16GB',
          },
          {
            field: "Тип пам'яті",
            fieldKey: 'ram_type',
            value: 'DDR4',
          },
          {
            field: 'Накопичувач',
            fieldKey: 'storage',
            value: '512GB',
          },
          {
            field: 'Тип накопичувача',
            fieldKey: 'storage_type',
            value: 'SSD',
          },
          {
            field: 'Відеокарта',
            fieldKey: 'video_card',
            value: 'NVIDIA GeForce RTX 3060',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'HP Spectre x360',
        description:
          'Ноутбук HP Spectre x360 - це втілення елегантного дизайну та високої продуктивності. Завдяки потужному процесору і неймовірному дисплею він забезпечує високу швидкість роботи та відмінну якість відображення зображень.',

        producerId: 9,
        categoryId: 6,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),

        product_characteristics: JSON.stringify([
          {
            field: 'Діагональ дисплея',
            fieldKey: 'display_diagonal',
            value: '13.3',
          },
          {
            field: 'Тип Дисплею',
            fieldKey: 'display_type',
            value: '4K UHD',
          },
          {
            field: 'Процесор',
            fieldKey: 'processor',
            value: 'Intel Core i7-1165G7',
          },
          {
            field: "Оперативна пам'ять",
            fieldKey: 'ram',
            value: '16GB',
          },
          {
            field: "Тип пам'яті",
            fieldKey: 'ram_type',
            value: 'DDR4',
          },
          {
            field: 'Накопичувач',
            fieldKey: 'storage',
            value: '1TB',
          },
          {
            field: 'Тип накопичувача',
            fieldKey: 'storage_type',
            value: 'SSD',
          },
          {
            field: 'Відеокарта',
            fieldKey: 'video_card',
            value: 'Intel Iris Xe Graphics',
          },
        ]),

        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'MSI GE76 Raider',
        description:
          "MSI GE76 Raider - це високопродуктивний ігровий ноутбук з потужними компонентами для швидкої обробки ігрових завдань. Він має яскравий дисплей, масивну пам'ять та потужну відеокарту для безперервного геймплею.",

        producerId: 3,
        categoryId: 6,

        vendor_code: faker.string.numeric({
          length: { min: 5, max: 5 },
          allowLeadingZeros: false,
        }),
        product_characteristics: JSON.stringify([
          {
            field: 'Діагональ дисплея',
            fieldKey: 'display_diagonal',
            value: '17.3',
          },
          {
            field: 'Тип Дисплею',
            fieldKey: 'display_type',
            value: 'FHD',
          },
          {
            field: 'Процесор',
            fieldKey: 'processor',
            value: 'Intel Core i9-12900HK',
          },
          {
            field: "Оперативна пам'ять",
            fieldKey: 'ram',
            value: '64GB',
          },
          {
            field: "Тип пам'яті",
            fieldKey: 'ram_type',
            value: 'DDR4',
          },
          {
            field: 'Накопичувач',
            fieldKey: 'storage',
            value: '2TB',
          },
          {
            field: 'Тип накопичувача',
            fieldKey: 'storage_type',
            value: 'SSD',
          },
          {
            field: 'Відеокарта',
            fieldKey: 'video_card',
            value: 'NVIDIA GeForce RTX 3080',
          },
        ]),
        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
                {
                  allowLeadingZeros: false,
                  length: {
                    min: 5,
                    max: 15,
                  },
                },
              )}`,
          ),
        ),

        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),

        price: faker.string.numeric({
          allowLeadingZeros: false,
          length: {
            min: 2,
            max: 5,
          },
        }),
        in_stock: faker.string.numeric({
          allowLeadingZeros: false,
          length: 2,
        }),

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const existingCategories = await queryInterface.sequelize.query(
      'SELECT * FROM categories',
    );
    // console.log('existingCategories', existingCategories);

    const products = [...Array(10)].map(() => ({
      producerId: faker.number.int({ min: 1, max: 7 }),
      categoryId: faker.number.int({ min: 1, max: 8 }),

      product_name: faker.lorem.sentence(2),
      description: faker.lorem.sentence(16),

      vendor_code: faker.string.numeric({
        length: { min: 5, max: 5 },
        allowLeadingZeros: false,
      }),

      // characteristics: JSON.stringify(""),
      // characteristics: JSON.stringify([...Array(7)].map(() => {
      //     return {key: faker.lorem.sentence("1"), value: faker.lorem.sentence(4)}
      //   },
      // )),
      product_characteristics: JSON.stringify([
        { field: 'charactertest', fieldKey: 'charactertest', value: 'test' },
        { field: 'character55', fieldKey: 'character32', value: '35' },
        { field: 'category3', fieldKey: 'category11233', value: 1 },
        { field: 'charactertest', fieldKey: 'charactertest', value: 'test' },
      ]),

      images: JSON.stringify(
        [...Array(7)].map(
          () =>
            `${faker.image.urlLoremFlickr({ category: 'gadgets' })}?random=${faker.string.numeric(
              {
                allowLeadingZeros: false,
                length: {
                  min: 5,
                  max: 15,
                },
              },
            )}`,
        ),
      ),

      bestseller: faker.datatype.boolean(),
      new: faker.datatype.boolean(),

      price: faker.string.numeric({
        allowLeadingZeros: false,
        length: {
          min: 2,
          max: 5,
        },
      }),
      in_stock: faker.string.numeric({
        allowLeadingZeros: false,
        length: 2,
      }),

      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    const updatedCategories = [];
    existingCategories[0].forEach((category) => {
      let categoryFilters = JSON.parse(category.filters);
      console.log('Category', category.category_name, 'id', category.id);
      console.log('categoryFilters first get\n', categoryFilters, '\n\n');
      const allCategoryProducts = productsStatic.filter(
        (product) => product.categoryId === category.id,
      );
      console.log(
        'allCategoryProducts',
        allCategoryProducts,
        '----------------------------------------------------------------------------\n',
      );
      let allFiltersList = [...categoryFilters];
      allCategoryProducts.forEach((product) => {
        const characteristics = JSON.parse(product.product_characteristics);
        characteristics.forEach((characteristic) => {
          const { field, fieldKey } = characteristic;
          const existingFilter = allFiltersList.find(
            (filter) => filter.field === field && filter.fieldKey === fieldKey,
          );
          if (!existingFilter) {
            allFiltersList.push({ field, fieldKey });
          }
        });
      });
      console.log('------------allFiltersList', allFiltersList, '------------');

      const updFilters = [];
      allFiltersList.forEach((filter) => {
        const { field, fieldKey, values } = filter;

        const allValues = [];
        allCategoryProducts.forEach((product) => {
          const characteristics = JSON.parse(product.product_characteristics);
          characteristics.forEach((characteristic) => {
            if (characteristic.fieldKey === fieldKey) {
              allValues.push(characteristic.value);
            }
          });
        });

        updFilters.push({
          field,
          fieldKey,
          values:
            allValues.length !== 0
              ? Array.from(new Set(allValues.map((value) => value)))
              : values,
        });

        console.log(
          `all values of ${field}: ${Array.from(new Set(allValues.map((value) => value)))} count: ${allValues.length}`,
        );
      });
      console.log(
        '-----updFilters----------',
        updFilters,
        '\n-----updFilters----------\n',
      );
      updatedCategories.push({
        ...category,
        filters: JSON.stringify(updFilters),
      });
      console.log('\n\n\n\n');
    });
    console.log('\n\nupdatedCategories', updatedCategories);

    await queryInterface.bulkInsert('Categories', updatedCategories, {
      // ignoreDuplicates: true,
      updateOnDuplicate: ['filters', 'description'],
    });

    await queryInterface.bulkInsert('Products', productsStatic, {
      ignoreDuplicates: true,
      // updateOnDuplicate: ['category_name', 'category_value'],
    });
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
