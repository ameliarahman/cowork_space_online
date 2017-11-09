'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Rooms', [
      {
        address : 'Jl.in aja dulu',
        capacity : 20,
        facility : 'spa, pijat++, kolam renang, aqua galon',
        photo_url : 'https://www.google.co.id/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj3nNH4nazXAhXFx7wKHe8-DdYQjRwIBw&url=http%3A%2F%2Ftraveler-magazine.blogspot.com%2F2011%2F04%2Fdubai-hotel-7-star-rooms.html&psig=AOvVaw0Kq6HWPK2nnlUQmH6oBacd&ust=1510136215229320',
        price : '10.000.000'
      },
      {
        address : 'Jl.kemana aja boleh',
        capacity : 25,
        facility : 'pot, asbak, aquarium',
        photo_url : 'https://www.google.co.id/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj5oqmtnqzXAhWIgrwKHQ0MDPAQjRwIBw&url=http%3A%2F%2Ftravel.cnn.com%2Fexplorations%2Fescape%2Fworlds-tallest-hotel-reaches-dubai-810539%2F&psig=AOvVaw0Kq6HWPK2nnlUQmH6oBacd&ust=1510136215229320',
        price : '15.000.000'
      },
      {
        address : 'Jl.yang lurus',
        capacity : 10,
        facility : 'pot, asbak, aquarium, banyak lagi yang lainnya',
        photo_url : 'https://www.google.co.id/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiv0_PLnqzXAhWEi7wKHdbkAFwQjRwIBw&url=http%3A%2F%2Fdubai.locanto.ae%2FID_575184847%2FBest-and-Cheapest-Deal-of-Labour-camp-in-Al-Quoz.html&psig=AOvVaw0Kq6HWPK2nnlUQmH6oBacd&ust=1510136215229320',
        price : '35.000.000'
      }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
