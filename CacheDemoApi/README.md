Demo API to demonstrate caching of OAuth Token received from External API and use it for subsequent calls. 

**API Flow**

Client --> Apigee API(secured by OAuth) --> External API (secured by OAuth)

**Dependent APIs**
l. [2-Legged-OAuth](../2-Legged-OAuth) - API to get OAuth token for CacheDemoAPI.
l. [ExternalOAuthApi](../ExternalOAuthApi) - Demo OAuth API for external OAuth.
l. [ExternalApi](../ExternalApi) - Dmeo API for external API secured with OAuth.

**Flow for Apigee API Caching.**
l. **LookupCache** policy is done before calling external OAuth API.
l. If cache returns null, call to external OAuth API is done and access token in response is cached using **PopulateCache** policy.
l. If cache returns value, same is used and call to External OAuth API is skipped.
l. Cache expiration is set less than token exipres_in value.
