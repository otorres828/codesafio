const express = require('express');
const { crear_lapsos } = require('../controllers/LapsosController.js');

const routerLapsos = express.Router();

routerLapsos.post('/crear_lapsos',crear_lapsos); 

module.exports = routerLapsos;