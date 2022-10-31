const express = require('express');
const routes = express.Router();

const userController = require('../controllers/userController');
const authUser = require('../controllers/auth/authUser');
const devicesController = require('../controllers/devicesController');

routes
    // user routes 
    .get('/user', userController.get)
    .post('/user', userController.post)
    .put('/user/:_id', userController.update)
    .delete('/user/:_id', userController.delete)

    // auth
    .post('/auth', authUser.post)
    .post('/checkUser', authUser.checkUser)

    // devices routes
    .get('/devices/:id', devicesController.find)
    .post('/devices', devicesController.post)
    .put('/devices/:_id', devicesController.update)
    .delete('/devices/:_id', devicesController.delete)

module.exports = routes;