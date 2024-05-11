'use strict';

const { faker } = require('@faker-js/faker');
const { Column, DataType } = require('sequelize-typescript');
const { filter } = require('rxjs');
// const { Category } = require('../src/categories/entities/category.entity');
// const { Category } = require('../src/categories/entities/category.entity');
/** @type {import("sequelize-cli").Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    console.log('3');

    const productsStatic = [
      {
        product_name: 'Computer Asus Rog',
        description: 'best good',

        producerId: faker.number.int({ min: 1, max: 7 }),
        categoryId: 1,

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
          { field: 'Дисплей', fieldKey: 'display', value: 12.6 },
          {
            field: 'Процесор',
            fieldKey: 'processor',
            value: 'intel tiger lake',
          },
          {
            field: 'Відеокарта',
            fieldKey: 'video_card',
            value: 'GeForce 1080TI',
          },
          { field: 'RGB keyboard', fieldKey: 'keyboard', value: true },
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
        product_name: 'Computer Acer Steel Division',
        description: 'best good',

        producerId: faker.number.int({ min: 1, max: 7 }),
        categoryId: 1,

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
          { field: 'Дисплей', fieldKey: 'display', value: 15.6 },
          { field: 'Процесор', fieldKey: 'processor', value: 'intel 12th' },
          {
            field: 'Відеокарта',
            fieldKey: 'video_card',
            value: 'GeForce 3080TI',
          },
          { field: 'RGB keyboard', fieldKey: 'keyboard', value: true },
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
        product_name: 'Computer HuliPlacat Pavilion 15',
        description: 'best good',

        producerId: faker.number.int({ min: 1, max: 7 }),
        categoryId: 1,

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
          { field: 'Дисплей', fieldKey: 'display', value: 17.6 },
          { field: 'Процесор', fieldKey: 'processor', value: 'intel 13th' },
          {
            field: 'Відеокарта',
            fieldKey: 'video_card',
            value: 'GeForce 4080TI',
          },
          { field: 'RGB keyboard', fieldKey: 'keyboard', value: false },
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
        product_name: 'Smartphone Vivo',
        description: 'best good',

        producerId: faker.number.int({ min: 1, max: 7 }),
        categoryId: 2,

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
          { field: 'Дисплей', fieldKey: 'display', value: 7.6 },
          {
            field: 'Процесор',
            fieldKey: 'processor',
            value: 'snapdragon 12th',
          },
          { field: 'Відеокарта', fieldKey: 'video_card', value: 'Adreno 365' },
          { field: 'Камера', fieldKey: 'camera', value: '105p' },
          { field: 'Аудіорозєм', fieldKey: 'audiocanal', value: true },
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
        product_name: 'Smartphone Asus',
        description: 'best good',

        producerId: faker.number.int({ min: 1, max: 7 }),
        categoryId: 2,

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
          { field: 'Дисплей', fieldKey: 'display', value: 5.6 },
          { field: 'Процесор', fieldKey: 'processor', value: 'MediaTeck 12th' },
          { field: 'Відеокарта', fieldKey: 'video_card', value: 'Mali 243' },
          { field: 'Камера', fieldKey: 'camera', value: '111p' },
          { field: 'Аудіорозєм', fieldKey: 'audiocanal', value: false },
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
        product_name: 'Monitor MSI',
        description: 'best good',

        producerId: faker.number.int({ min: 1, max: 7 }),
        categoryId: 5,

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
          { field: 'Дисплей', fieldKey: 'display', value: 27.7 },
          { field: 'Частота', fieldKey: 'frequency', value: 144 },
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

    function getUniqueValues(array, key) {
      return Array.from(new Set(array.map((item) => item[key])));
    }

    function updateCategoryFilters(productCharacteristics, categoryFilters) {
      // Оновлюємо значення в полях field та fieldKey
      productCharacteristics.forEach((characteristic) => {
        const { field, fieldKey } = characteristic;
        const existingFilter = categoryFilters.find(
          (filter) => filter.field === field && filter.fieldKey === fieldKey,
        );
        if (!existingFilter) {
          categoryFilters.push({ field, fieldKey, values: [] });
        }
      });

      // Формуємо масив унікальних значень для кожного поля
      categoryFilters.forEach((filter) => {
        const { field } = filter;
        // console.log('field cat', field);
        const values = getUniqueValues(
          productCharacteristics.filter((characteristic) => {
            // console.log(
            //   'characteristic.field === field',
            //   characteristic.field === field,
            //   'characteristic.field',
            //   characteristic.field,
            // );
            return characteristic.field === field;
          }),
          'value',
        );
        // console.log('values', values);
        filter.values.push(...values);
      });

      return categoryFilters;
    }

    const updCategories = [];
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
      updCategories.push({ ...category, filters: JSON.stringify(updFilters) });
      console.log('\n\n\n\n');
    });
    console.log('\n\nupdCategories', updCategories);

    const updatedCategories = productsStatic.map((product) => {
      let updatedCategory = {};
      let productCharacteristics = JSON.parse(product.product_characteristics);
      // console.log('productCharacteristics', productCharacteristics);

      existingCategories[0].map((category) => {
        if (product.categoryId === category.id) {
          let categoryFilters = JSON.parse(category.filters);
          // console.log('categoryFilters', categoryFilters);
          let updatedFilters = updateCategoryFilters(
            productCharacteristics,
            categoryFilters,
          );

          // console.log('updateCategoryFilters test', updatedFilters);
          //
          // console.log('categoryFilters test', categoryFilters);
          // console.log(' existingCategories[0] test', existingCategories[0]);
          updatedCategory = {
            ...category,
            filters: JSON.stringify(updatedFilters),
          };
        }
      });
      // console.log('updatedCategory fin', updatedCategory);
      // console.log(
      //   'product.id',
      //   product.id,
      //   'product.categoryId',
      //   product.categoryId,
      // );
      return updatedCategory;
    });

    // console.log('updatedCategories:', updatedCategories);
    // console.log('Result updatedCategories:');
    console.log(
      '////////////////////////////////////////////////////////////////',
    );
    updatedCategories.map((cat) => {
      console.log(
        'Category\n',
        cat,
        '\n\n',
        'filters:\n',
        JSON.parse(cat.filters),
        '\n\n',
      );
    });

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
