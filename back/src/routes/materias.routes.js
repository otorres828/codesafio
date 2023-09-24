const express = require('express');
const { todas_materias } = require('../controllers/MateriasController.js');

const routerMaterias = express.Router();

routerMaterias.get('/todas_materias',todas_materias); 

module.exports = routerMaterias;
