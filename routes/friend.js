var express = require('express')
var router = express.Router()
const controllers = require('../controllers/friend')

router
.route('/:displayName')
.get(controllers.addFriend)
.post(controllers.addFriend)
/*
router
  .route('/')
  .get(controllers.getFriend)
  .post(controllers.addFriend)
  .delete(controllers.addFriend)
  */

  module.exports = router