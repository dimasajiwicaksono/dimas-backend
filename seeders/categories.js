'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        id: 1,
        name: "Sport"
      },
      {
        id: 2,
        name: "Music"
      },
      {
        id: 3,
        name: "Programming"
      },
      {
        id: 4,
        name: "Art"
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});

  }
};
