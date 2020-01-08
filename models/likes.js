'use strict';
module.exports = (sequelize, DataTypes) => {
    const likes = sequelize.define('likes', {
        event_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER
    }, {});
    likes.associate = function (models) {
        // associations can be defined here
        likes.belongsTo(models.users, {
            foreignKey: 'user_id',
            as: 'usersLikes',
        }),
            likes.belongsTo(models.events, {
                foreignKey: 'event_id',
                as: 'eventsLiked',
            })
    };
    return likes;
};