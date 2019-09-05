const User = require('../models/user.model')
const Message = require('../models/message.model');
const jwt = require('jsonwebtoken')

function createJWT(user) {
    return jwt.sign({ id: user.id }, process.env.JWT_DEV_ENV_SECRET, {
        expiresIn: process.env.JWT_DEV_ENV_EXP
    })
}

const verifyJWT = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_DEV_ENV_SECRET, (err, payload) => {
      if (err) return reject(err)
      resolve(payload)
    })
})

const signup = (req, res) => {
    //TODO Exercise - add input validation and error handling
    console.log(req.body)
    const user = new User()
    user.email = req.body.email
    user.password = req.body.password
    user.displayName = req.body.displayName

    user.save(function (err, user) {
        if (err) {
            console.log(err)
            return res.status(500).end()
        } else {
            const signedJWT = createJWT(user)
            return res.status(201).send({ signedJWT })
        }
    })
}

const login = async (req, res) => {
    //TODO Exercise - add input validation and error handling

    const user = await User.findOne({ email: req.body.email }).exec()
    if (!user) {
        return res.status(400).send({ message: 'invalid combination' })
    }
    const matchingPasswords = await user.checkPassword(req.body.password)
    if (!matchingPasswords) {
        return res.status(400).send({ message: 'invalid combination' })
    }
    const signedJWT = createJWT(user)
    return res.status(201).send({ signedJWT })
}

const isAuthorized = async (req, res, next) => {

    const bearer = req.headers.authorization
    
    const token = bearer.split('Bearer ')[1].trim()
    let payload

    try {
        payload = await verifyJWT(token)
    } catch (e) {
        return res.status(500).end()
    }

    const user = await User.findById(payload.id).exec()

    if (!user) {
        return res.status(500).end()
    }

    req.user = user
    next()
}

const postMessage = (req, res) => {
    const message = new Message()
    message.displayName = req.user.displayName
    message.message = req.body.message

    message.save(function (err, user) {
        if (err) {
            console.log(err)
            return res.status(500).end()
        } else {
            const signedJWT = createJWT(user)
            return res.status(201).send({ respond: "message sent" })
        }
    })
}

module.exports = {
    verifyJWT: verifyJWT,
    signup: signup,
    login: login,
    isAuthorized: isAuthorized,
    postMessage: postMessage
}