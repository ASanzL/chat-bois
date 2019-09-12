const FriendModel = require('../models/friend.model');
const UserModel = require('../models/user.model')

const addFriend = (req, res) => {
    const Friend = FriendModel();
    Friend.friend1=req.user._id;
    
    if(req.params.displayName){
        console.log("ja det är här")
        UserModel.findOne({displayName: req.params.displayName}).exec((err, doc) => {
            if(err)return handleError(err)
            Friend.friend2=doc._id;
            console.log(Friend)
            Friend.save(function (err, friendModel) {
                if (err) {
                    console.log(err)
                    return res.status(500).end()
                } else {
                    return res.status(200).json({ data: 'adding friend.....' });
                }
            })
        })
    
    
}}

const getFriend = (req, res) => {
    UserModel.find({}).exec((err, doc) => {
        res.send(doc);
    })
}

module.exports = { addFriend: addFriend, getFriend: getFriend }


