var express = require('express')
var router = express.Router()
const controllers = require('../controllers/messages');

router
  .route('/')
  .get(controllers.getMessage)
  .post(controllers.postMessage)
  //.delete(controllers.addUser)

  module.exports = router