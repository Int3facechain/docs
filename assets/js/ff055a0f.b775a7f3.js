"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[7005],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},17478:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={},i="Messages",s={unversionedId:"neutron/token-generation-event/oracle/messages",id:"neutron/token-generation-event/oracle/messages",title:"Messages",description:"Instantiate",source:"@site/docs/neutron/token-generation-event/oracle/messages.md",sourceDirName:"neutron/token-generation-event/oracle",slug:"/neutron/token-generation-event/oracle/messages",permalink:"/neutron/token-generation-event/oracle/messages",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/neutron/token-generation-event/oracle/overview"},next:{title:"Queries",permalink:"/neutron/token-generation-event/oracle/queries"}},l={},c=[{value:"Instantiate",id:"instantiate",level:2},{value:"Execute",id:"execute",level:2},{value:"<code>update</code>",id:"update",level:3},{value:"<code>update_period</code>",id:"update_period",level:3},{value:"<code>update_manager</code>",id:"update_manager",level:3},{value:"<code>set_asset_infos</code>",id:"set_asset_infos",level:3}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"messages"},"Messages"),(0,a.kt)("h2",{id:"instantiate"},"Instantiate"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  /// The factory contract address\n  "factory_contract": "neutron...",\n  /// Minimal interval between Update{}\'s (in seconds)\n  "period": 1000,\n  /// Manager is the only one who can set pair info, if not set already\n  "manager": "neutron..."\n}\n')),(0,a.kt)("h2",{id:"execute"},"Execute"),(0,a.kt)("h3",{id:"update"},(0,a.kt)("inlineCode",{parentName:"h3"},"update")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "update": {}\n}\n')),(0,a.kt)("p",null,"Updates the local TWAP value and the target pair's cumulative prices."),(0,a.kt)("h3",{id:"update_period"},(0,a.kt)("inlineCode",{parentName:"h3"},"update_period")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "update_period": {\n    "new_period": 100\n  }\n}\n')),(0,a.kt)("p",null,"Manager only method. Updates minimal interval between ",(0,a.kt)("inlineCode",{parentName:"p"},"update")," calls in the contract's configuration."),(0,a.kt)("h3",{id:"update_manager"},(0,a.kt)("inlineCode",{parentName:"h3"},"update_manager")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "update_manager": {\n    "new_manager": "neutron..."\n  }\n}\n')),(0,a.kt)("p",null,"Manager only method. Updates manager in the contract's configuration."),(0,a.kt)("h3",{id:"set_asset_infos"},(0,a.kt)("inlineCode",{parentName:"h3"},"set_asset_infos")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "set_asset_infos": [\n    {\n      "token": {\n        "contract_info": "neutron..."\n      }\n    },\n    {\n      "native_token": {\n        "denom": "untrn"\n      }\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"Manager only method. Set asset infos that have a pool for which this contract provides price feeds."))}d.isMDXComponent=!0}}]);