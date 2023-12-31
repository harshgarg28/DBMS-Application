var mysql = require('mysql');
var dbconfig = require('../config/database');

var connection = mysql.createConnection(dbconfig.connection);

connection.query('CREATE DATABASE IF NOT EXISTS ' + dbconfig.database, function(err) {
    if (err) throw err;

    connection.query('USE ' + dbconfig.database, function(err) {
        if (err) throw err;

        var createUsersTableQuery = `
            CREATE TABLE IF NOT EXISTS users (
                id INT UNSIGNED NOT NULL AUTO_INCREMENT, 
                username VARCHAR(20) NOT NULL, 
                password CHAR(60) NOT NULL, 
                role CHAR(60) NOT NULL,
                state CHAR(60) NOT NULL,
                PRIMARY KEY (id), 
                UNIQUE INDEX id_UNIQUE (id ASC), 
                UNIQUE INDEX username_UNIQUE (username ASC)
            )
        `;

        var createCartTableQuery = `
            CREATE TABLE IF NOT EXISTS Cart (
                id INT UNSIGNED NOT NULL, 
                title VARCHAR(255) NOT NULL, 
                price INT NOT NULL, 
                quantity INT NOT NULL, 
                sellerID INT UNSIGNED NOT NULL, 
                FOREIGN KEY (id) REFERENCES users(id), 
                FOREIGN KEY (sellerID) REFERENCES users(id)
            )
        `;

        var createCartWholesellerQuery = `
        CREATE TABLE IF NOT EXISTS Wholeseller ( 
            id INT UNSIGNED NOT NULL,
            title VARCHAR(255) NOT NULL,
            image varchar(250) ,
            price INT,
            stock INT,
            FOREIGN KEY (id) REFERENCES users(id)
        ) 
        `;

        var createRetailerTableQuery = `
        CREATE TABLE IF NOT EXISTS Retailer ( 
            id INT UNSIGNED NOT NULL,
            title VARCHAR(255) NOT NULL,
            image varchar(250) ,
            price INT,
            stock INT,
            FOREIGN KEY (id) REFERENCES users(id)
        ) 
        `;

        var createFarmerTableQuery = `
        CREATE TABLE IF NOT EXISTS Farmer( 
            id INT UNSIGNED NOT NULL,
            title VARCHAR(255) NOT NULL,
            image varchar(250) ,
            price INT,
            stock INT,
            FOREIGN KEY (id) REFERENCES users(id)
        ) 
        `;

        var createItemTableQuery = `
        CREATE TABLE IF NOT EXISTS Items ( 
            id INT UNSIGNED NOT NULL,
            name VARCHAR(255) NOT NULL,
            category VARCHAR(255) NOT NULL, 
            UNIQUE INDEX id_UNIQUE (id ASC)
        )
        `;
        // Add queries for other tables similarly

        connection.query(createUsersTableQuery, function(err) {
            if (err) throw err;

            console.log('Users Table Created!');

            connection.query(createCartTableQuery, function(err) {
                if (err) throw err;

                console.log('Cart Table Created!');

                connection.query(createCartWholesellerQuery, function(err) {
                    if (err) throw err;

                    console.log('Wholesale Table Created!');
                    connection.query(createRetailerTableQuery, function(err) {
                        if (err) throw err;

                        console.log('Retailer Table Created!');

                        connection.query(createFarmerTableQuery, function(err) {
                            if (err) throw err;

                            console.log('Farmer Table Created!');

                        // connection.query(createCartTableQuery, function(err) {
                        //     if (err) throw err;

                        //     console.log('Cart Table Created!');
                            connection.query(createItemTableQuery, function(err) {
                                if (err) throw err;

                                console.log('Item Table Created!');

                                connection.end(); // Close the connection after all tables are created
                            });
                        });
                    });
                });
            });
        });
    });
});
