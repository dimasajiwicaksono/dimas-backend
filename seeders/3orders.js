'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders', [

      {
        id: 1,
        event_id: 1,
        quantity: 2,
        totalPrice: 230000,
        status: "pending",
        user_id: 1
      },

      {
        id: 2,
        event_id: 2,
        quantity: 3,
        totalPrice: 450000,
        status: "pending",
        user_id: 1

      },
      {
        id: 3,
        event_id: 1,
        quantity: 1,
        totalPrice: 150000,
        status: "pending",
        user_id: 1

      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {});

  }
};
