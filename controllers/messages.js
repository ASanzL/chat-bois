const MessageModel = require('../models/message.model');
const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken')
const verifyJWT = require('../controllers/auth').verifyJWT;

const postMessage = (req, res) => {
    res.status(200).json({ data: "Posted by: " + req.user.displayName });
}

const getMessage = (req, res) => {
    MessageModel.find({}).exec((err, doc) => {
        res.send(doc);
    })
}

const postSocketMessage = (socket, io) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        verifyJWT(msg[0]).then(res => {
            console.log(res.id);
            UserModel.findById(res.id, (err, user) => {
                const message = new MessageModel();
                message.message = msg[1];
                message.displayName = user.displayName;
                message.createdAt = Date.now();
                io.emit('chat message', message);
             });
        })
      });
}

module.exports = { 
    postMessage: postMessage, 
    getMessage: getMessage,
    postSocketMessage: postSocketMessage    
}


