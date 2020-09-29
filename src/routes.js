const express = require('express');
const UserController = require('./controllers/UserController');

const routes = express.Router();


routes.get('/user', UserController.getUser)
routes.post('/register', UserController.registerUser)


module.exports = routes;