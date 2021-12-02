require('dotenv').config()
const path = require('path')
const express = require('express')

const hubsRouter = require('./api/hubs/hubs-router')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'client/build')))
server.use('/api/users', hubsRouter)



server.get('*', (req,res)=> {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

const PORT =process.env.PORT || 8080

server.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})