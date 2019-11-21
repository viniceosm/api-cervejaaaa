const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;

server.listen(PORT, function() {
	console.log(`Server rodando na porta ${PORT}!`);
});

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routesMain = require('./routes/main');

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);

	next();
});
app.use('/', routesMain.router);

app.get('*', function (req, res) {
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
	  error: {
		message: error.message
	  }
	});
});