const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'notesuser',
  password: 'complicated',
  database: 'notesdb',
  host: 'localhost',
  port: 5432,
});

module.exports = pool;
