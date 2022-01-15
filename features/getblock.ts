function getBlock() {
    var API_KEY = 'API_KEY';
    var wallet = 'wallet_id';
    var options = {
        host :  'api.etherscan.io',
        port : 443,
        path : '/api?module=account&action=getminedblocks&address=' + wallet + '&blocktype=blocks&page=1&offset=1&apikey=' + API_KEY,
        method : 'GET'
    }

    var getRequest = https.request(options, function(res) {
            console.log("\nstatus code: ", res.statusCode);
        res.on('data', function(data) {
            console.log( JSON.parse(data) );
        });
    });
        getRequest.end();
        getRequest.on('error', function(err){
            console.log("Error: ", err);
    });
}
