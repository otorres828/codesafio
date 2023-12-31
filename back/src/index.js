const express = require("express");
const cors = require("cors");
const http = require("http");
const IP = require("ip");
const db = require("./config/config");

let app = express();
let server = http.createServer(app);

const routerAutenticacion = require("./routes/autenticacion.routes.js");
const routerLapsos = require("./routes/lapsos.routes.js");
const routerMaterias = require("./routes/materias.routes.js");
const routerRecordatorios = require("./routes/recordatorios.routes.js");
const routerNotas = require("./routes/notas.routes.js");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/*------------------------RUTAS---------------------- */
app.use(routerAutenticacion);
app.use(routerLapsos);
app.use(routerMaterias);
app.use(routerRecordatorios);
app.use(routerNotas);
/*------------------------FIN RUTAS---------------------- */


/*------------------------SOCKETS------------------------ */
const io = require('socket.io')(server, {
  cors: {
    origin: "*",  // Allow all origins
    methods: ["GET", "POST"]
  }
});
// Adjuntar la instancia io a la aplicación Express
app.io = io;
io.on('connection', () => {
  console.log("Conexion al socket exitosa");
});
/*-----------------------FIN SOCKETS------------------------- */

/*-----------------------CRON------------------------- */
// require('./notificacionespush/notificaciones')(io)
/*-----------------------FIN CRON------------------------- */

db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS usuarios 
    (id INTEGER PRIMARY KEY AUTOINCREMENT, 
        nick VARCHAR(255), 
        clave VARCHAR(255)
        );`
  );

  // Crear la tabla "semestres" para los semestres
  db.run(`CREATE TABLE IF NOT EXISTS lapsos (
    lapso_id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre_lapso VARCHAR(255),
    usuario_id INTEGER,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON UPDATE CASCADE ON DELETE CASCADE);
  `);

  // Crear la tabla "materias" para las materias
  db.run(
    `CREATE TABLE IF NOT EXISTS materias (
        materia_id INTEGER PRIMARY KEY AUTOINCREMENT, 
        titulo VARCHAR(255),
        icono TEXT, 
        lapso_id INTEGER,
        usuario_id INTEGER,
        FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (lapso_id) REFERENCES lapsos(lapso_id) ON UPDATE CASCADE ON DELETE CASCADE
      );`
  );

  // Crear la tabla "recordatorios" para los recordatorios
  db.run(
    `CREATE TABLE IF NOT EXISTS recordatorios(
        record_id INTEGER PRIMARY KEY AUTOINCREMENT, 
        titulo VARCHAR(255),
        subtitulo VARCHAR(255),
        fecha_hora DATETIME,
        usuario_id INTEGER,
        FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON UPDATE CASCADE ON DELETE CASCADE);`
  );

  // Crear la tabla "notas" para las notas
  db.run(
    `CREATE TABLE IF NOT EXISTS notas(
        notas_id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre_examen VARCHAR(255),
        nota_obtenida REAL,
        porcentaje_evaluacion REAL,
        materia_id INTEGER, 
        usuario_id INTEGER,
        FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON UPDATE CASCADE ON DELETE CASCADE);`
  );
});

// INICIAR SERVIDOR
const PORT = process.env.PORT || 4000;
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.get("/", (req, res) => {
  const ipAddress = IP.address();
  res.send(ipAddress);
});




