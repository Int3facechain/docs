"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[3168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=o,d=m["".concat(c,".").concat(p)]||m[p]||h[p]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},31531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={slug:"/"},i="Overview",s={unversionedId:"neutron/overview",id:"version-2.0/neutron/overview",title:"Overview",description:"What is Neutron and why is it needed?",source:"@site/versioned_docs/version-2.0/neutron/overview.md",sourceDirName:"neutron",slug:"/",permalink:"/2.0/",draft:!1,tags:[],version:"2.0",frontMatter:{slug:"/"},sidebar:"docs",next:{title:"F.A.Q.",permalink:"/2.0/neutron/faq"}},c={},l=[{value:"What is Neutron and why is it needed?",id:"what-is-neutron-and-why-is-it-needed",level:2},{value:"Cosmos SDK",id:"cosmos-sdk",level:3},{value:"Interchain Security",id:"interchain-security",level:3},{value:"Interchain Queries",id:"interchain-queries",level:3},{value:"Interchain Transactions",id:"interchain-transactions",level:3},{value:"CosmWasm",id:"cosmwasm",level:3},{value:"Become an interchain builder",id:"become-an-interchain-builder",level:3},{value:"F.A.Q.",id:"faq",level:3}],u={toc:l},m="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("h2",{id:"what-is-neutron-and-why-is-it-needed"},"What is Neutron and why is it needed?"),(0,o.kt)("p",null,"Neutron is a blockchain network that brings Smart Contracts into the Cosmos-family blockchains using ",(0,o.kt)("a",{parentName:"p",href:"https://cosmwasm.com"},"CosmWasm"),". Neutron works with networks using the IBC protocol. Neutron security (block validation) is provided by the ",(0,o.kt)("a",{parentName:"p",href:"https://hub.cosmos.network"},"Cosmos Hub network")," using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/interchain-security"},"Interchain Security"),"."),(0,o.kt)("h3",{id:"cosmos-sdk"},"Cosmos SDK"),(0,o.kt)("p",null,"Neutron is built using the Cosmos SDK framework \u2014 a generalized framework that simplifies the process of building secure blockchain applications on top of Tendermint BFT. It is based on two major principles: Modularity & capabilities-based security."),(0,o.kt)("h3",{id:"interchain-security"},"Interchain Security"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/interchain-security"},"Interchain Security")," is a technology which allows Neutron to be secured by the validator set of the Cosmos Hub and do not have another one separate validator set particularly for the Neutron blockchain."),(0,o.kt)("h3",{id:"interchain-queries"},"Interchain Queries"),(0,o.kt)("p",null,"Neutron is bringing customizable Interchain Queries (ICQs) to CosmWasm smart-contracts. ICQs are an essential building block enabling devs to securely retrieve data from remote zones."),(0,o.kt)("h3",{id:"interchain-transactions"},"Interchain Transactions"),(0,o.kt)("p",null,"Neutron is bringing interchain accounts (ICAs) to CosmWasm smart-contracts. ICAs allow modules and smart contracts to execute and track transactions on foreign zones, without deploying additional code. With ICQs, they're the Interchain's secret DeFi sauce."),(0,o.kt)("h3",{id:"cosmwasm"},"CosmWasm"),(0,o.kt)("p",null,"CosmWasm is a smart contracting platform built for the Cosmos ecosystem."),(0,o.kt)("h3",{id:"become-an-interchain-builder"},"Become an interchain builder"),(0,o.kt)("p",null,"The concepts described above constitute the list of core technologies used in the majority of projects on Neutron. In other words, these technologies are the main attraction for projects to opt for Neutron. Though it might take some time to grasp and apply them consistently, doing so is vital for evolving into a proficient interchain builder. If you're looking to enhance your understanding, below are a few resources that can assist you in that endeavor."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/tutorials/overview"},"Neutron tutorials section"),". This section contains information covering CosmWasm smart contracts, handy tools to help you develop and test them, and examples of using Neutron's ICQs and ICAs in smart contracts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tourofrust.com/"},"Tour of Rust"),". Usually CosmWasm smart contracts are developed using the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/cosmwasm"},"cosmwasm")," framework written in Rust. It only requires superficial knowledge of Rust, and a good way to learn it could be this short guide."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/book/"},"Rust book"),". In case you want to acquire more in-depth Rust skills, this book might help you. It contains comprehensive articles about dozens of different Rust concepts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://academy.cosmwasm.com/"},"CosmWasm Academy"),". This educational project focuses on smart contracts, covering areas such as developing, testing, deploying, and how smart contracts interact with each other and a UI. It's designed for both smart contracts developers and frontend developers to find valuable insights."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://area-52.io/"},"Area-52"),". A casual learning initiative exploring CosmWasm dApps and NFTs, enriched with numerous external links that explain various auxiliary odds and ends."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cosmos.network/builders-program/"},"Interchain Builders Program"),". If you're a team building or planning to develop your own dApp in the Cosmos ecosystem, or if you already have a dApp outside the ecosystem and are seeking guidance, acceleration, and integration into the Cosmos environment \u2014 this is likely the ideal place for you to consider applying for assistance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ibc.cosmos.network/main"},"IBC-Go docs"),". An extensive resource explaining the Golang implementation of the Inter-Blockchain Communication Protocol.")),(0,o.kt)("h3",{id:"faq"},"F.A.Q."),(0,o.kt)("p",null,"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/2.0/neutron/faq"},"F.A.Q.")," page!"))}h.isMDXComponent=!0}}]);