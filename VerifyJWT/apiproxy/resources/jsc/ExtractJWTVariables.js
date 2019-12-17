var jwtHmac = context.getVariable("jwt.verify-hmac-jwt");
var jwtrsa = context.getVariable("jwt.verify-rsa-jwt");
print(jwtHmac);
var subject;
var type;
if(jwtHmac){
    subject = context.getVariable("jwt.verify-hmac-jwt.claim.subject");
    type=  context.getVariable("jwt.verify-hmac-jwt.header.type");
}

if(jwtrsa){
   subject = context.getVariable("jwt.verify-rsa-jwt.claim.subject");
    type=  context.getVariable("jwt.verify-rsa-jwt.header.type");
}

context.setVariable("jwt.jwtSubject",subject);
context.setVariable("jwt.header.type",type);