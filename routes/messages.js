var express = require('express')
var router = express.Router()
const controllers = require('../controllers/messages');
const postMsg = require('../controllers/auth').postMessage;

router
  .route('/')
  .get(controllers.getMessage)
  .post(postMsg)

  router
  .route('/:chatroom')
  .get(controllers.getMessage)
  .post(postMsg)


  module.exports = router