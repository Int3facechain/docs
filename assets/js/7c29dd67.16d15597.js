"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[7771],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,g=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},36365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={},i="Queries",c={unversionedId:"neutron/token-generation-event/price-feed/queries",id:"version-2.0/neutron/token-generation-event/price-feed/queries",title:"Queries",description:"get_config",source:"@site/versioned_docs/version-2.0/neutron/token-generation-event/price-feed/queries.md",sourceDirName:"neutron/token-generation-event/price-feed",slug:"/neutron/token-generation-event/price-feed/queries",permalink:"/docs/2.0/neutron/token-generation-event/price-feed/queries",draft:!1,tags:[],version:"2.0",frontMatter:{},sidebar:"docs",previous:{title:"Messages",permalink:"/docs/2.0/neutron/token-generation-event/price-feed/messages"},next:{title:"Admin Module",permalink:"/docs/2.0/neutron/modules/admin-module/overview"}},l={},u=[{value:"<code>get_config</code>",id:"get_config",level:2},{value:"<code>get_error</code>",id:"get_error",level:2},{value:"<code>get_rate</code>",id:"get_rate",level:2}],s={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"queries"},"Queries"),(0,o.kt)("h2",{id:"get_config"},(0,o.kt)("inlineCode",{parentName:"h2"},"get_config")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "get_config": {}\n}\n')),(0,o.kt)("p",null,"Returns the contract's configuration."),(0,o.kt)("h2",{id:"get_error"},(0,o.kt)("inlineCode",{parentName:"h2"},"get_error")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "get_error": {}\n}\n')),(0,o.kt)("p",null,"Returns an error that happened during request of a new prices."),(0,o.kt)("h2",{id:"get_rate"},(0,o.kt)("inlineCode",{parentName:"h2"},"get_rate")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "get_rate": {}\n}\n')),(0,o.kt)("p",null,"Returns price rate of the given symbols."))}d.isMDXComponent=!0}}]);