"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[3091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},78041:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},l="Overview",i={unversionedId:"neutron/modules/contract-manager/overview",id:"version-1.0/neutron/modules/contract-manager/overview",title:"Overview",description:"Abstract",source:"@site/versioned_docs/version-1.0/neutron/modules/contract-manager/overview.md",sourceDirName:"neutron/modules/contract-manager",slug:"/neutron/modules/contract-manager/overview",permalink:"/docs/1.0/neutron/modules/contract-manager/overview",draft:!1,tags:[],version:"1.0",frontMatter:{},sidebar:"docs",previous:{title:"Messages",permalink:"/docs/1.0/neutron/modules/transfer/messages"},next:{title:"Client",permalink:"/docs/1.0/neutron/modules/contract-manager/client"}},c={},s=[{value:"Abstract",id:"abstract",level:2},{value:"Concepts",id:"concepts",level:2}],u={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("h2",{id:"abstract"},"Abstract"),(0,o.kt)("p",null,"This document specifies the ContractManager module for the Neutron network."),(0,o.kt)("p",null,"The ContractManager module implements a mechanism and contains methods to make sudo calls to the contracts as well it helps to store sudo handler calls errors during IBC ACK."),(0,o.kt)("h2",{id:"concepts"},"Concepts"),(0,o.kt)("p",null,"Due to the fact that contracts are allowed to make calls to the IBC, as well as process all received data, a problem arises in which a malicious contract can make a call to the IBC and, during the response of the ACK, make an error in the sudo handler, or simply do not implement it. Which will lead to disruption of the channel (in the case of a ORDERED channel), or force the relayer to send ACK requests over and over again, thereby loading the nodes serving the blockchain."),(0,o.kt)("p",null,"In order to avoid this problem, the code in the module from which the sudo handler is called should ignore the error and instead return the success status of the call.\nBut this in turn exposes the problem of informing the owner of the contract that a failure has occurred. To do this, in case of an unsuccessful call, the module from which the sudo handler is called must call the ",(0,o.kt)("inlineCode",{parentName:"p"},"AddContractFailure")," method of the ",(0,o.kt)("inlineCode",{parentName:"p"},"keeper")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractManager")," module."),(0,o.kt)("p",null,"To ensure that the state of the contract is consistent, the call to the sudo handler takes place in a temporary state (using ",(0,o.kt)("inlineCode",{parentName:"p"},"CacheContext"),"), which is written to the active state if the call succeeds."),(0,o.kt)("p",null,"But at the same time there is gas consumption for the sudo call. Two options for gas limitation were proposed:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Allocate only a certain amount of gas per sudo handler call, thereby limiting the handler's computational capabilities. The volume of the dediated amount of gas can be regulated by the help of governance proposal"),(0,o.kt)("li",{parentName:"ol"},"Release gas dynamically depending on the remaining gas and the gas reserve required to complete the call with a failure record in the state.")),(0,o.kt)("p",null,"In this implementation, the second approach was used. Also given the fact that Neutron makes the contract pay for all packets (using ibc fees), it's hard to spam / overflow neutron with failure records."))}p.isMDXComponent=!0}}]);