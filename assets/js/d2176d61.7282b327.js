"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[1918],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,v=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(v,i(i({ref:t},u),{},{components:r})):n.createElement(v,i({ref:t},u))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},51885:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},i="Overview",s={unversionedId:"neutron/tokenomics/overview",id:"version-1.0/neutron/tokenomics/overview",title:"Overview",description:"Transaction Fees",source:"@site/versioned_docs/version-1.0/neutron/tokenomics/overview.md",sourceDirName:"neutron/tokenomics",slug:"/neutron/tokenomics/overview",permalink:"/docs/1.0/neutron/tokenomics/overview",draft:!1,tags:[],version:"1.0",frontMatter:{},sidebar:"docs",previous:{title:"Differences from DAO-DAO",permalink:"/docs/1.0/neutron/dao/dao-dao-diff"},next:{title:"Overview",permalink:"/docs/1.0/neutron/tokenomics/reserve/overview"}},c={},l=[{value:"Transaction Fees",id:"transaction-fees",level:2},{value:"Reserve, Treasury and Distribution Contract",id:"reserve-treasury-and-distribution-contract",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("h2",{id:"transaction-fees"},"Transaction Fees"),(0,o.kt)("p",null,"Transaction fees constitute Neutron\u2019s main source of revenue. They originate from local transactions and cross-chain\ntransactions through Neutron\u2019s IBC fee model. Transaction fees are paid in NTRN or ATOM tokens."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"25% of the fees are sent to the hub as payment for ICS;"),(0,o.kt)("li",{parentName:"ul"},"The remaining 75% are either burnt (NTRN) or sent to the Reserve (ATOM, etc.).")),(0,o.kt)("h2",{id:"reserve-treasury-and-distribution-contract"},"Reserve, Treasury and Distribution Contract"),(0,o.kt)("p",null,"There are 3 contracts that manage Neutron\u2019s funds:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"reserve/overview"},"The Reserve")," holds the vested NTRNs and sends them to the Neutron DAO core contract and the Distribution contract. Reserve tokens are\nvested based on on-chain activity: the more NTRN tokens are burned while processing block fees (see above), the more\ntokens get unlocked in the reserve;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"distribution/overview"},"The Distribution")," contract is responsible for the second step of token distribution where tokens sent to this\ncontract are distributed between ",(0,o.kt)("inlineCode",{parentName:"li"},"share holders"),", where ",(0,o.kt)("inlineCode",{parentName:"li"},"share holders")," are a configurable set of addresses with\nnumber of shares. This contract allows shareholders to withdraw collected tokens."),(0,o.kt)("li",{parentName:"ul"},"The third one is ",(0,o.kt)("a",{parentName:"li",href:"../dao/overview"},"Neutron DAO core module")," itself.")))}p.isMDXComponent=!0}}]);