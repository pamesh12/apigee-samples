API to generate JWT token using HMAC-SHA-256 Algorithm.

* basepath:/jwt/generate
* path : /hmac
* QueryParam : apikey 
* Method: GET
* Response : `{jwt-token : <generated JWT token>}`

API to generate JWT token using RSA Algorithm.

* basepath:/jwt/generate
* path : /rsa256
* QueryParam : apikey 
* Method: GET
* Response : `{jwt-token : <generated JWT token>}`

** Note : API is secured using APIKey policy. So, we need to subscribe an app to the product and pass the key as query param to the API.
