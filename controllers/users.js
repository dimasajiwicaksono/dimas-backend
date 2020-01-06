const models = require('../models')
const Events = models.events
const Users = models.users



// get all data
exports.index = (req, res) => {
    Users.findAll( ).then(events => res.send(events))
}

exports.store = (req, res) => {
    Users.create(req.body).then(users => {
        res.send({
                users
        })
    })
}

exports.update = (req, res) => {
    Users.update(
        req.body,
        { where: { id: req.params.id } }
    ).then(user => {
        res.send({
            message: "success",
            user
        })
    })
}

exports.delete = (req, res) => {
    Users.destroy({ where: { id: req.params.id } }).then(user => {
        res.send({
            message: "success",
            user
        })
    })
}



exports.show = (req, res) => {
    Users.findOne({
        where: { id: req.params.id },
        attributes: ['id','name','phone','email','img']
    }).then(users => res.send(users))
}