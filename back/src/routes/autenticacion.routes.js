const express = require('express');
const {
    login,
    register
} = require('../controllers/AutenticacionController.js');

const routerAutenticacion = express.Router();

routerAutenticacion.post('/login', login);
routerAutenticacion.post('/registrarse', register);

module.exports = routerAutenticacion;
