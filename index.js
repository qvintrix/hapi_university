'use strict'

const Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({ port: process.env.PORT || 8000 });

const internals = {
	pkg: require('./package.json')
}

server.route({
	method: 'GET',
	path: '/version',
	handler: function(request, reply) {

		// Return the version of the application

		return reply({ verison: internals.pkg.version, description: internals.pkg.description });
	}
});

// Start the server
server.start((err) => {

	if (err) {
		throw err;
	}
	console.log('Server running at:', server.info.uri);
})
;