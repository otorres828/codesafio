const express = require('express');
const { create_users } = require('../controllers/UsersController.js');
const { ver_users } = require('../controllers/UsersController.js');

const routerUsers = express.Router();

routerUsers.get('/create_users',create_users, verify); 

routerUsers.get('/users',ver_users, verify); 

module.exports = routerUsers;
