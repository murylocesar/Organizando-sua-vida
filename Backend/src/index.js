require('dotenv').config();

const express = require('express');
const cors = require('cors');
const server = express();

server.use(cors());
server.use(express.json());

const taskRoutes = require('./routes/TaskRoutes');

server.use('/task', taskRoutes);

server.listen(8080, () => {
    console.log('API Online, porta: 8080');
});