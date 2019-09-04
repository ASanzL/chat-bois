const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');      
const mongoose = require('mongoose');
const signup = require('./controllers/auth').signup;
const login = require('./controllers/auth').login;
const isAuthorized = require('./controllers/auth').isAuthorized;
const usersRouter = require('./routes/users');
const messageRouter = require('./controllers/auth').postMessage;
const envVars = require('dotenv').config();
const port = 3001;

if (envVars.error){
    console.log('error parsing environment variables')
};

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect('mongodb://localhost/chatBoisUsers' , {useNewUrlParser: true, useCreateIndex: true})
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.post('/signup', signup)
app.post('/login', login)
app.use('/api', isAuthorized)
app.use('/api/users', usersRouter);
app.use('/api/messages', messageRouter);

app.listen(port, console.log("Server started on port: " + port))