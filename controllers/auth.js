
const jwt = require ('jsonwebtoken')

const models = require('../models')
const Users = models.users

//login
exports.login = (req, res) => {
    const username = req.body.username
    const password = req.body.password

    Users.findOne( {where: {username, password}}).then(user => {
        if(user) {
            const token = jwt.sign({
                userId: user.id
            }, "my-secret-key")
            res.send({
                user,
                token
            })
        }else{
            res.send({
                    error: true,
                    message: "Wrong Username or Password"
            })
        }
    })
}

// cretate new user with register
exports.register = (req, res) => {

    Users.create(req.body).then(users => {
        if(Users) {
            const token = jwt.sign({userId : users.id}, 'my-secret-key')
            res.send({
                message : 'success',
                users,
                token
        })
        } else {
            res.send({
                error: true,
                message: 'Wrong'
            })
        }
    })
}
