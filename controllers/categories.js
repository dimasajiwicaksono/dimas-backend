const models = require('../models')
const Categories = models.categories




// get all data
exports.index = (req, res) => {
    Categories.findAll( {
        attributes:['id','name']}
    ).then(categories => res.send(categories))
}


exports.show = (req, res) => {
    Categories.findOne({
        where: {id: req.params.id }   
    }).then(categories => res.send(categories))
}


exports.store = (req, res) => {
    Categories.create(req.body).then(categories => {
        res.send({
                categories
        })
    })
}
