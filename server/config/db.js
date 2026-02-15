const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "karmatic",
  password: "",
  database: "good_morning_db",
  port: 5432,
});

module.exports = pool;
