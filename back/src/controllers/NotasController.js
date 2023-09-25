const db = require("../config/config.js");
const usuario_id_middleware = require("../middleware/Usuario_id");

// Controlador para crear una nueva materia
const crear_notas = (req, res) => {
  console.log(req.body)
    const { nombre_examen, nota_obtenida, porcentaje_evaluacion } = req.body;

    materia_id = req.params.materia_id;

    const usuario_id = usuario_id_middleware(req);
  
  
    // Consulta SQL para insertar la nueva materia
    const sql =
      `INSERT INTO notas(nombre_examen, nota_obtenida, porcentaje_evaluacion,materia_id, usuario_id ) VALUES (?, ?, ?, ?, ?)`;
    db.run(
      sql,
      [nombre_examen, nota_obtenida, porcentaje_evaluacion, materia_id, usuario_id],
      function (err) {
        if (err) {
          console.error("Error al insertar la nota:", err.message);
          return res.status(200).json({ error: "Error interno del servidor" });
        }
  
        // Devuelve el ID de la nota recién insertada
        res
          .status(201)
          .json({ id: this.lastID, mensaje: "Nota creada con éxito" });
      }
    );
  };
  

const obtener_notas = (req, res) => {
  // Consulta SQL para obtener todos los notas
  const materia_id = req.params.materia_id;
  const sql = `SELECT * 
                FROM notas
                WHERE materia_id = ${materia_id}`;
  db.all(sql, (err, rows) => {
    if (err) {
      console.error("Error al obtener las notas:", err.message);
      return res.status(200).json({ error: "Error interno del servidor" });
    }
    res.status(200).json({ notas: rows });
  });
};

const borrar_notas = (req, res) => {
  const notas_id = req.params.notas_id;
  // Consulta SQL para borrar el lapso
  const sql = "DELETE FROM notas WHERE notas_id = ?";

  db.run(sql, [notas_id], function (err) {
    if (err) {
      console.error("Error al borrar la nota:", err.message);
      return res.status(200).json({ error: "Error interno del servidor" });
    }

    // Devuelve el ID del Nota recién borrado
    res
      .status(200)
      .json({ id: this.lastID, mensaje: "Nota borrado con éxito" });
  });
};

// actualizar lapso id
const actualizar_notas = (req, res) => {
    const notas_id = req.params.notas_id;
    const usuario_id = usuario_id_middleware(req);
    const { nombre_examen, nota_obtenida, porcentaje_evaluacion } = req.body;
    // Consulta SQL para actualizar la nota
    const sql =
      `UPDATE notas SET 
      nombre_examen = ?, 
      nota_obtenida = ?,
      porcentaje_evaluacion = ?
      WHERE notas_id = ? AND usuario_id = ?`;
  
    db.run(sql, [nombre_examen, nota_obtenida, porcentaje_evaluacion, notas_id, usuario_id], function (err) {
      if (err) {
        console.error("Error al actualizar la nota:", err.message);
        return res.status(200).json({ error: "Error interno del servidor" });
      }
  
      // Devuelve el ID del lapso recién actualizado
      res
        .status(200)
        .json({ id: this.lastID, mensaje: "Nota actualizado con éxito" });
    });
  };

module.exports = {
  crear_notas,
  obtener_notas,
  borrar_notas,
  actualizar_notas
};
