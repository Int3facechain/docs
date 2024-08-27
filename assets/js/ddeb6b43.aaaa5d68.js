"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[1206],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(r),y=a,m=p["".concat(s,".").concat(y)]||p[y]||d[y]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},86780:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},i="SubQuery Indexer",u={unversionedId:"tutorials/indexers/subquery",id:"version-2.0/tutorials/indexers/subquery",title:"SubQuery Indexer",description:"Intro",source:"@site/versioned_docs/version-2.0/tutorials/indexers/subquery.md",sourceDirName:"tutorials/indexers",slug:"/tutorials/indexers/subquery",permalink:"/docs/2.0/tutorials/indexers/subquery",draft:!1,tags:[],version:"2.0",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/2.0/tutorials/indexers/intro"},next:{title:"pion-1 [testnet]",permalink:"/docs/2.0/deployment/testnet"}},s={},l=[{value:"Intro",id:"intro",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Running and Hosting your Neutron SubQuery APIs",id:"running-and-hosting-your-neutron-subquery-apis",level:2}],c={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"subquery-indexer"},"SubQuery Indexer"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"SubQuery is a leading blockchain data indexer that provides developers with fast, flexible, universal, open source and decentralised APIs for web3 projects. SubQuery SDK allows developers to get rich indexed data and build intuitive and immersive decentralised applications in a faster and more efficient way. SubQuery supports 100+ ecosystems including Neutron, Cosmos, Ethereum, Polygon, Polkadot, Algorand, NEAR, and Avalanche."),(0,a.kt)("p",null,"Another one of SubQuery's competitive advantages is the ability to aggregate data not only within a chain but across multiple blockchains all within a single project. This allows the creation of feature-rich dashboard analytics, multi-chain block scanners, or projects that index IBC transactions across zones."),(0,a.kt)("p",null,"Other advantages include superior performance with multiple RPC endpoint configurations, multi-worker capabilities and a configurable caching architecture. To find out more, visit our ",(0,a.kt)("a",{parentName:"p",href:"https://academy.subquery.network/"},"documentation"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Useful resources"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SubQuery Docs: ",(0,a.kt)("a",{parentName:"li",href:"https://academy.subquery.network/"},"SubQuery Academy (Documentation)")),(0,a.kt)("li",{parentName:"ul"},"Intro Quick Start Guide: ",(0,a.kt)("a",{parentName:"li",href:"https://academy.subquery.network/quickstart/quickstart.html"},"1. Create a New Project")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://academy.subquery.network/quickstart/quickstart_chains/cosmos-neutron.html#neutron-quick-start"},"Neutron Quick Start Guide"))),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Take a look at this SubQuery Starter Project that introduces SubQuery's Neutron support by indexing ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/subquery/cosmos-subql-starter/tree/main/Neutron/neutron-starter"},"Neutron"),"."),(0,a.kt)("p",null,"You can also follow along this ",(0,a.kt)("a",{parentName:"p",href:"https://academy.subquery.network/quickstart/quickstart.html"},"step by step guide")," to get familiar with SubQuery."),(0,a.kt)("h2",{id:"running-and-hosting-your-neutron-subquery-apis"},"Running and Hosting your Neutron SubQuery APIs"),(0,a.kt)("p",null,"SubQuery is open-source, meaning you have the freedom to run it in the following three ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Locally on your own computer (or a cloud provider of your choosing), ",(0,a.kt)("a",{parentName:"li",href:"https://academy.subquery.network/run_publish/run.html"},"view the instructions on how to run SubQuery Locally"),"."),(0,a.kt)("li",{parentName:"ul"},"You can publish it to SubQuery's enterprise-level ",(0,a.kt)("a",{parentName:"li",href:"https://managedservice.subquery.network/"},"Managed Service"),", where we'll host your SubQuery project in production ready services for mission critical data with zero-downtime blue/green deployments. There even is a generous free tier. ",(0,a.kt)("a",{parentName:"li",href:"https://academy.subquery.network/run_publish/publish.html"},"Find out how"),"."),(0,a.kt)("li",{parentName:"ul"},"You can publish it to the decentralised ",(0,a.kt)("a",{parentName:"li",href:"https://subquery.network/network"},"SubQuery Network"),", the most open, performant, reliable, and scalable data service for dApp developers. The SubQuery Network indexes and services data to the global community in an incentivised and verifiable way and supports Neutron from launch.")))}d.isMDXComponent=!0}}]);