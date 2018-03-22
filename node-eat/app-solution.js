var filePath = "D:\\_workspace\\solutions";
//var filePath = "D:\\_workspace\\vehiclePlusWeb\\web";
var static = require('node-static');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});
var fileServer = new static.Server(filePath, {indexFile: 'index.html'});
var port = 4000;
var proxyGateServer = "http://127.0.0.1:9999";
function getServerConfig(url) {
    if (/^[/]proxy-.+/.test(url)) {
        var proxyPath = url.split("/")[1];
        var microServerKey = proxyPath.split("-")[1];
        var realUrl = url.replace("/" + proxyPath, '/' + microServerKey);
        return {
            server: proxyGateServer,
            url: realUrl
        }
    } else {
        return false;
    }
};

var server = require('http').createServer(function (request, response) {
    var config = getServerConfig(request.url);
    if (config) {
        request.url = config.url;
        proxy.web(request, response, {target: config.server}, function (e) {
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