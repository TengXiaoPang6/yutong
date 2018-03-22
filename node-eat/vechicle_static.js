var filePath = "D:\\_workspace\\vehiclePlusWeb\\web";
var static = require('node-static');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});
var urlMapping = require('./urlMapping');
var fileServer = new static.Server(filePath, {indexFile: 'index.html'});
var port = 3000;
var server = require('http').createServer(function (request, response) {
    var mapping = urlMapping(request.url);
    if (mapping) {
        request.url = mapping.url;
        proxy.web(request, response, {target: mapping.server}, function (e) {
            console.error(e);
        });
    } else {
        request.addListener('end', function () {
            fileServer.serve(request, response);
        }).resume();
    }
});
server.listen(port);
server.on('connection', function (socket) {
    socket.setNoDelay(true);
});

console.log("server listen on " + port);