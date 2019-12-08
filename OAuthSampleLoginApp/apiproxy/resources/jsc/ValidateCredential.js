 var username = context.getVariable("request.formparam.userId");
 var password = context.getVariable("request.formparam.password");
 var actualUser = context.getVariable("actualUserName");
 var actualPassword = context.getVariable("actualPassword");
 print("actualUser = "+ actualUser +" ; actualPassword="+ actualPassword);
 if(username == actualUser && password == actualPassword){
    context.setVariable("loginStatus","true");
 }else{
    context.setVariable("loginStatus", "false"); 
 }