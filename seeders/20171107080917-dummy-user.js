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
    return queryInterface.bulkInsert('Users', [
      {
        username : 'customer',
        password : '123',
        first_name : 'joss',
        last_name : 'grandos',
        email : 'jossgrandos@mail.com',
        no_telp : '081233449001',
        level : 2 
      },
      {
        username : 'admin',
        password : '123',
        first_name : 'admin',
        last_name : 'joss',
        email : 'adminjoss@mail.com',
        no_telp : '081233449111',
        level : 1 
      },
      {
        username : 'bellboy',
        password : '123',
        first_name : 'bell',
        last_name : 'grandos',
        email : 'belljoss@mail.com',
        no_telp : '081233449001',
        level : 3 
      },
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
