const express = require('express');
const { crear_notas, obtener_notas, borrar_notas, actualizar_notas} = require('../controllers/NotasController.js');



const verify = require('./../middleware/verify.js')
const routerNotas = express.Router();

// Ruta para crear una nueva notas
routerNotas.post('/crear_notas/:materia_id', verify.verify, crear_notas);
routerNotas.get('/obtener_notas/:materia_id', verify.verify, obtener_notas);
routerNotas.delete('/borrar_notas/:notas_id', verify.verify, borrar_notas);
routerNotas.put('/actualizar_notas/:notas_id', verify.verify, actualizar_notas);

module.exports = routerNotas;
