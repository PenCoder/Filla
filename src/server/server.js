// var UserModel = require('../components/models/UserModel');
// import UserService from './UserService';

var express = require('express');
var socket = require('socket.io');
var http = require('http');

var UserService = require('./UserService');

// Initializing the http server
const init = express();
const server = http.createServer(init);
const webSock = socket(server);

webSock.on('connection', (client) => {
    console.log('client')
    client.on('register', data => {
        console.log(data.userModel.username)
    })
    client.on('msg', msg => {
        console.log(msg[0].text)
        client.emit('msg', msg)
    })
})
server.listen(8000, () => console.log('listening on 8000'));
