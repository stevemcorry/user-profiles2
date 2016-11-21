var express = require('express');
var session = require('express-session');
var cors = require('cors');
var bodyParser = require('body-parser');
var config = require('./config.js');
var userCtrl = require('./controllers/userCtrl.js');
var profileCtrl = require('./controllers/profileCtrl.js');
var app = express();
var corsOptions = {origin: 'http://localhost:3000'};

app.use(bodyParser.json(corsOptions));
app.use(cors());
app.use(session({ secret: config.sessionSecret }));
app.use(express.static(__dirname + '/public'));



app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriends);

app.listen(3000,function() {
  console.log('good');
});
