const express = require('express');
const { crear_materia, obtener_materia, borrar_materia, actualizar_materia} = require('../controllers/MateriasController.js');
const verify = require('./../middleware/verify.js')
const routerMaterias = express.Router();

// Ruta para crear una nueva materia
routerMaterias.post('/crear_materias/:lapso_id', verify.verify, crear_materia);
routerMaterias.get('/obtener_materias/:lapso_id', verify.verify, obtener_materia);
routerMaterias.delete('/borrar_materia/:materia_id', verify.verify, borrar_materia);
routerMaterias.put('/actualizar_materia/:materia_id', verify.verify, actualizar_materia);

module.exports = routerMaterias;
