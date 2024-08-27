"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[5283],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=i,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={},o="tBTC Main Components Diagram",l={unversionedId:"comparisons/tBTC-iBTC-nBTC-tech",id:"comparisons/tBTC-iBTC-nBTC-tech",title:"tBTC Main Components Diagram",description:"1",source:"@site/docs/comparisons/tBTC-iBTC-nBTC-tech.md",sourceDirName:"comparisons",slug:"/comparisons/tBTC-iBTC-nBTC-tech",permalink:"/docs/comparisons/tBTC-iBTC-nBTC-tech",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"tBTC",permalink:"/docs/comparisons/tBTC-iBTC-nBTC"},next:{title:"Setting up an Int3face validator",permalink:"/docs/deployment/testnet"}},s={},c=[{value:"Inbound transfer",id:"inbound-transfer",level:2},{value:"Outbound transfer",id:"outbound-transfer",level:2},{value:"Inbound transfer",id:"inbound-transfer-1",level:2},{value:"Outbound transfer",id:"outbound-transfer-1",level:2}],u={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tbtc-main-components-diagram"},"tBTC Main Components Diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1",src:n(9798).Z,width:"1371",height:"481"})),(0,i.kt)("p",null,"To start the tBTC node validator needs:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"tBTC node"),(0,i.kt)("li",{parentName:"ol"},"Access to the Ethereum API",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"By running their own ETH node"),(0,i.kt)("li",{parentName:"ul"},"OR using 3rd-party RPC provider"))),(0,i.kt)("li",{parentName:"ol"},"Access to the Bitcoin API - tBTC requires using Electrum protocol for BTC communication",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"By running their own Electrum Personal Server (includes full BTC node)"),(0,i.kt)("li",{parentName:"ul"},"OR using public Electrum Server")))),(0,i.kt)("h1",{id:"ibtc-main-components-diagram"},"iBTC Main Components Diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"2",src:n(7195).Z,width:"1021",height:"351"})),(0,i.kt)("p",null,"To start the iBTC node validator needs:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"iBTC node"),(0,i.kt)("li",{parentName:"ol"},"Observer node"),(0,i.kt)("li",{parentName:"ol"},"Access to the Int3face API",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"By running their own INT3 node"))),(0,i.kt)("li",{parentName:"ol"},"Access to the Bitcoin API",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"By running their own node"),(0,i.kt)("li",{parentName:"ul"},"OR using 3rd-party dedicated node")))),(0,i.kt)("h1",{id:"tbtc-hardware-recommendations"},"tBTC Hardware Recommendations"),(0,i.kt)("p",null,"Recommended hardware to run a singe tBTC v2 node:\n2 vCPU / 2 GB RAM / 1 GiB Persistent Storage"),(0,i.kt)("h1",{id:"ibtc-hardware-recommendations"},"iBTC Hardware Recommendations"),(0,i.kt)("p",null,"Estimated recommended hardware to run a single iBTC node:\n8 vCPU / 64 GB RAM / 1+ TB Persistent Storage"),(0,i.kt)("h1",{id:"tbtc-signing-timeline"},"tBTC signing timeline"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Signers announce readiness - ~1.2 minutes (6 ETH blocks)"),(0,i.kt)("li",{parentName:"ol"},"Signature production - <= 6 minutes (<= 30 ETH blocks)"),(0,i.kt)("li",{parentName:"ol"},"Cooldown - ~1 minute (5 ETH blocks)")),(0,i.kt)("p",null,"In total - ~8 minutes (41 ETH blocks)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1",src:n(9283).Z,width:"678",height:"407"})),(0,i.kt)("p",null,"In case of signature failure - next attempt will be performed after 41 block window. Maximum is 5 signing attempts.\nWorst case scenario - signature will take 205 blocks or ~40 minutes on ETH"),(0,i.kt)("h1",{id:"ibtc-signing-timeline"},"iBTC signing timeline"),(0,i.kt)("p",null,"According to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/thorchain/Resources/blob/master/Whitepapers/THORChain-TSS-Benchmark-July2020.pdf"},"Thorchain's benchmarks")," TSS signature production for 10 nodes takes around 10 seconds."),(0,i.kt)("p",null,"In case of signature failure - next attempt will be performed ASAP. We have a total timeout of 5 minutes for signing."),(0,i.kt)("h1",{id:"tbtc-complete-timeline"},"tBTC complete timeline"),(0,i.kt)("h2",{id:"inbound-transfer"},"Inbound transfer"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"2",src:n(6229).Z,width:"799",height:"250"})),(0,i.kt)("h2",{id:"outbound-transfer"},"Outbound transfer"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"3",src:n(3222).Z,width:"981",height:"250"})),(0,i.kt)("h1",{id:"ibtc-complete-timeline"},"iBTC complete timeline"),(0,i.kt)("h2",{id:"inbound-transfer-1"},"Inbound transfer"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"4",src:n(6838).Z,width:"909",height:"221"})),(0,i.kt)("h2",{id:"outbound-transfer-1"},"Outbound transfer"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"5",src:n(2304).Z,width:"1009",height:"250"})))}m.isMDXComponent=!0},7195:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ibtc_components-c61f8f0aacfb3817e0f8f1fd37fa3dd9.png"},6838:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ibtc_inbound_timeline-39abc892d8790c7e13d6396d23a85fdd.png"},2304:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ibtc_outbound_timeline-196cc6e2616cf77d4b1144365b334dad.png"},9798:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tbtc_components-493a4be7125e5d1988a972b221a34ac4.png"},6229:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tbtc_inbound_timeline-e52119dae6556bcf938c7273a5eefcf9.png"},3222:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tbtc_outbound_timeline-2b4473040111f57550d9f4f02a3712d6.png"},9283:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tbtc_signature_timeline-c7d87369d15d911e72223b745b262c66.png"}}]);