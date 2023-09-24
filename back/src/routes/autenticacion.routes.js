const express = require('express');
const {
    login,
    register
} = require('../controllers/AutenticacionController.js');

const routerAutenticacion = express.Router();

routerAutenticacion.post('/login', login);
routerAdministrador.post('/register', register);

module.exports = routerAutenticacion;
