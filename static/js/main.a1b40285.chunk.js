(this["webpackJsonpcrypto-tracker"]=this["webpackJsonpcrypto-tracker"]||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(2),a=t.n(c),r=t(15),o=t.n(r),i=t(6),s=t(16),l=t.n(s),d=(t(39),t(40),t(0)),u=function(e){var n=e.name,t=e.price,c=e.symbol,a=e.image,r=e.percentage,o=e.rank;return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"coin",children:[Object(d.jsx)("img",{src:a,alt:"crypto"}),Object(d.jsx)("h1",{children:n}),Object(d.jsx)("p",{className:"symbol",children:c})]}),Object(d.jsxs)("div",{className:"data",children:[Object(d.jsxs)("p",{className:"price",children:["\u20b9",t]}),Object(d.jsx)("p",{className:"rank",children:o}),r<0?Object(d.jsxs)("p",{className:"coin-percent red",children:[r.toFixed(2),"%"]}):Object(d.jsxs)("p",{className:"coin-percent green",children:[r.toFixed(2),"%"]})]})]})})};var h=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],a=n[1],r=Object(c.useState)(""),o=Object(i.a)(r,2),s=o[0],h=o[1];Object(c.useEffect)((function(){l.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=false").then((function(e){a(e.data),console.log(e.data)})).catch((function(e){return alert("bhagjaaaa")}))}),[]);var p=t.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsxs)("div",{className:"search",children:[Object(d.jsx)("h1",{className:"text",children:"Search a Coin"}),Object(d.jsx)("form",{children:Object(d.jsx)("input",{className:"input",type:"text",onChange:function(e){console.log(e.target.value),h(e.target.value)},placeholder:"Search"})})]}),p.map((function(e){return Object(d.jsx)(u,{name:e.name,price:e.current_price,symbol:e.symbol,image:e.image,percentage:e.price_change_percentage_24h,rank:e.market_cap_rank},e.id)}))]})},p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/020gaurav-manghnani/crypto_tracker",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/020gaurav-manghnani/crypto_tracker","/service-worker.js");p?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var c=t.headers.get("content-type");404===t.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(n,e)}))}}()}},[[42,1,2]]]);
//# sourceMappingURL=main.a1b40285.chunk.js.map