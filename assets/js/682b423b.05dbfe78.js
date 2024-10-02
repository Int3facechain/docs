"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[60],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),A=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=A(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=A(r),d=a,h=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var A=2;A<o;A++)s[A]=r[A];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4657:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>A});var n=r(7462),a=(r(7294),r(3905));const o={},s="ADR-001: Grace Period",i={unversionedId:"ADR/adr-001-grace-period",id:"ADR/adr-001-grace-period",title:"ADR-001: Grace Period",description:"Status",source:"@site/docs/ADR/adr-001-grace-period.md",sourceDirName:"ADR",slug:"/ADR/adr-001-grace-period",permalink:"/docs/ADR/adr-001-grace-period",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Transfers With Frontend UI",permalink:"/docs/demos/mainnet/transfers/doge-transfers-example"},next:{title:"ADR-002: Dynamic Committee",permalink:"/docs/ADR/adr-002-dynamic-committee"}},l={},A=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Accepted approach",id:"accepted-approach",level:2},{value:"Alternative approaches",id:"alternative-approaches",level:2},{value:"Steps to implement",id:"steps-to-implement",level:2},{value:"Consequences",id:"consequences",level:2}],c={toc:A},p="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adr-001-grace-period"},"ADR-001: Grace Period"),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("p",null,"Done"),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"The outbound transfer consists of the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Alice sends a MsgOutboundTransfer to the node."),(0,a.kt)("li",{parentName:"ol"},"The node adds this transaction to the block."),(0,a.kt)("li",{parentName:"ol"},"The blockchain executes this transaction."),(0,a.kt)("li",{parentName:"ol"},"The execution includes burning the corresponding tokens from Alice's address."),(0,a.kt)("li",{parentName:"ol"},"The observer detects the MsgOutboundTransfer."),(0,a.kt)("li",{parentName:"ol"},"The observer adds it to the internal quest."),(0,a.kt)("li",{parentName:"ol"},"The observer uses the corresponding external chain client to build, sign, and broadcast the transaction.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"outbound_current",src:r(4712).Z,width:"668",height:"347"})),(0,a.kt)("p",null,"The flow is quite straightforward. However, dynamic committee handling involves many corner cases that we need to be aware of:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Observer reboots"),": Which block should the observer use if it reboots and misses some blocks?"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Majority is down"),": What happens if the majority of observers are down and the transaction cannot be signed?"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Observer failures"),": What if some observers cannot process the transfer for any reason?")),(0,a.kt)("h2",{id:"accepted-approach"},"Accepted approach"),(0,a.kt)("p",null,"As seen, most problems arise from the pessimistic scenario where the majority is down. This scenario is highly unlikely, especially in a Proof-of-Authority system. Therefore, the solution relies on an optimistic mechanism. This means it is easy to handle when we trust the system, but more challenging (though not impossible) to manage in pessimistic cases."),(0,a.kt)("p",null,"The optimistic approach allows the observer to start monitoring the Int3face chain from the ",(0,a.kt)("strong",{parentName:"p"},"latest")," height. It may miss some transfers that occurred before, but they are not stuck as long as the majority of observers are active."),(0,a.kt)("p",null,"But what happens if the majority is down? In that case, the ",(0,a.kt)("strong",{parentName:"p"},"grace period")," is applied. The grace period is a specific time during which the user can submit ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgOutboundTransferRetry"),", which serves as a retry mechanism for ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgOutboundTransfer"),". For example, if the transfer is submitted at 10:20 and the execution time parameter is 2 hours, the grace period starts at 12:20 and lasts for a relatively long period, such as around 7 days."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"outbound_current",src:r(4503).Z,width:"839",height:"95"})),(0,a.kt)("p",null,"During this time, the user can submit ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgOutboundTransferRetry")," containing the Int3face hash of the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgOutboundTransfer")," transaction."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message MsgOutboundTransferRetry {\n  // TransferHash is the hash of the outbound transfer intended to retry.\n  string transfer_hash = 1;\n}\n")),(0,a.kt)("p",null,"Considering that, once the observer receives the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgOutboundTransferRetry")," command, it goes through all transactions that occurred in the vault within the specified grace period and checks whether this transaction was executed before or not. If not, the observer executes it. However, vault transactions do not have any marking indicating the Int3face hash of the transfer. Therefore, this hash needs to be added to the memo of every transaction generated based on ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgOutboundTransfer"),"."),(0,a.kt)("p",null,"Thus, the retry process looks like the following:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"outbound_current",src:r(7984).Z,width:"797",height:"439"})),(0,a.kt)("p",null,"And the observer start up is as follows:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"observer_reboot",src:r(4018).Z,width:"669",height:"366"})),(0,a.kt)("h2",{id:"alternative-approaches"},"Alternative approaches"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Adding earliest-observer-height to allow observers to process blocks from the last stuck transfer."),(0,a.kt)("li",{parentName:"ol"},"Adding an on-chain stateful queue.")),(0,a.kt)("h2",{id:"steps-to-implement"},"Steps to implement"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"MsgOutboundTransferRetry")," handler: proto contract and MsgServer ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Int3facechain/bridge/issues/30"},"30"),"."),(0,a.kt)("li",{parentName:"ol"},"Validation for ",(0,a.kt)("inlineCode",{parentName:"li"},"MsgOutboundTransferRetry"),": check that transfer_hash is present in Int3face ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Int3facechain/bridge/issues/30"},"30"),"."),(0,a.kt)("li",{parentName:"ol"},"Witnessing of ",(0,a.kt)("inlineCode",{parentName:"li"},"MsgOutboundTransferRetry")," in the observer ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Int3facechain/bridge/issues/31"},"31"),"."),(0,a.kt)("li",{parentName:"ol"},"Include the original Int3face transfer hash in the transaction memo ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Int3facechain/bridge/issues/32"},"32"),"."),(0,a.kt)("li",{parentName:"ol"},"Vault history check mechanism ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Int3facechain/bridge/issues/33"},"33"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"MsgOutboundTransferRetry")," observer processing ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Int3facechain/bridge/issues/33"},"33"),".")),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"How to prevent DDoS attacks on ",(0,a.kt)("inlineCode",{parentName:"li"},"MsgOutboundTransferRetry"),"? What if a malicious user sends many requests, triggering multiple historical checks?"),(0,a.kt)("li",{parentName:"ol"},"A special watcher may be implemented to automate the submission of ",(0,a.kt)("inlineCode",{parentName:"li"},"MsgOutboundTransferRetry"),".")))}u.isMDXComponent=!0},4503:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"},4018:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/observer_reboot-1b4eba9c1a6751e3936e2a4918c89b29.png"},4712:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/outbound_queue-95d4f9c0613c554989173004ac28f6a6.png"},7984:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/outbound_queue_retry-69856be91ed97a6c010646122ec3d5aa.png"}}]);