const { DATABASE } = require('../config')

const knex = require('knex')({
  client: DATABASE.DB_DIALECT,
  connection: {
    host: DATABASE.DB_HOST,
    user: DATABASE.DB_USER,
    password: DATABASE.DB_PASS,
    database: DATABASE.DB_NAME,
    options: {
      port: 1433,
      encrypt: true
    }
  }
})

knex.raw('SELECT 1+1 as RESULT')
  .then(() => console.log('Database Connected Properly'))
  .catch(error => console.log(error))

module.exports = knex