const db = require('../config/config.js');

//obtiene toas las materias
const create_users = async (req, res) => {
    res.status(200).send({mensaje:'Administrador creado con exito'});
}

module.exports = {
    create_users
                };