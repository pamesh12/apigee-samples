 var cachedClientDetails = context.getVariable("clientDetails");
 if(cachedClientDetails){
     var clientDetailsJson = JSON.parse(cachedClientDetails);
     context.setVariable("request.queryparam.client_id",clientDetailsJson.client_id);
     context.setVariable("request.queryparam.redirect_uri",clientDetailsJson.redirect_uri);
 }
 context.setVariable("oauth_external_authorization_status", true);
 context.setVariable("request.queryparam.response_type", "code");