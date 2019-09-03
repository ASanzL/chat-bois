const MessageModel = require('../models/message.model');
const jwt = require('jsonwebtoken')

const postMessage = (req, res) => {
    res.status(200).json({ data: "Posted by: " + req.user.displayName });
}

const getMessage = (req, res) => {
    /*MessageModel.find({}).exec((err, doc) => {
        res.send(doc);
    })*/
}

module.exports = { postMessage: postMessage, getMessage: getMessage }


