require("dotenv").config();
require('./database');

const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const bodyParser = require('body-parser');
const routes = require('./routes');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes)

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;