//exercise - create more controllers
//create a model representing a book..

const UserModel = require('../models/user.model');

const addUser = (req, res) => {
    res.status(200).json({ data: 'adding user.....' });
}

const getUser = (req, res) => {
    UserModel.find({}).exec((err, doc) => {
        res.send(doc);
    })
}

module.exports = { addUser: addUser, getUser: getUser }


