(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8380],{20576:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return d}});var r=a(22122),i=a(19756),n=(a(15007),a(64983)),l=a(99536),o=["components"],s={},m={_frontmatter:s},p=l.Z;function d(e){var t=e.components,a=(0,i.Z)(e,o);return(0,n.mdx)(p,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"in-page-profile-attributes"},"In-page profile attributes"),(0,n.mdx)("p",null,'In-page profile attributes in Adobe Target (also called "in-mbox profile attributes") are name/value pairs passed directly through page code that are stored in the visitor\'s profile for future use.'),(0,n.mdx)("p",null,"In-page profile attributes allow user-specific data to be stored in Target's profile for later targeting and segmentation."),(0,n.mdx)("h2",{id:"format"},"Format"),(0,n.mdx)("p",null,'In-page profile attributes are passed into Target via a server call as a string name/value pair with the prefix "profile." before the Attribute name.'),(0,n.mdx)("p",null,'Attribute names and values are customizable (although there are some "reserved names" for specific uses).'),(0,n.mdx)("h3",{id:"examples"},"Examples"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"profile.membershipLevel=silver")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"profile.visitCount=3"))),(0,n.mdx)("h2",{id:"example-use-cases"},"Example use cases"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"Login information"),": Share non-PII (Personally Identifiable Information) data to Target based on the user's login. This data could be membership status, order history, or more."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"Store info"),": Track which store is this user's preferred location."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"Previous interactions"),": Track what the user has done on the site previously to inform future personalization.")),(0,n.mdx)("h2",{id:"benefits-of-method"},"Benefits of method"),(0,n.mdx)("p",null,"Data gets sent to Target in real time, and can be used on the same server call on which the data comes in."),(0,n.mdx)("h2",{id:"caveats"},"Caveats"),(0,n.mdx)("p",null,"Requires page code updates (directly or via a tag management system)."),(0,n.mdx)("p",null,"Attributes and values are visible in server calls, so a visitor can see the values. If sharing information such as credit ranges or other potentially private information, this method might not be the best approach."),(0,n.mdx)("h2",{id:"code-examples"},"Code examples"),(0,n.mdx)("p",null,"targetPageParamsAll (appends the attributes to all mbox calls on the page):"),(0,n.mdx)("p",null,(0,n.mdx)("inlineCode",{parentName:"p"},'function targetPageParamsAll() { return "profile.param1=value1&profile.param2=value2&profile.p3=hello%20world"; }')),(0,n.mdx)("p",null,"targetPageParams (appends the attributes to the global mbox on the page):"),(0,n.mdx)("p",null,(0,n.mdx)("inlineCode",{parentName:"p"},'function targetPageParams() { return profile.param1=value1&profile.param2=value2&profile.p3=hello%20world"; }')),(0,n.mdx)("p",null,"Attributes in mboxCreate code:"),(0,n.mdx)("p",null,(0,n.mdx)("inlineCode",{parentName:"p"},"<div class=\"mboxDefault\"> default content to replace by offer </div> <script> mboxCreate('mboxName','profile.param1=value1','profile.param2=value2'); <\/script>")),(0,n.mdx)("h2",{id:"links-to-relevant-information"},"Links to relevant information"),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"/target-developers/help/main/c-target/c-visitor-profile/profile-parameters.md#concept_01A30B4762D64CD5946B3AA38DC8A201"},"Profile Attributes")),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"/target-developers/help/main/c-target/c-audiences/c-target-rules/visitor-profile.md#concept_E972690B9A4C4372A34229FA37EDA38E"},"Visitor Profile")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-before-implement-methods-to-get-data-into-target-in-page-profile-attributes-md-56bed8e86adf25c57e5b.js.map