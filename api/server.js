const express = require('express'); // importing a CommonJS module

const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

server.use(express.json());

server.use((req, res, next) => {
  console.log('hi from server.js!!!');
  console.log(`${req.method} ${req.path}`);
  next();
});

server.use('/api/hubs', hubsRouter);

server.use('*', (req, res) => {
  // catch all 404 errors middleware
  res.status(404).json({ message: `${req.method} ${req.baseUrl} not found!` });
});


const path = require('path')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'client/build')))


server.get('*', (req,res)=> {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

module.exports = server;
