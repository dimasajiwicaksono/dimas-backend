const models = require('../models')
const { Op } = require('sequelize')
const Orders = models.orders
const Events = models.events
const Users = models.users
const Categories = models.categories

exports.store = (req, res) => {
    Orders.create(
        req.body,
        {
            where: { id: req.params.id },
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
            { model: Events, as: 'event', attributes: ['id', 'title', 'category_id', 'price', 'description', 
            'address', 'urlMaps', 'img', 'user_id'] },
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
                attributes: ['id', 'title', 'category_id', 'price', 'description',
                                'address', 'urlMaps', 'img', 'user_id']
            }
        ]
    }).then(events => res.send(events))
}



exports.orderByUser = (req, res) => {
    Orders.findAll(
        {
            where: { user_id: req.params.id },
            include: [
                { model: Users, as: 'createdBy', attributes: ['id', 'name'] },
                { model: Events, as: 'event', attributes: ['id', 'title', 'category_id', 'price', 
                'description', 'address', 'urlMaps', 'img', 'user_id'] },
            ]
        }
    ).then(article => res.send(article))
        .catch(err => res.send(err))
}



exports.update = (req, res) => {
    Orders.update(
        req.body,
        { where: { id: req.params.id } }
    ).then(order => {
        res.send({
            message: "success",
            order
        })
    })
}



exports.pending = (req, res) => {
    Orders.findAll(
        {
            where: {
                user_id: req.params.id,
                status: { [Op.notLike]: 'approved' }
            },
            include: [
                {
                    model: Users,
                    as: 'createdBy',
                    attributes: ['id', 'name']
                },
                { model: Events, as: 'event', attributes: ['id', 'title', 'category_id', 'price', 
                'description', 'address', 'urlMaps', 'img', 'user_id'] },
            ]
        }
    ).then(data => {
        if (data) {
            res.send({ data, value: true })
        } else {
            res.send({ value: false })
        }
    }).catch(err => res.send(err))
}



exports.approved = (req, res) => {
    Orders.findAll(
        {
            where: {
                user_id: req.params.id,
                status:'approved' 
            },
            include: [
                {
                    model: Users,
                    as: 'createdBy',
                    attributes: ['id', 'name']
                },
                { model: Events, as: 'event', attributes: ['id', 'title', 'category_id', 'price', 
                'description', 'address', 'urlMaps', 'img', 'user_id'] },
            ]
        }
    ).then(data => {
        if (data) {
            res.send({ data, value: true })
        } else {
            res.send({ value: false })
        }
    }).catch(err => res.send(err))
}





















// exports.pending = (req, res) => {
//     Users.findOne({
//         where: { id: req.params.id },
//         attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
//         include: [
//             {
//                 model: Orders,
//                 as: "order",
//                 where: { status: {[Op.notLike]: 'approved'} },
//                 include: [
//                     {
//                         model: Events,
//                         as: "event",
//                         attributes: { exclude: ['createdAt', 'updatedAt'] },
//                 //         include: [
//                 //             {
//                 //                 model: Categories,
//                 //                 as: "category",
//                 //                 attributes: ['name','img']
//                 //             }
//                 //         ]
//                     }
//                 ]
//             }
//         ]
//     }).then(data => {
//         if (data) {
//             res.send({data, value:true})
//         } else {
//             res.send({ value: false })
//         }
//     }).catch(err => res.send(err))
// }