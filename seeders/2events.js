'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('events', [

      {
        id: 1,
        title: "Raisa In Live Concert 2020",
        category_id: 2,
        start_time: 20200130,
        end_time: 20200131,
        price: 250000,
        description: "lorem ipsum lorm lor impu kalemnij",
        address: "Jl. Pintu Satu Senayan, Gelora, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270",
        urlMaps: "https://2ab9pu2w8o9xpg6w26xnz04d-wpengine.netdna-ssl.com/wp-content/uploads/staticmaps/s/674064-stadium-utama-gelora-bung-karno/stadium-utama-gelora-bung-karno-map-large.png",
        img: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20191202125057.JPG",
        user_id: 1,
      },
      {
        id: 2,
        title: "Maharga saha Mapag warsa anyar 1 suro 1987 Ehe",
        category_id: 1,
        start_time: 20191230,
        end_time: 20191231,
        price: 250000,
        description: "lorem ipsum lorm lor impu kalemnij",
        address: "Gambir, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta",
        urlMaps: "https://live.staticflickr.com/3422/3910965429_7155b54885_z.jpg",
        img: "https://visitingjogja.com/wp-content/uploads/2017/09/Wayang-kulit-kadipaten-Pakualaman.jpg",
        user_id: 2,
      },
      {
        id: 3,
        title: "Gun n Roses Live Concert",
        category_id: 2,
        start_time: 20191230,
        end_time: 20191231,
        price: 250000,
        description: "folm ynag meberikatan keadhak indaneis adan mayaldsi",
        address: "Jl. Pintu Satu Senayan, Gelora, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270",
        urlMaps: "https://2ab9pu2w8o9xpg6w26xnz04d-wpengine.netdna-ssl.com/wp-content/uploads/staticmaps/s/674064-stadium-utama-gelora-bung-karno/stadium-utama-gelora-bung-karno-map-large.png",
        img: "https://i.ytimg.com/vi/1O_-QGctaoQ/maxresdefault.jpg",
        user_id: 3,
      },
      {
        id: 4,
        title: "Shen Yun Symphony Orchestra",
        category_id: 1,
        start_time: 20200112,
        end_time: 20200113,
        price: 250000,
        description: "Lorem ipusm ollad indoneis adimas aji jwicaksono",
        address: "Jl. Pintu Satu Senayan, Gelora, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270",
        urlMaps: "https://2ab9pu2w8o9xpg6w26xnz04d-wpengine.netdna-ssl.com/wp-content/uploads/staticmaps/s/674064-stadium-utama-gelora-bung-karno/stadium-utama-gelora-bung-karno-map-large.png",
        img: "https://i.ytimg.com/vi/WKOIwu8R0bU/maxresdefault.jpg",
        user_id: 2,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('events', null, {});

  }
};
