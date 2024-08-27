"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[6252],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83077:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={},i="State",c={unversionedId:"neutron/modules/contract-manager/state",id:"neutron/modules/contract-manager/state",title:"State",description:"The ContractManager module stores Failure under contract address and record id key.",source:"@site/docs/neutron/modules/contract-manager/state.md",sourceDirName:"neutron/modules/contract-manager",slug:"/neutron/modules/contract-manager/state",permalink:"/docs/neutron/modules/contract-manager/state",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Client",permalink:"/docs/neutron/modules/contract-manager/client"},next:{title:"Overview",permalink:"/docs/neutron/modules/feerefunder/overview"}},l={},u=[],s={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"state"},"State"),(0,a.kt)("p",null,"The ContractManager module stores ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron/blob/v2.0.3/proto/neutron/contractmanager/failure.proto#L11"},"Failure")," under ",(0,a.kt)("inlineCode",{parentName:"p"},"contract address")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"record id")," key.\n",(0,a.kt)("inlineCode",{parentName:"p"},"Failure")," contains all the necessary info about ACK sudo handler call failure."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"address")," contains contract address and it is used in conjunction with  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id")," field to create index of the record in the ",(0,a.kt)("inlineCode",{parentName:"li"},"KVStore"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SudoPayload")," - serialized MessageSudoCallback with Packet and Ack(if exists)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Error")," - redacted error response of the sudo call. Full error is emitted as an event")))}p.isMDXComponent=!0}}]);