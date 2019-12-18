var redirecturi = context.getVariable("oauthv2authcode.ExternalAuthorize.redirect_uri");
var code = context.getVariable("oauthv2authcode.ExternalAuthorize.code");
var state = context.getVariable("oauthv2authcode.ExternalAuthorize.state");

var finalLocation = redirecturi+"?code="+ code+"&state="+state;
context.setVariable("response.header.Location", finalLocation);
context.setVariable("response.status.code", 302);