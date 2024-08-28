"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[537],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4802:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={},l="ADR-004 Solana Integration",i={unversionedId:"ADR/adr-004-solana-integration",id:"ADR/adr-004-solana-integration",title:"ADR-004 Solana Integration",description:"Status",source:"@site/docs/ADR/adr-004-solana-integration.md",sourceDirName:"ADR",slug:"/ADR/adr-004-solana-integration",permalink:"/docs/docs/docs/ADR/adr-004-solana-integration",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"ADR-003: Babylon Integration",permalink:"/docs/docs/docs/ADR/adr-003-babylon"},next:{title:"ADR-005: Bitcoin Ordinals",permalink:"/docs/docs/docs/ADR/adr-005-ordinals"}},s={},c=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Approach",id:"approach",level:2},{value:"SOL -&gt; INT3",id:"sol---int3",level:3},{value:"INT3 -&gt; SOL",id:"int3---sol",level:3},{value:"Solana smart-contract/Vault",id:"solana-smart-contractvault",level:3},{value:"State",id:"state",level:4},{value:"API",id:"api",level:4},{value:"Steps to implement",id:"steps-to-implement",level:2},{value:"References",id:"references",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adr-004-solana-integration"},"ADR-004 Solana Integration"),(0,r.kt)("h2",{id:"status"},"Status"),(0,r.kt)("p",null,"Research"),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"The objective is to enable cross-chain transfers of SOL tokens using our bridge."),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Int3face full-node"),(0,r.kt)("li",{parentName:"ol"},"Int3face Observer (with Int3face and Solana clients)"),(0,r.kt)("li",{parentName:"ol"},"Access to Solana RPC (either an own node or a third-party provider)"),(0,r.kt)("li",{parentName:"ol"},"Smart contract/vault on Solana")),(0,r.kt)("h2",{id:"approach"},"Approach"),(0,r.kt)("p",null,"The flow should be pretty straightforward:"),(0,r.kt)("h3",{id:"sol---int3"},"SOL -> INT3"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"User deposits SOL tokens into the Solana smart contract/vault"),(0,r.kt)("li",{parentName:"ol"},"The Solana observer detects the deposit and signals Int3face about it"),(0,r.kt)("li",{parentName:"ol"},"Int3face waits for the confirmation count threshold"),(0,r.kt)("li",{parentName:"ol"},"Int3face mints the equivalent SOL tokens to the recipient's address")),(0,r.kt)("h3",{id:"int3---sol"},"INT3 -> SOL"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"User initiates an outbound transfer request on Int3face"),(0,r.kt)("li",{parentName:"ol"},"The Int3face observer detects the request and signals the Solana smart-contract about it"),(0,r.kt)("li",{parentName:"ol"},"The Solana smart contract waits for the confirmation count threshold"),(0,r.kt)("li",{parentName:"ol"},"The Solana smart contract releases the tokens to the recipient's address")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"flow",src:a(8919).Z,width:"521",height:"1881"})),(0,r.kt)("h3",{id:"solana-smart-contractvault"},"Solana smart-contract/Vault"),(0,r.kt)("h4",{id:"state"},"State"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"List of signers",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Only these signers can acknowledge inbound transfer requests"))),(0,r.kt)("li",{parentName:"ul"},"List of pending inbound transfers"),(0,r.kt)("li",{parentName:"ul"},"Amount of SOL tokens in the vault (maybe managed automatically)"),(0,r.kt)("li",{parentName:"ul"},"Internal parameters",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Minimum transfer size"),(0,r.kt)("li",{parentName:"ul"},"Confirmations required")))),(0,r.kt)("h4",{id:"api"},"API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Inbound Transfer { recipient, amount }",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Acknowledges inbound transfer requests"),(0,r.kt)("li",{parentName:"ul"},"Counts the confirmations"),(0,r.kt)("li",{parentName:"ul"},"Releases tokens to the recipient's address once the confirmation threshold reached"))),(0,r.kt)("li",{parentName:"ul"},"Outbound Transfer { sender, recipient, amount }",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Creates a transaction on-chain for the observers to witness"))),(0,r.kt)("li",{parentName:"ul"},"Add Signer { signer_address }",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Adds a new signer to the signers pool"),(0,r.kt)("li",{parentName:"ul"},"Accessible only by the authority entity"))),(0,r.kt)("li",{parentName:"ul"},"Remove Signer { signer_address }",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removes a signer from the signers pool"),(0,r.kt)("li",{parentName:"ul"},"Accessible only by the authority entity"))),(0,r.kt)("li",{parentName:"ul"},"Methods to modify internal parameters (minimum transfer size, confirmations required)")),(0,r.kt)("h2",{id:"steps-to-implement"},"Steps to implement"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Research Solana smart contract development"),(0,r.kt)("li",{parentName:"ol"},"Implement the smart contract/vault on Solana"),(0,r.kt)("li",{parentName:"ol"},"Deploy the smart contract on Solana"),(0,r.kt)("li",{parentName:"ol"},"Implement the Solana Chain Client (RPC + observer)"),(0,r.kt)("li",{parentName:"ol"},"Integrate the Solana Chain Client into the Observer"),(0,r.kt)("li",{parentName:"ol"},"Add the new asset and parameters for Solana to the Bridge module")),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.atomiq.exchange/"},"atomiq.exchange description")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://solana.com/docs/core/programs"},"Solana Smart Contract doc")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://solana.com/docs/rpc"},"Solana RPC API")),(0,r.kt)("li",{parentName:"ol"})))}m.isMDXComponent=!0},8919:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/adr004_inbound_outbound_flow-a0e53e8d6ee96cda779ff9c127078bde.png"}}]);