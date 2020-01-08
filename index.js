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
const likeController = require('./controllers/likes')


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
    router.get('/events/:start_time', eventController.indexDate)
    router.put('/event/:id', eventController.update)
    router.get('/events/:title/search', eventController.indexSearch)
    

    // category
    router.get('/categories', categoryController.index);
    router.get('/category/:id', categoryController.show);
    router.post('/category', categoryController.store);

    //Order
    router.post('/order', orderController.store);
    router.get('/orders', orderController.index);
    router.put('/order/:id', orderController.update); 
    router.get('/order/:id',orderController.show);
    router.get('/user/:id/orders',orderController.orderByUser)
    router.get('/user/:id/orders/pending',orderController.pending)
    router.get('/user/:id/orders/approved',orderController.approved)

    //User
    router.post('/user', userController.store);
    router.get('/user/:id', userController.show);
    router.put('/user/:id', userController.update);    
    router.delete('/user/:id', userController.delete);
    router.get('/users', userController.index); 

    // (path, middleware, action_in_controller)
    router.post('/login', authController.login);
    router.get('/login', authController.login);

    router.post('/register', authController.register)


    // likes 
    router.get('/likes_all', likeController.index)
    router.post('/like', likeController.liked) // show like form event and user event like
    router.post('/likes', likeController.create) //likes events
    router.delete('/likes/:id', likeController.destroy) // delete field
    router.get('/users/:id/likes', likeController.show) //show events that user liked

});

app.listen(port, () => console.log(`Listening on port ${port}!`));