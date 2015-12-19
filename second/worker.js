var fs = require('fs');
var express = require('express');
var serveStatic = require('serve-static');
var path = require('path');

module.exports.run = function (worker) {
  console.log('   >> Worker PID:', process.pid);

  var app = require('express')();
  app.set('views', __dirname+'/views');
  app.set('view engine', 'jade');

  app.use(express.static(__dirname + '/public'));

  var httpServer = worker.httpServer;
  var scServer = worker.scServer;

  httpServer.on('request', app);

  app.get('/',function(req,res) {
    res.render('index',{
      port:process.env.SERVER_PORT
    });
  });

  /*
    In here we handle our incoming realtime connections and listen for events.
  */
  scServer.on('connection', function (socket) {
    console.log(socket.id,'has connected to second server');
    setTimeout(function() {
      console.log(socket.id,'is publishing to the broadcast channel');
      socket.global.publish('broadcast', {
        success:1,
        message:'Broadcast from ' + socket.id
      });
    },5000);

  });
};
