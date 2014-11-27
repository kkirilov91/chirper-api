var users = [{
		user: 'kkirilov',
		id: 1,
		chirps: [1, 2] //ID of chiprs
	}],
	chirps = [{
		chirpId: 1,
		chirpText: "Търсим нов служител. Нужно е да е наполовина човеко-прасе, наполовина - мечка. Желание за работа с #WordPress е многу от съществено значка.",
		chirpTime: "10-10-2014 12:54"
	}, {
		chirpId: 2,
		chirpText: "Търсим нов служител. Нужно е да е наполовина човеко-прасе, наполовина - мечка. Желание за работа с #WordPress е многу от съществено значка.",
		chirpTime: "10-10-2014 12:54"
	}];

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
		var responseText = ['Request method: ' + request.method,
			'Response Url: ' + request.url
		].join('\n');

		request.on('data', function(data) {
			console.log(data.toString('utf8'));
		});
		request.on('end', function() {
			console.log('End');
		});
		response.end(responseText);
	});

server.listen(8000);