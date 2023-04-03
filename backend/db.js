const { Pool } = require('pg');

const moviePool = new Pool({
connectionString: process.env.DATABASE_URL,
ssl: { rejectUnauthorized: false }
});

module.exports = moviePool;