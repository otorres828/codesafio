require('dotenv').config();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY
const db = require('./../config/config');

const login = async (req, res) => {
    const { nick, clave } = req.body;

    try {
        // Consultar el usuario utilizando el nick proporcionado
        const usuario = db.get('SELECT * FROM usuarios WHERE nick = ?', [nick]);

        if (!usuario) {
            // Si no se encuentra el usuario, devuelve un error
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        // Comparar la clave proporcionada con la clave almacenada en el modelo de usuario
        const isValidPass = await comparePassword(clave, usuario.clave);

        if (!isValidPass) {
            // Si la clave no es válida, devuelve un error
            return res.status(401).json({ error: "Clave incorrecta" });
        }

        // Si la clave es válida, genera un token y devuelve una respuesta exitosa
        const user = {
            id: usuario.id,
            nick: usuario.nick,
        };
        const token = generateToken(user);

        res.status(200).json({ token_codesafio: token });
    } catch (error) {
        console.error("Error al autenticar usuario:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

// Crear usuario desde el CMS
const register = async (req, res) => {
    const { nick, clave } = req.body;

    try {
        // Verificar si el usuario ya existe
        const existingUser = db.get('SELECT * FROM usuarios WHERE nick = ?', [nick]);

        if (existingUser) {
            // Si el usuario ya existe, devuelve un error
            return res.status(400).json({ error: "El usuario ya existe" });
        }

        // Encriptar la clave
        const hashedPassword = await bcrypt.hash(clave, 10);

        // Insertar el nuevo usuario en la base de datos
        const result = db.run('INSERT INTO usuarios (nick, clave) VALUES (?, ?)', [nick, hashedPassword]);

        res.status(200).json({ mensaje: 'Usuario creado con éxito' });
    } catch (error) {
        console.error("Error al registrar usuario:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

// Compara la clave proporcionada con la clave almacenada en la base de datos
const comparePassword = async (password, hash) => {
    try {
        return await bcrypt.compare(password, hash);
    } catch (error) {
        console.error("Error al comparar contraseñas:", error);
        return false;
    }
};

// Genera un token JWT
const generateToken = (payload) => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '30d' });
};

module.exports = { login, register };
