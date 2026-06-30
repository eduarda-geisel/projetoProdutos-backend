const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

async function connectDB() {
    const db = await open({
        filename: './database.db',
        driver: sqlite3.Database
    });

    db.exec('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)');

    return db;
}

connectDB();