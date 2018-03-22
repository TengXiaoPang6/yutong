var httpProxy = require('http-proxy');
var port = 9999;
var _ = require("underscore");
var path = require("path");
var proxy = httpProxy.createProxyServer({});
proxy.on('connection', function (socket) {
    socket.setNoDelay(true);
});
var defaultMicroServerName = "defaultMicroServerName";
var urlMappingConfig = {
    "/newenergy/getFaultRecordList": "/dota/newenergy/getFaultRecordList",
    "/newenergy/exportFaultRecordList": "/dota/newenergy/exportFaultRecordList"
};
var serverMappingConfig = {
    "idc": 'https://otatest.vehicleplus.net',
    "icvt": 'http://icvt.vehicleplus.net/',
    "test": 'http://172.30.1.190/',
    "dev": 'http://10.23.22.31/',
    "jxd": 'http://10.1.78.26:8080/eap/',
	"fls":'http://10.23.32.167:8080/eap-web/',
	"gq":'http://10.1.47.38:9090/eap-web/',
	"yh":'http://10.1.47.48:8080',
    'hbf': {
        defaultMicroServerName: 'http://10.23.22.31/EAT/',
        'dota': 'http://10.23.32.172:9004'
    },
    'hcf': {
        defaultMicroServerName: 'http://10.23.32.172:8080',
        'dota': 'http://10.23.32.172:9004',
        'predo': 'http://10.1.78.66:9001'
    },
 
    "localhost": 'http://127.0.0.1:8080'
};
function getMappingUrl(url) {
    return urlMappingConfig['url'] ? urlMappingConfig['url'] : url;
}
function getMappingConfig(url) {
    var keys = _.keys(serverMappingConfig);
    var config = false;
    var configKey = false;
    var microServiceName;
    for (var i = 0; i < keys.length; i++) {
        configKey = keys[i];
        if (new RegExp("^[/]" + configKey + "[/].+").test(url)) {
            config = serverMappingConfig[configKey];
            break;
        }
    }
    if (config) {
        if (typeof config == "string") {// 一层解析
            url = getMappingUrl(url.replace('/' + configKey, ''));
            return [url, config];
        } else if (typeof config == "object") {//第二层解析
            url = getMappingUrl(url.replace('/' + configKey, ''));
            microServiceName = url.split(/[/]/g)[1];
            if (config[microServiceName]) {
                return [url, config[microServiceName]];
            } else {
                return [url, config[defaultMicroServerName]];
            }
        }
    }
    return false;
}


var server = require('http').createServer(function (request, response) {
    var mappingConfig = getMappingConfig(request.url);
    if (mappingConfig) {
        console.log(request.url + " -> " + path.join(mappingConfig[1], mappingConfig[0]).replace(/[\\]/g, "/"));
        request.url = mappingConfig[0];
        proxy.web(request, response, {target: mappingConfig[1]}, function (e) {
            console.error(e);
        });
    }
    else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/plain');
        response.end('request not found\n');
    }
});
server.listen(port);
server.on('connection', function (socket) {
    socket.setNoDelay(true);
});


console.log("server listen on " + port);
