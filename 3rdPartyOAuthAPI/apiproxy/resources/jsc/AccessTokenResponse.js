var tokenResponse = context.getVariable("response.content");
var formattedResponse = JSON.stringify(JSON.parse(tokenResponse), null,2);
context.setVariable("response.content",formattedResponse);