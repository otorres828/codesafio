const db = require('../config/config.js');


//obtiene todas las materias
const create_users = async (req, res) => {
  db.serialize(() => {
      db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, nickname VARCHAR(255), password VARCHAR(255))');
  });

  res.status(200).send({ mensaje: 'Administrador creado con éxito' });
}

module.exports = {
  create_users
};
