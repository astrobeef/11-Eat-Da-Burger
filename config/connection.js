const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connect = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "burgers_db"
    });
}


connection.connect();

module.exports = connection;