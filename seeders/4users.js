'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: "Dimas Wicaksono",
        phone: 374883847,
        email: "aji@gmail.com",
        username: "dimas",
        password: "123456",
        img: "https://cdn.pixabay.com/photo/2014/07/05/03/40/profile-384541_960_720.jpg"
      },

      {
        id: 2,
        name: "Yusuf ",
        phone: 98982938,
        email: "yusuf@gmail.com",
        username: "yusuf",
        password: "123456",
        img: "https://cdn.pixabay.com/photo/2014/07/05/03/40/profile-384541_960_720.jpg"
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});

  }
};
