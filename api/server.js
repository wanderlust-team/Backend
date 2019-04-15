const helmet = require('helmet');
const express = require('express');
const cors = require('cors');

const authRouter = require('../routers/auth/authRouter.js');
const userRouter = require('../routers/users/usersRouter.js');
const tripRouter = require('../routers/trips/trips_router.js')



const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);
server.use('/api/trips', tripRouter)


module.exports = server;