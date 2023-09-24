const express = require("express");
const cors = require("cors");
const http = require('http');
const IP = require('ip');

let app = express();
let server = http.createServer(app); 


const routerMaterias = require('./routes/materias.routes.js')

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

/*------------------------RUTAS---------------------- */
app.use(routerMaterias);

/*------------------------FIN RUTAS---------------------- */

// INICIAR SERVIDOR
const PORT = process.env.PORT || 3000;
server.listen(PORT,"0.0.0.0", () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});


app.get('/', (req, res) => {
    const ipAddress = IP.address();
    res.send(ipAddress)
})

module.exports = app; // Cambiado de io a app
