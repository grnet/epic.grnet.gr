(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{125:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),b=n,m=p["".concat(c,".").concat(b)]||p[b]||f[b]||a;return t?o.a.createElement(m,s(s({ref:r},u),{},{components:t})):o.a.createElement(m,s({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=b;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},50:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return l}));var n=t(2),o=t(6),a=(t(0),t(125)),c={title:"Search Results",parent:"resultlist",order:1},s={unversionedId:"examples/listres",id:"examples/listres",isDocsHomePage:!1,title:"Search Results",description:"The response:",source:"@site/docs/examples/listres.md",slug:"/examples/listres",permalink:"/docs/examples/listres",editUrl:"https://github.com/grnet/epic.grnet.gr/docs/examples/listres.md",version:"current"},i=[{value:"The response:",id:"the-response",children:[]}],u={rightToc:i};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"the-response"},"The response:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"HTTP/1.1 200 OK: (Success)"),Object(a.b)("li",{parentName:"ul"},"HTTP/1.1 401 Unauthorized: Your username or your password is wrong"),Object(a.b)("li",{parentName:"ul"},"HTTP/1.1 404 NOT found: The url doesn't exist")),Object(a.b)("p",null,"After a successful request, the response consists of a list of PIDs "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"GRNET\n66742AB2-5685-11E3-A413-1C6F65A666B5\n305F66A9-3994-42D6-A9F6-8E629126DE14\nB4CF7AEA-55BB-4DB5-9D85-EB2DAD821B07\n0CEEA495-71FA-460B-97A4-81E7E597B636\n")))}l.isMDXComponent=!0}}]);