API Proxy (Hosted) to generate OAuth MAC token as per [Draft RFC](https://tools.ietf.org/id/draft-ietf-oauth-v2-http-mac-02.html)

1. Generate a timestamp : The timestamp is the number of seconds since January 1, 1970 00:00:00 UTC, also known as EPOCH time.
1. Generate a nonce : A nonce is an arbitrary string that must be different for each request with the same MAC ID.
1. Generate the extension string : The extension string is blank for GET and DELETE requests. For PUT and POST requests, concatenate the value of the Content-Type header (e.g. "application/json") with the request body and hash it with SHA-256.
1. Build the normalized request string by concatenating together, in order, the following HTTP request elements, each followed by a new line character (\n):
    * The timestamp value calculated for the request.
    * The nonce value generated for the request.
    * The HTTP request method in upper case. For example: HEAD, GET, POST, etc.
    * The HTTP request-URI
    * The hostname included in the HTTP request using the Host request header field in lower case.
    * The port as included in the HTTP request using the Host request header field. If the header field does not include a port, the default value for the scheme MUST be used (e.g. 80 for HTTP and 443 for HTTPS).
    * The value of the extension string.
    
1. Decode the MAC key from Base64 if it's encoded We might have to add padding to the MAC key to decode it.
1. Generate the signature by using the HMAC-SHA256 algorithm and the MAC key over the normalized request string.
1. Encode the signature in Base64.
1. Generate the authorization header for the request.   

## API Usage ##
* basepath : /nodeapp
* path: /generateHMAC
* Method : POST
* Body : 
      `{
      "method": <request-method>,
      "path" : "<API Path>",
      "contentType":"<Content-Type>",
      "request": {
        <JSON Request for POST or PUT>
      },
      "host":"<HOST>",
      "port":"<PORT>"
    }`
    
* Response : Authorization Header

**Example** : 
Authorization: MAC id="{mackKey}",
                   ts="{timestamp}",
                   nonce="{nonce}",
                   ext="{extensionString}",
                   mac="{mac}"
