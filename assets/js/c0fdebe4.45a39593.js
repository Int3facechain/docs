"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[4892],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),k=o,g=u["".concat(i,".").concat(k)]||u[k]||p[k]||r;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const r={},l="DOGE Demo",s={unversionedId:"demos/doge/doge_inbound_outbound",id:"demos/doge/doge_inbound_outbound",title:"DOGE Demo",description:"This is the demo of the inbound and outbound transfer flow in the Int3face for the DOGE tokens.",source:"@site/docs/demos/doge/doge_inbound_outbound.md",sourceDirName:"demos/doge",slug:"/demos/doge/doge_inbound_outbound",permalink:"/docs/demos/doge/doge_inbound_outbound",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"BTC Demo",permalink:"/docs/demos/btc/btc_inbound_outbound"},next:{title:"ADR-001: Grace Period",permalink:"/docs/ADR/adr-001-grace-period"}},i={},d=[{value:"Inbound Transfer",id:"inbound-transfer",level:2},{value:"Outbound Transfer",id:"outbound-transfer",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"doge-demo"},"DOGE Demo"),(0,o.kt)("p",null,"This is the demo of the inbound and outbound transfer flow in the Int3face for the DOGE tokens."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Requirements")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Int3face node"),(0,o.kt)("li",{parentName:"ol"},"Int3face observer (configured for the DOGE regtest)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"../../int3face/build-and-run/doge_deploy"},"DOGE regtest node"))),(0,o.kt)("p",null,"We have everything deployed and ready in the Int3face testnet. Request Int3face team to get access to the testnet environment."),(0,o.kt)("p",null,"Current Dogecoin vault address: ",(0,o.kt)("inlineCode",{parentName:"p"},"mtjLBcip4TAy7kSEsVoYKK5zvz1YY1Zy4F")),(0,o.kt)("h2",{id:"inbound-transfer"},"Inbound Transfer"),(0,o.kt)("p",null,"We will use our own DOGE validators funds."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"We need an int3 address to send funds to")),(0,o.kt)("p",null,"We can generate new address by ",(0,o.kt)("inlineCode",{parentName:"p"},'int3faced keys add "$your_key_name"'),".\n",(0,o.kt)("img",{alt:"new_key",src:n(3719).Z,width:"1273",height:"371"})),(0,o.kt)("p",null,"We will use the address ",(0,o.kt)("inlineCode",{parentName:"p"},"int31nx72wqe9js9n0tvk9c2w4zwgwv6kecp0n4zllt")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Lets verify that this address doesn't have DOGE tokens in the Int3face")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"int3faced q bank balances int31nx72wqe9js9n0tvk9c2w4zwgwv6kecp0n4zllt\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"init_balance",src:n(8154).Z,width:"1273",height:"193"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Select an UTXO to spend")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"dogecoin-cli listunspent \n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"list_unspent",src:n(3315).Z,width:"1273",height:"696"})),(0,o.kt)("p",null,"If you don't see any UTXO available, mine a block to receive the rewards ",(0,o.kt)("inlineCode",{parentName:"p"},"dogecoin-cli generate 1"),", and run ",(0,o.kt)("inlineCode",{parentName:"p"},"listunspent")," command again."),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Build raw transaction from the UTXO you selected")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Vins")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Take the ",(0,o.kt)("inlineCode",{parentName:"li"},"txid")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"vout")," from the UTXO you're going to spend")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Vouts")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add the DOGE vault address and the amount to send"),(0,o.kt)("li",{parentName:"ul"},"Add the change address to get remaining tokens back (to get address of your current node run ",(0,o.kt)("inlineCode",{parentName:"li"},'dogecoin-cli getaccountaddress ""'),")"),(0,o.kt)("li",{parentName:"ul"},"Leave a small amount of tokens to pay the fee (1.0 should be enough)"),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"data")," entry with the hex encoded recipient address",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Encode ",(0,o.kt)("inlineCode",{parentName:"li"},"int31nx72wqe9js9n0tvk9c2w4zwgwv6kecp0n4zllt")," at the (online converter)","[https://www.rapidtables.com/convert/number/ascii-to-hex.html]")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'vins=\'[\n    {\n        "txid": "c4a12ff2916393d4a05ca446ab03d8cdf706dd6eb9b5d62eb8ab82cb08a01602",\n        "vout": 0\n    }\n]\'\n\nvouts=\'{\n    "mtjLBcip4TAy7kSEsVoYKK5zvz1YY1Zy4F": 100000.0,\n    "mzd3LWrYrBD2qqiKwCcetReLtNC9Sfcr3j": 399999.0,\n    "data": "696E7433316E783732777165396A73396E3074766B39633277347A77677776366B656370306E347A6C6C74"\n}\'\n\ndogecoin-cli createrawtransaction "$vins" "$vouts"\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"raw_transaction",src:n(2554).Z,width:"1273",height:"413"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"We can verify that the transaction is correct")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'dogecoin-tx -regtest -json "$raw_tx"\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"decoded_raw_transaction",src:n(5483).Z,width:"1273",height:"1277"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Sign the transaction")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"dogecoin-cli signrawtransaction $raw_tx\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"signed_tx",src:n(869).Z,width:"1273",height:"275"})),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Broadcast signed transaction to the DOGE")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"dogecoin-cli sendrawtransaction $signed_tx\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"send_doge_transaction",src:n(500).Z,width:"1273",height:"173"})),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Generate a block to include our transaction in the chain")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"dogecoin-cli generate 1\n")),(0,o.kt)("p",null,"Now the transaction should be observed by the Observer and sent to the Int3face chain."),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"Check your balance on the Int3face chain.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"int3faced q bank balances int31nx72wqe9js9n0tvk9c2w4zwgwv6kecp0n4zllt\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"inbound_balance",src:n(7586).Z,width:"1273",height:"213"}),"\nNow, we can see DOGE tokens in our wallet."),(0,o.kt)("h2",{id:"outbound-transfer"},"Outbound Transfer"),(0,o.kt)("p",null,"Lets send some of our tokens back from Int3face to DOGE."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Generate a new DOGE address")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"dogecoin-cli getnewaddress\nmsJf78psekNDSaQwCA2qhYypJqVPWaCCAg\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Request an outbound transfer from the bridge module")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"int3faced tx bridge outbound-transfer msJf78psekNDSaQwCA2qhYypJqVPWaCCAg dogecoin-doge 5000000000000 --from doge_test\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"outbound_transaction",src:n(5376).Z,width:"1273",height:"1293"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"We can check our balance again to see that DOGE tokens in Int3face were burt")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"int3faced q bank balances int31nx72wqe9js9n0tvk9c2w4zwgwv6kecp0n4zllt\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"outbound_balance",src:n(3182).Z,width:"1273",height:"191"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Generate a block in DOGE to include transaction from the vault")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"dogecoin-cli generate 1\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Check DOGE balance of the address we created before")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"dogecoin-cli listunspent 1 9999999 '[\"msJf78psekNDSaQwCA2qhYypJqVPWaCCAg\"]'\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"outbound_doge_balance",src:n(9619).Z,width:"1273",height:"346"}),"\nNow, we can see DOGE tokens in our wallet."))}p.isMDXComponent=!0},5483:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/decoded_raw_transaction-7f06a7d6c23be5a21154a87078210dc3.png"},7586:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/inbound_balance-8520ee05b4bbc657d270cd700777f795.png"},8154:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/init_balance-cb7d9420be2fefa3a49550e805ce5aaa.png"},3315:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/list_unspent-b432897e408ddfcf2b15bca5c706fa5b.png"},3719:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/new_key-5dc20bffc1ac37f497a9e042dcbefbdc.png"},3182:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/outbound_balance-3e8d3edc1db093d8018b7b6f0b9cdadb.png"},9619:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/outbound_doge_balance-d31d0daa0605ff6f8f0e41fc4b443dae.png"},5376:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/outbound_transaction-14d638f95725bb1a1f081691b515371d.png"},2554:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/raw_transaction-390e2fd584e41dc428694389a31fcd15.png"},500:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/send_doge_transaction-17d9bebaea539f27f03dbd1b736c63f3.png"},869:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/signed_transaction-972fd91f474a138230b8ceafb88ae002.png"}}]);