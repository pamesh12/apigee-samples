# apigee-samples
Samples for Apigee API Management

1. [3rdPartyOAuthAPI](./3rdPartyOAuthAPI) - OAuth API to demostrate use of 3rd party OAuth servers for Auth Code and token generation. Complete flow can be tested with inclusion of below 2 apis.
    * [API Secured By 3rdPartyOAuth](./APISecuredBy3rdPartyOAuth)- Demo API secured by OAuth.
    * [External Client App](./ExternalClientApp) - Demo Client App.
    
    External Client App --> 3rd Party Oauth API --> API Secured by 3rdPatyAPI
    
1. [3-Legged OAuth API](./3-Legged-OAuth) - Authorization Code Flow.
1. [2-Legged OAuth API](./2-Legged-OAuth) - Client Credential Flow
1. [Caching in Apigee](./CacheDemoApi) -  Caching external service response 
1. [MAC OAuth Token API](./HMACNodeApp) - Generation of MAC OAuth token using Node Hosted API in Apigee
1. [Generate JWT](./GenerateJWTAPI) - API to generate JWT using HMAC-SHA-256 and RSA private key. This API generates JWT and send it to Verify JWT API.
1. [Verify JWT](./VerifyJWT) - API to verify JWT using HMAC-SHA-256 and RSA public key. This API verify the JWT sent in header and if successful, sends a response back.
