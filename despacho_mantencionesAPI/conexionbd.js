const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../../ClientesBA/instance/clientesba.sqlite', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Conectado a clientesba.');
});

module.exports = db;
