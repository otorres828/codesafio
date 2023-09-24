const db = require('../config/config.js');
// const usuario_id = require('../middleware/Usuario_id');

// Obtener todas las materias
const obtenerTodasLasMaterias = (callback) => {
    const sql = 'SELECT * FROM materias';

    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error('Error al obtener las materias:', err.message);
            callback(err, null);
        } else {
            callback(null, rows);
        }
    });
};

// Ruta para obtener todas las materias
const obtenerMaterias = async (req, res) => {
    obtenerTodasLasMaterias((err, materias) => {
        if (err) {
            res.status(500).json({ error: 'Error interno del servidor' });
        } else {
            res.status(200).json({ materias });
        }
    });
};


// Controlador para crear una nueva materia
const crearMateria = (req, res) => {
    const { titulo, subtitulo, icono, hora_y_fecha, semestre_id } = req.body;

    // Verifica si todos los campos requeridos están presentes
    if (!titulo || !subtitulo || !icono || !hora_y_fecha || !semestre_id) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    // Consulta SQL para insertar la nueva materia
    const sql = 'INSERT INTO materias (titulo, subtitulo, icono, hora_y_fecha, semestre_id) VALUES (?, ?, ?, ?, ?)';

    db.run(sql, [titulo, subtitulo, icono, hora_y_fecha, semestre_id], function (err) {
        if (err) {
            console.error('Error al insertar la materia:', err.message);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }

        // Devuelve el ID de la materia recién insertada
        res.status(201).json({ id: this.lastID, mensaje: 'Materia creada con éxito' });
    });
};

module.exports = {
    materiasController
};
