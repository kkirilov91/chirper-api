var inmemory = require('./inmemory.js');

var requestRouter = {
	'GET': {
		'/all_chirps': function() {},
		'/all_users': function() {},
		'/my_chirps': function() {},
		'/chirps': function() {}
	},
	'POST': {
		'/register': function() {},
		'/chirp': function() {}
	},
	'DELETE': {
		'/chirp': function() {}
	}
};

var http = require('http'),
	server = http.createServer(function(request, response) {

		if (requestRouter[request.method] !== undefined && requestRouter[request.method][request.url]) {
			
		} else {

		}

		request.on('data', function(data) {
			console.log(data.toString('utf8'));
		});
		request.on('end', function() {
		});
		response.end('end');
	});

server.listen(8000);