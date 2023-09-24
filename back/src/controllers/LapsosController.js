const usuario_id_middleware = require('../middleware/Usuario_id'); // Cambiamos el nombre de la variable
const db = require('./../config/config');
   
// Controlador para crear lapsos
const crear_lapsos = (req, res) => {
    const { nombre_lapso } = req.body;
    const usuario_id = usuario_id_middleware(req);

    // Verifica si el campo "nombre_lapso" está presente en la solicitud
    if (!nombre_lapso) {
        return res.status(400).json({ error: 'El campo "nombre_lapso" es requerido' });
    }

    // Consulta SQL para insertar el nuevo lapso
    const sql = 'INSERT INTO lapsos (nombre_lapso, usuario_id) VALUES (?, ?)';

    db.run(sql, [nombre_lapso,usuario_id], function (err) {
        if (err) {
            console.error('Error al insertar el lapso:', err.message);
            return res.status(200).json({ error: 'Error interno del servidor' });
        }

        // Devuelve el ID del lapso recién insertado
        res.status(201).json({ id: this.lastID, mensaje: 'Lapso creado con éxito' });
    });
};


const obtener_lapsos = (req, res) => {
    // Consulta SQL para obtener todos los lapsos
    const sql = 'SELECT * FROM lapsos ORDER BY lapso_id DESC';

    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error('Error al obtener los lapsos:', err.message);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }
        
        // Devolver los lapsos como respuesta
        res.status(200).json({ lapsos: rows });
    });
};


const borrar_lapso = (req, res) => {
    const lapso_id = req.params.lapso_id;

    // Consulta SQL para borrar el lapso
    const sql = 'DELETE FROM lapsos WHERE lapso_id = ?';

    db.run(sql, [lapso_id], function (err) {
        if (err) {
            console.error('Error al borrar el lapso:', err.message);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }

        // Devuelve el ID del lapso recién borrado
        res.status(200).json({ id: this.lastID, mensaje: 'Lapso borrado con éxito' });
    }
);
};

// actualizar lapso id
const actualizar_lapso = (req, res) => {
    const lapso_id = req.params.lapso_id;
    const usuario_id = usuario_id_middleware(req);
    const { nombre_lapso } = req.body;


    // Consulta SQL para actualizar el lapso
    const sql = 'UPDATE lapsos SET nombre_lapso = ? WHERE lapso_id = ? AND usuario_id = ?';

    db.run(sql, [nombre_lapso, lapso_id, usuario_id], function (err) {
        if (err) {
            console.error('Error al actualizar el lapso:', err.message);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }

        // Devuelve el ID del lapso recién actualizado
        res.status(200).json({ id: this.lastID, mensaje: 'Lapso actualizado con éxito' });
    });
};




module.exports = {
    crear_lapsos,
    obtener_lapsos,
    borrar_lapso,
    actualizar_lapso
};
