const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'flowers5',
};

const pool = mysql.createPool(config);

module.exports = pool;


