const fs = require("fs");
require("dotenv").config();

module.exports = {
  development: {
    username: "postgres",
    password: "password",
    database: "pmbt_chat",
    host: "0.0.0.0",
    port: 5432,
    dialect: "postgres",
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
  },
};
