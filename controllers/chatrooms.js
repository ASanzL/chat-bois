const ChatroomModel = require('../models/chatrooms.model');
const UserModel = require('../models/user.model');

const createChatrooms = (req, res) => {
    const chatroom = new ChatroomModel();
    chatroom.displayName = req.user.displayName + " - " + req.body.friend;
    chatroom.chatMembers[0] = req.user.id;
    chatroom.chatMembers[1] = req.body.friend;

    chatroom.save(function (err) {
        if (err) {
            console.log(err)
            return res.status(500).end()
        } else {
            return res.status(201).send({ respond: "chatroom created" })
        }
    })
}

const getChatrooms = (req, res) => {
    ChatroomModel.find({}).exec((err, doc) => {
        res.send(doc);
    })
}

module.exports = { 
    createChatrooms: createChatrooms, 
    getChatrooms: getChatrooms
}