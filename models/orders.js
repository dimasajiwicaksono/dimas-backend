'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    event_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER,
    status: DataTypes.STRING,
    attachment: DataTypes.STRING,
    user_id : DataTypes.INTEGER
  }, {});
  orders.associate = function(models) {
    // associations can be defined here

    orders.belongsTo (models.events, 
      {as: 'event', foreignKey:'event_id'},
  
    orders.belongsTo (models.users, 
      {as: 'createdBy', foreignKey:'user_id'},
    ))
    }
  return orders;
};