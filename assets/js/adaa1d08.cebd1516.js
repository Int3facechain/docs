"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[5505],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>h});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return t?n.createElement(h,i(i({ref:r},d),{},{components:t})):n.createElement(h,i({ref:r},d))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78012:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const o={},i="Overview",c={unversionedId:"neutron/modules/3rdparty/strangelove/packet-forward-middleware/overview",id:"neutron/modules/3rdparty/strangelove/packet-forward-middleware/overview",title:"Overview",description:"Middleware for forwarding IBC packets.",source:"@site/docs/neutron/modules/3rdparty/strangelove/packet-forward-middleware/overview.md",sourceDirName:"neutron/modules/3rdparty/strangelove/packet-forward-middleware",slug:"/neutron/modules/3rdparty/strangelove/packet-forward-middleware/overview",permalink:"/neutron/modules/3rdparty/strangelove/packet-forward-middleware/overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/neutron/modules/3rdparty/osmosis/ibc-hooks/overview"},next:{title:"IBC Relayer",permalink:"/relaying/ibc-relayer"}},l={},s=[{value:"About",id:"about",level:2},{value:"Sequence diagrams",id:"sequence-diagrams",level:2},{value:"Multi-hop A-&gt;B-&gt;C-&gt;D success",id:"multi-hop-a-b-c-d-success",level:3},{value:"Multi-hop A-&gt;B-&gt;C-&gt;D, C-&gt;D <code>recv_packet</code> error, refund back to A",id:"multi-hop-a-b-c-d-c-d-recv_packet-error-refund-back-to-a",level:3},{value:"Forward A-&gt;B-&gt;C with 1 retry, max timeouts occurs, refund back to A",id:"forward-a-b-c-with-1-retry-max-timeouts-occurs-refund-back-to-a",level:3},{value:"Examples",id:"examples",level:2},{value:"Minimal Example - Chain forward A-&gt;B-&gt;C",id:"minimal-example---chain-forward-a-b-c",level:3},{value:"Full Example - Chain forward A-&gt;B-&gt;C-&gt;D with retry on timeout",id:"full-example---chain-forward-a-b-c-d-with-retry-on-timeout",level:3},{value:"References",id:"references",level:2}],d={toc:s},p="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Middleware for forwarding IBC packets."),(0,a.kt)("p",null,"Asynchronous acknowledgements are utilized for atomic multi-hop packet flows. The acknowledgement will only be written on the chain where the user initiated the packet flow after the forward/multi-hop sequence has completed (success or failure). This means that a user (i.e. an IBC application) only needs to monitor the chain where the initial transfer was sent for the response of the entire process."),(0,a.kt)("p",null,"See more info and source code ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strangelove-ventures/packet-forward-middleware"},"here"),"."),(0,a.kt)("h2",{id:"about"},"About"),(0,a.kt)("p",null,"The packet-forward-middleware is an IBC middleware module built for Cosmos blockchains utilizing the IBC protocol. A chain which incorporates the\npacket-forward-middleware is able to route incoming IBC packets from a source chain to a destination chain. As the Cosmos SDK/IBC become commonplace in the\nblockchain space more and more zones will come online, these new zones joining are noticing a problem: they need to maintain a large amount of infrastructure\n(archive nodes and relayers for each counterparty chain) to connect with all the chains in the ecosystem, a number that is continuing to increase quickly. Luckly\nthis problem has been anticipated and IBC has been architected to accomodate multi-hop transactions. However, a packet forwarding/routing feature was not in the\ninitial IBC release."),(0,a.kt)("h2",{id:"sequence-diagrams"},"Sequence diagrams"),(0,a.kt)("h3",{id:"multi-hop-a-b-c-d-success"},"Multi-hop A->B->C->D success"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"        channel-0 channel-1         channel-2 channel-3        channel-4 channel-5\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510       ibc        \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510        ibc       \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510        ibc       \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502Chain A\u2502\u25c4\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502Chain B\u2502\u25c4\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502Chain C\u2502\u25c4\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502Chain D\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n     1. transfer 2. recv_packet  3. forward 4. recv_packet  5. forward 6. recv_packet\n         \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba packet  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba packet  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\n     9. ack                 forward   8. ack           forward   7. ack  \n         \u25c4\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 middleware\u25c4\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 middleware\u25c4\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n")),(0,a.kt)("h3",{id:"multi-hop-a-b-c-d-c-d-recv_packet-error-refund-back-to-a"},"Multi-hop A->B->C->D, C->D ",(0,a.kt)("inlineCode",{parentName:"h3"},"recv_packet")," error, refund back to A"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"        channel-0 channel-1         channel-2 channel-3        channel-4 channel-5\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510       ibc        \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510        ibc       \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510        ibc       \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502Chain A\u2502\u25c4\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502Chain B\u2502\u25c4\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502Chain C\u2502\u25c4\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502Chain D\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n     1. transfer 2. recv_packet  3. forward 4. recv_packet  5. forward 6. recv_packet ERR\n         \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba packet  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba packet  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\n         9. ack ERR         forward   8. ack ERR       forward   7. ack ERR\n         \u25c4\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 middleware\u25c4\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 middleware\u25c4\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n")),(0,a.kt)("h3",{id:"forward-a-b-c-with-1-retry-max-timeouts-occurs-refund-back-to-a"},"Forward A->B->C with 1 retry, max timeouts occurs, refund back to A"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"        channel-0 channel-1         channel-2 channel-3\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510       ibc        \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510        ibc       \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502Chain A\u2502\u25c4\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502Chain B\u2502\u25c4\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502Chain C\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n     1. transfer 2. recv_packet     3. forward\n         \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba packet  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\n                            forward   4. timeout\n                            middleware\u25c4\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n                                    5. forward retry\n                                    \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\n         7. ack ERR                 6. timeout\n         \u25c4\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500         \u25c4\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Utilizing the packet ",(0,a.kt)("inlineCode",{parentName:"p"},"memo")," field, instructions can be encoded as JSON for multi-hop sequences."),(0,a.kt)("h3",{id:"minimal-example---chain-forward-a-b-c"},"Minimal Example - Chain forward A->B->C"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The packet-forward-middleware integrated on Chain B."),(0,a.kt)("li",{parentName:"ul"},"The packet ",(0,a.kt)("inlineCode",{parentName:"li"},"memo")," is included in ",(0,a.kt)("inlineCode",{parentName:"li"},"MsgTransfer")," by user on Chain A.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "forward": {\n    "receiver": "chain-c-bech32-address",\n    "port": "transfer",\n    "channel": "channel-123"\n  }\n}\n')),(0,a.kt)("h3",{id:"full-example---chain-forward-a-b-c-d-with-retry-on-timeout"},"Full Example - Chain forward A->B->C->D with retry on timeout"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The packet-forward-middleware integrated on Chain B and Chain C."),(0,a.kt)("li",{parentName:"ul"},"The packet ",(0,a.kt)("inlineCode",{parentName:"li"},"memo")," is included in ",(0,a.kt)("inlineCode",{parentName:"li"},"MsgTransfer")," by user on Chain A."),(0,a.kt)("li",{parentName:"ul"},"A packet timeout of 10 minutes and 2 retries is set for both forwards.")),(0,a.kt)("p",null,"In the case of a timeout after 10 minutes for either forward, the packet would be retried up to 2 times, at which case an error ack would be written to issue a refund on the prior chain."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"next")," is the ",(0,a.kt)("inlineCode",{parentName:"p"},"memo")," to pass for the next transfer hop. Per ",(0,a.kt)("inlineCode",{parentName:"p"},"memo")," intended usage of a JSON string, it should be either JSON which will be Marshaled retaining key order, or an escaped JSON string which will be passed directly."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"next")," as JSON"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "forward": {\n    "receiver": "chain-c-bech32-address",\n    "port": "transfer",\n    "channel": "channel-123",\n    "timeout": "10m",\n    "retries": 2,\n    "next": {\n      "forward": {\n        "receiver": "chain-d-bech32-address",\n        "port": "transfer",\n        "channel":"channel-234",\n        "timeout":"10m",\n        "retries": 2\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"next")," as escaped JSON string"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "forward": {\n    "receiver": "chain-c-bech32-address",\n    "port": "transfer",\n    "channel": "channel-123",\n    "timeout": "10m",\n    "retries": 2,\n    "next": "{\\"forward\\":{\\"receiver\\":\\"chain-d-bech32-address\\",\\"port\\":\\"transfer\\",\\"channel\\":\\"channel-234\\",\\"timeout\\":\\"10m\\",\\"retries\\":2}}"\n  }\n}\n')),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.mintscan.io/cosmos/proposals/56"},"https://www.mintscan.io/cosmos/proposals/56")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/pull/373"},"https://github.com/cosmos/ibc-go/pull/373")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/strangelove-ventures/governance/blob/master/proposals/2021-09-hub-ibc-router/README.md"},"https://github.com/strangelove-ventures/governance/blob/master/proposals/2021-09-hub-ibc-router/README.md"))))}u.isMDXComponent=!0}}]);