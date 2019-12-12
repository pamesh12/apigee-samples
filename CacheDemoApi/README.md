Demo API to demonstrate caching of OAuth Token received from External API and use it for subsequent calls. 

**API Flow**

Client --> Apigee API secured by OAuth (CacheDemoApi) --> External API secured by OAuth (ExternalApi)

**Dependent APIs**
1. [2-Legged-OAuth](../2-Legged-OAuth) - API to get OAuth token for CacheDemoAPI.
1. [ExternalOAuthApi](../ExternalOAuthApi) - Demo OAuth API for external OAuth.
1. [ExternalApi](../ExternalApi) - Dmeo API for external API secured with OAuth.

**Flow for Apigee API Caching.**
1. **LookupCache** policy is done before calling external OAuth API.
1. If cache returns null, call to external OAuth API is done and access token in response is cached using **PopulateCache** policy.
1. If cache returns value, same is used and call to External OAuth API is skipped.

**Note Cache expiration time must be set less than token exipres_in value.**
