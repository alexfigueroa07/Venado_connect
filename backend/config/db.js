const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config(); // Cargar variables de entorno (no se les olvide editarlaaaaaaaas)

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.connect((err) => {
    if (err) {
        console.error('Upss! Error connecting to the database:', err);
        return;
    }
    console.log(`Successful, Connected to the MySQL database named ${process.env.DB_NAME}`);
});

module.exports = connection;
