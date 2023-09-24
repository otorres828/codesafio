const express = require('express');
const { crear_lapsos, obtener_lapsos, borrar_lapso, actualizar_lapso  } = require('../controllers/LapsosController.js');
const verify = require('./../middleware/verify.js')
const routerLapsos = express.Router();

routerLapsos.post('/crear_lapsos', verify.verify, crear_lapsos); 
routerLapsos.get('/obtener_lapsos', verify.verify, obtener_lapsos);

routerLapsos.delete('/borrar_lapso/:lapso_id', verify.verify, borrar_lapso);
routerLapsos.put('/actualizar_lapso/:lapso_id', verify.verify, actualizar_lapso);

module.exports = routerLapsos;