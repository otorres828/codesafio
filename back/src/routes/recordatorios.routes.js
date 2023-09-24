const express = require('express');
const { crear_record, obtener_record, borrar_record, actualizar_record } = require('../controllers/RecordatoriosController.js');
const verify = require('./../middleware/verify.js')
const routerRecordatorios = express.Router();

// Ruta para crear una nueva materia
routerRecordatorios.post('/crear_record', verify.verify, crear_record);
routerRecordatorios.get('/obtener_record', verify.verify, obtener_record);
routerRecordatorios.delete('/borrar_record/:record_id', verify.verify, borrar_record);
routerRecordatorios.put('/actualizar_record/:record_id', verify.verify, actualizar_record);

module.exports = routerRecordatorios;
