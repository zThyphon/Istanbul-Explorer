const mysql = require("mysql2");
const pool = mysql.createPool({
    host: "host Name",
    user: "user Name",
    database: "database Name",
    password: "database Password"
});

module.exports = pool.promise();