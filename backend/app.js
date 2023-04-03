const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const path = require('path');
const moviePool = require('./db');

const app = express();
const port = process.env.PORT || 8081;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Connect to PostgreSQL database
const pool = new Pool({
  connectionString: process.env.PG_CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// Define API routes
app.get('/api/movies', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM movies');
    console.log('Sending movies:', rows);
    res.send(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

app.post('/api/movies', async (req, res) => {
  try {
    const { title } = req.body;
    const { rows } = await pool.query('INSERT INTO movies (title) VALUES ($1) RETURNING *', [title]);
    res.status(201).send(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


module.exports = app;
