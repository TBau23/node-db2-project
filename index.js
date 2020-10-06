const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({greeting: "Server is live"});
});

const PORT = process.env.PORT || 4500;

server.listen(PORT, () => {
    console.log(`\nAPI running on ${PORT}...\n`)
});

