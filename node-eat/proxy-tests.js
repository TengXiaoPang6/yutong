var test_port = 9001;
var dev_port = 9002;
var https = require('https'), httpProxy = require('http-proxy');

//
// Create a HTTP Proxy server with a HTTPS target
//
httpProxy.createProxyServer({
    target: 'https://xctest.vehicleplus.net/',
    agent: https.globalAgent,
    headers: {
        host: 'vehicleplus.net'
    }
}).listen(test_port);

console.log("proxy test https->http on port " + test_port);

