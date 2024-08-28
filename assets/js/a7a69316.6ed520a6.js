"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[859],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,b=d["".concat(s,".").concat(f)]||d[f]||u[f]||r;return n?a.createElement(b,o(o({ref:t},p),{},{components:n})):a.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={},o="ADR-003: Babylon Integration",l={unversionedId:"ADR/adr-003-babylon",id:"ADR/adr-003-babylon",title:"ADR-003: Babylon Integration",description:"Status",source:"@site/docs/ADR/adr-003-babylon.md",sourceDirName:"ADR",slug:"/ADR/adr-003-babylon",permalink:"/docs/docs/docs/ADR/adr-003-babylon",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"ADR-002: Dynamic Committee",permalink:"/docs/docs/docs/ADR/adr-002-dynamic-committee"},next:{title:"ADR-004 Solana Integration",permalink:"/docs/docs/docs/ADR/adr-004-solana-integration"}},s={},c=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Approach 1",id:"approach-1",level:2},{value:"Approach 2",id:"approach-2",level:2},{value:"References",id:"references",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"adr-003-babylon-integration"},"ADR-003: Babylon Integration"),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"Research"),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"This ADR introduces the idea of integrating Babylon chain's Bitcoin staking with Int3face's native Bitcoin bridging. It leverages the concept of a vault as an entry point for the bridge, which allows tokens to be staked using Babylon's contract."),(0,i.kt)("p",null,"On the Babylon side, there are the following main entities:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Validators"),": Secure and operate the Babylon chain."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Finality Providers"),": Validators on the Bitcoin side, functioning similarly to PoS validators but for Bitcoin."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"BTC Stakers"),": Users who intend to stake their BTC assets.")),(0,i.kt)("p",null,"On the Int3face side, the main entities are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Validators"),": Secure and operate the Int3face chain."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Observers"),": Facilitate bridge transfers between external chains and Int3face.")),(0,i.kt)("p",null,"In Babylon, each finality provider has its own address in Bitcoin, which can be used for receiving delegations and eventually staking. In contrast, Int3face uses a single address representing the vault, which serves as the entry point for incoming and outgoing transfers."),(0,i.kt)("p",null,"Bitcoin delegation process:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"adr003_babylon_staking",src:n(425).Z,width:"1020",height:"820"})),(0,i.kt)("p",null,"Bitcoin transfer process:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"adr003_int3face_transferring",src:n(3525).Z,width:"1014",height:"794"})),(0,i.kt)("p",null,"The idea is to use the Int3face vault address as the staking vault. All users who use it for staking will receive an equivalent amount of funds in Cosmos-based tokens. Conversely, everyone intending to transfer will simultaneously receive bonus fees for staking. This can be considered a form of ",(0,i.kt)("strong",{parentName:"p"},"Bitcoin Liquid Staking"),"."),(0,i.kt)("h2",{id:"approach-1"},"Approach 1"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Distribute vault funds across multiple finality providers"),". As soon as the Int3face vault receives an incoming transfer, it stakes the funds using several finality providers."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"adr003_babylon_int3face_option_1",src:n(8993).Z,width:"1010",height:"1066"})),(0,i.kt)("p",null,"Difficulties:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Does the vault need to unbond from several finality providers to collect all necessary funds?"),(0,i.kt)("li",{parentName:"ol"},"How to handle immediate unbonding if the vault doesn't have enough funds at the moment?"),(0,i.kt)("li",{parentName:"ol"},"What if the vault is rotated?"),(0,i.kt)("li",{parentName:"ol"},"Such token distribution is quite difficult and unsafe."),(0,i.kt)("li",{parentName:"ol"},"All transfers require TSS communication.")),(0,i.kt)("h2",{id:"approach-2"},"Approach 2"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Transfer the asset to Babylon using IBC and stake directly, bypassing Bitcoin"),". This option involves establishing the IBC connection, allowing special wrapped tokens to be transferred to Babylon and staked directly without interacting with Bitcoin."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"adr003_babylon_int3face_option_2",src:n(5466).Z,width:"1006",height:"1338"})),(0,i.kt)("p",null,"Difficulties:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"How to properly burn/mint tokens?"),(0,i.kt)("li",{parentName:"ol"},"The IBC connection is quite complex."),(0,i.kt)("li",{parentName:"ol"},"Additional work required on the Babylon side.")),(0,i.kt)("p",null,"These questions apply to all solutions and must be addressed in detail before implementation:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"How to process unbonding?"),(0,i.kt)("li",{parentName:"ol"}),(0,i.kt)("li",{parentName:"ol"},"How to handle immediate unbonding?"),(0,i.kt)("li",{parentName:"ol"},"In which currency do users receive incentives?"),(0,i.kt)("li",{parentName:"ol"},"What will happen during vault rotation?")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"BTC staking overview: ",(0,i.kt)("a",{parentName:"li",href:"https://babylonchain.io/blog/technical-preliminaries-of-bitcoin-staking"},"https://babylonchain.io/blog/technical-preliminaries-of-bitcoin-staking")),(0,i.kt)("li",{parentName:"ol"},"BTC staking background: ",(0,i.kt)("a",{parentName:"li",href:"https://babylonchain.io/blog/babylon-s-bitcoin-staking-contract"},"https://babylonchain.io/blog/babylon-s-bitcoin-staking-contract")),(0,i.kt)("li",{parentName:"ol"},"BTC staker guide: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.babylonchain.io/docs/user-guides/btc-staking-testnet/become-btc-staker"},"https://docs.babylonchain.io/docs/user-guides/btc-staking-testnet/become-btc-staker")),(0,i.kt)("li",{parentName:"ol"},"Finality provider guide: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.babylonchain.io/docs/user-guides/btc-staking-testnet/finality-providers/overview"},"https://docs.babylonchain.io/docs/user-guides/btc-staking-testnet/finality-providers/overview")),(0,i.kt)("li",{parentName:"ol"})))}u.isMDXComponent=!0},8993:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/adr003_babylon_int3face_option_1-a2f075df72ef162bc13f8ca1f890d336.png"},5466:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/adr003_babylon_int3face_option_2-ce8f92956713a480a425feb6da2525b0.png"},425:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/adr003_babylon_staking-1157475f950f580e0d47961522ff3acd.png"},3525:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/adr003_int3face_transferring-1ff18fdb2b02aff57282f94dc7f6f2eb.png"}}]);