var express = require('express')
var router = express.Router()
const controllers = require('../controllers/messages');
const postMsg = require('../controllers/auth').postMessage;

router
  .route('/')
  .get(controllers.getMessage)
  .post(postMsg)
  //.delete(controllers.addUser)

  module.exports = router