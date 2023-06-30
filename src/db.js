const Pool = require('pg').Pool; 

const PG_URI = 'postgresql://localhost/soloproject?user=daviskim';

const pool = new Pool({
    user: 'daviskim',
    host: 'localhost',
    post: 5432,
    database: "soloproject",
    connectionString: PG_URI,
})

pool.connect();
module.exports = {
    query: (text, params, callback) => {
        console.log('completed query', text);
        return pool.query(text, params, callback)
    }
}