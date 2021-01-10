require('dotenv/config');

const {DATA_BASE, USER, PASSWORD, DATABASE_PORT } = process.env;

module.exports = {
  url: `postgresql://${USER}:${PASSWORD}@localhost:${DATABASE_PORT}/${DATA_BASE}`,
  dialect: 'postgres',
  dialectOptions: {
    ssl: false,
  },
  pool: {
    max: 15,
    min: 0,
    acquire: 10000,
    idle: 1000,
  },
}