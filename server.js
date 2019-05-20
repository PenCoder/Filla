

var express = require('express');
var socket = require('socket.io');
var http = require('http');

// Initializing the http server
const init = express();
const server = http.createServer(init);
const webSock = socket(server);

webSock.on('connection', (client) => {
    console.log('client connected');

    client.on('msg', msg => {
        console.log(msg);
    })
})
server.listen(8000, () => console.log('listening on 8000'));
