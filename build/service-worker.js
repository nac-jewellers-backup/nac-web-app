"use strict";var precacheConfig=[["/index.html","e353884863d2cc5843ed36fb720e730f"],["/precache-manifest.0f5056ce30d2cc8aabeff242d492079e.js","0f5056ce30d2cc8aabeff242d492079e"],["/service-worker.js","50d5235497926147b63a309739bf60f5"],["/static/css/2.css","f9fdeeaeee899dd67795678706328b7d"],["/static/css/3.css","4a8084f5cba114157e8bb27ac0005a6d"],["/static/css/main.css","1df80996d009cf5330bd628fcbceb90f"],["/static/js/2.js","580ba576613d9807f07f38d961ad3b1a"],["/static/js/3.js","7ed89626ffba7036108366f059db06bc"],["/static/js/4.js","683d029f046a53a72b2a5561ee074563"],["/static/js/main.js","36df66900f723319949f5e9216bdc1c0"],["/static/js/runtime~main.js","84ca500e946be08a5f49ef60d8fd5341"],["/static/media/Diners-Club.jpg","d20d098dccc3deb830808f97fb14f3ca"],["/static/media/FlowerDimon.jpg","92e2d23a1a2929823738532362c05eea"],["/static/media/cartoonFooter.png","c3f7641ef11bd405cfe12138f25f089f"],["/static/media/close.svg","2b3d63f761a61e5c65a4773359c4eb40"],["/static/media/closeheart.jpg","1d4ab251e668bd11b62b30615bd88e78"],["/static/media/delivery.svg","731e5ecd2c7827cef3f847ec91080214"],["/static/media/logout.svg","6e25bad6f003be8fe1ddf1c68d2b4dd9"],["/static/media/love.svg","162c55add6a47b0d4045ee2e69d2e824"],["/static/media/nosepin.gif","965dabcd31d04c27b319f732b7aae019"],["/static/media/shopping.svg","57b56bb10faf3b9dbb17bc91e6be7baf"],["/static/media/slick.eot","ced611daf7709cc778da928fec876475"],["/static/media/slick.svg","f97e3bbf73254b0112091d0192f17aec"],["/static/media/slick.ttf","d41f55a78e6f49a5512878df1737e58a"],["/static/media/slick.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/static/media/telephone.svg","26f4adaec0fa060fe6ef92c4c4f7c485"],["/static/media/user-shape.svg","bcc776345852aa9836e64bcc3e000864"],["/static/media/visa.jpg","0a848483a9d0cc238c3b584e1260e3ec"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),importScripts("/cache.js");