"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[3425],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),h=i,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||o;return a?n.createElement(d,r(r({ref:t},p),{},{components:a})):n.createElement(d,r({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6030:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const o={},r="ADR-002: Dynamic Committee",l={unversionedId:"ADR/adr-002-dynamic-committee",id:"version-1.0/ADR/adr-002-dynamic-committee",title:"ADR-002: Dynamic Committee",description:"Status",source:"@site/versioned_docs/version-1.0/ADR/adr-002-dynamic-committee.md",sourceDirName:"ADR",slug:"/ADR/adr-002-dynamic-committee",permalink:"/docs/1.0/ADR/adr-002-dynamic-committee",draft:!1,tags:[],version:"1.0",frontMatter:{},sidebar:"docs",previous:{title:"ADR-001: Grace Period",permalink:"/docs/1.0/ADR/adr-001-grace-period"},next:{title:"ADR-003: Babylon Integration",permalink:"/docs/1.0/ADR/adr-003-babylon"}},s={},c=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Validator committee",id:"validator-committee",level:3},{value:"Pool public key",id:"pool-public-key",level:3},{value:"Validator rotation",id:"validator-rotation",level:3},{value:"Accepted approach",id:"accepted-approach",level:2},{value:"MsgKeyGen",id:"msgkeygen",level:3},{value:"Alternative approaches",id:"alternative-approaches",level:2},{value:"Static committee",id:"static-committee",level:3},{value:"Steps to implement",id:"steps-to-implement",level:2},{value:"Corner cases",id:"corner-cases",level:2},{value:"Consequences",id:"consequences",level:2},{value:"References",id:"references",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(m,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"adr-002-dynamic-committee"},"ADR-002: Dynamic Committee"),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"Done"),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("h3",{id:"validator-committee"},"Validator committee"),(0,i.kt)("p",null,"Several validators, acting as observers, form the signing committee. The purpose of this committee is to represent the vault owner across multiple external chains, eliminating a single point of failure through its distributed nature. Each member of the committee possesses a private share used during the signing process. Along with that, the committee has its public key. The public key is used to verify the signature is the same public key that corresponds to the original signing committee. This public key is known to everyone who needs to verify the signatures and is derived during the initial setup of the scheme."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"tss_committee",src:a(581).Z,width:"803",height:"290"})),(0,i.kt)("h3",{id:"pool-public-key"},"Pool public key"),(0,i.kt)("p",null,"In a Threshold Signature Scheme (TSS), generating the public key without any single participant knowing the full private key involves a collaborative process during the initial setup phase. This public key, known as the ",(0,i.kt)("strong",{parentName:"p"},"pool public key"),", represents the entire committee and is used to verify signatures generated by the committee. The pool public key encapsulates information about all members of the committee and is sensitive to changes in the committee\u2019s composition. Essentially, the pool public key is a composite of all the public keys of the validators in the committee. Therefore, if the participants in the committee change, the current pool public key will no longer accurately represent the new committee and must be regenerated."),(0,i.kt)("p",null,"Essentially, the pool public key is a cryptographic public key that can be represented as the address associated with any blockchain that uses public keys as addresses. This ensures that the committee is recognized as the owner of the vault operating across different chains."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"pool_public_key",src:a(4752).Z,width:"495",height:"303"})),(0,i.kt)("h3",{id:"validator-rotation"},"Validator rotation"),(0,i.kt)("p",null,"The validator committee is called ",(0,i.kt)("strong",{parentName:"p"},"dynamic")," because it supports runtime ",(0,i.kt)("strong",{parentName:"p"},"validator rotation"),". ",(0,i.kt)("strong",{parentName:"p"},"Validator rotation")," is a mechanism that allows new validators to join or exit the committee. With each committee modification, the pool public key must be regenerated to reflect the new participants. Consequently, every modification changes the all vault addresses on all the external chains. Handling this process, known as ",(0,i.kt)("strong",{parentName:"p"},"vault migration"),", involves moving funds from the old vault to the new one. It typically takes a few hours to complete. Users are instructed to only send funds to the newest vault, but the retiring vault is monitored. Once the last of the vault migrations is complete, the previous vault is discarded and no longer monitored."),(0,i.kt)("p",null,"Validator rotation is triggered by a governance proposal. The proposal specifies the block height at which the rotation must occur and the expected timeout for all validators to join the new committee (e.g., 1 hour)."),(0,i.kt)("h2",{id:"accepted-approach"},"Accepted approach"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a special block type: KeyGen block."),(0,i.kt)("li",{parentName:"ol"},"Submit this block only through a governance proposal."),(0,i.kt)("li",{parentName:"ol"},"The KeyGen block indicates that starting from this block, the committee should generate a new pool public key and start using it."),(0,i.kt)("li",{parentName:"ol"},"The observer detects this block."),(0,i.kt)("li",{parentName:"ol"},"The observer halts all observations."),(0,i.kt)("li",{parentName:"ol"},"The observer adds the KeyGen block to the end of the queue and focuses on finishing the current queue."),(0,i.kt)("li",{parentName:"ol"},"When it is the KeyGen block's turn, the observer sends the key generation request, listing all currently online peers."),(0,i.kt)("li",{parentName:"ol"},"The observer waits for a new party to form within a specified timeout (usually around an hour)."),(0,i.kt)("li",{parentName:"ol"},"Once the party is formed, it generates a new key and stores it in memory."),(0,i.kt)("li",{parentName:"ol"},"After the key is generated, the observer initiates the vault migration process."),(0,i.kt)("li",{parentName:"ol"},"The vault migration involves a TSS-signed transfer of all tokens from the old vault to the new one. This transfer should be signed using the old pool public key."),(0,i.kt)("li",{parentName:"ol"},"Once the transfer is complete, the observer sets the new key as active, stops the halt, and continues observing from the next block.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"keygen",src:a(8089).Z,width:"680",height:"838"})),(0,i.kt)("h3",{id:"msgkeygen"},"MsgKeyGen"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf"},"message MsgKeyGen {\n  // Do we need to include anything there?\n}\n\nmessage MsgKeyGenResponse {}\n")),(0,i.kt)("h2",{id:"alternative-approaches"},"Alternative approaches"),(0,i.kt)("h3",{id:"static-committee"},"Static committee"),(0,i.kt)("p",null,"Generate all keys manually and distribute them."),(0,i.kt)("p",null,"Pros:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Don\u2019t disturb vals with the simultaneous generation"),(0,i.kt)("li",{parentName:"ul"},"The val setup process is simple: just copy several files"),(0,i.kt)("li",{parentName:"ul"},"Easy to achieve: don\u2019t require any coding")),(0,i.kt)("p",null,"Cons:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Totally insecure: sb except for the val knows its private key"),(0,i.kt)("li",{parentName:"ul"},"We can start the signing only when all vals join"),(0,i.kt)("li",{parentName:"ul"},"The vault migration requires generating and distributing keys once again")),(0,i.kt)("h2",{id:"steps-to-implement"},"Steps to implement"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add the ",(0,i.kt)("inlineCode",{parentName:"li"},"MsgKeyGen")," Int3face handler: proto contract and MsgServerCreate a special block type: KeyGen block ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Int3facechain/bridge/issues/40"},"40"),"."),(0,i.kt)("li",{parentName:"ol"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"MsgKeyGen")," witnessing in the Int3face chain client ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Int3facechain/bridge/issues/41"},"41"),"."),(0,i.kt)("li",{parentName:"ol"},"Implement observer halting ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Int3facechain/bridge/issues/42"},"42"),"."),(0,i.kt)("li",{parentName:"ol"},"Add the ",(0,i.kt)("inlineCode",{parentName:"li"},"MsgKeyGen")," observer handler ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Int3facechain/bridge/issues/43"},"43"),"."),(0,i.kt)("li",{parentName:"ol"},"Add vault migration mechanism in the observer ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Int3facechain/bridge/issues/44"},"44"),".")),(0,i.kt)("h2",{id:"corner-cases"},"Corner cases"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If the keygen fails for any reason, abort the process and continue observing using the old pool public key.")),(0,i.kt)("h2",{id:"consequences"},"Consequences"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Who needs to pay the fees for the vault migration? We can't pay them from the vault balance, as it leads to a difference in iBTC total supply and vault supply."),(0,i.kt)("li",{parentName:"ol"},"Do we really need to halt observations? It seems nothing will happen if we just continue."),(0,i.kt)("li",{parentName:"ol"},"Do we need to store all successful outbound transfers in the state so that observers might check that the transfer has already been executed?")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"../validators/validator-rotation.pdf"},"Validator rotation presentation"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"../validators/dynamic-committee-corner-cases.pdf"},"Dynamic committee corner cases presentation"),"."),(0,i.kt)("li",{parentName:"ol"})))}u.isMDXComponent=!0},8089:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/key_generation-3560bff13b825554ee9e464e2939cc3e.png"},4752:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pool_public_key-e5abd67d873da4854053a97588f644a2.png"},581:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tss_committee-b2314e886d31c8ac3dcbdd97a25cdba7.png"}}]);