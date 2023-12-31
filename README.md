# Online Products Database Management System

This project is a Database Management System (DBMS) designed for managing online products. It provides a structured approach to handle product information, categories, and related data.

## Installation

1. Begin by installing necessary packages using npm:

```bash
npm install
```

2. Modify the database configuration to suit your environment:

Navigate to `config/database.js` and edit the configuration settings accordingly.

## Setting up the Database

3. Create the database schema by running:

```bash
node scripts/create_database.js
```

4. Proceed to create the required tables in the database:

```bash
node scripts/create_tables.js
```

5. Populate the tables with initial data:

```bash
node scripts/filling.js
```

## Launching the Application

6. Start the server to run the application:

```bash
node server.js
```

7. Access the application in your browser at:

[http://localhost:8080](http://localhost:8080)

## Usage

- Upon launching the application, navigate to the provided URL in your browser.
- The system allows CRUD (Create, Read, Update, Delete) operations on products, categories, and other related entities.
- Ensure the database connection is established before interacting with the application.

## Additional Notes

- **Dependencies**: Ensure all dependencies mentioned in `package.json` are installed using `npm install`.
- **Database Configuration**: Verify the database configuration in `config/database.js` matches your database credentials.

