const express = require('express');
const { create_users } = require('../controllers/UsersController.js');
const { ver_users } = require('../controllers/UsersController.js');

const routerUsers = express.Router();

routerUsers.get('/create_users',create_users); 

routerUsers.get('/users',ver_users); 

module.exports = routerUsers;
