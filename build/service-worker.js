"use strict";var precacheConfig=[["/index.html","caf63d3941df109b8a649beddd089251"],["/precache-manifest.4fdf1cc428a504cdf7016239cf579040.js","4fdf1cc428a504cdf7016239cf579040"],["/service-worker.js","1411e7f0be8a567bf747920288ced5c0"],["/static/css/2.css","bfafebee097d564476644b5add9f9941"],["/static/css/3.css","780f84a9c589c23d3d9487994a90d387"],["/static/css/main.css","7691f001495b588c526ea79645c8ee82"],["/static/js/2.js","6c5fbf9269441309fef9ad0ae2888eba"],["/static/js/3.js","deb8a4992dc366d866b57e0803e843e8"],["/static/js/4.js","f424ac247f7dfca6065794ba774b9c23"],["/static/js/main.js","dad405d63035586e4bcc793e547587a3"],["/static/js/runtime~main.js","84ca500e946be08a5f49ef60d8fd5341"],["/static/media/Alive_Mobile.jpg","88cd9faca27dc0dfb87c322b97069a14"],["/static/media/Birth stone_mobile.jpg","44f37f219b69ed4fe5de52a0a3fe2fb8"],["/static/media/Ear_mobile.jpg","eec94e2c340712c8ff34d62260a1c116"],["/static/media/ExperienceBanner.jpg","32f7bc6175ae609bff02c8263ad94be6"],["/static/media/Experiences banner.jpg","42da02fcd523e88adc28ad34159098c7"],["/static/media/Lotus_Mobile.jpg","4b43159ab7b19a9eae97ccd819463473"],["/static/media/NAC---Desktop-UI---NAC-Experiences (LL, EP, BS, Alive)_Sample-19.png","57a7037a4c4307321286505a75732883"],["/static/media/NAC---Desktop-UI---NAC-Experiences (LL, EP, BS, Alive)_Sample-20.png","c714bc76aa0f401332cb5a8cfec9c7f8"],["/static/media/NAC---Desktop-UI---NAC-Experiences (LL, EP, BS, Alive)_Sample-21.png","cb2f6c4db5e14a7459a6ff715b1e608d"],["/static/media/NAC---Desktop-UI---NAC-Experiences (LL, EP, BS, Alive)_Sample-22.png","00e8f192c243bd4a46c67abdd5148894"],["/static/media/NAC---Desktop-UI---NAC-Experiences-(LL,-EP,-BS,-Alive)_Sample-10.jpg","33f06877dc9c5640dd7f7a9e06cd7716"],["/static/media/NAC---Desktop-UI---NAC-Experiences-(LL,-EP,-BS,-Alive)_Sample-11.jpg","6d48024b29329ed7ae2a5bddd58c17b8"],["/static/media/NAC---Desktop-UI---NAC-Experiences-(LL,-EP,-BS,-Alive)_Sample-8.jpg","68d64785d1c312689ab376a8732fd036"],["/static/media/NAC---Desktop-UI---NAC-Experiences-(LL,-EP,-BS,-Alive)_Sample-9.jpg","4bf2ff9abdc2e4ad90f1d94197600d6b"],["/static/media/close.svg","2b3d63f761a61e5c65a4773359c4eb40"],["/static/media/icons8-facebook.svg","6b446a380e308ad3d84cf955d088f3be"],["/static/media/icons8-gmail.svg","992ac34a80cdd509871cff78c6d98e72"],["/static/media/img1ProductModal.jpg","28cd30ea4ad92b4520d9a3fb2634a87d"],["/static/media/img2ProductModal.jpg","b944ac0307e92dae56a16dc18b6318a1"],["/static/media/img3ProductModal.jpg","2e0c3b28d442f07cf1fb810420137dc5"],["/static/media/img4ProductModal.jpg","337eef9d867ffd752a548702f05cb8e6"],["/static/media/logout.svg","6e25bad6f003be8fe1ddf1c68d2b4dd9"],["/static/media/shopping.svg","57b56bb10faf3b9dbb17bc91e6be7baf"],["/static/media/silverOpenLink.png","b03bd5d7d745593acdc60d6c1d6591d4"],["/static/media/slick.eot","ced611daf7709cc778da928fec876475"],["/static/media/slick.svg","f97e3bbf73254b0112091d0192f17aec"],["/static/media/slick.ttf","d41f55a78e6f49a5512878df1737e58a"],["/static/media/slick.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/static/media/styloriGagets.png","681db1b372ef45af725df7762fcb49ee"],["/static/media/telephone.svg","26f4adaec0fa060fe6ef92c4c4f7c485"],["/static/media/topPicksOne.jpg","1737e5e0a88de55dc6cf1a773e4b0816"],["/static/media/topPicksThree.jpg","35f5ee82b7e9b5e66f70a99aefcb3865"],["/static/media/topPicksTwo.jpg","37b89e280ecc047a56d66fdb6404bb23"],["/static/media/user-shape.svg","bcc776345852aa9836e64bcc3e000864"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),s=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}}),importScripts("/cache.js");