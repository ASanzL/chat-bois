//exercise - create more controllers
//create a model representing a book..

const UserModel = require('../models/user.model');

const addUser = (req, res) => {
    res.status(200).json({ data: 'adding user.....' });
}

const getUser = (req, res) => {
    if(req.params.id && req.params.id2){
        let userId = req.params.id === req.user.id ? req.params.id2 : req.params.id;
        UserModel.findById(userId).exec((err, doc) => {
            res.send(doc);
        })
    } else if (req.params.i){
        UserModel.findById(req.params.id).exec((err, doc) => {
            res.send(doc);
        })
    } else if(req.params.displayName){
        UserModel.findOne({displayName: req.params.displayName}).exec((err, doc) => {
            if(err)return handleError(err)
            res.send(doc);
        })
    } else{UserModel.find({}).exec((err, doc) => {
        res.send(doc);
    })}
}

module.exports = { addUser: addUser, getUser: getUser }


