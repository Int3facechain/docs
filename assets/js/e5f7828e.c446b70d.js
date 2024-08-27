"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[3497],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},57674:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=t(87462),o=(t(67294),t(3905));const a={},i="Overview",s={unversionedId:"neutron/modules/feeburner/overview",id:"version-3.0/neutron/modules/feeburner/overview",title:"Overview",description:"Abstract",source:"@site/versioned_docs/version-3.0/neutron/modules/feeburner/overview.md",sourceDirName:"neutron/modules/feeburner",slug:"/neutron/modules/feeburner/overview",permalink:"/docs/3.0/neutron/modules/feeburner/overview",draft:!1,tags:[],version:"3.0",frontMatter:{},sidebar:"docs",previous:{title:"Events",permalink:"/docs/3.0/neutron/modules/feerefunder/events"},next:{title:"Client",permalink:"/docs/3.0/neutron/modules/feeburner/client"}},c={},u=[{value:"Abstract",id:"abstract",level:2},{value:"Params",id:"params",level:2},{value:"Concepts",id:"concepts",level:2}],l={toc:u},p="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("h2",{id:"abstract"},"Abstract"),(0,o.kt)("p",null,"This document specifies the FeeBurner module for the Neutron network."),(0,o.kt)("p",null,"The FeeBurner module is called in the end of processing of every block and manages consumer part of fees: all Neutron fees are burned and fees in any other denom are sent to Reserve."),(0,o.kt)("h2",{id:"params"},"Params"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NeutronDenom")," \u2014 denom of Neutron token, fees in Neutrons are burned;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ReserveAddress")," \u2014 address of Neutron Reserve smart contract, fees in all non-Neutron tokens will be transferred here.")),(0,o.kt)("h2",{id:"concepts"},"Concepts"),(0,o.kt)("p",null,"Interchain Security splits deducted fees into two parts. 25% of fees go to the provider fee pool, the remaining 75% are transferred to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/interchain-security/blob/6c0d718d8c59339d112feb5850589258a504756e/x/ccv/consumer/types/keys.go#L23"},(0,o.kt)("inlineCode",{parentName:"a"},'"cons_redistribute"'))," account. Interchain Security doesn't care what happens with these funds afterwards."),(0,o.kt)("p",null,"During block finalization, FeeBurner module wakes up in EndBlocker. It burns all funds from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/interchain-security/blob/6c0d718d8c59339d112feb5850589258a504756e/x/ccv/consumer/types/keys.go#L23"},(0,o.kt)("inlineCode",{parentName:"a"},'"cons_redistribute"'))," in Neutron denom, specified in ",(0,o.kt)("a",{parentName:"p",href:"#Params"},"Params"),". Everything else will be transferred to ",(0,o.kt)("inlineCode",{parentName:"p"},"TreasuryAddress")," and further managed by Neutron Treasury."))}d.isMDXComponent=!0}}]);