const express = require('express');
// const verify = require('./../middleware/verify');
const routerMaterias = express.Router();

const { materiasController } = require('../controllers/MateriasController.js');

router.get('/materias', materiaController.obtenerMaterias);

// Ruta para crear una nueva materia
router.post('/crearMateria',materiasController.crearMateria);

module.exports = routerMaterias;
