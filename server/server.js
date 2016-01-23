var express = require('express');
var bodyParser = require('body-parser');
var morgan		= 	require('morgan');
var mongoose = require('mongoose');
var dbconf = require('./dbconf');


var app = express();

var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };

mongoose.connect(dbconf.url, options);

mongoose.connection.on('open', function (ref) {
  console.log('Connected to mongo server.');
});
mongoose.connection.on('error', function (err) {
  console.log('Could not connect to mongo server!');
  console.log(err);
});
//Use JSON to parse the data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':false}));

app.use(morgan('dev'));

require('./routes/people')(app);


app.listen(3001, function(){
	console.log('Listening to PORT 3001');
});
