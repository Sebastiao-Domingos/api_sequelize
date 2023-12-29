require('dotenv').config();

module.exports= {
  "development": {
    "username": process.env.BD_USERNAME,
    "password":process.env.BD_PASSWORD ,
    "database": process.env.BD_BASE,
    "host": process.env.BD_HOST,
    "dialect": process.env.DB_DIALECT
  },
  "test": {
    "username": process.env.BD_USERNAME,
    "password":process.env.BD_PASSWORD ,
    "database": process.env.BD_BASE,
    "host": process.env.BD_HOST,
    "dialect": process.env.DB_DIALECT
  },
  "production": {
    "username": process.env.BD_USERNAME,
    "password":process.env.BD_PASSWORD ,
    "database": process.env.BD_BASE,
    "host": process.env.BD_HOST,
    "dialect": process.env.DB_DIALECT
  }
}
