"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[2784],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(v,a(a({ref:t},p),{},{components:r})):n.createElement(v,a({ref:t},p))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67999:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={},a="Overview",l={unversionedId:"neutron/token-generation-event/airdrop/overview",id:"neutron/token-generation-event/airdrop/overview",title:"Overview",description:"Airdrop contract, used for TGE event, is just a cw-tokens/cw20-merkle-airdrop-contract with several patches:",source:"@site/docs/neutron/token-generation-event/airdrop/overview.md",sourceDirName:"neutron/token-generation-event/airdrop",slug:"/neutron/token-generation-event/airdrop/overview",permalink:"/neutron/token-generation-event/airdrop/overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/neutron/token-generation-event/overview"},next:{title:"Messages",permalink:"/neutron/token-generation-event/airdrop/messages"}},s={},c=[{value:"Flow",id:"flow",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Airdrop contract, used for TGE event, is just a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-tokens/tree/main/contracts/cw20-merkle-airdrop"},"cw-tokens/cw20-merkle-airdrop-contract")," with several patches:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"removed native token distribution functionality, since contract will only distribute cNTRN tokens, which are CW20 like tokens with 1:1 vested uNTRN;"),(0,o.kt)("li",{parentName:"ul"},"removed ",(0,o.kt)("inlineCode",{parentName:"li"},"burn"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"burn_all")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"withdraw")," ExecuteMsg's;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"claim")," patched to issue ",(0,o.kt)("inlineCode",{parentName:"li"},"AddVesting")," message to ",(0,o.kt)("a",{parentName:"li",href:"../credits/overview"},"credits contract"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"withdraw_all")," patched to burn cNTRN tokens and send (received in exchange for burning) NTRN tokens to ",(0,o.kt)("a",{parentName:"li",href:"../../tokenomics/reserve/overview"},"reserve contract"),". ",(0,o.kt)("inlineCode",{parentName:"li"},"withdraw_all")," can only be called after vesting period is over;"),(0,o.kt)("li",{parentName:"ul"},"stages logic removed, since we will only need one airdrop stage, also merged register merkle tree and instantiate messages into one;"),(0,o.kt)("li",{parentName:"ul"},"removed owner freeze logic;"),(0,o.kt)("li",{parentName:"ul"},"removed cross-chain airdrops;"),(0,o.kt)("li",{parentName:"ul"},"tests moved to separate file;"),(0,o.kt)("li",{parentName:"ul"},"enforced start/expiration logic to accept only timestamps, since block heights are not compatible with vesting logic.")),(0,o.kt)("h2",{id:"flow"},"Flow"),(0,o.kt)("p",null,"First, a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ratik/merkle-airdrop-cli"},"merkle-airdrop-cli")," tool is used to generate merkle root for all airdrop addresses and their corresponding airdrop amounts."),(0,o.kt)("p",null,"Second, an airdrop contract is deployed with credits address in genesis."),(0,o.kt)("p",null,"Third, user sends claim message to airdrop contract and specifies their amount and merkle proof. If merkle proof can be validated successfully according to merkle root specified in instantiate message in genesis, user then receives their cNTRN tokens, and a corresponding vesting period is set for them in ",(0,o.kt)("a",{parentName:"p",href:"../credits/overview"},"credits contract"),"."))}u.isMDXComponent=!0}}]);