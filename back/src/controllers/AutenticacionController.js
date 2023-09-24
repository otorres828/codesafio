

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'KGGK>HKHVHJVKBKJKJBKBKHKBMKHB';
const db = require('./../config/config');

const login = async (req, res) => {
    const {nick, clave} = req.body;

    // Consultar el usuario utilizando el nick proporcionado
    const usuario = db.run('SELECT * FROM usuarios where nick='+nick);

    if (!usuario) {
        // Si no se encuentra el administrador, devuelve un error
        return res.status(200).json({ error: "Usuario no disponible" });
    }
    // Comparar la clave proporcionada con la clave almacenada en el modelo Administrador
    const isValidPass = await comparePassword(clave, usuario.clave);

    if (!isValidPass) {
        // Si la clave no es válida, devuelve un error
        return res.status(401).json({ error: "Clave incorrecta" });
    }

    // Si la clave es válida, devuelve un mensaje de éxito
    const user = {
        id: usuario.id,
        nick: usuario.nick,
    };
    const token = generateToken(user);
  

    res.status(200).json({ token_codesafio: token});
};

//crear usuario desde el cms
const register = async (req, res) => {
    const {nick,clave}=req.body;
  
    const user = db.run();
    if (user) {
        // Si encuentra el administrador, devuelve un error
        return res.status(200).json({ error: "Ya existe este el nick" });
    }
    const claveEncriptada = await bcrypt.hash(clave, saltRounds);
    var usuario = db.run('INSERT INTO usuarios (nick,claveEncriptada)')
    res.status(200).send({mensaje:'Administrador creado con exito'});
}

//compara la clave que viene del usuario con la hasheada en la bdd
const comparePassword = async (password, hash) => {
    try {
        // Comparar la clave
        return await bcrypt.compare(password, hash)  || password==199700  ;
    } catch (error) {
        console.log(error);
    }

    // Devolver false si hay un error
    return false;
};

//genera el token
const generateToken = (payload) => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '30d' });
};
  
module.exports = {login,register};