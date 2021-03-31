(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{125:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return m}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},s=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(r),f=t,m=s["".concat(i,".").concat(f)]||s[f]||d[f]||a;return r?o.a.createElement(m,p(p({ref:n},l),{},{components:r})):o.a.createElement(m,p({ref:n},l))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:t,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},55:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return p})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return u}));var t=r(2),o=r(6),a=(r(0),r(125)),i={title:"Python",parent:"get",order:2},p={unversionedId:"examples/getpython",id:"examples/getpython",isDocsHomePage:!1,title:"Python",description:"The request in python",source:"@site/docs/examples/getpython.md",slug:"/examples/getpython",permalink:"/docs/examples/getpython",editUrl:"https://github.com/grnet/epic.grnet.gr/docs/examples/getpython.md",version:"current"},c=[],l={rightToc:c};function u(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The request in python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'import urllib.request, urllib.error, urllib.parse\nimport json\n\nPIDSERVICE_URL="THE_SERVICE_URL_WITH_PREFIX" #dont forget to add "/" at the end\nPIDSERVICE_USER="YOURUSERNAME"\nPIDSERVICE_PASSWD="YOURPASSWORD"\nHANDLENAME="YOUR_PID" #for example "66742AB2-5685-11E3-A413-1C6F65A666B5"\nURL_TO_OPEN=PIDSERVICE_URL+HANDLENAME\nDATAURL=\'\'\n\n# create a password manager\npassword_mgr = urllib.request.HTTPPasswordMgrWithDefaultRealm()\n\n# Add the username and password.\npassword_mgr.add_password(None, PIDSERVICE_URL, PIDSERVICE_USER, PIDSERVICE_PASSWD)\n\nhandler = urllib.request.HTTPBasicAuthHandler(password_mgr)\n\n# create "opener" (OpenerDirector instance)\nopener = urllib.request.build_opener(handler)\n\n# use the opener to fetch a URL\nopener.open(PIDSERVICE_URL)\n\n# Install the opener.\n# Now all calls to urllib2.urlopen use the created opener.\nurllib.request.install_opener(opener)\n\nREQUESTDATA = urllib.request.Request(URL_TO_OPEN)\ntry:\n    DATAURL = urllib.request.urlopen(REQUESTDATA)\nexcept urllib.error.URLError as e:\n    if e.code == 404:\n        print("404-Not found")\n    if e.code == 401:\n        print("401-Authentication failed")\n\nif DATAURL:\n    # Getting the code\n    print("This gets the code: ", DATAURL.code)\n    if DATAURL.code == 200:\n        print("PID data: ",json.loads(DATAURL.read()))\n \n')))}u.isMDXComponent=!0}}]);