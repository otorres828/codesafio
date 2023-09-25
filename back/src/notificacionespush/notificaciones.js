module.exports = function(io) {
  const cron = require('node-cron');
  const db = require("../config/config");

  // Configurar el cronjob para que se ejecute una vez al día
  cron.schedule('* * * * * *', function() {
    console.log('hola')
    const alerta={
      usuario_id:4,
      alertas:[]
    }
    io.emit('mensaje_alerta',alerta);
  });
};