"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[946],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(a),k=n,h=c["".concat(o,".").concat(k)]||c[k]||u[k]||l;return a?r.createElement(h,i(i({ref:t},m),{},{components:a})):r.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},4513:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const l={},i="ADR-009: Blockchain Explorer",p={unversionedId:"ADR/adr-009-blockchain-explorer",id:"ADR/adr-009-blockchain-explorer",title:"ADR-009: Blockchain Explorer",description:"Status",source:"@site/docs/ADR/adr-009-blockchain-explorer.md",sourceDirName:"ADR",slug:"/ADR/adr-009-blockchain-explorer",permalink:"/docs/ADR/adr-009-blockchain-explorer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"ADR-008: Automatic Signer List",permalink:"/docs/ADR/adr-008-automatic-signer-list"},next:{title:"ADR-010: Node Upgrades",permalink:"/docs/ADR/adr-010-node-ungrades"}},o={},s=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Steps to implement",id:"steps-to-implement",level:2},{value:"Research",id:"research",level:2},{value:"Existing blockchain explorers",id:"existing-blockchain-explorers",level:3},{value:"Comparative Table of Blockchain Explorers",id:"comparative-table-of-blockchain-explorers",level:3},{value:"Solution",id:"solution",level:2}],m={toc:s},c="wrapper";function u(e){let{components:t,...l}=e;return(0,n.kt)(c,(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"adr-009-blockchain-explorer"},"ADR-009: Blockchain Explorer"),(0,n.kt)("h2",{id:"status"},"Status"),(0,n.kt)("p",null,"Done"),(0,n.kt)("h2",{id:"context"},"Context"),(0,n.kt)("p",null,"The Int3face chain requires a blockchain explorer to effectively monitor and interact with the network.\nAn explorer will provide essential visibility into the chain's operations, allowing for real-time and historical analysis of blocks, transactions, and addresses.\nIt's crucial for both developers and stakeholders to trace transaction histories, audit balances, and verify network activity, enhancing transparency and trust in the Int3face chain."),(0,n.kt)("h2",{id:"steps-to-implement"},"Steps to implement"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Research"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Evaluate existing blockchain explorers that support Cosmos SDK."),(0,n.kt)("li",{parentName:"ul"},"Compare features, options, and security measures to identify the best fit for our needs."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Deploy local explorer"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Prepare a dedicated node to run the explorer software."),(0,n.kt)("li",{parentName:"ul"},"Configure the explorer to connect to the Int3face chain and index relevant data."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Integration into public explorer"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Choose a public blockchain explorer to integrate with."),(0,n.kt)("li",{parentName:"ul"},"Prepare the necessary code and APIs to feed Int3face chain data into the explorer."),(0,n.kt)("li",{parentName:"ul"},"Collaborate with the development team of an explorer to integrate the Int3face chain."),(0,n.kt)("li",{parentName:"ul"},"Ensure that the explorer accurately represents Int3face chain data and provides real-time updates.")))),(0,n.kt)("h2",{id:"research"},"Research"),(0,n.kt)("h3",{id:"existing-blockchain-explorers"},"Existing blockchain explorers"),(0,n.kt)("p",null,"Top most used block explorers offered by the Cosmos ecosystem: ",(0,n.kt)("a",{parentName:"p",href:"https://cosmos.network/block-explorers/"},"https://cosmos.network/block-explorers/")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"MintScan"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Official website: ",(0,n.kt)("a",{parentName:"li",href:"https://www.mintscan.io/"},"MintScan"),"."),(0,n.kt)("li",{parentName:"ul"},"Closed-source, proprietary explorer developed by ",(0,n.kt)("a",{parentName:"li",href:"https://cosmostation.io/"},"Cosmostation"),"."),(0,n.kt)("li",{parentName:"ul"},"Leading, most robust explorer for Cosmos SDK-based chains, on ",(0,n.kt)("em",{parentName:"li"},"07.24")," has:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"80 mainnets & testnets"))),(0,n.kt)("li",{parentName:"ul"},"Can be requested to extension through the fork of ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cosmostation/chainlist"},"chainlist")," repository."),(0,n.kt)("li",{parentName:"ul"},"Features:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Multiple networks support",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Cosmos SDK based chains (Cosmos, Osmosis, Celestia, etc)"),(0,n.kt)("li",{parentName:"ul"},"EVM compatible chains (Kava)"))),(0,n.kt)("li",{parentName:"ul"},"Detailed information on (with examples by Celestia):",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Informative dashboard: ",(0,n.kt)("a",{parentName:"li",href:"https://www.mintscan.io/celestia"},"example")),(0,n.kt)("li",{parentName:"ul"},"Validators: ",(0,n.kt)("a",{parentName:"li",href:"https://www.mintscan.io/celestia/validators"},"example")),(0,n.kt)("li",{parentName:"ul"},"Blocks: ",(0,n.kt)("a",{parentName:"li",href:"https://www.mintscan.io/celestia/block"},"example")),(0,n.kt)("li",{parentName:"ul"},"Transactions: ",(0,n.kt)("a",{parentName:"li",href:"https://www.mintscan.io/celestia/tx"},"example")),(0,n.kt)("li",{parentName:"ul"},"Assets: ",(0,n.kt)("a",{parentName:"li",href:"https://www.mintscan.io/celestia/assets"},"example")),(0,n.kt)("li",{parentName:"ul"},"Accounts: ",(0,n.kt)("a",{parentName:"li",href:"https://www.mintscan.io/celestia/address"},"example")),(0,n.kt)("li",{parentName:"ul"},"Proposals: ",(0,n.kt)("a",{parentName:"li",href:"https://www.mintscan.io/celestia/proposals"},"example")),(0,n.kt)("li",{parentName:"ul"},"Relayers: ",(0,n.kt)("a",{parentName:"li",href:"https://www.mintscan.io/celestia/relayers"},"example")),(0,n.kt)("li",{parentName:"ul"},"DApps ecosystem: ",(0,n.kt)("a",{parentName:"li",href:"https://www.mintscan.io/celestia/ecosystem"},"example")),(0,n.kt)("li",{parentName:"ul"},"Blockchain parameters: ",(0,n.kt)("a",{parentName:"li",href:"https://www.mintscan.io/celestia/parameters"},"example")))))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Ping.Pub Dashboard"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Official website: ",(0,n.kt)("a",{parentName:"li",href:"https://ping.pub/"},"Ping Dashboard"),"."),(0,n.kt)("li",{parentName:"ul"},"Open-source explorer developed by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ping-pub"},"Ping.pub"),"."),(0,n.kt)("li",{parentName:"ul"},"Most widely used explorer, encountered on ",(0,n.kt)("em",{parentName:"li"},"07.24")," has:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"113 mainnets & testnets."))),(0,n.kt)("li",{parentName:"ul"},"Features:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Supports Cosmos SDK based chains."),(0,n.kt)("li",{parentName:"ul"},"Provides detailed information on (with examples by Cosmos Hub):",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Dashboard: ",(0,n.kt)("a",{parentName:"li",href:"https://ping.pub/cosmos"},"example")),(0,n.kt)("li",{parentName:"ul"},"Blockchain parameters: ",(0,n.kt)("a",{parentName:"li",href:"https://ping.pub/cosmos/parameters"},"example")),(0,n.kt)("li",{parentName:"ul"},"Governance: ",(0,n.kt)("a",{parentName:"li",href:"https://ping.pub/cosmos/gov"},"example")),(0,n.kt)("li",{parentName:"ul"},"Staking: ",(0,n.kt)("a",{parentName:"li",href:"https://ping.pub/cosmos/staking"},"example")),(0,n.kt)("li",{parentName:"ul"},"Blocks: ",(0,n.kt)("a",{parentName:"li",href:"https://ping.pub/cosmos/block"},"example")),(0,n.kt)("li",{parentName:"ul"},"Transactions: ",(0,n.kt)("a",{parentName:"li",href:"https://ping.pub/cosmos/tx"},"example")),(0,n.kt)("li",{parentName:"ul"},"Uptime: ",(0,n.kt)("a",{parentName:"li",href:"https://ping.pub/cosmos/uptime"},"example")),(0,n.kt)("li",{parentName:"ul"},"IBC: ",(0,n.kt)("a",{parentName:"li",href:"https://ping.pub/cosmos/ibc/connection/connection-0"},"example")),(0,n.kt)("li",{parentName:"ul"},"Supply: ",(0,n.kt)("a",{parentName:"li",href:"https://ping.pub/cosmos/supply"},"example")),(0,n.kt)("li",{parentName:"ul"},"Consensus state: ",(0,n.kt)("a",{parentName:"li",href:"https://ping.pub/cosmos/consensus"},"example")),(0,n.kt)("li",{parentName:"ul"},"Cosmwasm: ",(0,n.kt)("a",{parentName:"li",href:"https://ping.pub/cosmos/cosmwasm"},"example")),(0,n.kt)("li",{parentName:"ul"},"State sync: ",(0,n.kt)("a",{parentName:"li",href:"https://ping.pub/cosmos/statesync"},"example")),(0,n.kt)("li",{parentName:"ul"},"Widgets: ",(0,n.kt)("a",{parentName:"li",href:"https://ping.pub/cosmos/widget"},"example")))))),(0,n.kt)("li",{parentName:"ul"},"Architecture:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Consists only from a light client (frontend app) which fetches data from a full-nodes without any caching."),(0,n.kt)("li",{parentName:"ul"},"Scheme:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{alt:"image",src:a(1042).Z,width:"154",height:"169"})))))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Big Dipper"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Official website: ",(0,n.kt)("a",{parentName:"li",href:"https://bigdipper.io/"},"Big Dipper"),"."),(0,n.kt)("li",{parentName:"ul"},"Open-source explorer developed by ",(0,n.kt)("a",{parentName:"li",href:"https://forbole.com/"},"Forbole"),"."),(0,n.kt)("li",{parentName:"ul"},"Has two versions:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/forbole/big-dipper"},"Big Dipper (legacy)")," monolithic explorer."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/forbole/big-dipper-2.0-cosmos"},"Big Dipper 2.0")," modular explorer."))),(0,n.kt)("li",{parentName:"ul"},"Popular explorer, encountered on ",(0,n.kt)("em",{parentName:"li"},"07.24")," has:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"43 mainnets & testnets. "))),(0,n.kt)("li",{parentName:"ul"},"Features:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Supports Cosmos SDK based chains."),(0,n.kt)("li",{parentName:"ul"},"Provides information on (with examples by Cheqd):",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Overview: ",(0,n.kt)("a",{parentName:"li",href:"https://explorer.cheqd.io/"},"example")),(0,n.kt)("li",{parentName:"ul"},"Blocks: ",(0,n.kt)("a",{parentName:"li",href:"https://explorer.cheqd.io/blocks"},"example")),(0,n.kt)("li",{parentName:"ul"},"Validators: ",(0,n.kt)("a",{parentName:"li",href:"https://explorer.cheqd.io/validators"},"example")),(0,n.kt)("li",{parentName:"ul"},"Transactions: ",(0,n.kt)("a",{parentName:"li",href:"https://explorer.cheqd.io/transactions"},"example")),(0,n.kt)("li",{parentName:"ul"},"Proposals: ",(0,n.kt)("a",{parentName:"li",href:"https://explorer.cheqd.io/proposals"},"example")),(0,n.kt)("li",{parentName:"ul"},"Accounts: ",(0,n.kt)("a",{parentName:"li",href:"https://explorer.cheqd.io/accounts"},"example")),(0,n.kt)("li",{parentName:"ul"},"Blockchain params: ",(0,n.kt)("a",{parentName:"li",href:"https://explorer.cheqd.io/params"},"example")))))),(0,n.kt)("li",{parentName:"ul"},"Architecture:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Consists of a ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Frontend UI App"),(0,n.kt)("li",{parentName:"ul"},"Three backend components ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"PostgresSQL DB: used as a cache to improve performance."),(0,n.kt)("li",{parentName:"ul"},"BDJuno: a middleware that fetches data from the full-node and stores it in the DB."),(0,n.kt)("li",{parentName:"ul"},"Hasura: a GraphQL API that serves data to the frontend."))))),(0,n.kt)("li",{parentName:"ul"},"Scheme:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{alt:"image",src:a(9948).Z,width:"475",height:"445"}))))))))),(0,n.kt)("h3",{id:"comparative-table-of-blockchain-explorers"},"Comparative Table of Blockchain Explorers"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Explorer"),(0,n.kt)("th",{parentName:"tr",align:null},"Network Support"),(0,n.kt)("th",{parentName:"tr",align:null},"Data Visualization"),(0,n.kt)("th",{parentName:"tr",align:null},"User Interface"),(0,n.kt)("th",{parentName:"tr",align:null},"API Access"),(0,n.kt)("th",{parentName:"tr",align:null},"Real-time Updates"),(0,n.kt)("th",{parentName:"tr",align:null},"Search Functionality"),(0,n.kt)("th",{parentName:"tr",align:null},"Customizability"),(0,n.kt)("th",{parentName:"tr",align:null},"Security Features"),(0,n.kt)("th",{parentName:"tr",align:null},"Mobile Responsiveness"),(0,n.kt)("th",{parentName:"tr",align:null},"Integration Ease"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"MintScan")),(0,n.kt)("td",{parentName:"tr",align:null},"Cosmos SDK based, EVM compatible chains"),(0,n.kt)("td",{parentName:"tr",align:null},"Blocks, Transactions, Validators, Assets"),(0,n.kt)("td",{parentName:"tr",align:null},"Highly intuitive and detailed"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Transactions, blocks, addresses"),(0,n.kt)("td",{parentName:"tr",align:null},"Limited"),(0,n.kt)("td",{parentName:"tr",align:null},"Standard HTTPS and data validation"),(0,n.kt)("td",{parentName:"tr",align:null},"Fully responsive"),(0,n.kt)("td",{parentName:"tr",align:null},"Moderate to high")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Ping Dashboard")),(0,n.kt)("td",{parentName:"tr",align:null},"Cosmos SDK based chains"),(0,n.kt)("td",{parentName:"tr",align:null},"Validators, Proposals, Governance"),(0,n.kt)("td",{parentName:"tr",align:null},"Simplified and minimalistic"),(0,n.kt)("td",{parentName:"tr",align:null},"Limited API capabilities"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Limited to blocks and validators"),(0,n.kt)("td",{parentName:"tr",align:null},"High (modular components)"),(0,n.kt)("td",{parentName:"tr",align:null},"Basic security measures"),(0,n.kt)("td",{parentName:"tr",align:null},"Responsive"),(0,n.kt)("td",{parentName:"tr",align:null},"High")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Big Dipper")),(0,n.kt)("td",{parentName:"tr",align:null},"Cosmos SDK based chains"),(0,n.kt)("td",{parentName:"tr",align:null},"Blocks, Transactions, Validators, Voting power"),(0,n.kt)("td",{parentName:"tr",align:null},"Detailed with rich features"),(0,n.kt)("td",{parentName:"tr",align:null},"Extensive API for developers"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Extensive, including transactions, blocks, addresses"),(0,n.kt)("td",{parentName:"tr",align:null},"Moderate"),(0,n.kt)("td",{parentName:"tr",align:null},"HTTPS, rate limiting"),(0,n.kt)("td",{parentName:"tr",align:null},"Fully responsive"),(0,n.kt)("td",{parentName:"tr",align:null},"High")))),(0,n.kt)("h2",{id:"solution"},"Solution"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Installed a local Big Dipper explorer to monitor the Int3face chain. UI: ",(0,n.kt)("a",{parentName:"li",href:"http://95.217.153.1:13005/int3face"},"Big Dipper"))))}u.isMDXComponent=!0},9948:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/big_dipper_architecture-f0db14abb4d0bb95ac45af45a1fbfa01.png"},1042:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);