var clientId = context.getVariable("request.queryparam.client_id");
var redirectUri = context.getVariable("request.queryparam.redirect_uri");
var cache = {};
cache.client_id = clientId;
cache.redirect_uri = redirectUri;
context.setVariable("cache.clientDetails", JSON.stringify(cache));