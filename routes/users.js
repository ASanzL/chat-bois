var express = require('express')
var router = express.Router()
const controllers = require('../controllers/users')

router
  .route('/')
  .get(controllers.getUser)
  .put(controllers.addUser)
  .delete(controllers.addUser)

  module.exports = router