const cron = require('node-cron');
const notifier = require('node-notifier');
const db = require("../config/config");

// Configurar el cronjob para que se ejecute una vez al día
cron.schedule('0 0 * * *', () => {
  // Obtener la fecha actual
  const currentDate = new Date();

  // Calcular la fecha límite para notificaciones (3 días antes)
  const deadlineDate = new Date();
  deadlineDate.setDate(currentDate.getDate() - 3); 

  // Consultar la base de datos para obtener los recordatorios
  db.all('SELECT * FROM recordatorios WHERE fecha_hora <= ? AND fecha_hora >= ?', [deadlineDate, currentDate], (err, rows) => {
    if (err) {
      console.error('Error al consultar la base de datos:', err);
      return;
    }

    // Enviar notificaciones para los recordatorios encontrados
    rows.forEach((row) => {
      // Enviar notificación al sistema operativo o realizar la acción necesaria
      notifier.notify({
        title: 'Recordatorio',
        message: row.contenido,
      });
    });
  });
});


module.exports = {
    enviarNotificaciones: () => {
      // Tu lógica para enviar notificaciones aquí
    },
};
