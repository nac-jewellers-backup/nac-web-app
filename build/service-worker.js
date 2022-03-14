"use strict";var precacheConfig=[["/index.html","b67bdc47055ca8bc30e74cf8bf6edfd3"],["/precache-manifest.922f21b4a77b8d21a960e8029d785efc.js","922f21b4a77b8d21a960e8029d785efc"],["/service-worker.js","634e3ade77e7addde1fb8ff82aa314aa"],["/static/css/2.css","1258761517bb0e48541cbdf02bdc64d6"],["/static/css/4.css","80676632f9e2fca7ba25b744eecd5233"],["/static/css/main.css","5971af6b6609216ad97c33a965a6b89c"],["/static/js/2.js","a6e729b729b29e9aa7aac1d114ec054c"],["/static/js/3.js","6140126373202a21ebfa116bbd711e11"],["/static/js/4.js","b610ddbe95cd468a2d2dcd2af4e92dae"],["/static/js/main.js","38355d99142e0d6648113ef026cdeaed"],["/static/js/runtime~main.js","ccef21838a50bc88f335d6a6e4dc2ca7"],["/static/media/FlowerDimon.jpg","92e2d23a1a2929823738532362c05eea"],["/static/media/NotoSerif-Regular.ttf","d1c72e0e788cf2bbc1de53da57599bec"],["/static/media/close.svg","2b3d63f761a61e5c65a4773359c4eb40"],["/static/media/closeheart.jpg","1d4ab251e668bd11b62b30615bd88e78"],["/static/media/icons8-facebook.svg","6b446a380e308ad3d84cf955d088f3be"],["/static/media/icons8-gmail.svg","992ac34a80cdd509871cff78c6d98e72"],["/static/media/img1ProductModal.jpg","28cd30ea4ad92b4520d9a3fb2634a87d"],["/static/media/img2ProductModal.jpg","b944ac0307e92dae56a16dc18b6318a1"],["/static/media/img3ProductModal.jpg","2e0c3b28d442f07cf1fb810420137dc5"],["/static/media/img4ProductModal.jpg","337eef9d867ffd752a548702f05cb8e6"],["/static/media/logout.svg","6e25bad6f003be8fe1ddf1c68d2b4dd9"],["/static/media/nosepin.gif","965dabcd31d04c27b319f732b7aae019"],["/static/media/shopping.svg","57b56bb10faf3b9dbb17bc91e6be7baf"],["/static/media/silverOpenLink.png","b03bd5d7d745593acdc60d6c1d6591d4"],["/static/media/slick.eot","ced611daf7709cc778da928fec876475"],["/static/media/slick.svg","f97e3bbf73254b0112091d0192f17aec"],["/static/media/slick.ttf","d41f55a78e6f49a5512878df1737e58a"],["/static/media/slick.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/static/media/styloriGagets.png","681db1b372ef45af725df7762fcb49ee"],["/static/media/telephone.svg","26f4adaec0fa060fe6ef92c4c4f7c485"],["/static/media/topPicksOne.jpg","1737e5e0a88de55dc6cf1a773e4b0816"],["/static/media/topPicksThree.jpg","35f5ee82b7e9b5e66f70a99aefcb3865"],["/static/media/topPicksTwo.jpg","37b89e280ecc047a56d66fdb6404bb23"],["/static/media/user-shape.svg","bcc776345852aa9836e64bcc3e000864"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),s=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}}),importScripts("/cache.js");