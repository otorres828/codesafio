const db = require("../config/config.js");
const usuario_id_middleware = require("../middleware/Usuario_id");

// Controlador para crear una nueva materia
const crear_materia = (req, res) => {
    const { titulo, icono } = req.body;
    const lapso_id = req.params.lapso_id;
  
    const usuario_id = usuario_id_middleware(req);
  
    // Verifica si todos los campos requeridos están presentes
    if (!titulo) {
      return res.status(400).json({ error: "El titulo es requerido" });
    }
  
    // Asigna un valor predeterminado a "icono" si no está presente en la solicitud
    let iconoPredeterminado = '../public/img/21.png';
    const iconoFinal = icono || iconoPredeterminado;
  
    // Consulta SQL para insertar la nueva materia
    const sql =
      "INSERT INTO materias (titulo, icono, lapso_id, usuario_id) VALUES (?, ?, ?, ?)";
  
    db.run(
      sql,
      [titulo, iconoFinal, lapso_id, usuario_id],
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
  // Consulta SQL para obtener todos las materias
  const user_id = usuario_id_middleware(req);
  const lapso_id = req.params.lapso_id;
  const sql = `SELECT * 
                FROM materias
                WHERE usuario_id = ${user_id}
                AND lapso_id = ${lapso_id}
                ORDER BY materia_id DESC`;

                // acumulado de las notas de cada materia
                const sql2 = `SELECT SUM(nota_obtenida) AS acumulado
                FROM notas
                WHERE materia_id = ${materia_id}`;



  db.all(sql, (err, rows) => {
    if (err) {
      console.error("Error al obtener las materias:", err.message);
      return res.status(500).json({ error: "Error interno del servidor" });
    }else{
      db.all(sql2, (err, rows2) => {
        if (err) {
          console.error("Error al obtener las materias:", err.message);
          return res.status(500).json({ error: "Error interno del servidor" });
        }else{
          // Devolver las materias como respuesta
        res.status(200).json({ materias: rows, acumulado: rows2 });
        }
      });
    }
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
    const { titulo, icono } = req.body;
  
    // Consulta SQL para actualizar el lapso
    const sql =
      `UPDATE materias SET 
      titulo = ?, 
      icono = ?
      WHERE materia_id = ? AND usuario_id = ?`;
  
    db.run(sql, [titulo, icono, materia_id, usuario_id], function (err) {
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
