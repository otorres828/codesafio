const db = require("../config/config.js");
const usuario_id_middleware = require("../middleware/Usuario_id");

// Controlador para crear una nueva materia
const crear_materia = (req, res) => {
  const { titulo, subtitulo, icono, fecha_hora, lapso_id } = req.body;

  // console.log(req.body)

  const usuario_id = usuario_id_middleware(req);

  // Verifica si todos los campos requeridos están presentes
  if (!titulo || !subtitulo || !icono || !fecha_hora || !lapso_id) {
    console.log(req.body);

    return res.status(400).json({ error: "Todos los campos son requeridos" });
  }

  // Consulta SQL para insertar la nueva materia
  const sql =
    "INSERT INTO materias (titulo, subtitulo, icono, fecha_hora, lapso_id, usuario_id) VALUES (?, ?, ?, ?, ?, ?)";

  db.run(
    sql,
    [titulo, subtitulo, icono, fecha_hora, lapso_id, usuario_id],
    function (err) {
      if (err) {
        console.error("Error al insertar la materia:", err.message);
        return res.status(500).json({ error: "Error interno del servidor" });
      }

      // Devuelve el ID de la materia recién insertada
      res
        .status(201)
        .json({ id: this.lastID, mensaje: "Materia creada con éxito" });
    }
  );
};

const obtener_materia = (req, res) => {
  // Consulta SQL para obtener todos los lapsos
  const sql = "SELECT * FROM materias";

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error("Error al obtener las materias:", err.message);
      return res.status(500).json({ error: "Error interno del servidor" });
    }

    // Devolver las materias como respuesta
    res.status(200).json({ materias: rows });
  });
};

const borrar_materia = (req, res) => {
  const materia_id = req.params.materia_id;

  // Consulta SQL para borrar el lapso
  const sql = "DELETE FROM materias WHERE materia_id = ?";

  db.run(sql, [materia_id], function (err) {
    if (err) {
      console.error("Error al borrar la materia:", err.message);
      return res.status(500).json({ error: "Error interno del servidor" });
    }

    // Devuelve el ID del lapso recién borrado
    res
      .status(200)
      .json({ id: this.lastID, mensaje: "Materia borrada con éxito" });
  });
};

// actualizar lapso id
const actualizar_materia = (req, res) => {
    const materia_id = req.params.materia_id;
    const usuario_id = usuario_id_middleware(req);
    const { titulo, subtitulo, icono, fecha_hora, lapso_id } = req.body;
  
    // Consulta SQL para actualizar el lapso
    const sql =
      `UPDATE materias SET 
      titulo = ?, 
      subtitulo = ?,  
      icono = ?, 
      fecha_hora = ?, 
      lapso_id=? 
      
      WHERE materia_id = ? AND usuario_id = ?`;
  
    db.run(sql, [titulo, subtitulo, icono, fecha_hora, lapso_id, materia_id, usuario_id], function (err) {
      if (err) {
        console.error("Error al actualizar el lapso:", err.message);
        return res.status(500).json({ error: "Error interno del servidor" });
      }
  
      // Devuelve el ID del lapso recién actualizado
      res
        .status(200)
        .json({ id: this.lastID, mensaje: "Materia actualizada con éxito" });
    });
  };

module.exports = {
  crear_materia,
  obtener_materia,
  borrar_materia,
  actualizar_materia
};
