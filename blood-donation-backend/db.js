const sql = require('msnodesqlv8');
const config = require('./dbConfig');

async function connect() {
    return new Promise((resolve, reject) => {
        sql.query(config.connectionString, 'SELECT 1', (err) => {
            if (err) {
                reject(err);
            } else {
                console.log('Connected to SQL Server');
                resolve();
            }
        });
    });
}

connect().catch(err => console.error('SQL connection error', err));

function query(queryString, params = []) {
    return new Promise((resolve, reject) => {
        sql.query(config.connectionString, queryString, params, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

module.exports = { query };
