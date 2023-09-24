const express = require('express');
// const usuario_id = require('../middleware/Usuario_id');

// Controlador para crear usuarios
const create_users = (req, res) => {
    // Lógica para crear un nuevo usuario
    // Puedes acceder a los datos de la solicitud req.body si es necesario
    // Por ejemplo, const { nombre, apellido } = req.body;
    
    // Simplemente enviaremos un mensaje de éxito como ejemplo
    res.status(200).json({ mensaje: 'Usuario creado con éxito' });
};

// Controlador para ver usuarios
const ver_users = (req, res) => {
    // Lógica para obtener y mostrar la lista de usuarios
    // Puedes acceder a la base de datos u otros recursos si es necesario
    
    // Simplemente enviaremos una lista de ejemplo como respuesta
    const usuarios = [
        { id: 1, nick: 'Usuario 1', clave: '123' },
        { id: 2, nick: 'Usuario 2', clave: '123' },
        // Agrega más usuarios según tus necesidades
    ];
    
    res.status(200).json({ usuarios });
};

module.exports = {
    create_users,
    ver_users
};
