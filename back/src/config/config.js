const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.message);
  } else {
    console.log('Conexión exitosa a la base de datos SQLite');
  }
});

// Cierra la conexión a la base de datos cuando la aplicación se detiene
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('Error al cerrar la conexión de la base de datos:', err.message);
    } else {
      console.log('Conexión de la base de datos cerrada');
    }
    process.exit(0);
  });
});

module.exports = db;
