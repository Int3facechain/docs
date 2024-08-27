"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[6470],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const r={},o="ADR-005: Bitcoin Ordinals",l={unversionedId:"ADR/adr-005-ordinals",id:"version-1.0/ADR/adr-005-ordinals",title:"ADR-005: Bitcoin Ordinals",description:"Status",source:"@site/versioned_docs/version-1.0/ADR/adr-005-ordinals.md",sourceDirName:"ADR",slug:"/ADR/adr-005-ordinals",permalink:"/docs/1.0/ADR/adr-005-ordinals",draft:!1,tags:[],version:"1.0",frontMatter:{},sidebar:"docs",previous:{title:"ADR-004 Solana Integration",permalink:"/docs/1.0/ADR/adr-004-solana-integration"},next:{title:"ADR-006: Metrics And Logs",permalink:"/docs/1.0/ADR/adr-006-metrics"}},s={},d=[{value:"Status",id:"status",level:2},{value:"Background",id:"background",level:2},{value:"Glossary",id:"glossary",level:3},{value:"Taproot",id:"taproot",level:3},{value:"Ordinals",id:"ordinals",level:3},{value:"BRC20 and Runes",id:"brc20-and-runes",level:3},{value:"BRC20",id:"brc20",level:4},{value:"Origin and Purpose:",id:"origin-and-purpose",level:5},{value:"Implementation:",id:"implementation",level:5},{value:"Metadata and Storage:",id:"metadata-and-storage",level:5},{value:"Adoption and Use Cases:",id:"adoption-and-use-cases",level:5},{value:"Development and Community:",id:"development-and-community",level:5},{value:"Runes",id:"runes",level:4},{value:"Origin and Purpose:",id:"origin-and-purpose-1",level:5},{value:"Implementation:",id:"implementation-1",level:5},{value:"Metadata and Storage:",id:"metadata-and-storage-1",level:5},{value:"Adoption and Use Cases:",id:"adoption-and-use-cases-1",level:5},{value:"Development and Community:",id:"development-and-community-1",level:5},{value:"Summary of Differences",id:"summary-of-differences",level:4},{value:"Context",id:"context",level:2},{value:"Approach",id:"approach",level:2},{value:"Inbound transfer",id:"inbound-transfer",level:3},{value:"Outbound transfer",id:"outbound-transfer",level:3},{value:"Steps to implement",id:"steps-to-implement",level:2},{value:"BRC-20 Details",id:"brc-20-details",level:2},{value:"Concept",id:"concept",level:3},{value:"Deploy BRC-20",id:"deploy-brc-20",level:4},{value:"Mint BRC-20",id:"mint-brc-20",level:4},{value:"Transfer BRC-20",id:"transfer-brc-20",level:4},{value:"Implementation",id:"implementation-2",level:3},{value:"BRC-20 Indexer",id:"brc-20-indexer",level:4},{value:"Support Taproot tx by Observer",id:"support-taproot-tx-by-observer",level:4},{value:"FROST",id:"frost",level:4},{value:"Script",id:"script",level:3},{value:"References",id:"references",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"adr-005-bitcoin-ordinals"},"ADR-005: Bitcoin Ordinals"),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"In progress"),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("h3",{id:"glossary"},"Glossary"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Taproot"),': a proposed enhancement to the Bitcoin protocol designed to improve the privacy and efficiency of Bitcoin transactions. Tarpool, short for "transaction aggregation and relay pool," aims to address some of the limitations and challenges associated with the current transaction processing mechanisms.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Ordinals"),": a protocol that allows for the creation and transfer of unique, non-fungible tokens (NFTs) on the Bitcoin blockchain by inscribing data onto individual satoshis. Released in January 2023."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Runes"),": an experimental protocol proposed by Casey Rodarmor, the creator of Ordinals, aimed at creating a more advanced and decentralized tokenization system on Bitcoin. Runes do not use Ordinals in their implementation."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"BRC20"),": a token standard for creating and managing fungible tokens on the Bitcoin blockchain, similar to the ERC-20 standard on Ethereum. It uses the Ordinals protocol to create fungible tokens on the Bitcoin blockchain. Released in March 2023."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Ordinox"),": a cross-chain automated market maker (AMM), similar to Uniswap, but it's specifically designed for easy swaps between ERC20 tokens and Bitcoin's specific tokens."),(0,i.kt)("h3",{id:"taproot"},"Taproot"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Taproot is a Bitcoin upgrade activated in November 2021."),(0,i.kt)("li",{parentName:"ul"},"It enhances privacy and efficiency by enabling more complex transactions that look like regular transactions."),(0,i.kt)("li",{parentName:"ul"},"Taproot combines Schnorr signatures with Merkelized Abstract Syntax Trees (MAST), allowing for more flexible smart contracts and complex spending conditions.")),(0,i.kt)("h3",{id:"ordinals"},"Ordinals"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ordinals are a system for numbering and tracking individual satoshis (the smallest unit of Bitcoin)."),(0,i.kt)("li",{parentName:"ul"},"They enable the creation of digital assets, like NFTs, directly on the Bitcoin blockchain."),(0,i.kt)("li",{parentName:"ul"},"Ordinals can be used to inscribe data onto individual satoshis, which can then be transferred and traded.")),(0,i.kt)("p",null,"Inscription content is entirely on-chain, stored in taproot script-path spend scripts. Taproot scripts have very few restrictions on their content, and additionally receive the witness discount, making inscription content storage relatively economical."),(0,i.kt)("p",null,"Since taproot script spends can only be made from existing taproot outputs, inscriptions are made using a two-phase commit/reveal procedure. First, in the commit transaction, a taproot output committing to a script containing the inscription content is created. Second, in the reveal transaction, the output created by the commit transaction is spent, revealing the inscription content on-chain."),(0,i.kt)("h3",{id:"brc20-and-runes"},"BRC20 and Runes"),(0,i.kt)("h4",{id:"brc20"},"BRC20"),(0,i.kt)("h5",{id:"origin-and-purpose"},"Origin and Purpose:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"BRC20 was inspired by Ethereum's ERC-20 standard, aimed at creating fungible tokens on Bitcoin."),(0,i.kt)("li",{parentName:"ul"},"It leverages the Ordinals protocol to inscribe data onto satoshis (the smallest unit of Bitcoin).")),(0,i.kt)("h5",{id:"implementation"},"Implementation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"BRC20 tokens use Bitcoin\u2019s OP_RETURN script to store token-related data directly on-chain.\nIt relies on Bitcoin's existing infrastructure but is limited by the script size and transaction structure of Bitcoin.")),(0,i.kt)("h5",{id:"metadata-and-storage"},"Metadata and Storage:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The metadata for BRC20 tokens is stored on-chain but is somewhat limited by Bitcoin\u2019s script and transaction capabilities."),(0,i.kt)("li",{parentName:"ul"},"This can lead to inefficiencies and higher transaction fees due to the larger data size inscribed on the blockchain.")),(0,i.kt)("h5",{id:"adoption-and-use-cases"},"Adoption and Use Cases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"BRC20 has been used primarily for experimental and niche projects, and while it shows the potential for fungible tokens on Bitcoin, it has not achieved widespread adoption.")),(0,i.kt)("h5",{id:"development-and-community"},"Development and Community:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"BRC20 was developed by an independent community exploring tokenization on Bitcoin, and it remains experimental with ongoing refinements.")),(0,i.kt)("h4",{id:"runes"},"Runes"),(0,i.kt)("h5",{id:"origin-and-purpose-1"},"Origin and Purpose:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Runes is an experimental protocol proposed by Casey Rodarmor, the creator of Ordinals, aimed at creating a more advanced and decentralized tokenization system on Bitcoin."),(0,i.kt)("li",{parentName:"ul"},"It focuses on providing a robust and scalable method for creating and managing tokens directly on the Bitcoin blockchain.")),(0,i.kt)("h5",{id:"implementation-1"},"Implementation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Runes aim to keep all essential information, including metadata and transaction history, on-chain, ensuring transparency and immutability."),(0,i.kt)("li",{parentName:"ul"},"The protocol is designed to be decentralized and trustless, avoiding reliance on intermediaries or centralized entities.")),(0,i.kt)("h5",{id:"metadata-and-storage-1"},"Metadata and Storage:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Runes emphasize on-chain metadata storage, ensuring all token-related information is transparent and immutable."),(0,i.kt)("li",{parentName:"ul"},"This can make the system more reliable and secure, aligning with Bitcoin's principles.")),(0,i.kt)("h5",{id:"adoption-and-use-cases-1"},"Adoption and Use Cases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Runes are intended for a wide range of use cases, including stablecoins, digital collectibles, and utility tokens."),(0,i.kt)("li",{parentName:"ul"},"They aim to be interoperable with existing Bitcoin infrastructure, making it easier for users to manage their tokens using familiar tools.")),(0,i.kt)("h5",{id:"development-and-community-1"},"Development and Community:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Runes are still in the experimental stage, with active development and community engagement to explore their potential and refine the protocol.")),(0,i.kt)("h4",{id:"summary-of-differences"},"Summary of Differences"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Design Philosophy"),": BRC20 is inspired by ERC-20 and adapts it to Bitcoin, while Runes aim to build a more decentralized and robust tokenization system from the ground up."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Implementation"),": BRC20 uses OP_RETURN scripts for on-chain data storage, while Runes aim to keep comprehensive metadata and transaction history on-chain."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Flexibility and Use Cases"),": Runes are designed for broader use cases and interoperability with existing Bitcoin infrastructure, whereas BRC20 is more limited in scope and usage."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Development Stage"),": Both are experimental, but Runes are seen as a more forward-thinking approach to tokenization on Bitcoin.")),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"The Int3face team aims to use the bridge to transfer BRC20 and Rune tokens from Bitcoin to Cosmos. As a result, users will have a Cosmos representation of their Bitcoin assets, which can be used in various ways, starting with Osmosis integration. This is appealing to BRC20 and Runes holders because they currently have limited options for using their assets since these protocols are relatively new. "),(0,i.kt)("p",null,"To initiate the transfer, users must send their funds to the dedicated vault address, which will result in minting the corresponding amount of tokens in Int3face. Int3face takes a cut of the swap fees on the dex and the bridge fees, which may be initially 0."),(0,i.kt)("h2",{id:"approach"},"Approach"),(0,i.kt)("p",null,"The approach is the same as for the usual BTC bridging."),(0,i.kt)("h3",{id:"inbound-transfer"},"Inbound transfer"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"inbound",src:n(2165).Z,width:"624",height:"1102"})),(0,i.kt)("h3",{id:"outbound-transfer"},"Outbound transfer"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"outbound",src:n(276).Z,width:"624",height:"978"})),(0,i.kt)("h2",{id:"steps-to-implement"},"Steps to implement"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Examine the Ordinox btc-service repository: create a code report and explore how to reuse their code: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Int3facechain/bridge/issues/62"},"62"),"."),(0,i.kt)("li",{parentName:"ul"},"Understand the Taproot Bitcoin update: delve into advanced Bitcoin scripting: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Int3facechain/bridge/issues/63"},"63"),"."),(0,i.kt)("li",{parentName:"ul"},"Familiarize with the BRC20 and Runes formats: run a Regtest node, deploy several BRC20 tokens and Runes, transfer them to another address, and analyze the transaction formats: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Int3facechain/bridge/issues/64"},"64"),"."),(0,i.kt)("li",{parentName:"ul"},"Consider how to integrate the Bitcoin Taproot update and determine if our dependencies need updating since the Taproot update is relatively new: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Int3facechain/bridge/issues/65"},"65"),"."),(0,i.kt)("li",{parentName:"ul"},"Add BRC20 transaction witnessing to the observer: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Int3facechain/bridge/issues/66"},"66"),"."),(0,i.kt)("li",{parentName:"ul"},"Add Runes transaction witnessing to the observer: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Int3facechain/bridge/issues/67"},"67"),"."),(0,i.kt)("li",{parentName:"ul"},"Implement custom token handling on the Int3face chain: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Int3facechain/bridge/issues/68"},"68"),"."),(0,i.kt)("li",{parentName:"ul"},"Conduct TSS-signed transactions using BRC20 and Runes within the observer: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Int3facechain/bridge/issues/69"},"69"),".")),(0,i.kt)("h2",{id:"brc-20-details"},"BRC-20 Details"),(0,i.kt)("h3",{id:"concept"},"Concept"),(0,i.kt)("p",null,'BRC-20 represents a "smart contract" on top of Ordinals protocol with following functions:'),(0,i.kt)("h4",{id:"deploy-brc-20"},"Deploy BRC-20"),(0,i.kt)("p",null,"Creates a new BRC-20 token specified within the message. Only the first deploy transfer is considered valid, other deploys for the same token should be ignored."),(0,i.kt)("p",null,"Inscribe the deploy function to your wallet with the desired parameters set:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "p": "brc-20",   // Required: Protocol identifier\n    "op": "deploy",  // Required: Operation\n    "tick": "tokn",  // Required: Identifier for a specific BRC-20 token\n    "max": "100000", // Required: Max supply\n    "lim": "1000",   // Optional: Limit max minting amount per ordinal\n    "dec": "18"      // Optional: Decimal precision, default 18\n}\n')),(0,i.kt)("h4",{id:"mint-brc-20"},"Mint BRC-20"),(0,i.kt)("p",null,"Mints an amount of BRC-20. Provides balance only to the first owner of the mint function inscription."),(0,i.kt)("p",null,"Inscribe the mint function to your wallet with the desired parameters set:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "p": "brc-20",  // Required: Protocol identifier\n    "op": "mint",   // Required: Operation\n    "tick": "tokn", // Required: Identifier for a specific BRC-20 token\n    "amt": "1000"   // Required: Amount to mint\n}\n')),(0,i.kt)("h4",{id:"transfer-brc-20"},"Transfer BRC-20"),(0,i.kt)("p",null,"Transfer BRC-20 tokens to the recipient. Deducts from the senders balance and adds to the receivers balance, only upon the first transfer of the transfer function."),(0,i.kt)("p",null,"Inscribe the transfer function to your wallet with the desired parameters set, then send the inscription to the destination address to transfer the balance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "p": "brc-20",    // Required: Protocol identifier\n    "op": "transfer", // Required: Operation\n    "tick": "tokn",   // Required: Identifier for a specific BRC-20 token\n    "amt": "100"      // Required: Amount to transfer\n}\n')),(0,i.kt)("h3",{id:"implementation-2"},"Implementation"),(0,i.kt)("h4",{id:"brc-20-indexer"},"BRC-20 Indexer"),(0,i.kt)("p",null,"Even though the data is contained inside the BTC chain. It's not verified or indexed by the chain.\nHence, we need a way to verify and observe all of the inbound/outbound transfers of the BRC-20 funds."),(0,i.kt)("p",null,"We need an indexer that will:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Aggregate data about all of the BRC-20 tokens (denoms, total supply, minted amount)"),(0,i.kt)("li",{parentName:"ol"},"Aggregate data about the BRC-20 transactions (individual balances)"),(0,i.kt)("li",{parentName:"ol"},"Filter out all of the invalid transactions (above the mint limit/supply or individual balance)"),(0,i.kt)("li",{parentName:"ol"},"Provide a method to verify a BRC-20 transfer by its Tx idv")),(0,i.kt)("p",null,"Indexer examples:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/unisat-wallet/libbrc20-indexer"},"https://github.com/unisat-wallet/libbrc20-indexer")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Next-DAO/brc20_indexer"},"https://github.com/Next-DAO/brc20_indexer"))),(0,i.kt)("h4",{id:"support-taproot-tx-by-observer"},"Support Taproot tx by Observer"),(0,i.kt)("p",null,"BRC-20 (and Ordinals) protocol requires Taproot and Schnorr signature functionality.\nOur current implementation is based on ",(0,i.kt)("inlineCode",{parentName:"p"},"btcd v0.22")," which doesn't include the Taproot support. ",(0,i.kt)("inlineCode",{parentName:"p"},"btcd v0.24")," adds support for the Taproot but introduces breaking changes into the ",(0,i.kt)("inlineCode",{parentName:"p"},"ecdsa")," module interfaces."),(0,i.kt)("p",null,"In order to add support of BRC-20 we need:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Upgrade ",(0,i.kt)("inlineCode",{parentName:"li"},"btcd")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"v0.24")," in:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Int3face Observer repo"),(0,i.kt)("li",{parentName:"ul"},"Thorchain go-tss"),(0,i.kt)("li",{parentName:"ul"},"Thorchain tss-lib"),(0,i.kt)("li",{parentName:"ul"},"Thorchain txscript repos"))),(0,i.kt)("li",{parentName:"ol"},"Integrate FROST (Schnorr based TSS) into the Observer OR add Schnorr signature support into TSS",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Current TSS implementation only supports ",(0,i.kt)("inlineCode",{parentName:"li"},"ecdsa")," signatures")))),(0,i.kt)("h4",{id:"frost"},"FROST"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/chainx-org/chainx-technical-archive/blob/main/LiuBinXiao/Taproot/06_Schnorr%20threshold%20signatures%20FROST.md"},"FROST")," is a round-optimized Schnorr threshold signing scheme that allows true threshold signatures, so that the signing operation requires only a threshold number of participants."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Lib"),(0,i.kt)("th",{parentName:"tr",align:null},"Language"),(0,i.kt)("th",{parentName:"tr",align:null},"Signature Rounds"),(0,i.kt)("th",{parentName:"tr",align:null},"Audited"),(0,i.kt)("th",{parentName:"tr",align:null},"Link"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ZCash"),(0,i.kt)("td",{parentName:"tr",align:null},"Rust"),(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/ZcashFoundation/frost"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Bytemare"),(0,i.kt)("td",{parentName:"tr",align:null},"Go"),(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/bytemare/frost"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Taurus"),(0,i.kt)("td",{parentName:"tr",align:null},"Go"),(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/taurushq-io/multi-party-sig"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Banca d'Italia"),(0,i.kt)("td",{parentName:"tr",align:null},"C"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/bancaditalia/secp256k1-frost"},"Link"))))),(0,i.kt)("h3",{id:"script"},"Script"),(0,i.kt)("p",null,'Each script should include an "envelope":'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'CHECKSIG\nOP_FALSE\nOP_IF\n    OP_PUSH "ord"\n    OP_PUSH 1\n    OP_PUSH {Content-Type MIME as string} ("text/plain;charset=utf-8" in our case)\n    OP_PUSH 0\n    OP_PUSH {Data as JSON string}\nOP_ENDIF\n')),(0,i.kt)("p",null,"Each data push is limited to 520 bytes, multiple data pushes must be used for large inscriptions."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ordinox/btc-service"},"Ordinox: btc-service repo")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/img/ADR/adr005/btc-service-code-report.md"},"Ordinox: btc-service code report")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{target:"_blank",href:n(3237).Z},"Ordinox: btc-service dependency graph")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/unisat-wallet/libbrc20-indexer/tree/main"},"BRC-20 Indexer Implementation")),(0,i.kt)("li",{parentName:"ol"})))}u.isMDXComponent=!0},3237:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/btc-service-dep-graph-3c087926510f51e85994da6eb73a7d76.png"},2165:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/inbound_transfer-315a374625d0390e8f30394860286280.png"},276:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/outbound_transfer-db5b2ec6ba89988379f7c374395e2008.png"}}]);