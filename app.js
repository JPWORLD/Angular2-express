var express = require('express');
var app = express();
var server = require('http').server(app);
var bodyParser = require('body-parser');

server.listen(process.env.PORT || 9999, function(){
    console.log("server connected. listening on port: "+ (process.env.PORT||9999));
});