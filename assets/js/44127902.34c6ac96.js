"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[5687],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=o.createContext({}),l=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(d.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},k=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(t),k=r,m=p["".concat(d,".").concat(k)]||p[k]||u[k]||a;return t?o.createElement(m,i(i({ref:n},c),{},{components:t})):o.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=k;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}k.displayName="MDXCreateElement"},59424:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const a={},i="Messages",s={unversionedId:"neutron/token-generation-event/auction/messages",id:"version-1.0/neutron/token-generation-event/auction/messages",title:"Messages",description:"Instantiate",source:"@site/versioned_docs/version-1.0/neutron/token-generation-event/auction/messages.md",sourceDirName:"neutron/token-generation-event/auction",slug:"/neutron/token-generation-event/auction/messages",permalink:"/1.0/neutron/token-generation-event/auction/messages",draft:!1,tags:[],version:"1.0",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/1.0/neutron/token-generation-event/auction/overview"},next:{title:"Queries",permalink:"/1.0/neutron/token-generation-event/auction/queries"}},d={},l=[{value:"<code>Instantiate</code>",id:"instantiate",level:2},{value:"<code>Execute</code>",id:"execute",level:2},{value:"<code>update_config</code>",id:"update_config",level:3},{value:"<code>set_token_info</code>",id:"set_token_info",level:3},{value:"<code>deposit</code>",id:"deposit",level:3},{value:"<code>withdraw</code>",id:"withdraw",level:3},{value:"<code>init_pool</code>",id:"init_pool",level:3},{value:"<code>set_pool_size</code>",id:"set_pool_size",level:3},{value:"<code>lock_lp</code>",id:"lock_lp",level:3},{value:"<code>withdraw_lp</code>",id:"withdraw_lp",level:3},{value:"<code>migrate_to_vesting</code>",id:"migrate_to_vesting",level:2}],c={toc:l},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"messages"},"Messages"),(0,r.kt)("h2",{id:"instantiate"},(0,r.kt)("inlineCode",{parentName:"h2"},"Instantiate")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // Owner of the Auction contract\n  "owner": "neutron...",\n  // Address which is able to update info about LP assets for TGE\n  "token_info_manager": "neutron...",\n  // Address of Band Price Feed contract\n  "price_feed_contract": "neutron...",\n  // Address of the Lockdrop contract\n  "lockdrop_contract_address": "neutron...",\n  // Address of the Reserve contract\n  "reserve_contract_address": "neutron...",\n  // Address of the Vesting Contract for USDC/NTRN LP token\n  "vesting_usdc_contract_address": "neutron...",\n  // Address of the Vesting Contract for ATOM/NTRN LP token\n  "vesting_atom_contract_address": "neutron...",\n  // Lock window in seconds\n  "lp_tokens_lock_window": 100,\n  // Init timestamp of auction stage in seconds (unix time)\n  "init_timestamp": 1234567890,\n  // Deposit window in seconds\n  "deposit_window": 100,\n  // Withdrawal window in seconds\n  "withdrawal_window": 100,\n  // Min exchange freshness rate (seconds)\n  "max_exchange_rate_age": 100,\n  // Min NTRN amount to be distributed as pool liquidity\n  "min_ntrn_amount": "100000",\n  // Amount of users records which will be handled during on call of the migrate_to_vesting handler\n  "vesting_migration_pack_size": 128,\n  // Duration for which unlocked LP tokens will be vested in the corresponging contracts\n  "vesting_lp_duration": 100\n}\n')),(0,r.kt)("h2",{id:"execute"},(0,r.kt)("inlineCode",{parentName:"h2"},"Execute")),(0,r.kt)("h3",{id:"update_config"},(0,r.kt)("inlineCode",{parentName:"h3"},"update_config")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "update_config": {\n    // New owner\n    "owner": "neutron...",\n    // New address of the Band Price Feed contract\n    "price_feed_contract": "neutron...",\n    // New address of the Lockdrop contract\n    "lockdrop_contract_address": "neutron...",\n    // New size of vesting migration pack\n    "vesting_migration_pack_size": 111,\n    "pool_info": {\n      //  NTRN-USDC LP Pool address\n      "ntrn_usdc_pool_address": "neutron...",\n      //  NTRN-ATOM LP Pool address\n      "ntrn_atom_pool_address": "neutron...",\n      //  NTRN-USDC LP Token address\n      "ntrn_usdc_lp_token_address": "neutron...",\n      //  NTRN-ATOM LP Token address\n      "ntrn_atom_lp_token_address": "neutron..."\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Admin function to update any of the configuration parameters."),(0,r.kt)("h3",{id:"set_token_info"},(0,r.kt)("inlineCode",{parentName:"h3"},"set_token_info")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "set_token_info": {\n    // Denomination of axlrUSDC token transfered via IBC\n    "usdc_denom": "neutron...",\n    // Denomination of ATOM token transfered via IBC\n    "atom_denom": "neutron...",\n    "pool_info": {\n      //  NTRN-USDC LP Pool address\n      "ntrn_usdc_pool_address": "neutron...",\n      //  NTRN-ATOM LP Pool address\n      "ntrn_atom_pool_address": "neutron...",\n      //  NTRN-USDC LP Token address\n      "ntrn_usdc_lp_token_address": "neutron...",\n      //  NTRN-ATOM LP Token address\n      "ntrn_atom_lp_token_address": "neutron..."\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Admin function to set info about ",(0,r.kt)("inlineCode",{parentName:"p"},"ATOM")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"axlrUSDC")," token denominations and corresponding liquidity pools."),(0,r.kt)("h3",{id:"deposit"},(0,r.kt)("inlineCode",{parentName:"h3"},"deposit")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "deposit": {}\n}\n')),(0,r.kt)("p",null,"Facilitates deposits of ",(0,r.kt)("inlineCode",{parentName:"p"},"ATOM")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"axlrUSDC")," tokens by users."),(0,r.kt)("h3",{id:"withdraw"},(0,r.kt)("inlineCode",{parentName:"h3"},"withdraw")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "withdraw": {\n    "amount_atom": "1000",\n    "amount_usdc": "1000"\n  }\n}\n')),(0,r.kt)("p",null,"Facilitates ",(0,r.kt)("inlineCode",{parentName:"p"},"ATOM")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"axlrUSDC")," withdrawals by users. 100% amount can be withdrawn during deposit window, which is then limited to 50% during 1st half of deposit window which then decreases linearly during 2nd half of deposit window. Only 1 withdrawal can be made by a user during the withdrawal window."),(0,r.kt)("h3",{id:"init_pool"},(0,r.kt)("inlineCode",{parentName:"h3"},"init_pool")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "init_pool": {}\n}\n')),(0,r.kt)("p",null,"Admin function which facilitates Liquidity addition to the Astroport ",(0,r.kt)("inlineCode",{parentName:"p"},"NTRN-USDC"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"NTRN-ATOM")," Pools."),(0,r.kt)("h3",{id:"set_pool_size"},(0,r.kt)("inlineCode",{parentName:"h3"},"set_pool_size")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "set_pool_size": {}\n}\n')),(0,r.kt)("p",null,"TODO"),(0,r.kt)("h3",{id:"lock_lp"},(0,r.kt)("inlineCode",{parentName:"h3"},"lock_lp")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "lock_lp": {\n    // type of the pool (atom or usdc)\n    "asset": "usdc",\n    // locked amount\n    "amount": "1000",\n    // lock duraiton in seconds\n    "duration": 100\n  }\n}\n')),(0,r.kt)("p",null,"Locks tokens in the ",(0,r.kt)("a",{parentName:"p",href:"/neutron/token-generation-event/lockdrop/overview"},"Lockdrop contract"),"."),(0,r.kt)("h3",{id:"withdraw_lp"},(0,r.kt)("inlineCode",{parentName:"h3"},"withdraw_lp")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "withdraw_lp": {\n    // type of the pool (atom or usdc)\n    "asset": "usdc",\n    // withdraw amount\n    "amount": "1000",\n    // lock duraiton in seconds\n    "duration": 100\n  }\n}\n')),(0,r.kt)("p",null,"Withdraws locked LP tokens from the ",(0,r.kt)("a",{parentName:"p",href:"/neutron/token-generation-event/lockdrop/overview"},"Lockdrop contract"),"."),(0,r.kt)("h2",{id:"migrate_to_vesting"},(0,r.kt)("inlineCode",{parentName:"h2"},"migrate_to_vesting")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "migrate_to_vesting": {}\n}\n')),(0,r.kt)("p",null,"Migrates unlocked LP tokens to the corresponding ",(0,r.kt)("a",{parentName:"p",href:"/neutron/token-generation-event/vesting-lp/overview"},"Vesting LP Contract"),"."))}u.isMDXComponent=!0}}]);