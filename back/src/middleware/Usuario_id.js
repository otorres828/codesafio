
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'KGGK>HKHVHJVKBKJKJBKBKHKBMKHB'

const usuario_id=(req) =>{   
    const token = req.headers.authorization.split(' ')[1];
    //decodificamos el token
    const decodedToken = jwt.verify(token,SECRET_KEY);
    //obtenemos el id del administrador logueado
    return decodedToken.id;
}

module.exports = usuario_id;