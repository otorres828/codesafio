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
    db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, nickname VARCHAR(255), password VARCHAR(255)');    
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
