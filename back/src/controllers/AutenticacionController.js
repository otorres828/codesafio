const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'XSFDFSDFSDGKVDFHDFKCDSGFD'
const db = require('./../config/config');

const login = async (req, res) => {
    const { nick, clave } = req.body;
    const sql = 'SELECT * FROM usuarios WHERE nick = ? LIMIT 1';
    try {
        db.get(sql, [nick], async (err, usuario) => {
          if (err) {
            return res.sendStatus(500);
          }
          if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
          }
   
          const storedPassword = usuario.clave; // Obtén la contraseña almacenada en la base de datos
          const isMatch = await bcrypt.compare(clave, storedPassword); // Compara la contraseña ingresada con la almacenada
   
          if (isMatch) {
            // Las contraseñas coinciden, el inicio de sesión es exitoso
            const user = {
                id: usuario.id,
                nick: usuario.nick,
            };
            const token = generateToken(user);
    
            res.status(200).json({ token_codesafio: token });
          } else {
            // Las contraseñas no coinciden, el inicio de sesión falló
            res.status(401).json({ error: 'Credenciales inválidas' });
          }
        });
   
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
         db.get('SELECT * FROM usuarios WHERE nick = ?', [nick], async (err, row) => {
            if (err) {
              return res.status(400).json({ error: "El usuario ya existe" });
            }
            if (row) {
              return res.status(200).json({ error: 'El nick ya está registrado' });
            }
        })   


        // Encriptar la clave
        const hashedPassword = await bcrypt.hash(clave, 10);

        // Insertar el nuevo usuario en la base de datos
        const sql = 'INSERT INTO usuarios (nick, clave) VALUES (?, ?)';
  
        db.run(sql, [nick, hashedPassword], async function(err) {
          if (err) {
            console.error(err);
            return res.sendStatus(500);
          }
          
          res.json({ message: 'Registro exitoso' });
        });
    } catch (error) {
        console.error("Error al registrar usuario:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

// Genera un token JWT
const generateToken = (payload) => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '30d' });
};

module.exports = { login, register };
