const FriendModel = require('../models/friend.model');

const addFriend = (req, res) => {
    console.log("BAZLA")
    const Friend = FriendModel();
    Friend.friend1=req.body.friend1;
    Friend.friend2=req.body.friend2;
    
    Friend.save(function (err, friendModel) {
        if (err) {
            console.log(err)
            return res.status(500).end()
        } else {
            return res.status(200).json({ data: 'adding friend.....' });
        }
    })
}

const getFriend = (req, res) => {
    UserModel.find({}).exec((err, doc) => {
        res.send(doc);
    })
}

module.exports = { addFriend: addFriend, getFriend: getFriend }


