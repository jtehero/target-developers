!function(){"use strict";var e,n,t,c,r,o={},d={};function a(e){var n=d[e];if(void 0!==n)return n.exports;var t=d[e]={id:e,loaded:!1,exports:{}};return o[e].call(t.exports,t,t.exports,a),t.loaded=!0,t.exports}a.m=o,e=[],a.O=function(n,t,c,r){if(!t){var o=1/0;for(s=0;s<e.length;s++){t=e[s][0],c=e[s][1],r=e[s][2];for(var d=!0,i=0;i<t.length;i++)(!1&r||o>=r)&&Object.keys(a.O).every((function(e){return a.O[e](t[i])}))?t.splice(i--,1):(d=!1,r<o&&(o=r));d&&(e.splice(s--,1),n=c())}return n}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[t,c,r]},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,{a:n}),n},a.d=function(e,n){for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(n,t){return a.f[t](e,n),n}),[]))},a.u=function(e){return({305:"5e65052d",351:"component---src-pages-sdk-welcome-sample-apps-index-md",405:"component---src-pages-sdk-welcome-core-principles-audience-targeting-server-side-decisioning-md",461:"e82996df",489:"component---src-pages-api-profile-api-index-md",532:"styles",1206:"2dee68d8",1720:"component---src-pages-support-faq-index-md",2416:"component---src-pages-sdk-welcome-getting-started-index-md",2691:"component---src-pages-sdk-welcome-getting-started-net-md",3035:"0abf01d3",3125:"component---node-modules-adobe-gatsby-theme-aio-src-pages-404-md",3185:"component---src-pages-support-index-md",3192:"component---src-pages-sdk-welcome-core-principles-audience-targeting-on-device-decisioning-md",3490:"b6f3ea4c",3529:"component---src-pages-sdk-welcome-core-principles-audience-targeting-index-md",3751:"component---src-pages-support-contribute-index-md",3917:"component---src-pages-sdk-welcome-core-principles-user-permissions-and-properties-md",4193:"component---src-pages-guides-migrating-index-md",4429:"component---src-pages-sdk-welcome-getting-started-nodejs-md",4486:"component---src-pages-api-admin-api-index-md",5038:"component---src-pages-sdk-welcome-integration-analytics-for-target-a-4-t-reporting-md",5152:"component---src-pages-sdk-welcome-core-principles-event-tracking-md",5470:"component---src-pages-sdk-welcome-core-principles-bucketing-md",5879:"component---src-pages-sdk-welcome-integration-experience-cloud-id-service-ecid-md",6093:"component---src-pages-sdk-welcome-integration-aam-segments-md",6146:"9f96d65d",6530:"f5cc1685",6598:"component---src-pages-sdk-welcome-getting-started-python-md",6833:"component---src-pages-api-recs-api-manage-catalog-md",6987:"component---src-pages-api-recs-api-fetch-recs-server-side-delivery-api-md",7564:"component---src-pages-sdk-welcome-core-principles-index-md",7714:"8b61fb39",8035:"component---src-pages-index-md",8450:"component---src-pages-guides-index-md",8589:"component---src-pages-api-recs-api-manage-custom-criteria-md",8727:"component---src-pages-sdk-welcome-getting-started-java-md",8807:"component---src-pages-sdk-index-md",8824:"component---src-pages-api-index-md",8980:"component---src-pages-sdk-welcome-index-md",9002:"component---src-pages-support-community-index-md",9278:"component---src-pages-api-delivery-api-index-md",9351:"commons",9585:"component---src-pages-api-recs-api-index-md",9638:"component---src-pages-sdk-welcome-integration-index-md"}[e]||e)+"-"+{305:"27722c13d02374efae78",351:"021eaa1b98a5d634169a",405:"fd6b4e8c0b93a71e82d1",461:"1ff4fae5c653dfaa3c0d",489:"ebd879300f719d0794da",532:"8ebd799b1143c6f67bdb",1206:"1dd5d0a3a3a7b2cb5603",1720:"f66dd88b199a30103d34",1776:"48f1549ff186b50a6584",2416:"4d204ad11172fe57536e",2691:"1fb19d6db524f0f0c6b7",3035:"3297a5cd8394d2642a6d",3102:"29dce23af9bf0547bbdd",3125:"e6c3d379cf3e3edb78d1",3185:"379ea86b024d9054239c",3192:"0d80c609601c89843b75",3490:"6fc826b250d03922c0fc",3529:"3cb46cc72f692ef742cc",3751:"e751ba033634e815da06",3917:"adde396461853d4d2589",4193:"fc4630b8e38022103a64",4429:"3ca6f896443a9f7386b9",4486:"6beb47feaa83517df0d4",5038:"7678a725477c1cd8c5d4",5152:"a6753b9712b6f556c413",5470:"58546e02d117df05c212",5586:"85a31a87f38366e20cec",5879:"cfdbbb4616fbc8534a50",6093:"5413e1f419570ed690c6",6146:"4b8c3ec530228eed66cd",6530:"c5b6eb8c497095a745da",6598:"df44c88d6e25e6d065a9",6833:"ce7c52db80b53bfff850",6987:"5a8e8a4d236a41491183",7564:"2b7f1ccfd2366422e966",7714:"00c52198b1b4bde69610",8035:"f9f02a9e1cd2ca66efaf",8450:"e6a40eef3b84a1ed94e0",8589:"5ad3be88a52851ecdbde",8727:"5fcbd2a7c0e2b7712534",8807:"a9a5ebce1ad91d702070",8824:"872c49db8811269bddd7",8980:"1acf7072ec6004e4055a",9002:"e29f627ce621bdfa38d4",9278:"b6bcd91cb03fccb3087d",9351:"8e28e6ecb17c6e5b8060",9585:"7a561070711962f97154",9638:"19708b10c3311fa942b4"}[e]+".js"},a.miniCssF=function(e){return"styles.53d22cf95f29e4134944.css"},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n={},t="dev-site-documentation-template:",a.l=function(e,c,r,o){if(n[e])n[e].push(c);else{var d,i;if(void 0!==r)for(var s=document.getElementsByTagName("script"),p=0;p<s.length;p++){var f=s[p];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==t+r){d=f;break}}d||(i=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,a.nc&&d.setAttribute("nonce",a.nc),d.setAttribute("data-webpack",t+r),d.src=e),n[e]=[c];var m=function(t,c){d.onerror=d.onload=null,clearTimeout(u);var r=n[e];if(delete n[e],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((function(e){return e(c)})),t)return t(c)},u=setTimeout(m.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=m.bind(null,d.onerror),d.onload=m.bind(null,d.onload),i&&document.head.appendChild(d)}},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},a.p="/target-developers/",c=function(e){return new Promise((function(n,t){var c=a.miniCssF(e),r=a.p+c;if(function(e,n){for(var t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var r=(d=t[c]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(r===e||r===n))return d}var o=document.getElementsByTagName("style");for(c=0;c<o.length;c++){var d;if((r=(d=o[c]).getAttribute("data-href"))===e||r===n)return d}}(c,r))return n();!function(e,n,t,c){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",r.onerror=r.onload=function(o){if(r.onerror=r.onload=null,"load"===o.type)t();else{var d=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.href||n,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=d,i.request=a,r.parentNode.removeChild(r),c(i)}},r.href=n,document.head.appendChild(r)}(e,r,n,t)}))},r={6658:0},a.f.miniCss=function(e,n){r[e]?n.push(r[e]):0!==r[e]&&{532:1}[e]&&n.push(r[e]=c(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))},function(){var e={6658:0,532:0};a.f.j=function(n,t){var c=a.o(e,n)?e[n]:void 0;if(0!==c)if(c)t.push(c[2]);else if(/^(532|6658)$/.test(n))e[n]=0;else{var r=new Promise((function(t,r){c=e[n]=[t,r]}));t.push(c[2]=r);var o=a.p+a.u(n),d=new Error;a.l(o,(function(t){if(a.o(e,n)&&(0!==(c=e[n])&&(e[n]=void 0),c)){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+n+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,c[1](d)}}),"chunk-"+n,n)}},a.O.j=function(n){return 0===e[n]};var n=function(n,t){var c,r,o=t[0],d=t[1],i=t[2],s=0;for(c in d)a.o(d,c)&&(a.m[c]=d[c]);if(i)var p=i(a);for(n&&n(t);s<o.length;s++)r=o[s],a.o(e,r)&&e[r]&&e[r][0](),e[o[s]]=0;return a.O(p)},t=self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}()}();
//# sourceMappingURL=webpack-runtime-1914727974185078e1d6.js.map