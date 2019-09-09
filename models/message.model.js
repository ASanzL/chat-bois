const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const messageSchema = new mongoose.Schema(
    {
        displayName:{
            type: String,
            required: true,
            trim: true
        },
        message: {
            type: String,
            required: true,
            trim: true
        },
        chatroom: {
            type: String,
            required: true,
            trim: true
        }
    },
    { timestamps: true }

)

messageSchema.pre('save', function(next) {
    //check message
    next();
})

const Message = mongoose.model('messages', messageSchema);
module.exports = Message;