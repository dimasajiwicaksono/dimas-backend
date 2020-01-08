'use strict';
module.exports = (sequelize, DataTypes) => {
  const events = sequelize.define('events', {
    title: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    start_time:DataTypes.DATE,
    end_time:DataTypes.DATE,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    urlMaps: DataTypes.STRING,
    img: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  }, {});
  events.associate = function(models) {
    // associations can be defined 
    events.belongsTo(models.users, 
      {as :'createdBy', foreignKey:'user_id'},
    events.belongsTo(models.categories,
      {as :'category', foreignKey:'category_id'},
    events.hasMany(models.orders,
        {as :'event', foreignKey:'event_id'},
    events.hasMany(models.likes, 
          { foreignKey: 'event_id'})
      )))
    };
  return events;
};