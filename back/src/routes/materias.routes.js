const express = require('express');
const { materiasController } = require('../controllers/MateriasController.js');

router.get('/materias', materiaController.obtenerMaterias);

const routerMaterias = express.Router();

// routerMaterias.get('/crear_materias', materiasController);

// Ruta para crear una nueva materia
router.post('/crearMateria', materiasController.crearMateria);

module.exports = routerMaterias;
