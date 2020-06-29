"use strict";var precacheConfig=[["/index.html","766bca9eebb493724b4ea081dc80b222"],["/precache-manifest.ff6dac1199259b1db5cd9bbb6304a79d.js","ff6dac1199259b1db5cd9bbb6304a79d"],["/service-worker.js","25c590d4edd76625c2ae4943e643ac0b"],["/static/css/2.css","39a5493f0bf4661282bba1cfa820b013"],["/static/css/3.css","039bec8f593f38f0868a87940f92e33a"],["/static/css/main.css","ebffc9affe4863746494da4800aa9f77"],["/static/js/2.js","057e8ea328545b747dd8ab9655e233e3"],["/static/js/3.js","77421e374d7005baa4b0b2e4731cb335"],["/static/js/4.js","581e2ddd0adc147b8de1dab24e15a8d0"],["/static/js/main.js","67dc2c5435bc8689f0e4c69a9c6e4cc7"],["/static/js/runtime~main.js","84ca500e946be08a5f49ef60d8fd5341"],["/static/media/FlowerDimon.jpg","92e2d23a1a2929823738532362c05eea"],["/static/media/NotoSerif-Regular.ttf","d1c72e0e788cf2bbc1de53da57599bec"],["/static/media/Stylori Silver logo.svg","5c8caf8f7ea7126619cea19d463c5146"],["/static/media/Stylorilogo.svg","04639ae8969c77110a53303b92b57712"],["/static/media/cartoonFooter.png","c3f7641ef11bd405cfe12138f25f089f"],["/static/media/close.svg","7996bd6992d473ba217275885f52812f"],["/static/media/closeheart.jpg","1d4ab251e668bd11b62b30615bd88e78"],["/static/media/delivery.svg","6916c84be4a82b94cf15503ef25d48f2"],["/static/media/img1ProductModal.jpg","28cd30ea4ad92b4520d9a3fb2634a87d"],["/static/media/img2ProductModal.jpg","b944ac0307e92dae56a16dc18b6318a1"],["/static/media/img3ProductModal.jpg","2e0c3b28d442f07cf1fb810420137dc5"],["/static/media/img4ProductModal.jpg","337eef9d867ffd752a548702f05cb8e6"],["/static/media/logout.svg","51fc5370cb4d7e537c06ea117f090ba2"],["/static/media/love.svg","37ef37619d53e7631c8ab218a5722c1e"],["/static/media/nosepin.gif","965dabcd31d04c27b319f732b7aae019"],["/static/media/shopping.svg","b0c24c44cdbcd2228f0f6fef2740195f"],["/static/media/slick.eot","ced611daf7709cc778da928fec876475"],["/static/media/slick.svg","f97e3bbf73254b0112091d0192f17aec"],["/static/media/slick.ttf","d41f55a78e6f49a5512878df1737e58a"],["/static/media/slick.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/static/media/styloriGagets.png","681db1b372ef45af725df7762fcb49ee"],["/static/media/telephone.svg","5a712650392a83e01a75498ebc83837b"],["/static/media/topPicksOne.jpg","1737e5e0a88de55dc6cf1a773e4b0816"],["/static/media/topPicksThree.jpg","35f5ee82b7e9b5e66f70a99aefcb3865"],["/static/media/topPicksTwo.jpg","37b89e280ecc047a56d66fdb6404bb23"],["/static/media/user-shape.svg","c7359aa61314bf6d37f83ccc97dd0694"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),s=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),importScripts("/cache.js");