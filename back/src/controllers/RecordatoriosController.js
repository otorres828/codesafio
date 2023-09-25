const db = require("../config/config.js");
const usuario_id_middleware = require("../middleware/Usuario_id");

// Controlador para crear una nueva materia
const crear_record = (req, res) => {
    const { titulo, subtitulo, fecha } = req.body;

    const usuario_id = usuario_id_middleware(req);
  
    // Verifica si todos los campos requeridos están presentes
    if (!titulo || !fecha) {
      return res.status(400).json({ error: "El titulo y la fecha es requerido" });
    }
  
    const sql =
      `INSERT INTO recordatorios(
        titulo, subtitulo, fecha_hora, usuario_id) VALUES (?, ?, ?, ?)`;
    db.run(
      sql,
      [titulo, subtitulo, fecha, usuario_id],
      function (err) {
        if (err) {
          console.error("Error al insertar el recordatorio:", err.message);
          return res.status(500).json({ error: "Error interno del servidor" });
        }
  
        res
          .status(200)
          .json({ id: this.lastID, mensaje: "Recordatorio creado con éxito" });
      }
    );
  };
  

const obtener_record = (req, res) => {
  // Consulta SQL para obtener todos los recordatorios

  const user_id = usuario_id_middleware(req);

  const sql = `SELECT * 
  FROM recordatorios
  WHERE usuario_id = ${user_id}
  ORDER BY fecha_hora DESC;
  `;

  db.all(sql, (err, rows) => {
    if (err) {
      console.error("Error al obtener las materias:", err.message);
      return res.status(500).json({ error: "Error interno del servidor" });
    }

    res.status(200).json({ recordatorios: rows });
  });
};

const borrar_record = (req, res) => {

  const record_id = req.params.record_id;

  // Consulta SQL para borrar el lapso
  const sql = "DELETE FROM recordatorios WHERE record_id = ?";

  db.run(sql, [record_id], function (err) {
    if (err) {
      console.error("Error al borrar el recordatorio:", err.message);
      return res.status(500).json({ error: "Error interno del servidor" });
    }

    // Devuelve el ID del recordatorio recién borrado
    res
      .status(200)
      .json({ id: this.lastID, mensaje: "Recordatorio borrado con éxito" });
  });
};

// actualizar lapso id
const actualizar_record = (req, res) => {
    const record_id = req.params.record_id;
    const usuario_id = usuario_id_middleware(req);
    const { titulo, subtitulo, fecha_hora } = req.body;

    // Consulta SQL para actualizar el recordatorio
    const sql =
      `UPDATE recordatorios SET 
      titulo = ?, 
      subtitulo = ?,
      fecha_hora = ?
      WHERE record_id = ? AND usuario_id = ?`;
  
    db.run(sql, [titulo, subtitulo, fecha_hora, record_id, usuario_id], function (err) {
      if (err) {
        console.error("Error al actualizar el recordatorio:", err.message);
        return res.status(500).json({ error: "Error interno del servidor" });
      }
  
      // Devuelve el ID del lapso recién actualizado
      res
        .status(200)
        .json({ id: this.lastID, mensaje: "Recordatorio actualizado con éxito" });
    });
  };

module.exports = {
  crear_record,
  obtener_record,
  borrar_record,
  actualizar_record
};
