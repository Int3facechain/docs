"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[6719],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=o,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},95489:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const a={},i="Queries",c={unversionedId:"neutron/token-generation-event/auction/queries",id:"version-2.0/neutron/token-generation-event/auction/queries",title:"Queries",description:"config",source:"@site/versioned_docs/version-2.0/neutron/token-generation-event/auction/queries.md",sourceDirName:"neutron/token-generation-event/auction",slug:"/neutron/token-generation-event/auction/queries",permalink:"/2.0/neutron/token-generation-event/auction/queries",draft:!1,tags:[],version:"2.0",frontMatter:{},sidebar:"docs",previous:{title:"Messages",permalink:"/2.0/neutron/token-generation-event/auction/messages"},next:{title:"Overview",permalink:"/2.0/neutron/token-generation-event/credits/overview"}},u={},s=[{value:"<code>config</code>",id:"config",level:2},{value:"<code>state</code>",id:"state",level:2},{value:"<code>user_info</code>",id:"user_info",level:2}],l={toc:s},p="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"queries"},"Queries"),(0,o.kt)("h2",{id:"config"},(0,o.kt)("inlineCode",{parentName:"h2"},"config")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "config": {}\n}\n')),(0,o.kt)("p",null,"Returns information about contract's configuration"),(0,o.kt)("h2",{id:"state"},(0,o.kt)("inlineCode",{parentName:"h2"},"state")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "state": {}\n}\n')),(0,o.kt)("p",null,"Returns information about contract's state."),(0,o.kt)("h2",{id:"user_info"},(0,o.kt)("inlineCode",{parentName:"h2"},"user_info")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "user_info": {\n    "address": "neutron..."\n  }\n}\n')),(0,o.kt)("p",null,"Returns info about user position."))}f.isMDXComponent=!0}}]);