'use strict';
// const models = require('../models')

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    no_telp: DataTypes.STRING,
    level: DataTypes.INTEGER
  });

  User.associate = (models) => {
    User.hasMany(models.Room)
    User.belongsToMany(models.Room, { through: models.Rental })
    User.hasMany(models.Rental)
  }


  return User;
};