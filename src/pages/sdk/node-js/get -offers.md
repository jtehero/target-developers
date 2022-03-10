# Get Offers

## Description

`getOffers()` is used to execute a decision and retrieve an experience from Adobe Target.


## Method

**Node.js**

getOffers

Syntax

```
TargetClient.getOffers(options: Object): Promise
```

## Parameters

The `options` object has the following structure:

**Node.js**

|Name|Type|Required|Default|Description|
| --- |--- | --- | --- | --- |
|Request|Object|Yes|None|Conforms to the *Target Delivery API* request|
|visitorCookie|String|No|None|ECID (VisitorId) cookie|
|targetCookie|String|No|None|Target cookie|
|targetLocationHint|String|No|None|Target location hint|
|consumerId|Sting|No|None|consumerIds for Analytics for Target (A4T) stitching|
|CustomerIds|Array|No|None|Customer IDs in VisitorId-compatible format|
|sessionId|String|No|None|Used for linking multiple Target requests|
|visitor|Object|No|new VisitorId|Supply an external VisitorId instance|

## Promise

**Node.js**

`Promise` returned has the following structure:

|Name|Type|Description|
| --- | --- | --- |
|request|Object|*Target Delivery* API request|
|response|Object|*Target Delivery* API response|
|visitorState|Object|Object that should be passed to Visitor API `getInstance()`|
|targetCookie|Object|Target cookie|
|targetLocationHintCookie|Object|Target location hint cookie|
|analyticsDetails|Array|Analytics payload, in case of client-side Analytics usage|
|responseTokens|Array|A list of [Response tokens](https://experienceleague.adobe.com/docs/target/using/administer/response-tokens.html?lang=en){target=_blank}.|
|trace|Array|Aggregated trace data for all request mboxes/views|
|status|Object|An object containing the status of the response.|
|decisioningMethod|String|Determines which decisioning method to use (*on-device*, server-side, hybrid)|

`targetCookie` and `targetLocationHintCookie` objects used for passing data back to the browser have the following structure:

|Name|Type|Description|
| --- | --- | --- |
|name|String|Cookie name|
|value|Any|Cookie value, the will be converted to string|
|maxAge|Number|The `maxAge` option is a convenience for setting expires relative to the current time in seconds|

The `status` object used for indicating the status of the target response has the following structure:

|Name|Type|Description|
| --- | --- | --- |
|status|Number|HTTP status code|
|message|String|A message about the response. For instance, it may indicate if the response was decided *on-device* or server-side|
|remoteMboxes|Array|When decisioning Method is `on-device`, an array of mbox names that could not be fully decided on-device is given. In other words, a *Target Delivery API* request is needed.|

## Example

**Node.js**

```
const TargetClient = require("@adobe/target-nodejs-sdk");
const CONFIG = {
  client: "acmeclient",
  organizationId: "1234567890@AdobeOrg"
};

const targetClient = TargetClient.create(CONFIG);

const request = {
    context: {channel: "web"},
    execute: {
        mboxes: [{
            name: "a1-serverside-ab",
            index: 1
        }]
}};

const response = await targetClient.getOffers({ request });
```
