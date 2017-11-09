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
        photo_url : 'c9de9d32bb6e5ff2ecb0cfb58e6c25c4',
        price : '10000'
      },
      {
        address : 'Jl.kemana aja boleh',
        capacity : 25,
        facility : 'pot, asbak, aquarium',
        photo_url : '58bef0974dfecd4bdef01fee99f61d0c',
        price : '15000'
      },
      {
        address : 'Jl.yang lurus',
        capacity : 10,
        facility : 'pot, asbak, aquarium, banyak lagi yang lainnya',
        photo_url : 'cb38f6a9e0902cc059b530c07efd8cd1',
        price : '35000'
      },
      {
        address : 'Jl.bareng mantan',
        capacity : 10,
        facility : 'pot, asbak, aquarium, banyak lagi yang lainnya',
        photo_url : 'edf4568fd679558c031ea56b17c1f7bf',
        price : '15000'
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
