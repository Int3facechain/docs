"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[9178],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,h=d["".concat(l,".").concat(p)]||d[p]||u[p]||r;return n?a.createElement(h,s(s({ref:t},m),{},{components:n})):a.createElement(h,s({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},54999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={},s="Overview",i={unversionedId:"neutron/modules/3rdparty/osmosis/ibc-hooks/overview",id:"version-3.0/neutron/modules/3rdparty/osmosis/ibc-hooks/overview",title:"Overview",description:"This is a cosmos-sdk module taken from osmosis v14.0.0-rc1 (commit 26e2fad8e7b3eb7c33965360b31a593b392d7d75)",source:"@site/versioned_docs/version-3.0/neutron/modules/3rdparty/osmosis/ibc-hooks/overview.md",sourceDirName:"neutron/modules/3rdparty/osmosis/ibc-hooks",slug:"/neutron/modules/3rdparty/osmosis/ibc-hooks/overview",permalink:"/3.0/neutron/modules/3rdparty/osmosis/ibc-hooks/overview",draft:!1,tags:[],version:"3.0",frontMatter:{},sidebar:"docs",previous:{title:"Params",permalink:"/3.0/neutron/modules/3rdparty/osmosis/tokenfactory/params"},next:{title:"Overview",permalink:"/3.0/neutron/modules/3rdparty/strangelove/packet-forward-middleware/overview"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Details",id:"details",level:2},{value:"Cosmwasm Contract Execution Format",id:"cosmwasm-contract-execution-format",level:3},{value:"ICS20 packet structure",id:"ics20-packet-structure",level:3},{value:"Execution flow",id:"execution-flow",level:3}],m={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This is a cosmos-sdk module taken from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/osmosis"},"osmosis")," ",(0,o.kt)("inlineCode",{parentName:"p"},"v14.0.0-rc1")," (commit ",(0,o.kt)("inlineCode",{parentName:"p"},"26e2fad8e7b3eb7c33965360b31a593b392d7d75"),")"),(0,o.kt)("p",null,"We removed ",(0,o.kt)("inlineCode",{parentName:"p"},"ibc_callback")," functionality from osmosis implementation."),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"The wasm hook is an IBC middleware which is used to allow ICS-20 token transfers to initiate contract calls.\nThis allows cross-chain contract calls, that involve token movement.\nThis is useful for a variety of usecases.\nOne of primary importance is cross-chain swaps, which is an extremely powerful primitive."),(0,o.kt)("p",null,"The mechanism enabling this is a ",(0,o.kt)("inlineCode",{parentName:"p"},"memo")," field on every ICS20 transfer packet as of ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/the-interchain-foundation/moving-beyond-simple-token-transfers-d42b2b1dc29b"},"IBC v3.4.0"),".\nWasm hooks is an IBC middleware that parses an ICS20 transfer, and if the ",(0,o.kt)("inlineCode",{parentName:"p"},"memo")," field is of a particular form, executes a wasm contract call. We now detail the ",(0,o.kt)("inlineCode",{parentName:"p"},"memo")," format for ",(0,o.kt)("inlineCode",{parentName:"p"},"wasm")," contract calls, and the execution guarantees provided."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"To call contract along with an IBC transfer, send an IBC transfer to Neutron chain with specified memo in format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"memo": {\n    "wasm": {\n        "contract": "ntrnContractAddr", // should be equal to message receiver\n        "msg": { // should be valid cosmwasm message for `ntrnContractAddr` contract\n            "raw_message_fields": "raw_message_data",\n        }\n    }\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can only use this feature from chains with IBC module starting from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/releases/tag/v3.4.0"},(0,o.kt)("inlineCode",{parentName:"a"},"v3.4.0"))," version")),(0,o.kt)("h2",{id:"details"},"Details"),(0,o.kt)("h3",{id:"cosmwasm-contract-execution-format"},"Cosmwasm Contract Execution Format"),(0,o.kt)("p",null,"Before we dive into the IBC metadata format, we show the cosmwasm execute message format, so the reader has a sense of what are the fields we need to be setting in.\nThe cosmwasm ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgExecuteContract")," is defined ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/blob/4fe2fbc8f322efdaf187e2e5c99ce32fd1df06f0/x/wasm/types/tx.pb.go#L340-L349"},"here")," as the following type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type MsgExecuteContract struct {\n    // Sender is the that actor that signed the messages\n    Sender string\n    // Contract is the address of the smart contract\n    Contract string\n    // Msg json encoded message to be passed to the contract\n    Msg RawContractMessage\n    // Funds coins that are transferred to the contract on execution\n    Funds sdk.Coins\n}\n")),(0,o.kt)("p",null,"So we detail where we want to get each of these fields from:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sender: We cannot trust the sender of an IBC packet, the counterparty chain has full ability to lie about it.\nWe cannot risk this sender being confused for a particular user or module address on Neutron.\nSo we replace the sender with an account to represent the sender prefixed by the channel and a wasm module prefix.\nThis is done by setting the sender to ",(0,o.kt)("inlineCode",{parentName:"li"},'Bech32(Hash("ibc-wasm-hook-intermediaryg" || channelID || sender))'),", where the channelId is the channel id on the local chain."),(0,o.kt)("li",{parentName:"ul"},"Contract: This field should be directly obtained from the ICS-20 packet metadata"),(0,o.kt)("li",{parentName:"ul"},"Msg: This field should be directly obtained from the ICS-20 packet metadata."),(0,o.kt)("li",{parentName:"ul"},"Funds: This field is set to the amount of funds being sent over in the ICS 20 packet. One detail is that the denom in the packet is the counterparty chains representation of the denom, so we have to translate it to Neutron' representation.")),(0,o.kt)("p",null,"So our constructed cosmwasm message that we execute will look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'msg := MsgExecuteContract{\n    // Sender is the that actor that signed the messages\n    Sender: "ntrn-hash-of-channel-and-sender",\n    // Contract is the address of the smart contract\n    Contract: packet.data.memo["wasm"]["ContractAddress"],\n    // Msg json encoded message to be passed to the contract\n    Msg: packet.data.memo["wasm"]["Msg"],\n    // Funds coins that are transferred to the contract on execution\n    Funds: sdk.NewCoin{Denom: ibc.ConvertSenderDenomToLocalDenom(packet.data.Denom), Amount: packet.data.Amount}\n}\n')),(0,o.kt)("h3",{id:"ics20-packet-structure"},"ICS20 packet structure"),(0,o.kt)("p",null,"So given the details above, we propagate the implied ICS20 packet data structure.\nICS20 is JSON native, so we use JSON for the memo format."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    //... other ibc fields that we don\'t care about\n    "data":{\n        "denom": "denom on counterparty chain (e.g. uatom)",  // will be transformed to the local denom (ibc/...)\n        "amount": "1000",\n        "sender": "addr on counterparty chain", // will be transformed\n        "receiver": "contract addr or blank",\n        "memo": {\n            "wasm": {\n                "contract": "ntrnContractAddr",\n                "msg": {\n                    "raw_message_fields": "raw_message_data",\n                }\n            }\n        }\n    }\n}\n')),(0,o.kt)("p",null,"An ICS20 packet is formatted correctly for wasmhooks iff the following all hold:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"memo")," is not blank"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"memo")," is valid JSON"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"memo")," has at least one key, with value ",(0,o.kt)("inlineCode",{parentName:"li"},'"wasm"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'memo["wasm"]')," has exactly two entries, ",(0,o.kt)("inlineCode",{parentName:"li"},'"contract"')," and ",(0,o.kt)("inlineCode",{parentName:"li"},'"msg"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'memo["wasm"]["msg"]')," is a valid JSON object"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'receiver == "" || receiver == memo["wasm"]["contract"]'))),(0,o.kt)("p",null,"We consider an ICS20 packet as directed towards wasmhooks iff all of the following hold:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"memo")," is not blank"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"memo")," is valid JSON"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"memo")," has at least one key, with name ",(0,o.kt)("inlineCode",{parentName:"li"},'"wasm"'))),(0,o.kt)("p",null,"If an ICS20 packet is not directed towards wasmhooks, wasmhooks doesn't do anything.\nIf an ICS20 packet is directed towards wasmhooks, and is formatted incorrectly, then wasmhooks returns an error."),(0,o.kt)("h3",{id:"execution-flow"},"Execution flow"),(0,o.kt)("p",null,"Pre wasm hooks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ensure the incoming IBC packet is cryptographically valid"),(0,o.kt)("li",{parentName:"ul"},"Ensure the incoming IBC packet is not timed out.")),(0,o.kt)("p",null,"In Wasm hooks, pre packet execution:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ensure the packet is correctly formatted (as defined above)"),(0,o.kt)("li",{parentName:"ul"},"Edit the receiver to be the hardcoded IBC module account")),(0,o.kt)("p",null,"In wasm hooks, post packet execution:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Construct wasm message as defined before"),(0,o.kt)("li",{parentName:"ul"},"Execute wasm message"),(0,o.kt)("li",{parentName:"ul"},"if wasm message has error, return ErrAck"),(0,o.kt)("li",{parentName:"ul"},"otherwise continue through middleware")))}u.isMDXComponent=!0}}]);