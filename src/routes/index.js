const express = require('express');
const routes = express.Router();

const userController = require('../controllers/userController');

routes
    .get('/user', userController.get)
    .post('/user', userController.post)
    .put('/user/:_id', userController.update)
    .delete('/user/:_id', userController.delete)

module.exports = routes;