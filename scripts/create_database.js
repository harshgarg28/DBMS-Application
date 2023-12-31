var mysql = require('mysql');
var dbconfig = require('../config/database');

var connection = mysql.createConnection(dbconfig.connection);

connection.query('CREATE DATABASE IF NOT EXISTS ' + dbconfig.database, function(err) {
    if (err) throw err;

    console.log('Success: Schema Created!');
    connection.end(); // Close the connection after the database is created
});


// var mysql = require('mysql');
// var dbconfig = require('../config/database');

// var connection = mysql.createConnection(dbconfig.connection);

// connection.query('CREATE DATABASE IF NOT EXISTS ' + dbconfig.database, function(err) {
//     if (err) throw err;

//     connection.query('\
//         CREATE TABLE IF NOT EXISTS `' + dbconfig.database + '`.`' + dbconfig.users_table + '` ( \
//             `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
//             `username` VARCHAR(20) NOT NULL, \
//             `password` CHAR(60) NOT NULL, \
//             PRIMARY KEY (`id`), \
//             UNIQUE INDEX `id_UNIQUE` (`id` ASC), \
//             UNIQUE INDEX `username_UNIQUE` (`username` ASC) \
//         )', function(err) {
//         if (err) throw err;

//         console.log('Success: Database Created!');
//         connection.end(); // Close the connection after queries have executed
//     });
// });
