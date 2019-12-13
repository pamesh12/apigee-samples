const crypto = require('crypto');
var env = process.env;
const macKeyId =env.macKeyId;
var mackKey = env.macKey;
var algorithm = 'sha256';

console.log("======== macKeyId = "+ macKeyId);
console.log("********* mackKey = "+ mackKey);

exports.generateHmac = (body) =>{
    //TimeStamp
    const ts = Date.now();
    
    //Nonce
    var nonce = Math.random().toString(36).substring(7);
    var path = body.path;
    //Content-Type
    var contentType = body.contentType;
    var req =body.request;
    var method = body.method.toUpperCase();
    var ext = "";
    if((method=='POST' || method == 'PUT') && contentType && req){
        var contentTypeBody = contentType+JSON.stringify(req);
        console.log("contentTypeBody = "+ contentTypeBody);
        ext=crypto.createHash('sha256').update(contentTypeBody).digest('hex');
        console.log("ext = "+ ext);
    }
    
    var host = body.host;
    var port = body.port;
    var normalizedString = ts+"\n"+nonce+"\n"+method+"\n"+path+"\n"+host+"\n"+port+"\n"+ext;
    console.log("normalized String ::" + normalizedString);
    
    var noofpadding = 4 - mackKey.length % 4;
    if(noofpadding >0){
        mackKey = mackKey.padEnd("=",noofpadding);
    }
    
    //mackKey += mackKey+ ("=" * (4 - mackKey.length % 4));
    console.log("paddedMacKey ="+ mackKey);
    var decodedMacKey = Buffer.from(mackKey, 'base64'); 
    var macKeyString = decodedMacKey.toString('utf-8');
    console.log("macKeyString ="+ macKeyString);
    
    var mac = crypto.createHmac(algorithm, macKeyString)
                .update(normalizedString)
                .digest('base64');

    console.log("MAC = "+ mac);
    
    var authHeader ='Authorization : id="'+macKeyId+'",ts="'+ts+'",nonce="'+nonce+'",ext="'+ext+'",mac="'+mac+'"';
    
    console.log("authHeader = "+ authHeader);
    return authHeader;
}
