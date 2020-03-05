require( 'dotenv/config' );

const config = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_USER_PASSWORD,
    database: process.env.DB_NAME,
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    migrationStorage: 'json',
    seederStorage: 'json',
  },
  test: {},
  production: {},
};

module.exports = config;