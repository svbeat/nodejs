// server.js

	// set up ========================
	var express  = require('express');
	var app      = express(); 								// create our app w/ express

	var morgan = require('morgan'); 			// log requests to the console (express4)
	var bodyParser = require('body-parser'); 	// pull information from HTML POST (express4)
	var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

	var path = require('path');

	var connection = require('express-myconnection');
	var mysql = require('mysql');

	app.use(express.static(__dirname + '/public')); 				// set the static files location /public/img will be /img for users
	app.use(morgan('dev')); 										// log every request to the console
	app.use(bodyParser.urlencoded({'extended':'true'})); 			// parse application/x-www-form-urlencoded
	app.use(bodyParser.json()); 									// parse application/json
	app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
	app.use(methodOverride());

	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'ejs');

	app.use(
		connection(mysql,{
			host: 'localhost',
			user: 'root',
			password : 'root',
			port : 3306, //port mysql
			database:'nodejs'
			},'pool') //or single
	);

	// routes ======================================================================
	require('./app/routes.js')(app);

	// listen (start app with node server.js) ======================================
	app.listen(8080);
	console.log("App listening on port 8080");


