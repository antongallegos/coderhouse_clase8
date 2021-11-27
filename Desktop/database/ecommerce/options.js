const mysql = {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "ecommercech",
  },
};

/* const mysql = require('knex')({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "ecommercech",
  },
});
 */

const sqlite3 = {
  client: "sqlite3",
  connection: {
    filename: "../zoo.sqlite3",
  },
  useNullAsDefault: true,
};

export { mysql, sqlite3 };
