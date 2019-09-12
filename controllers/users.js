//exercise - create more controllers
//create a model representing a book..

const UserModel = require('../models/user.model');

const addUser = (req, res) => {
    res.status(200).json({ data: 'adding user.....' });
}

const getUser = (req, res) => {
    console.log("salmiak")
    if(req.params.displayName){
        console.log(req.params)
        UserModel.findOne({displayName: req.params.displayName}).exec((err, doc) => {
            if(err)return handleError(err)
            res.send(doc);
        })
    }
    else{UserModel.find({}).exec((err, doc) => {
        res.send(doc);
    })}
}

module.exports = { addUser: addUser, getUser: getUser }


