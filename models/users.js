'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: {
      type: DataTypes.STRING,
      unique:true,
      validate: {
        isUnique: (value, next) => {
          users.findOne({where:{email:value}})
          .then(result => {
            if(result===null){
              return next();
            }else {
              return next("Email Sudah digunakan, silakan gunakan email yang lain");
            }
          })
          .catch(err => next(err))
        }
      }
    },
    img: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    // associations can be defined here

    users.hasMany(models.events ,
      {as:'createdBy', foreignKey:'user_id'},
    users.hasMany(models.orders, 
      {as:'order', foreignKey:'user_id'}
    ))
  };
  return users;
};