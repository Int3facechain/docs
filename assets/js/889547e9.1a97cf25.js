"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[316],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),c=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=c(t.components);return a.createElement(o.Provider,{value:e},t.children)},u="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(h,l(l({ref:e},d),{},{components:n})):a.createElement(h,l({ref:e},d))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[u]="string"==typeof t?t:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6499:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},l="THORChain & ZetaChain",s={unversionedId:"comparisons/Int3face-THOR-Zeta",id:"comparisons/Int3face-THOR-Zeta",title:"THORChain & ZetaChain",description:"ZetaChain",source:"@site/docs/comparisons/Int3face-THOR-Zeta.md",sourceDirName:"comparisons",slug:"/comparisons/Int3face-THOR-Zeta",permalink:"/docs/comparisons/Int3face-THOR-Zeta",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Params",permalink:"/docs/int3face/modules/tokenfactory/params"},next:{title:"tBTC & nBTC",permalink:"/docs/comparisons/tBTC-iBTC-nBTC"}},o={},c=[{value:"ZetaChain",id:"zetachain",level:2},{value:"Cross-Chain Message Passing (CCMP)",id:"cross-chain-message-passing-ccmp",level:3},{value:"CCMP success",id:"ccmp-success",level:3},{value:"CCMP failure",id:"ccmp-failure",level:3},{value:"Comparison Table",id:"comparison-table",level:2}],d={toc:c},u="wrapper";function p(t){let{components:e,...i}=t;return(0,r.kt)(u,(0,a.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"thorchain--zetachain"},"THORChain & ZetaChain"),(0,r.kt)("h2",{id:"zetachain"},"ZetaChain"),(0,r.kt)("h3",{id:"cross-chain-message-passing-ccmp"},"Cross-Chain Message Passing (CCMP)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"An end user interacts with a Contract C1 on Chain A."),(0,r.kt)("li",{parentName:"ol"},"The interaction leaves an event or transaction memo, with user specified ","[chainID,\ncontractAddress, message]",". (the message is arbitrarily encoded application\ndata in binary format."),(0,r.kt)("li",{parentName:"ol"},"ZetaChain observers (in zetaclient) pick up this event/memo and report to\nzetacore, which verifies the inbound transaction."),(0,r.kt)("li",{parentName:"ol"},"zetacore modifies the CCTX (cross-chain tx) state variable with OutboundTxParams\nwhich instructs the TSS signers (in zetaclient) to build, sign, and broadcast\nexternal transaction."),(0,r.kt)("li",{parentName:"ol"},"The zetaclient TSS signers observe the OutboundTxParams in the CCTX, and\nbuild outbound tx, enter into a TSS keysign ceremony to sign the transaction,\nand then broadcast the signed transaction to the external blockchains. For\nCCMP, the outbound transaction is mainly calling the user specified contract\nwith specified addresses and parameters."),(0,r.kt)("li",{parentName:"ol"},"The CCTX structure also tracks the stages/status of the cross-chain transaction."),(0,r.kt)("li",{parentName:"ol"},"Once the broadcasted transaction is included in one of the blocks (said to be\n\u201cmined\u201d or \u201cconfirmed\u201d), zetaclients will report such confirmation to zetacore,\nwhich will update the CCTX status."),(0,r.kt)("li",{parentName:"ol"},"If the \u201cconfirmed\u201d outbound transaction was successful, the CCTX status becomes OutboundMined, and the CCTX is\nconsidered in its terminal state and\nwill not be updated anymore. This CCTX processing is completed."),(0,r.kt)("li",{parentName:"ol"},"If the \u201cconfirmed\u201d outbound transaction is failure (e.g. revert on Ethereum\nchains), then the CCTX will updates it status to PendingRevert if possible, or\nAborted if revert is not possible. The CCTX processing is completed if it\ngoes to Aborted status."),(0,r.kt)("li",{parentName:"ol"},"If the new status is \u201cPendingRevert\u201d, a second OutboundTxParams should be\nalready in the CCTX, which instructs the zetaclients to create a \u201cRevert\u201d outbound tx to the incoming chain &\ncontract, allowing the incoming contract to\nimplement a application level revert function to cleanup contract state."),(0,r.kt)("li",{parentName:"ol"},"The zetaclients will build the revert transaction, enter into TSS keysign ceremony to sign the transaction, and\nbroadcast to the incoming blockchain (Chain\nA in this case)."),(0,r.kt)("li",{parentName:"ol"},"Once the revert transaction is \u201cconfirmed\u201d on Chain A, the zetaclients will\nreport the transaction status to zetacore."),(0,r.kt)("li",{parentName:"ol"},"If the revert transaction is successful, the CCTX status becomes Reverted, and\nthe CCTX processing is completed."),(0,r.kt)("li",{parentName:"ol"},"If the revert transaction is failure, the CCTX status becomes Aborted, and the\nCCTX processing is completed.")),(0,r.kt)("h3",{id:"ccmp-success"},"CCMP success"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"success",src:n(9090).Z,width:"739",height:"710"})),(0,r.kt)("h3",{id:"ccmp-failure"},"CCMP failure"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"failure",src:n(4127).Z,width:"794",height:"1083"})),(0,r.kt)("h2",{id:"comparison-table"},"Comparison Table"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Asset"),(0,r.kt)("th",{parentName:"tr",align:null},"THORChain"),(0,r.kt)("th",{parentName:"tr",align:null},"ZetaChain"),(0,r.kt)("th",{parentName:"tr",align:null},"Int3face"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Blockchain"),(0,r.kt)("td",{parentName:"tr",align:null},"THORChain (Cosmos)"),(0,r.kt)("td",{parentName:"tr",align:null},"ZetaChain (Cosmos)"),(0,r.kt)("td",{parentName:"tr",align:null},"Int3face (Cosmos)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Proof-of-Stake"),(0,r.kt)("td",{parentName:"tr",align:null},"Proof-of-Authority"),(0,r.kt)("td",{parentName:"tr",align:null},"Proof-of-Authority")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Token Standart"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"ZRC-20 (specific internally-supported)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deployment"),(0,r.kt)("td",{parentName:"tr",align:null},"Off-chain Bifrost, THOR node, external full nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Off-chain ZetaClient observer, off-chain ZetaClient sequencer, ZetaChain node, external full nodes or external light nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Off-chain Observer, Int3face node, external full nodes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Signing"),(0,r.kt)("td",{parentName:"tr",align:null},"Multi-party 2/3+1 TSS ECDSA"),(0,r.kt)("td",{parentName:"tr",align:null},"Multi-party 2/3+1 TSS ECDSA"),(0,r.kt)("td",{parentName:"tr",align:null},"Multi-party 2/3+1 TSS ECDSA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cross-chain Strategy"),(0,r.kt)("td",{parentName:"tr",align:null},"Notary scheme (third-party blockchain as a trusted entity)"),(0,r.kt)("td",{parentName:"tr",align:null},"Notary scheme (third-party blockchain as a trusted entity)"),(0,r.kt)("td",{parentName:"tr",align:null},"Message delivery service / Relay")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Main Idea"),(0,r.kt)("td",{parentName:"tr",align:null},"Atomic Trustful Swaps"),(0,r.kt)("td",{parentName:"tr",align:null},"Atomic Trustful Smart Contract Execution"),(0,r.kt)("td",{parentName:"tr",align:null},"Trustless Transfers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Use Case"),(0,r.kt)("td",{parentName:"tr",align:null},"Swap tokens from the Chain A to the Chain B"),(0,r.kt)("td",{parentName:"tr",align:null},"Execute smart contracts from the Chain A on the Chain B"),(0,r.kt)("td",{parentName:"tr",align:null},"Transfer tokens from the Chain A to Int3face")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ownership"),(0,r.kt)("td",{parentName:"tr",align:null},"Tokens reside on user's wallet, execution is secured by TSS"),(0,r.kt)("td",{parentName:"tr",align:null},"Tokens/operations reside on user's wallet/dApp, execution is secured by TSS"),(0,r.kt)("td",{parentName:"tr",align:null},"Tokens reside on user's wallet, execution is secured by TSS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Vaults"),(0,r.kt)("td",{parentName:"tr",align:null},"Multiple vaults \u2013 multiple blockchains"),(0,r.kt)("td",{parentName:"tr",align:null},"Multiple smart contracts \u2013 multiple blockchains"),(0,r.kt)("td",{parentName:"tr",align:null},"One vault \u2013 one blockchain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Vault Rotation"),(0,r.kt)("td",{parentName:"tr",align:null},"Triggered automatically with some period"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD"),(0,r.kt)("td",{parentName:"tr",align:null},"On-demand, after the governance proposal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fees"),(0,r.kt)("td",{parentName:"tr",align:null},"Gas fees (Zeta ",(0,r.kt)("strong",{parentName:"td"},"AND")," external chains), Slip Fees, LP fees, Outbound TX fees"),(0,r.kt)("td",{parentName:"tr",align:null},"Gas fees (Zeta ",(0,r.kt)("strong",{parentName:"td"},"AND")," external chains), relayer fees, CCMX fees, LP fees + bridge fees (if applicable)"),(0,r.kt)("td",{parentName:"tr",align:null},"Gas fees (Int3face ",(0,r.kt)("strong",{parentName:"td"},"OR")," external chain), 0% bridging fee")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transfer Internals"),(0,r.kt)("td",{parentName:"tr",align:null},"Internal liquidity pools"),(0,r.kt)("td",{parentName:"tr",align:null},"Internal liquidity pools / Internal RPC routing"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Validator selection"),(0,r.kt)("td",{parentName:"tr",align:null},"Automatic weight-based selection"),(0,r.kt)("td",{parentName:"tr",align:null},"Selected entities for observers, arbitrary users for sequencers"),(0,r.kt)("td",{parentName:"tr",align:null},"Selected entities")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Refunds"),(0,r.kt)("td",{parentName:"tr",align:null},"Triggered upon failed transactions"),(0,r.kt)("td",{parentName:"tr",align:null},"Triggered upon failed transactions"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD")))))}p.isMDXComponent=!0},4127:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/zetachain_failure-Failed_Contract_Call-2d90cffce50b549a01d1a16598c0470d.png"},9090:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/zetachain_success-Successful_Contract_Call-af7e4d75d6c0e4787a0ca044f6fc3416.png"}}]);