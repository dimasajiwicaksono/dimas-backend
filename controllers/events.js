const models = require('../models')
const {Op} = require('sequelize')
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
            message:'success',
            events
        })
    }).catch(err => res.send(err))
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



exports.indexDate = (req, res) => {

    // initial variable
    var dateStart = new Date (req.params.start_time)
    var dateEnd = new Date(req.params.start_time)

    // set date for tomorrow or next date
    dateEnd.setDate(dateEnd.getDate() + 1 )


    // find All event where date today
    Events.findAll ({
        where : 
        {
            start_time  : { [ Op.between] : [dateStart, dateEnd]}
        },
        include : [
            {
            model : Categories,
            as : 'category',
            attributes : [ 'id', 'name']
            }
        ]
    }).then(data => {
        res.send(data)
    }).catch(err => res.send(err))
}


exports.indexSearch = (req, res) => {
    Events.findAll({
        where:
        {
            title: { [Op.like]: `%${req.params.title}%`}
        },
        include: [
            {
                model: Categories,
                as: "category",
                attributes: ['id', 'name']
            },
            {
                model: Users,
                as: "createdBy",
                attributes: ['id', 'username', 'phone']
            }
        ],
        limit: 5,
    }).then(data => {
        res.send(data)
    }).catch(err => res.send(err))
}