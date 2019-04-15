const helmet = require('helmet');
const express = require('express');
const cors = require('cors');

<<<<<<< HEAD
const authRouter = require("../routers/auth/authRouter.js");
const usersRouter = require("../routers/users/usersRouter.js");
=======
const authRouter = require('../routers/auth/authRouter.js');
const userRouter = require('../routers/users/usersRouter.js');
const tripRouter = require('../routers/trips/trips_router.js')
>>>>>>> 76117d675ef8b836b9aa15197ceb86f894b22713


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);
server.use('/api/trips', tripRouter)


module.exports = server;