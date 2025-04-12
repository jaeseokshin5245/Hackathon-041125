const express = require('express');
const path = require('path');

require('dotenv').config();

const app = express();

const route = require("./route/router");

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(route);

module.exports = app;