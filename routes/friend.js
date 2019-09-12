var express = require('express')
var router = express.Router()
const controllers = require('../controllers/friend')


router
.route('/')
.get(controllers.getFriends)
.post(controllers.addFriend)

router
.route('/:displayName')
.get(controllers.getFriends)

  module.exports = router