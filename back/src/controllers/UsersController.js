const db = require('../config/config.js');


module.exports = {
    create_users
                };

//obtiene todas las materias
const create_users = async (req, res) => {
  res.status(200).send({ mensaje: 'Administrador creado con éxito' });
}

module.exports = {
  create_users
};
