(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{14:function(e,t,n){e.exports=n(38)},19:function(e,t,n){},20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(11),r=n.n(c),l=(n(19),n(20),n(13)),i=n(12),s=n.n(i);var u=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)(function(){s.a.get("https://jsonplaceholder.typicode.com/posts").then(function(e){console.log(e),c(e.data)}).catch(function(e){console.log(e)})},[]),o.a.createElement("ul",null,n.map(function(e){return o.a.createElement("li",{key:e.id},e.title)}))};var p=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("p",null,"Welcome to React World"),o.a.createElement(u,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.3da1d007.chunk.js.map