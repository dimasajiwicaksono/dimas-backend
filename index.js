/*jshint esversion:6*/

require('express-group-routes');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001 ;

app.use(cors());
app.use(bodyParser.json());

//controllers
const eventController = require('./controllers/events');
const userController = require('./controllers/users');
const categoryController = require('./controllers/categories');
const orderController = require('./controllers/orders')
const authController = require('./controllers/auth')

// // middleware
const {authenticated} = require ('./middleware');


app.get('/', (req, res) => {
    //res means, response, and it send string "Hello Express!" to the API
    res.send('Hello Express!')
})    

app.group("/api/v1", (router) => {

    router.get('/events', eventController.index);
    router.get('/event/:id', eventController.show)
    router.post('/event', eventController.store); 
    router.get('/category/:id/events', eventController.eventCategory)
    
    
    // category
    router.get('/categories', categoryController.index);
    router.get('/category/:id', categoryController.show);
    router.post('/category', categoryController.store);

    //Order
    router.post('/order', orderController.store);
    router.get('/orders', orderController.index);
    router.get('/order/:id',orderController.show);
    router.get ('/user/:id/orders', orderController.orderByUser)

    //User
    router.post('/user', userController.store);
    router.get('/user/:id', userController.show);
    router.patch('/user/:id', userController.update);    
    router.delete('/user/:id', userController.delete);
    router.get('/user', userController.index); 

// (path, middleware, action_in_controller)
    router.post('/login', authController.login);
    router.get('/login', authController.login);

    router.post('/register', authController.register)
});

app.listen(port, () => console.log(`Listening on port ${port}!`));