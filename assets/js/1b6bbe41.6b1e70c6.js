"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[6738],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,v=u["".concat(l,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(v,i(i({ref:t},s),{},{components:r})):n.createElement(v,i({ref:t},s))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},31399:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={},i="Overview",c={unversionedId:"neutron/token-generation-event/lockdrop/overview",id:"neutron/token-generation-event/lockdrop/overview",title:"Overview",description:"The lockdrop contract allows users to lock of LP tokens from axlrUSDC/NTRN and ATOM/NTRN pools for a selected duration against which they will receive NTRN tokens pro-rata to their weighted share of the LP tokens to the total deposited LP tokens for that particular pool in the contract.",source:"@site/docs/neutron/token-generation-event/lockdrop/overview.md",sourceDirName:"neutron/token-generation-event/lockdrop",slug:"/neutron/token-generation-event/lockdrop/overview",permalink:"/neutron/token-generation-event/lockdrop/overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Queries",permalink:"/neutron/token-generation-event/credits/queries"},next:{title:"Messages",permalink:"/neutron/token-generation-event/lockdrop/messages"}},l={},p=[],s={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The lockdrop contract allows users to lock of LP tokens from ",(0,o.kt)("inlineCode",{parentName:"p"},"axlrUSDC/NTRN")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ATOM/NTRN")," pools for a selected duration against which they will receive ",(0,o.kt)("inlineCode",{parentName:"p"},"NTRN")," tokens pro-rata to their weighted share of the LP tokens to the total deposited LP tokens for that particular pool in the contract."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": Users can open multiple lockup positions with different lockup duration for each LP Token pool.")))}f.isMDXComponent=!0}}]);