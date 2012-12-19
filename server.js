var static = require('node-static');
var file = new(static.Server)(__dirname+'/public');

// AppConfig
var app = {
	port: 8080
};

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
		file.serve(request, response);
    });
}).listen(app.port);

console.log('Server running on 0.0.0.0:'+app.port);