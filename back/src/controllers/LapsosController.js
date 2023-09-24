// const usuario_id = require('../middleware/Usuario_id');
const db = require('./../config/config');
   
// Controlador para crear lapsos
const crear_lapsos = (req, res) => {
    const { nombre_lapso } = req.body;
    
    // const usuario_id=usuario_id(req);

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


module.exports = {
    crear_lapsos
};
