const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/test', (req, res) => {
    console.log("test");
    res.send("test respond");
});

app.listen(port, console.log("Server started on port: " + port))