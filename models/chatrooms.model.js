const mongoose = require('mongoose');

const chatroomSchema = new mongoose.Schema(
    {
        displayName: {
            type: String,
            required: true,
            trim: true
        }
    },
    { timestamps: true }

)

const Chatroom = mongoose.model('chatrooms', chatroomSchema);
module.exports = Chatroom;