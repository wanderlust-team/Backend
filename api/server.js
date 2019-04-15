const helmet = require('helmet');
const express = require('express');




const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' });
});


module.exports = server;