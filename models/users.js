'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    img: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    // associations can be defined here

    users.hasMany(models.events ,
      {as:'createdBy', foreignKey:'author_id'},
    users.hasMany(models.orders, 
      {as:'event', foreignKey:'id'}
    ))
  };
  return users;
};