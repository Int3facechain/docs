"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[8574],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,d=u["".concat(s,".").concat(f)]||u[f]||v[f]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},54092:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>v,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},i="Overview",c={unversionedId:"neutron/token-generation-event/oracle/overview",id:"neutron/token-generation-event/oracle/overview",title:"Overview",description:"NOTE: this contract is an Astroport Oracle which is modified to store historical TWAP values .",source:"@site/docs/neutron/token-generation-event/oracle/overview.md",sourceDirName:"neutron/token-generation-event/oracle",slug:"/neutron/token-generation-event/oracle/overview",permalink:"/neutron/token-generation-event/oracle/overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Queries",permalink:"/neutron/token-generation-event/investors-vesting/queries"},next:{title:"Messages",permalink:"/neutron/token-generation-event/oracle/messages"}},s={},l=[],p={toc:l},u="wrapper";function v(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"NOTE: this contract is an ",(0,o.kt)("a",{parentName:"p",href:"https://docs.astroport.fi/docs/develop/smart-contracts/oracle"},"Astroport Oracle")," which is modified to store historical TWAP values ."),(0,o.kt)("p",null,"Oracle contract calculates a 1 day TWAP for a xy=k Neutron pool and stores historical TWAP values. "),(0,o.kt)("p",null,"The main difference motivated in order to provide a fair price of NTRN to lockdropVotingVault at certain height we have updated astroports oracle to keep the price history (see ",(0,o.kt)("a",{parentName:"p",href:"/neutron/token-generation-event/oracle/queries"},"TWAPAtHeight at queries")," section)."))}v.isMDXComponent=!0}}]);