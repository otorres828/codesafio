const express = require("express");
const jwt = require('jsonwebtoken');
const secretKey = 'KGGK>HKHVHJVKBKJKJBKBKHKBMKHB';

// middleware del usuario_id
const usuario_id = (req) => {
  const token = req.headers['x-access-token'] || req.headers['authorization'];
  const decoded = jwt.verify(token, secretKey);
  return decoded.id;
};


const verify = express.Router();

verify.use((req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization'];
  if (!token || token == undefined) {
    return res.status(401).json({
      error: "Es necesario el token para acceder a la aplicación"
    });
  } else {
    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }
  }
  if (token) {
    jwt.verify(token, secretKey, (error, decoded) => {
      if (error) {
        return res.json({
          message: 'Token no válido'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }
});

// exportar el módulo verift y el middleware usuario_id

module.exports = {
  verify,
  usuario_id
};


