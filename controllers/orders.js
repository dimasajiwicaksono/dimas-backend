const models = require('../models')
const Orders = models.orders
const Events = models.events
const Users = models.users
const Categories = models.categories

exports.store = (req, res) => {
    Orders.create(
        req.body,
        { where: { id: req.params.id },
    }).then(orders => {
        res.send({
            message: "success",
            orders 
        })
    })
}

    

exports.index = (req, res) => {
    Orders.findAll({
        include: [
            { model: Events, as: 'event', attributes: ['id', 'title', 'category_id', 'price', 'description', 'address', 'urlMaps', 'img', 'author_id'] },
        ], attributes: ['id', 'event_id', 'quantity', 'totalPrice', 'status']
    }).then(events => res.send(events))
}

exports.show = (req, res) => {
    Orders.findOne({
        where: { id: req.params.id },
        include: [
            {
                model: Events,
                // nested array
                include: [
                    { model: Categories, as: 'category', attributes: ['id', 'name'] },
                    { model: Users, as: 'createdBy', attributes: ['id', 'name', 'phone', 'email', 'img'] }
                ], 
                
                as: 'event',
                attributes: ['id', 'title', 'category_id', 'price', 'description', 'address', 'urlMaps', 'img', 'author_id']
            }
        ]
    }).then(events => res.send(events))
}



exports.events = (req, res) => {
    Events.findAll(
        {
            where: { user_id: req.params.id },
            include: [
                { model: Categories, as: 'category', attributes: ['id', 'name'] }
            ]
        }
    ).then(article => res.send(article))
        .catch(err => res.send(err))
}