!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=195)}({1:function(e,t,o){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.a=function(e,t){if(null!==e){var o=0;for(var r in e)if(e.hasOwnProperty(r)){var i=t(e[r],r,o);void 0!==i&&(e[r]=i),o++}}else console.log("returned object is null",n(e));return e}},11:function(e,t,o){"use strict";var n=o(18);t.a=function(e){var t,o=0;for(t in e)e.hasOwnProperty(t)&&o++;return 0===o&&Object(n.a)(e)&&(o=1),o}},18:function(e,t,o){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.a=function(e){return"object"===("undefined"==typeof HTMLElement?"undefined":n(HTMLElement))?e instanceof HTMLElement:e&&"object"===n(e)&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName}},195:function(e,t,o){"use strict";o.r(t);var n=o(11),r=o(1);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){var e=function(){this.xhr=new XMLHttpRequest};e.prototype.createCORSRequest=function(e,t){return"withCredentials"in this.xhr?this.xhr.open(e,t,!0):"undefined"!=typeof XDomainRequest?(this.xhr=new XDomainRequest,t=t.indexOf("https")>-1&&"https:"!==location.protocol?t.replace("https","http"):t,this.xhr.open(e,t)):this.xhr=null,this.xhr},e.prototype.abort=function(){return this.xhr&&void 0!==this.xhr.readyState&&4!==this.xhr.readyState&&this.xhr.abort(),this},e.prototype.getData=function(e){var t=this;try{var o;if(e.type=void 0!==e.type&&"string"==typeof e.type&&e.type.length>0?e.type:"POST",e.data=void 0!==e.data&&"object"===i(e.data)?e.data:{},e.url=void 0!==e.url&&"string"==typeof e.url&&e.url.length>0?e.url:"",e.success=void 0!==e.success?e.success:function(){},e.error=void 0!==e.error?e.error:function(){},e.headers=void 0!==e.headers?e.headers:{},e.extraCallback=void 0!==e.extraCallback?e.extraCallback:function(){},t.xhr=this.createCORSRequest(e.type,e.url),t.xhr.onload=function(){e.extraCallback(e,t.xhr),e.success(t.xhr.responseText,e,t.xhr)},t.xhr.onerror=function(){e.error(t.xhr.status)},"undefined"==typeof XDomainRequest)if(Object(n.a)(e.headers)>0)for(o in e.headers)t.xhr.setRequestHeader(o,e.headers[o]);else"POST"!==e.type&&"PUT"!==e.type&&"DELETE"!==e.type||0!==Object(n.a)(e.headers)?t.xhr.setRequestHeader("Content-Type","text/plain"):t.xhr.setRequestHeader("Content-Type","application/json");return t.xhr.send(JSON.stringify(e.data)),t.xhr}catch(e){console.log(e)}};(new function(){void 0===window._CLLBV3Opt&&(window._CLLBV3Opt={bindContainer:document.body,spaceName:"my_space_name",autoStart:!1,memberId:"",gameId:"my_product_id",enforceGameLookup:!0,apiKey:"",resources:[],uri:{gatewayDomain:"https://gateway.ziqni.com"},language:"en",currency:""}),this.settings={apiKey:"",spaceName:"my_space_name",enforceGameLookup:!0,language:"en",currency:"",defaultScript:"https://s3.eu-west-1.amazonaws.com/demo.competitionlabs.com/_widgets/gamification-ux-package/javascript/gamification-ux-package.v3-selfinit.js?v="+(new Date).getTime(),defaultResources:["https://s3.eu-west-1.amazonaws.com/demo.competitionlabs.com/_widgets/gamification-ux-package/css/fonts.css?t="+(new Date).getTime(),"https://s3.eu-west-1.amazonaws.com/demo.competitionlabs.com/_widgets/gamification-ux-package/css/style.css?t="+(new Date).getTime()],loadWidgetIfNoProductsFound:!0,products:{my_product_id:{onBeforeLoad:function(e,t,o){"function"==typeof o&&o()}}}},this.loadScript=function(e,t,o){var n=document.createElement("script");n.setAttribute("type","text/javascript"),n.setAttribute("src","string"==typeof e.script&&e.script.length>0?e.script:this.settings.defaultScript),n.onload=function(){t()},n.onerror=function(e){console.log("widget not loaded"),void 0!==o&&o()},document.body.appendChild(n)},this.initialiseWidget=function(e){var t=this;t.loadScript(e,(function(){if(void 0!==window._clLeaderBoardV3SelfInit){var o=window._CLLBV3Opt;o.resources=void 0!==e.resources?e.resources:t.settings.defaultResources,void 0===o.apiKey&&(o.apiKey=t.settings.apiKey),void 0===o.spaceName&&(o.spaceName=t.settings.spaceName),void 0===o.enforceGameLookup&&(o.enforceGameLookup=t.settings.enforceGameLookup),void 0===o.language&&(o.language=t.settings.language),void 0===o.currency&&(o.currency=t.settings.currency),window._clLeaderBoardV3=new window._clLeaderBoardV3SelfInit(o),"function"==typeof e.onBeforeLoad?e.onBeforeLoad(t,e,(function(){window._clLeaderBoardV3.init()})):window._clLeaderBoardV3.init()}else console.log("widget does not exist")}))},this.init=function(){var e=this;if(void 0!==window._CLLBV3Opt&&"string"==typeof window._CLLBV3Opt.gameId){var t=!1;Object(r.a)(e.settings.products,(function(o,n){n!==window._CLLBV3Opt.gameId||t||(t=!0,e.initialiseWidget(o))})),!t&&e.settings.loadWidgetIfNoProductsFound&&e.initialiseWidget({script:e.settings.defaultScript,resources:e.settings.defaultResources})}}}).init()}()}});