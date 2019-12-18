const path = context.getVariable("message.path");
const host = "http://pamesh12-eval-test.apigee.net/externaloauth";
var targetUrl = host+"/"+ path;
context.setVariable("target.url", targetUrl);