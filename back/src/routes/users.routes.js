const express = require('express');
const { create_users } = require('../controllers/UsersController.js');

const routerUsers = express.Router();

routerUsers.get('/create_users',create_users); 


module.exports = routerUsers;
