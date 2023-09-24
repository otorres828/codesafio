const express = require("express");
const cors = require("cors");
const http = require('http');
const IP = require('ip');
const db = require('./config/config');

let app = express();
let server = http.createServer(app); 

const routerAutenticacion = require('./routes/autenticacion.routes.js')

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

/*------------------------RUTAS---------------------- */
app.use(routerAutenticacion);
/*------------------------FIN RUTAS---------------------- */

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS usuarios (usuario_id INTEGER PRIMARY KEY AUTOINCREMENT, nickname VARCHAR(255), password VARCHAR(255))');    

    // Crear la tabla "semestres" para los semestres
    db.run('CREATE TABLE IF NOT EXISTS lapsos (lapso_id INTEGER PRIMARY KEY AUTOINCREMENT, nombre_lapso VARCHAR(255))');

    // Crear la tabla "materias" para las materias
    db.run('CREATE TABLE IF NOT EXISTS materias (materia_id INTEGER PRIMARY KEY AUTOINCREMENT, titulo VARCHAR(255), subtitulo VARCHAR(255), icono TEXT, fecha_hora DATETIME, lapso_id INTEGER, FOREIGN KEY (lapso_id) REFERENCES lapsos(lapso_id))');

    // Crear la tabla "recordatorios" para los recordatorios
    db.run('CREATE TABLE IF NOT EXISTS recordatorios (record_id INTEGER PRIMARY KEY AUTOINCREMENT, materia_id INTEGER, fecha_hora DATETIME, FOREIGN KEY (materia_id) REFERENCES materias(materia_id))');

    // Crear la tabla "notas" para las notas
    db.run('CREATE TABLE IF NOT EXISTS notas (notas_id INTEGER PRIMARY KEY AUTOINCREMENT, nombre_examen VARCHAR(255), nota_obtenida REAL, porcentaje_evaluacion REAL, materia_id INTEGER, FOREIGN KEY (materia_id) REFERENCES materias(materia_id))');

});

// INICIAR SERVIDOR
const PORT = process.env.PORT || 4000;
server.listen(PORT,"0.0.0.0", () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    
});

app.get('/', (req, res) => {
    const ipAddress = IP.address();
    res.send(ipAddress)
})

module.exports = app; // Cambiado de io a app
