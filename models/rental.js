'use strict';
module.exports = (sequelize, DataTypes) => {
  var Rental = sequelize.define('Rental', {
    UserId: DataTypes.INTEGER,
    RoomId: DataTypes.INTEGER,
    from_date: DataTypes.DATE,
    to_date: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Rental;
};