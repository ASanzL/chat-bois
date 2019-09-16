const FriendModel = require('../models/friend.model');
const UserModel = require('../models/user.model');

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

const getFriends = (req, res) => {

    if(req.params.displayName){
    UserModel.findOne({displayName: req.params.displayName}).exec((err, doc) => {
        if(err)return handleError(err)
        console.log(req.user._id);
        console.log(doc._id)
        FriendModel.find({
            $or: [
                { $and: [{friend1: doc._id}, {friend2: req.user._id}] },
                { $and: [{friend1: req.user._id}, {friend2: doc._id}] }
            ]
        }).exec((err, doc) => {
            console.log(doc)
            res.send(doc);
        })
    })
} else {
    FriendModel.find({
        $or: [
            { $and: [{friend2: req.user._id}] },
            { $and: [{friend1: req.user._id}] }
        ]
    }).exec((err, doc) => {
        console.log(doc)
        res.send(doc);
    })
}
    

}

module.exports = { addFriend: addFriend, getFriends: getFriends }


