(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{125:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return h}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),l=function(e){var r=o.a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},s=function(e){var r=l(e.components);return o.a.createElement(i.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=l(t),d=n,h=s["".concat(a,".").concat(d)]||s[d]||f[d]||c;return t?o.a.createElement(h,u(u({ref:r},i),{},{components:t})):o.a.createElement(h,u({ref:r},i))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,a=new Array(c);a[0]=d;var u={};for(var p in r)hasOwnProperty.call(r,p)&&(u[p]=r[p]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var i=2;i<c;i++)a[i]=t[i];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},79:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return u})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return l}));var n=t(2),o=t(6),c=(t(0),t(125)),a={title:"PHP",parent:"search",order:3},u={unversionedId:"examples/searchphp",id:"examples/searchphp",isDocsHomePage:!1,title:"PHP",description:"The request in php",source:"@site/docs/examples/searchphp.md",slug:"/examples/searchphp",permalink:"/docs/examples/searchphp",editUrl:"https://github.com/grnet/epic.grnet.gr/docs/examples/searchphp.md",version:"current"},p=[],i={rightToc:p};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The request in php "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-php"},'$PIDSERVICE_URL="THE_SERVICE_URL_WITH_PREFIX";\n$PIDSERVICE_USER="YOURUSERNAME";\n$PIDSERVICE_PASSWD="YOURPASSWORD";\n$SEARCHTERM = "grnet";\n$GETPIDURL =$PIDSERVICE_URL."?URL=*".$SEARCHTERM."*";\n\n// Get cURL resource\n$curl = curl_init();\n// Set some options - we are passing in a useragent too here\ncurl_setopt($curl,CURLOPT_URL,$GETPIDURL);\n// Set the authentication options\ncurl_setopt($curl, CURLOPT_USERPWD, $PIDSERVICE_USER.":".$PIDSERVICE_PASSWD);\ncurl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);\n\n// Include header in result? (0 = yes, 1 = no)\ncurl_setopt($curl, CURLOPT_HEADER, 0);\n// Should cURL return or print out the data? (true = return, false = print)\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\n\n// Download the given URL, and return output\n$output = curl_exec($curl);\n\n$info = curl_getinfo($curl);\nif( $info[\'http_code\']==200) echo "PID DATA";\nif( $info[\'http_code\']==401) echo "Authorization problem";\nif( $info[\'http_code\']==404) echo "Not found";\n\n// Close the cURL resource, and free system resources\ncurl_close($curl);\n')))}l.isMDXComponent=!0}}]);