var authResponse = context.getVariable("authResponse");
print(response.headers);
if(response !== null){
    print("Location = "+ authResponse.header.Location);
    context.setVariable("response.status.code", 302);
    context.setVariable("response.header.Location", authResponse.header.Location);
}else{
    print("Stattus Code = "+ authResponse.status.code);
}