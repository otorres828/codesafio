const express = require('express');
const { crear_lapsos, obtener_lapsos, borrar_lapso, actualizar_lapso  } = require('../controllers/LapsosController.js');
const {verify} = require('./../middleware/verify.js')
const routerLapsos = express.Router();

routerLapsos.get('/lapsos/obtener_lapsos', verify, obtener_lapsos);
routerLapsos.post('/lapsos/crear_lapsos', verify, crear_lapsos); 

routerLapsos.delete('/lapsos/borrar_lapso/:lapso_id', verify, borrar_lapso);
routerLapsos.put('/lapsos/actualizar_lapso/:lapso_id', verify, actualizar_lapso);

module.exports = routerLapsos;