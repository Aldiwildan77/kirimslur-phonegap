const NODE_ENV = process.env.NODE_ENV || 'development'
if(NODE_ENV === 'development') require('dotenv').config()

let database
switch (NODE_ENV) {
  case 'production':
    database = {
      DB_HOST: process.env.DB_HOST,
      DB_USER: process.env.DB_USER,
      DB_PASSWORD: process.env.DB_PASSWORD,
      DB_NAME: process.env.DB_NAME,
      DB_DIALECT: 'mysql'
    }
    break;
  default:
    database = {
      DB_HOST: process.env.DB_HOST || 'localhost',
      DB_USER: process.env.DB_USER || 'root',
      DB_PASSWORD: process.env.DB_PASSWORD || '',
      DB_NAME: process.env.DB_NAME || 'kirimslur',
      DB_DIALECT: 'mysql'
    }
    break;
}

const DATABASE = database
const AUTH_TOKEN = process.env.AUTH_TOKEN
const PORT = process.env.PORT || '5015'

module.exports = { NODE_ENV, PORT, DATABASE, AUTH_TOKEN }