'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Rooms', 'UserId', Sequelize.INTEGER)
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Rooms', 'UserId');
  }
};