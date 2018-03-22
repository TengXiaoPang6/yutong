// 网关服务配置
var gateServerConfig = {
    "localhost": 'http://127.0.0.1:8080',
    "idc": 'http://xny.yt.vehicleplus.net',
    "test": 'http://172.30.1.190/EAT/',
    "hcf": 'http://10.1.47.35:8080/',
    "zl": 'http://10.1.47.35:8080/',
    "yf": 'http://10.23.32.161:19090/EAT/',
    "yfn": 'http://10.23.22.31/EAT/',
    "pre": 'http://172.30.1.193:8080/'
};

// 网关后的专业产品微服务映射配置
var productServerMapping = {
    'yf': {
        'dota': 'http://10.23.32.172:9004',
        'predo': 'http://10.1.78.66:9001'
    },
    'hcf': {
        'dota': 'http://10.23.32.172:9004',
        'predo': 'http://10.1.78.66:9001'
    },    
	'zl': {
        'dota': 'http://10.23.32.172:9004',
        'predo': 'http://10.1.78.66:9002'
    }
};

var urlMapping = {
    '/newenergy/getFaultRecordList': {
        url: '/dota/newenergy/getFaultRecordList',
        serverKey: 'dota'
    }
};

module.exports = function (url) {
    if (/^[/]proxy-.+/.test(url)) {
        var proxyPath = url.split("/")[1];
        var gateServerKey = proxyPath.split("-")[1];
        var gateServerUrl = gateServerConfig[gateServerKey];
        var productServerUrl = gateServerUrl;
        var productConfig = productServerMapping[gateServerKey];
        var realUrl = url.replace("/" + proxyPath, '');
        //获得映射后的url
        var urlMappingConfig = urlMapping[realUrl];
        // Url 映射
        if (urlMappingConfig && productConfig && productConfig[urlMappingConfig.serverKey]) {
            realUrl = urlMappingConfig.url;
            productServerUrl = productConfig[urlMappingConfig.serverKey];
            console.log("Url 映射 url:" + realUrl);
            console.log("Url 映射 target server url:" + productServerUrl);
        }
        // 前缀映射
        else {
            void function () {
                var productName = realUrl.split("/")[1];
                if (productConfig && productConfig[productName]) {
                    productServerUrl = productConfig[productName];
                    console.log("前缀映射 url:" + realUrl);
                    console.log("前缀映射 target server url:" + productServerUrl);
                }
            }();
        }
        return {
            server: productServerUrl || gateServerUrl,
            url: realUrl
        }
    } else {
        return false;
    }
};
