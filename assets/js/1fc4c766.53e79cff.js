"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[593],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>k});var o=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,r=function(e,t){if(null==e)return{};var i,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(i),h=r,k=d["".concat(l,".").concat(h)]||d[h]||c[h]||n;return i?o.createElement(k,a(a({ref:t},u),{},{components:i})):o.createElement(k,a({ref:t},u))}));function k(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,a=new Array(n);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<n;p++)a[p]=i[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}h.displayName="MDXCreateElement"},5733:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var o=i(7462),r=(i(7294),i(3905));const n={},a="ADR-011: Superfluid Staking",s={unversionedId:"ADR/adr-011-superfluid-staking",id:"ADR/adr-011-superfluid-staking",title:"ADR-011: Superfluid Staking",description:"What is Superfluid Staking?",source:"@site/docs/ADR/adr-011-superfluid-staking.md",sourceDirName:"ADR",slug:"/ADR/adr-011-superfluid-staking",permalink:"/docs/ADR/adr-011-superfluid-staking",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"ADR-010: Node Upgrades",permalink:"/docs/ADR/adr-010-node-ungrades"},next:{title:"ADR-012 TON Integration",permalink:"/docs/ADR/adr-012-ton-integration"}},l={},p=[{value:"What is Superfluid Staking?",id:"what-is-superfluid-staking",level:2},{value:"Superfluid Staking Overview",id:"superfluid-staking-overview",level:2},{value:"Flow Diagrams",id:"flow-diagrams",level:2},{value:"How-to Process:",id:"how-to-process",level:2},{value:"Example",id:"example",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Risks",id:"risks",level:2},{value:"Superfluid Staking Dogecoin on Osmosis",id:"superfluid-staking-dogecoin-on-osmosis",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adr-011-superfluid-staking"},"ADR-011: Superfluid Staking"),(0,r.kt)("h2",{id:"what-is-superfluid-staking"},"What is Superfluid Staking?"),(0,r.kt)("p",null,"Superfluid staking is a concept created by Osmosis that allows OSMO tokens contributed to DEX liquidity pools to be reused, continuing to generate profits through staking."),(0,r.kt)("h2",{id:"superfluid-staking-overview"},"Superfluid Staking Overview"),(0,r.kt)("p",null,"Superfluid staking, also known as ",(0,r.kt)("strong",{parentName:"p"},'"Proof of Useful Staking"')," allows holders to simply place their assets into the liquidity pool and earn rewards from both: ",(0,r.kt)("em",{parentName:"p"},"trading fees")," and ",(0,r.kt)("em",{parentName:"p"},"staking"),". \\\nThis approach is better compared with regular Staking cause allows to utilize tokens more effectively and simpler compared to Liquid Staking,\nwhich requires users to actively manage their staked tokens on their own."),(0,r.kt)("h2",{id:"flow-diagrams"},"Flow Diagrams"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Staking")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img.png",src:i(4637).Z,width:"1100",height:"579"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Liquid Staking")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img.png",src:i(6349).Z,width:"1100",height:"414"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Superfluid Staking")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img.png",src:i(2284).Z,width:"1100",height:"474"})),(0,r.kt)("h2",{id:"how-to-process"},"How-to Process:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Choose the pool you want to deposit your assets.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Visit ",(0,r.kt)("a",{parentName:"li",href:"https://app.osmosis.zone/pools"},"https://app.osmosis.zone/pools")),(0,r.kt)("li",{parentName:"ol"},"Select the pool containing OSMO tokens you wish to deposit."))),(0,r.kt)("li",{parentName:"ol"},"Add liquidity into the pool."),(0,r.kt)("li",{parentName:"ol"},"You will receive LP tokens in return."),(0,r.kt)("li",{parentName:"ol"},"Bond the LP Tokens to receive the additional yield.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Select the 'Bond Shares' button. "),(0,r.kt)("li",{parentName:"ol"},"You will be asked to bond your tokens for 1, 7, or 14 days. The returns are proportional to the bonding period. "),(0,r.kt)("li",{parentName:"ol"},"Choose your bonding period and bond your LP tokens. Only 14 days option has a perform superfluid staking (+5% APR)"))),(0,r.kt)("li",{parentName:"ol"},"Choose your preferred staking validator for superfuid staking."),(0,r.kt)("li",{parentName:"ol"},"You will receive the rewards directly in your wallet.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Alice has 500 GAMM tokens bonded to the ATOM - OSMO, she will have the equivalent value of OSMO minted, delegated to her chosen staker, and burned for her each day with Superfluid staking. \\\nOn the user side, all she has to know is who she wants to delegate her tokens to. In order to switch delegation, she has to unbond her tokens from the pool first and then redeposit. \\\nBob, who has a share of the same liquidity pool before Superfluid Staking went live, also has to re-deposit into the pool for the above process to kickstart."),(0,r.kt)("h2",{id:"benefits"},"Benefits"),(0,r.kt)("p",null,"Superfluid staking brings major benefits to the ecosystem:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Through superfluid staking, users support the PoS mechanism of the Osmosis blockchain while adding liquidity to their DEX."),(0,r.kt)("li",{parentName:"ol"},"Liquidity providers get higher returns. The 50% of the OSMO tokens added to the ATOM/OSMO pair are reused for staking. This way, they get two types of rewards simultaneously."),(0,r.kt)("li",{parentName:"ol"},"As it is a strong incentive for LPs, it helps to increase the LTV of the Osmosis DEX.")),(0,r.kt)("h2",{id:"risks"},"Risks"),(0,r.kt)("p",null,"However, superfluid staking brings some risks to the ecosystem:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Slashing can be prevented by delegating to a trusted validator. In the event that a validator is affected by slashing, the assets are allocated to the community Osmosis fund."),(0,r.kt)("li",{parentName:"ol"},'Impermanent loss, on the other hand, is a term you may be familiar with if you come from DeFi. When you deposit a pair of assets into the liquidity pool at a certain price, over time this price may depreciate and become worth less in dollar terms. This is known as an "impermanent" loss because you are not considered to have lost until you finally withdraw the assets by agreeing to take them out at their current value.')),(0,r.kt)("h2",{id:"superfluid-staking-dogecoin-on-osmosis"},"Superfluid Staking Dogecoin on Osmosis"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make transfer from Dogecoin Vault into the Int3face chain."),(0,r.kt)("li",{parentName:"ol"},"The Observer detects the transfer and performs it."),(0,r.kt)("li",{parentName:"ol"},"Initiate a transfer using IBC protocol to Osmosis chain."),(0,r.kt)("li",{parentName:"ol"},"Create a new pool on Osmosis with Dogecoin and OSMO tokens."),(0,r.kt)("li",{parentName:"ol"},"Deposit Dogecoin into this pool to start earning transaction fees from swaps and rewards from superfluid staking")))}c.isMDXComponent=!0},6349:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/liquid_staking-38b7da4a736cd02c4c03a7a20df26598.png"},4637:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/staking-05aa0e6c1e0cf09debb58536767bbaf7.png"},2284:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/superfluid_staking-3d6dbc26afb9a82f307cc1c6c041b025.png"}}]);