const serverless = require('serverless-http');
const express = require('express')
const app = express()
const client = require('./db/connection')
const todoRoutes = require('./todos/todos.routes')
const bodyParser = require('body-parser');

app.use('/', todoRoutes);

client.connect();

module.exports.handler = serverless(app);