const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const route = require('./route/route');

// Path to React build (fix path joining)
const clientBuildPath = path.join(__dirname, '../yummydishes-client/build');

// Middleware
app.use(express.json());

// Serve static files from React
app.use(express.static(clientBuildPath));  // Serve React's build folder

// API routes mounted at /api
app.use('/', route);  // Mount backend routes under /api

// Fallback for React Router (SPA support)
app.get('/{*any}', (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
});

module.exports = app;
