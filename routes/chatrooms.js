var express = require('express')
var router = express.Router()
const controllers = require('../controllers/chatrooms');

router
  .route('/')
  .get(controllers.getChatrooms)
  .post(controllers.createChatrooms)

  module.exports = router