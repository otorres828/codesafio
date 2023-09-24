const db = require('../config/config.js');



//obtiene toas las materias
const todas_materias = async (req, res) => {


    db.serialize(() => {
        db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT)');
      
        // Insertar datos en la tabla
        const stmt = db.prepare('INSERT INTO users (nombre) VALUES (?)');
      
        // Datos de ejemplo a insertar
        const datos = ['Usuario 1', 'Usuario 2', 'Usuario 3'];
      
        // Insertar datos en un bucle
        datos.forEach((nombre) => {
          stmt.run(nombre);
        });
      
        stmt.finalize();
      
        console.log('Datos insertados en la tabla users');
      });

    res.status(200).send({mensaje:'Administrador creado con exito'});
}

module.exports = {
                    todas_materias
                    };