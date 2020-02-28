require('dotenv').config();
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    timezone: 'local',
    'dateStrings': [
        'DATE', 'DATETIME'
    ]
});

module.exports = connection;