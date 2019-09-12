var express = require('express')
var router = express.Router()
const controllers = require('../controllers/friend')

router
  .route('/')
  .get(controllers.getFriend)
  .post(controllers.addFriend)
  .delete(controllers.addFriend)

  module.exports = router