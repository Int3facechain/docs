"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[3713],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=o,f=p["".concat(c,".").concat(h)]||p[h]||u[h]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},23218:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},i="Price Feeds",s={unversionedId:"neutron/price-feeds",id:"version-3.0/neutron/price-feeds",title:"Price Feeds",description:"Price feeds are specialised tools that provide asset prices data to smart contracts and other consumers. There is a number of on- and off-chain solutions available on Neutron that you as a developer can benefit from.",source:"@site/versioned_docs/version-3.0/neutron/price-feeds.md",sourceDirName:"neutron",slug:"/neutron/price-feeds",permalink:"/3.0/neutron/price-feeds",draft:!1,tags:[],version:"3.0",frontMatter:{},sidebar:"docs",previous:{title:"Neutron Core Releases",permalink:"/3.0/neutron/neutron-core-releases"},next:{title:"Overview",permalink:"/3.0/neutron/dao/overview"}},c={},l=[{value:"Oracles",id:"oracles",level:2},{value:"Slinky (coming soon)",id:"slinky-coming-soon",level:3},{value:"Pyth",id:"pyth",level:3},{value:"Ojo",id:"ojo",level:3},{value:"Band",id:"band",level:3},{value:"On-chain TWAP",id:"on-chain-twap",level:2},{value:"Astroport oracle",id:"astroport-oracle",level:3}],d={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"price-feeds"},"Price Feeds"),(0,o.kt)("p",null,"Price feeds are specialised tools that provide asset prices data to smart contracts and other consumers. There is a number of on- and off-chain solutions available on Neutron that you as a developer can benefit from."),(0,o.kt)("h2",{id:"oracles"},"Oracles"),(0,o.kt)("p",null,"An oracle in blockchain is a specialized service that acts as a bridge between the blockchain and the outside world, enabling smart contracts to interact with real-world data and events. Unlike traditional systems that rely on centralized data sources, oracles provide decentralized, tamper-resistant mechanisms to fetch, verify, and relay external information onto the blockchain."),(0,o.kt)("h3",{id:"slinky-coming-soon"},"Slinky (coming soon)"),(0,o.kt)("p",null,"Slinky is an on-chain consensus-level oracle running by the chain validators. Slinky is coming to Neutron in the next release in July 2024. You can read more about the oracle, how it works, its upcoming features and how to use by the link to the oracle's official docs: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.skip.money/slinky/overview/"},"https://docs.skip.money/slinky/overview/"),". Learn how to easily interact with Slinky using Neutron SDK: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.skip.money/slinky/using-slinky/neutron-sdk"},"https://docs.skip.money/slinky/using-slinky/neutron-sdk"),"."),(0,o.kt)("h3",{id:"pyth"},"Pyth"),(0,o.kt)("p",null,"Pyth is a broadly used oracle that offers not only real-time price feeds, but also historical price data and on-chain random numbers generator. Read more about it by the link to the official docs: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pyth.network/home"},"https://docs.pyth.network/home"),"."),(0,o.kt)("h3",{id:"ojo"},"Ojo"),(0,o.kt)("p",null,"Ojo is a decentralized security-first oracle network that sources price data from a diverse catalog of on- and off-chain sources. Here's a link to the docs so you can get familiar with its advantages and usage: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ojo.network/"},"https://docs.ojo.network/"),"."),(0,o.kt)("h3",{id:"band"},"Band"),(0,o.kt)("p",null,"Band is a cross-chain data oracle platform that provides reliable, secure, and real-time data to smart contracts on various blockchain networks. Read more about its architecture, functionalities, client libraries, and tools by the link to the docs: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bandchain.org/"},"https://docs.bandchain.org/"),"."),(0,o.kt)("h2",{id:"on-chain-twap"},"On-chain TWAP"),(0,o.kt)("p",null,"TWAP, or Time-Weighted Average Price, is a trading algorithm and pricing strategy used in financial markets. It calculates the average price of an asset over a specified period of time to get a more even result and reduce market impact."),(0,o.kt)("h3",{id:"astroport-oracle"},"Astroport oracle"),(0,o.kt)("p",null,"Astroport has an oracle contract that calculates TWAP for x*y=k type of pools: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.astroport.fi/docs/develop/smart-contracts/oracle"},"https://docs.astroport.fi/docs/develop/smart-contracts/oracle"),"."))}u.isMDXComponent=!0}}]);