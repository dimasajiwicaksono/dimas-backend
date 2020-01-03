const models = require('../models')
const Events = models.events
const Categories = models.categories
const Users = models.users



// get all data
exports.index = (req, res) => {
    Events.findAll({
        include: [
            { model: Categories, as: 'category', attributes: ['id','name'] },
            { model: Users, as: 'createdBy', attributes: ['id','name','phone','email'] }
        ]
    } ).then(events => res.send(events))
}

exports.eventCategory = (req, res) => {
    Events.findAll(
        {
            where: { category_id: req.params.id },
            include: [
                { model: Categories, as: 'category', attributes: ['id', 'name'] }
            ]
        }
    ).then(article => res.send(article))
        .catch(err => res.send(err))
}



exports.show = (req, res) => {
    Events.findOne({
        where: { id: req.params.id },
        include:[
            { model: Categories, as: 'category', attributes: ['id', 'name'] },
            { model: Users, as:'createdBy', attributes:['id','name','phone','email','img']}
        ]
    }).then(events => res.send(events))
}


exports.store = (req, res) => {
    Events.create(req.body).then(events => {
        res.send({
                events
        })
    })
}

exports.update = (req, res) => {
    Events.update(
        req.body,
        { where: { id: req.params.id } }
    ).then(events => {
        res.send({
            message: "success",
            events
        })
    })
}

exports.delete = (req, res) => {
    Events.destroy({ where: { id: req.params.id } }).then(events => {
        res.send({
            message: "success",
            events
        })
    })
}