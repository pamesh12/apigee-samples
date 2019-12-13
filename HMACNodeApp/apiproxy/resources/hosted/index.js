var express = require('express')
var hmac = require("./hmac.js");
//var bodyParser = require("body-parser");
var app = express();
app.use(express.json());

console.log('node.js application starting...');
console.log(process.env);

//app.use(bodyParser.urlencoded({ extended: false }));


var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port %d', server.address().port)
})

app.get("/", function(request, response){
    response.set('Content-Type', 'application/json');
    response.send({"response": "Hello World"});
})

app.post('/generateHMAC', function(request, response){
    var hmacResponse = hmac.generateHmac(request.body);
    response.set('Content-Type', 'application/plain');
    response.send(hmacResponse);
});
