(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,n,t){"use strict";var r=t(0),a=t.n(r).a.createElement("div",null,"Loading Page");n.a=a},36:function(e,n,t){e.exports=t(49)},41:function(e,n,t){},43:function(e){e.exports={palette:{common:{black:"#000",white:"#fff"},background:{paper:"#fff",default:"#fafafa"},primary:{light:"rgba(57, 69, 120, 1)",main:"rgba(58, 69, 120, 1)",dark:"rgba(49, 63, 92, 1)",contrastText:"#fff"},secondary:{light:"rgba(246, 153, 163, 1)",main:"rgba(241, 72, 128, 1)",dark:"rgba(234, 83, 129, 1)",contrastText:"#fff"},error:{light:"rgba(199, 110, 108, 1)",main:"rgba(185, 74, 72, 1)",dark:"rgba(129, 51, 50, 1)",contrastText:"#fff"},text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"}}}},49:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(21),i=t.n(o),c=t(33),s=t(26),u=t(27);function f(e,n){switch(n.type){case"FETCH_DATA":return Object(u.a)({},e,{episodes:n.payload});default:return e}}var l={episodes:[],favourites:[]},d=a.a.createContext(l);function p(e){var n=a.a.useReducer(f,l),t=Object(s.a)(n,2),r=t[0],o=t[1];return a.a.createElement(d.Provider,{value:{state:r,dispatch:o}},e.children)}t(41);var b=t(29),h=t(55),g=t(57),w=t(56),v=Object(h.a)(t(43)),k=Object(g.a)(v),m=a.a.lazy(function(){return Promise.all([t.e(2),t.e(4)]).then(t.bind(null,344))});var x=function(){return a.a.createElement(w.a,{theme:k},a.a.createElement(p,null,a.a.createElement(c.a,null,a.a.createElement(a.a.Suspense,{fallback:b.a},a.a.createElement(m,null)))))},y=t(7),E=t.n(y),j=t(14),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(){return(A=Object(j.a)(E.a.mark(function e(n){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:e.next=7;break;case 6:window.addEventListener("load",function(){var e="".concat(".","/service-worker.js");O?(L(e,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):P(e,n)});case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function P(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;N("App is being cached localyy for offline purpose!"),null!=t&&(t.onstatechange=Object(j.a)(E.a.mark(function r(){var a,o,i;return E.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if("installed"!==t.state){r.next=12;break}if(a=!1,o="New version of app is installed",i="Your app is installed and works offline",!navigator.serviceWorker.controller){r.next=7;break}console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&(n.onUpdate(e),a=!0),r.next=12;break;case 7:if(console.log("Content is cached for offline use."),!n||!n.onSuccess){r.next=12;break}return r.next=11,N(a?o:i);case 11:n.onSuccess(e);case 12:case"end":return r.stop()}},r)})))}}).catch(function(e){console.error("Error during service worker registration:",e)})}function S(){return T.apply(this,arguments)}function T(){return(T=Object(j.a)(E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(W()){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,window.Notification.requestPermission();case 4:if("granted"===e.sent){e.next=8;break}e.next=13;break;case 8:if(localStorage.getItem("firstnotify")){e.next=12;break}return e.next=11,N("Ohoo.. your first notification \ud83c\udf89\ud83d\ude4c");case 11:localStorage.setItem("firstnotify",!0);case 12:return e.abrupt("return",!0);case 13:case 14:case"end":return e.stop()}},e)}))).apply(this,arguments)}function W(){return"serviceWorker"in navigator&&"PushManager"in window||(alert("Sorry notifications are not yet supported"),!1)}function N(e){return C.apply(this,arguments)}function C(){return(C=Object(j.a)(E.a.mark(function e(n){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!W()){e.next=5;break}return e.next=3,new Notification(n);case 3:e.next=7;break;case 5:return e.next=7,S();case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function L(e,n){fetch(e).then(function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):P(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}window.addEventListener("online",function(e){N("Lost internet connection !")}),window.addEventListener("offline",function(e){N("Network connection restored !")}),i.a.render(a.a.createElement(x,null),document.getElementById("root")),function(e){A.apply(this,arguments)}()}},[[36,1,3]]]);
//# sourceMappingURL=main.a18b07aa.chunk.js.map