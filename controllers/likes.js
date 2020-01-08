const models = require('../models')
const Likes = models.likes
const Events = models.events
const Users = models.users

exports.index = (req, res) => {
    Likes.findAll(
        {
            attributes: ['id','user_id', 'event_id'],
            // include: [
            //     {
            //         model: users,
            //         as: 'usersLikes',
            //         attributes: { exclude: ['password', 'createdAt', 'updaatedAt'] }
            //     },
            //     {
            //         model: events,
            //         as: 'eventsLiked',
            //         attributes: { exclude: ['createdAt', 'updatedAt'] }
            //     }
            // ]
        })
        .then(data => {
            res.send(data)
        }).catch(err => res.send(err))
}

exports.show = (req, res) => {
    Likes.findAll(
        {
            where: { user_id: req.params.id },
            attributes: ['user_id', 'event_id'],
            include: [
                {
                    model: Users,
                    as: 'usersLikes',
                    attributes: { exclude: ['password', 'createdAt', 'updaatedAt'] }
                },
                {
                    model: Events,
                    as: 'eventsLiked',
                    attributes: { exclude: ['createdAt', 'updatedAt'] }
                }
            ]
        })
        .then(data => {
            res.send(data)
        }).catch(err => res.send(err))
}

exports.liked = (req, res) => {
    Likes.findOne(
        {
            where:
            {
                user_id: req.body.user_id,
                event_id: req.body.event_id
            }
        })
        .then(data => {
            if (data) {
                res.send({ Likes: true, data })
            } else {
                res.send({ Likes: false, data })
            }
        }).catch(err => res.send(err))
}

exports.create = (req, res) => {
    Likes.create(req.body)
        .then(data => {
            res.send(data)
        }).catch(err => res.send(err))
}

exports.destroy = (req, res) => {
    Likes.destroy({
        where: { id: req.params.id }
    })
        .then(data => {
            res.send({message: "success delete data"})
        }).catch(err => res.send(err))
}