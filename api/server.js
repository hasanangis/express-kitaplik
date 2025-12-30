const express = require('express');
const server = express();

const booksRouter = require('./books/books-router'); 

server.use(express.json());


server.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} - ${req.url}`);
    next();
});


server.use('/api/books', booksRouter);

server.get('/', (req, res) => {
    res.send('<h1>Welcome to English Book API 🚀</h1>');
});

module.exports = server;
