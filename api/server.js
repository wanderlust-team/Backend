const helmet = require('helmet');
const express = require('express');

const authRouter = require("../routers/auth/authRouter.js");
const usersRouter = require("../routers/users/usersRouter.js");


const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' });
});


module.exports = server;