"use strict";var precacheConfig=[["/index.html","ec85f0bdb790d014dc3d6dbabbb772ca"],["/static/css/main.57f9f324.css","c57cc84e8a274c013f9d1ab101ba2798"],["/static/js/main.cd73cb6e.js","ef5fc2881b67f23b7d38e92ad570484c"],["/static/media/alan.d7d9183c.jpg","d7d9183c55f30589d86c018b9ce08598"],["/static/media/cassidy.cf3cc8b2.jpg","cf3cc8b267a3b778e921ad6ff33598e0"],["/static/media/elia.601edc44.jpg","601edc4412b057c86902487223bcc83d"],["/static/media/elisha.ac9c5941.jpg","ac9c594193f9304745da2a84dcfe23a3"],["/static/media/email-circle.cc42e438.png","cc42e438080becaddaa92031cc61403f"],["/static/media/ian.51d639db.jpg","51d639db47c55e28599424f717804624"],["/static/media/joe.05871591.jpg","0587159132e5a5c3f570e8bdf021d40c"],["/static/media/katrina.5c9a156e.jpg","5c9a156ec9c03385add6c5cb0be01f2c"],["/static/media/lava.c98dddcb.jpg","c98dddcb26b338049c0cd0f5d2388275"],["/static/media/logo.af5c2e22.svg","af5c2e2244946afcc130440c5ab1032f"],["/static/media/sophie.18b77428.jpg","18b7742898ee9a7cd71ada8c3addce9b"],["/static/media/zoe.3eefb66f.jpg","3eefb66f3b35a6c9bdd978e293ad2f26"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});