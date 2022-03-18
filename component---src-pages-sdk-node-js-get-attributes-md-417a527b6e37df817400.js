(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3409],{29429:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return g}});var a,r=n(22122),d=n(19756),m=(n(15007),n(64983)),l=n(99536),o=["components"],i={},s=(a="CodeBlock",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),p={_frontmatter:i},u=l.Z;function g(e){var t=e.components,n=(0,d.Z)(e,o);return(0,m.mdx)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"get-attributes"},"Get Attributes"),(0,m.mdx)("h2",{id:"description"},"Description"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"getAttributes()")," is used to fetch experimentation and personalized experiences from Target and extract attribute values."),(0,m.mdx)("h2",{id:"method"},"Method"),(0,m.mdx)("h3",{id:"getattributes"},"getAttributes"),(0,m.mdx)(s,{slots:"heading, code",repeat:"1",languages:"js",mdxType:"CodeBlock"}),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-js"},"TargetClient.getAttributes(mboxNames: Array, options: Object): Promise\n")),(0,m.mdx)("h2",{id:"parameters"},"Parameters"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Name"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Required"),(0,m.mdx)("th",{parentName:"tr",align:null},"Default"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"mboxNames"),(0,m.mdx)("td",{parentName:"tr",align:null},"Array"),(0,m.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,m.mdx)("td",{parentName:"tr",align:null},"None")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"options"),(0,m.mdx)("td",{parentName:"tr",align:null},"Object"),(0,m.mdx)("td",{parentName:"tr",align:null},"No"),(0,m.mdx)("td",{parentName:"tr",align:null},"None")))),(0,m.mdx)("h2",{id:"promise"},"Promise"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"Promise")," returned by ",(0,m.mdx)("inlineCode",{parentName:"p"},"TargetClient.getAttributes()")," resolves an object with the following methods:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Method"),(0,m.mdx)("th",{parentName:"tr",align:null},"Return Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"getValue(mboxName, key)"),(0,m.mdx)("td",{parentName:"tr",align:null},"Any"),(0,m.mdx)("td",{parentName:"tr",align:null},"Returns the value for a specified mbox name and attribute key")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"asObject(mboxName)"),(0,m.mdx)("td",{parentName:"tr",align:null},"Object"),(0,m.mdx)("td",{parentName:"tr",align:null},"Returns a simple json object with key value pairs")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"getResponse()"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"https://github.com/jasonwaters/target-nodejs-sdk#targetclientgetoffers"},"getOffers Response")),(0,m.mdx)("td",{parentName:"tr",align:null},"Returns the response object normally returned by ",(0,m.mdx)("inlineCode",{parentName:"td"},"getOffers"))))),(0,m.mdx)("h2",{id:"example"},"Example"),(0,m.mdx)(s,{slots:"heading, code",repeat:"1",languages:"js",mdxType:"CodeBlock"}),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-js"},'const TargetClient = require("@adobe/target-nodejs-sdk");\nconst CONFIG = {\n  client: "acmeclient",\n  organizationId: "1234567890@AdobeOrg"\n};\n\nconst targetClient = TargetClient.create(CONFIG);\nconst offerAttributes = await targetClient.getAttributes(["demo-engineering-flags"]);\n\n\n//returns just the value of searchProviderId from the mbox offer\nconst searchProviderId = offerAttributes.getValue("demo-engineering-flags", "searchProviderId");\n\n//returns a simple JSON object representing the mbox offer\nconst engineeringFlags = offerAttributes.asObject("demo-engineering-flags");\n\n//  the value of engineeringFlags looks like this\n//  {\n//      "cdnHostname": "cdn.cloud.corp.net",\n//      "searchProviderId": 143,\n//      "hasLegacyAccess": false\n//  }\n\nconst assetUrl = `http://${engineeringFlags.cdnHostname}/path/to/asset`;\n')))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-sdk-node-js-get-attributes-md-417a527b6e37df817400.js.map