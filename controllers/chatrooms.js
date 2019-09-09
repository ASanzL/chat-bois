const ChatroomModel = require('../models/chatrooms.model');

const createChatrooms = (req, res) => {
    const chatroom = new ChatroomModel();
    chatroom.displayName = req.body.name;

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