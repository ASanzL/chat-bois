const MessageModel = require('../models/message.model');
const UserModel = require('../models/user.model');
const verifyJWT = require('../controllers/auth').verifyJWT;

const postMessage = (req, res) => {
    res.status(200).json({ data: "Posted by: " + req.user.displayName });
}

const getMessage = (req, res) => {
    if(req.params.chatroom) {
        MessageModel.find({chatroom: req.params.chatroom}).exec((err, doc) => {
            res.send(doc);
        })
    } else {
        MessageModel.find({}).exec((err, doc) => {
            res.send(doc);
        })
    }
}

const socketMessage = (socket, io) => {
    socket.on('chat message', (msg) => {
        verifyJWT(msg.token).then(res => {
            UserModel.findById(res.id, (err, user) => {
                const message = new MessageModel();
                message.message = msg.message;
                message.displayName = user.displayName;
                message.createdAt = Date.now();
                io.to(msg.chatroom).emit('chat message', message);
             });
        })
      });

      socket.on('join chat', (chatroom) => {
        socket.join(chatroom);
      });

      socket.on('leave chat', (chatroom) => {
        socket.leave(chatroom)
      });
}

module.exports = { 
    postMessage: postMessage, 
    getMessage: getMessage,
    socketMessage: socketMessage
}


