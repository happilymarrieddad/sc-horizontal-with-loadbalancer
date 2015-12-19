var async = require('async');
var SocketCluster = require('socketcluster').SocketCluster;
var env = require('node-env-file');
env(__dirname+'/.env');
socketCluster = new SocketCluster({
	workers: require('os').cpus().length / 2,
	brokers: 1,
	port: process.env.SERVER_PORT || 3000,
	appName: 'fusion',
	workerController: __dirname + '/worker.js',
	brokerController: __dirname + '/broker.js',
	socketEventLimit: 100,
	rebootWorkerOnCrash: true,
	logLevel:2,
	protocol:'http',
	brokerOptions: {
		host:'localhost',
		port:process.env.REDIS_PORT || 6379
	}
});