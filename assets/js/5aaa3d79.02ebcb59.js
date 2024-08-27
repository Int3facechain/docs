"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[9689],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},42950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={},i="Overview",s={unversionedId:"neutron/modules/interchain-txs/overview",id:"version-1.0/neutron/modules/interchain-txs/overview",title:"Overview",description:"This document specifies the Interchain Transactions module for the Neutron network.",source:"@site/versioned_docs/version-1.0/neutron/modules/interchain-txs/overview.md",sourceDirName:"neutron/modules/interchain-txs",slug:"/neutron/modules/interchain-txs/overview",permalink:"/1.0/neutron/modules/interchain-txs/overview",draft:!1,tags:[],version:"1.0",frontMatter:{},sidebar:"docs",previous:{title:"Queries",permalink:"/1.0/neutron/token-generation-event/price-feed/queries"},next:{title:"Messages",permalink:"/1.0/neutron/modules/interchain-txs/messages"}},c={},l=[{value:"IBC events",id:"ibc-events",level:2},{value:"Sudo Handlers",id:"sudo-handlers",level:2},{value:"CachedCtx",id:"cachedctx",level:3},{value:"Failed interchain txs",id:"failed-interchain-txs",level:2},{value:"Relaying",id:"relaying",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This document specifies the Interchain Transactions module for the Neutron network."),(0,r.kt)("p",null,"The Interchain Transactions module manages the creation of IBC Accounts and executing interchain transactions on behalf\nof CosmWasm smart contracts. The current implementation allows a smart contract to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Register multiple interchain accounts on a remote zone using an existing IBC connection;"),(0,r.kt)("li",{parentName:"ol"},"Execute transactions with multiple messages on a remote zone;"),(0,r.kt)("li",{parentName:"ol"},"Process the ",(0,r.kt)("inlineCode",{parentName:"li"},"OnChanOpenAck"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Acknowledgement")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Timeout")," events as they are delivered by a relayer.")),(0,r.kt)("h2",{id:"ibc-events"},"IBC events"),(0,r.kt)("p",null,'Registering an interchain account or executing an interchain transaction are asynchronous actions. In most cases, the\nrespective handlers of the Interchain Transactions module immediately return an empty successful response. The "real"\nresponse (with information about the status of execution on a remote zone) is later delivered in a separate IBC packet\nby a relayer. We call such packets the ',(0,r.kt)("strong",{parentName:"p"},"IBC events"),"."),(0,r.kt)("p",null,"A smart contract that tries to register an interchain account or to execute an interchain transaction naturally expects\nto receive the IBC events related to these actions. The Interchain Transactions module solves this task by passing these\nIBC events to the smart contract using\na ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/blob/288609255ad92dfe5c54eae572fe7d6010e712eb/x/wasm/keeper/keeper.go#L453"},"Sudo() call"),"\nand a custom ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron/blob/v1.0.4/x/contractmanager/types/sudo.go"},"message scheme"),". You can find a\ncomplete list of IBC events for each module message in the ",(0,r.kt)("a",{parentName:"p",href:"./messages"},"messages")," section."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": if your Sudo handler fails, the acknowledgment will be marked as processed inside the IBC module anyway.\nThe module designed this way to avoid\nmake most IBC relayers try to submit the acknowledgment over and over again. And since the ICA channels are ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDERED"),",\nACKs must be processed in the same order as corresponding transactions were sent, meaning no further acknowledgments\nwill be process until the previous one processed successfully. In addition, if sudo handler fails, we save the packetId\nfailed to be processed with contract manager's failures ",(0,r.kt)("a",{parentName:"p",href:"/1.0/neutron/modules/contract-manager/state"},"state"),". It is possible to suppress\nSudo handler fails by using ",(0,r.kt)("a",{parentName:"p",href:"#sudo-handlers"},"cachedContext")," with th handlers."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": there is no dedicated event for a closed channel (ICA disables all messages related to closing the channels)\n. Your channel, however, can still be closed if a packet timeout occurs; thus, if you are notified about a packet\ntimeout, you can be sure that the affected channel was closed. Please note that it is generally a good practice to set\nthe packet timeout for your interchain transactions to a really large value."),(0,r.kt)("p",{parentName:"blockquote"},"If the timeout occurs anyway, you can just\nexecute ",(0,r.kt)("a",{parentName:"p",href:"/neutron/modules/interchain-txs/messages#msgregisterinterchainaccount"},"RegisterInterchainAccount message")," again to\nrecover access to your interchain account.")),(0,r.kt)("h2",{id:"sudo-handlers"},"Sudo Handlers"),(0,r.kt)("p",null,"Before calling a sudo handler, we create a child context ",(0,r.kt)("a",{parentName:"p",href:"#cachedctx"},"cachedCtx"),", with which we call this handler.\nCalling a handler via a child context has 2 purposes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Suppress the sudo handler error itself, and mark the ibc acknowledgement packet as received and processed. Other way, the error makes relayer send an acknowledgement again and again. Information about an unsuccessfully processed ack is stored in ",(0,r.kt)("a",{parentName:"li",href:"/1.0/neutron/modules/contract-manager/state"},"state"),"."),(0,r.kt)("li",{parentName:"ol"},"Suppress out of gas panic triggered by sudo handler operation")),(0,r.kt)("h3",{id:"cachedctx"},"CachedCtx"),(0,r.kt)("p",null,"CachedCtx is created with ",(0,r.kt)("inlineCode",{parentName:"p"},"gas limit = gas limit in the parent context - GasReserve"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"GasReserve")," is a constant equal to 15000.\nThis reserve gas is needed to guarantee that ",(0,r.kt)("a",{parentName:"p",href:"/1.0/neutron/modules/contract-manager/state"},"Failure")," is saved, for example in case a contract has used all the gas it is entitled to and ended with an out of gas panic."),(0,r.kt)("h2",{id:"failed-interchain-txs"},"Failed interchain txs"),(0,r.kt)("p",null,"Not every interchaintx executes succesfully on a remote network. Some of them fail to execute with errors and then you get ibc acknowledgement with ",(0,r.kt)("inlineCode",{parentName:"p"},"Error")," type. The error is passed into the caller contract via sudo call with SudoMsg::Error ",(0,r.kt)("a",{parentName:"p",href:"/1.0/tutorials/cosmwasm-ica#ibc-events"},"variant")),(0,r.kt)("p",null,"Unfortunately, to avoid the nondeterminism associated with error text generation, the error text is severely truncated by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.3.1/modules/apps/27-interchain-accounts/host/ibc_module.go#L115"},"redact down")," to the error code without any additional details, before converting into AcknowledgementError."),(0,r.kt)("p",null,"Find the error text is possible if host chain includes ibc-go v7.2.3+, v7.3.2+, v8.0.1+, v8.1+ which include patch ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/pull/5541"},"5541"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"<binary> q interchain-accounts host packet-events <channel-id> <seq-id>")),(0,r.kt)("p",null,"Where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"binary")," is a binary on the chain you are working with (the remote chain)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"seq-id")," - sequence ID of the IBC message sent to the remote chain. The seq-id is returned to the contract in the ",(0,r.kt)("a",{parentName:"li",href:"/1.0/neutron/modules/interchain-txs/messages#response"},"SubmitTx")," response"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"channel-id")," is the ID of the ICA's channel on the remote chain's side. You should know it from registration ",(0,r.kt)("a",{parentName:"li",href:"/1.0/tutorials/cosmwasm-ica#2-register-an-interchain-account"},"procedure")," via ",(0,r.kt)("inlineCode",{parentName:"li"},"SudoMsg::OpenAck")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"counterparty_channel_id")," field. If you missed it you can always get counterparty channel-id with CLI command ",(0,r.kt)("inlineCode",{parentName:"li"},"neutrond q ibc channel end <src-port> <src-channel-id>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src-channel-id")," is the channel you intechain account associated with."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src-port")," is the port you interchain account is associated with.\nYou should know both ",(0,r.kt)("inlineCode",{parentName:"li"},"src-channel-id")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"src-port")," from registration ",(0,r.kt)("a",{parentName:"li",href:"/1.0/tutorials/cosmwasm-ica#2-register-an-interchain-account"},"procedure"),". Also ",(0,r.kt)("inlineCode",{parentName:"li"},"src-port")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"icacontroller-<contract_address>.<ica_id>")," where ",(0,r.kt)("inlineCode",{parentName:"li"},"ica_id")," defined by you during ica registration.")),(0,r.kt)("p",null,"Output example (filtered events):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n"type": "ibccallbackerror-ics27_packet",\n"attributes": [\n    {\n    "key": "ibccallbackerror-module",\n    "value": "interchainaccounts",\n    "index": true\n    },\n    {\n    "key": "ibccallbackerror-host_channel_id",\n    "value": "channel-2",\n    "index": true\n    },\n    {\n    "key": "ibccallbackerror-success",\n    "value": "false",\n    "index": true\n    },\n    {\n    "key": "ibccallbackerror-error",\n    "value": "invalid validator address: decoding bech32 failed: invalid separator index -1: invalid address",\n    "index": true\n    }\n]\n}\n')),(0,r.kt)("p",null,"On earlier versions of ibc-go it's barely possible to get full text error due to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/commit/fdbb508c1ca68811206d7175fb9e202c1611a43e"},"patch"),"."),(0,r.kt)("p",null,"In the IBC error acknowledgement you get ABCI error and a code, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"codespace: wasm, code: 5"),"\nwhere codespace usually is ",(0,r.kt)("inlineCode",{parentName:"p"},"ModuleName"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," is uniq code for the module. ",(0,r.kt)("inlineCode",{parentName:"p"},"codespace")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," pair uniq for the whole app. You can find the error description in source code. Usualy all the error of the module are ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/blob/5f444cd9d393513e534cbfa9a0e938295c4e84e1/x/wasm/types/errors.go#L25"},"placed")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"x/<module>/types/errors.go")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"module")," is the module where the error was thrown"),(0,r.kt)("h2",{id:"relaying"},"Relaying"),(0,r.kt)("p",null,"Neutron introduces smart-contract level callbacks for IBC packets. From an IBC relayer's perspective, this means that\ncustom application logic can be executed when a packet is submitted to Neutron, which can potentially drain the\nrelayer's funds. This naturally brings us to a situation in which protocols would prefer to set up their own relayers\nand restrict the channels they are willing to relay for. For example,\nin ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/informalsystems/ibc-rs"},"Hermes")," you can do this by adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"chains.packet_filter")," config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},"[chains.packet_filter]\npolicy = 'allow'\nlist = [\n    # allow relaying only for chanels created by a certain contract  \n    ['icacontroller-neutron14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s5c2epq*', '*'],\n]\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: you can have a look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"MsgRegisterInterchainQuery")," documentation in the ",(0,r.kt)("a",{parentName:"p",href:"/1.0/neutron/modules/interchain-txs/messages"},"Messages")," chapter\nto learn how IBC port naming works.")),(0,r.kt)("p",null,"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/1.0/relaying/ibc-relayer"},"IBC Relaying")," section for full IBC relaying documentation."))}p.isMDXComponent=!0}}]);