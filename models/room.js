'use strict';
module.exports = (sequelize, DataTypes) => {
  var Room = sequelize.define('Room', {
    address: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    facility: DataTypes.STRING,
    photo_url: DataTypes.STRING,
    price: DataTypes.STRING,
    city: DataTypes.STRING,
    name : DataTypes.STRING
  }, {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
        }
      }
    });

  Room.associate = (models) => {
    Room.belongsToMany(models.User, { through: models.Rental })
    Room.hasMany(models.Rental)
  }
  return Room;
};