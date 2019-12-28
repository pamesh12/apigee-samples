var tokenResponse = context.getVariable("external.payload");
var tokenJson = JSON.parse(tokenResponse);
var formattedResponse = JSON.stringify(tokenJson, null,2);
context.setVariable("response.content",formattedResponse);