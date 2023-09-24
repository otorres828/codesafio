const db = require('./../config/config');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'KGGK>HKHVHJVKBKJKJBKBKHKBMKHB'
   
// Controlador para crear lapsos
const crear_lapsos = (req, res) => {
    const { nombre_lapso } = req.body;
    
    console.log(usuario_id(req));

    // Verifica si el campo "nombre_lapso" está presente en la solicitud
    if (!nombre_lapso) {
        return res.status(400).json({ error: 'El campo "nombre_lapso" es requerido' });
    }

    // Consulta SQL para insertar el nuevo lapso
    const sql = 'INSERT INTO lapsos (nombre_lapso) VALUES (?)';

    db.run(sql, [nombre_lapso], function (err) {
        if (err) {
            console.error('Error al insertar el lapso:', err.message);
            return res.status(200).json({ error: 'Error interno del servidor' });
        }

        // Devuelve el ID del lapso recién insertado
        res.status(201).json({ id: this.lastID, mensaje: 'Lapso creado con éxito' });
    });
};

function usuario_id(req){   
    const token = req.headers.authorization.split(' ')[1];
    //decodificamos el token
    const decodedToken = jwt.verify(token,SECRET_KEY);
    //obtenemos el id del administrador logueado
    return decodedToken.id;
}

module.exports = {
    crear_lapsos
};
