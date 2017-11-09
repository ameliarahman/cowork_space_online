'use strict';
module.exports = (sequelize, DataTypes) => {
  var Rental = sequelize.define('Rental', {
    UserId: DataTypes.INTEGER,
    RoomId: DataTypes.INTEGER,
    from_date: DataTypes.DATE,
    to_date: DataTypes.DATE,
    status: DataTypes.STRING,
    price_total: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Rental.asscociate = (models)=>{
    Rental.belongsTo(models.Room)
    Rental.belongsTo(models.User)
  }
  return Rental;
};