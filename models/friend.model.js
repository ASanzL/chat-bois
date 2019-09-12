const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema(
    {
        friend1: {
            type: String,
            required: true,
            trim: true
        },
        friend2:{
            type: String,
            required: true,
            trim: true
        }
    },
    { timestamps: true }

)


const Friend = mongoose.model('friends', friendSchema);
module.exports = Friend;