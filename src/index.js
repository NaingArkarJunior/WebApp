const express = require('express');
const path = require('path');
const { data } = require('./data');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'))

app.get('/info', function(req, res) {
    res.send({
        dir:__dirname,
        path:path.join(__dirname,"")
    });
});

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/girl', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/girl.jpg'));
  });

app.get('/view/swifty', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/swifty.html'));
});


app.get('/user', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/user.html'));
});


app.get('/swifty', function(req, res) {
    res.send(data);
});

app.listen(port);
console.log('Server started at http://localhost:' + port);