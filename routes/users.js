var express = require('express')
var router = express.Router()
const controllers = require('../controllers/users')

router
  .route('/')
  .get(controllers.getUser)
  .put(controllers.addUser)
  .delete(controllers.addUser)

router
.route('/:id')
.get(controllers.getUser)

router
.route('/:id/:id2')
.get(controllers.getUser)




  module.exports = router