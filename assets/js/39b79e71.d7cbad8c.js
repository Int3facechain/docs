"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[8592],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},_=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),_=a,k=p["".concat(c,".").concat(_)]||p[_]||u[_]||r;return t?o.createElement(k,i(i({ref:n},d),{},{components:t})):o.createElement(k,i({ref:n},d))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=_;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}_.displayName="MDXCreateElement"},2263:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=t(87462),a=(t(67294),t(3905));const r={},i="Messages",l={unversionedId:"neutron/token-generation-event/lockdrop/messages",id:"version-3.0/neutron/token-generation-event/lockdrop/messages",title:"Messages",description:"InstantiateMsg",source:"@site/versioned_docs/version-3.0/neutron/token-generation-event/lockdrop/messages.md",sourceDirName:"neutron/token-generation-event/lockdrop",slug:"/neutron/token-generation-event/lockdrop/messages",permalink:"/docs/3.0/neutron/token-generation-event/lockdrop/messages",draft:!1,tags:[],version:"3.0",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/3.0/neutron/token-generation-event/lockdrop/overview"},next:{title:"Queries",permalink:"/docs/3.0/neutron/token-generation-event/lockdrop/queries"}},c={},s=[{value:"InstantiateMsg",id:"instantiatemsg",level:2},{value:"ExecuteMsg",id:"executemsg",level:2},{value:"<code>receive</code>",id:"receive",level:3},{value:"<code>initialize_pool</code>",id:"initialize_pool",level:4},{value:"<code>increase_lockup_for</code>",id:"increase_lockup_for",level:3},{value:"<code>increase_ntrn_incentives</code>",id:"increase_ntrn_incentives",level:3},{value:"<code>update_config</code>",id:"update_config",level:3},{value:"<code>set_token_info</code>",id:"set_token_info",level:3},{value:"<code>withdraw_from_lockup</code>",id:"withdraw_from_lockup",level:3},{value:"<code>claim_rewards_and_optionally_unlock</code>",id:"claim_rewards_and_optionally_unlock",level:3},{value:"<code>propose_new_owner</code>",id:"propose_new_owner",level:3},{value:"<code>drop_ownership_proposal</code>",id:"drop_ownership_proposal",level:3},{value:"<code>claim_ownership</code>",id:"claim_ownership",level:3},{value:"<code>callback</code>",id:"callback",level:3},{value:"<code>update_pool_on_dual_rewards_claim</code>",id:"update_pool_on_dual_rewards_claim",level:4},{value:"<code>withdraw_user_lockup_rewards_callback</code>",id:"withdraw_user_lockup_rewards_callback",level:4}],d={toc:s},p="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"messages"},"Messages"),(0,a.kt)("h2",{id:"instantiatemsg"},"InstantiateMsg"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    // Account which can update config\n    "owner": "neutron...",\n    // Account which can update token addresses and generator\n    "token_info_manager": "neutron...",\n    // Credits contract address\n    "credits_contract": "neutron...",\n    // Auction contract address\n    "auction_contract": "neutron...",\n    // Timestamp when Contract will start accepting LP Token deposits\n    "init_timestamp": 1234567890,\n    // Number of seconds during which lockup deposits will be accepted\n    "lock_window": 10000,\n    // Withdrawal Window Length :: Post the deposit window\n    "withdrawal_window": 1000,\n    // Min. no. of weeks allowed for lockup\n    "min_lock_duration": 1000,\n    // Max. no. of weeks allowed for lockup\n    "max_lock_duration": 1000,\n    // Max lockup positions a user can have\n    "max_positions_per_user": 100,\n    // Describes rewards coefficients for each lockup duration\n    "lockup_rewards_info": [\n      {\n        "duration": 10000,\n        "coefficient": "0.5"\n      },\n      {\n        "duration": 20000,\n        "coefficient": "1"\n      }\n    ]\n}\n')),(0,a.kt)("h2",{id:"executemsg"},"ExecuteMsg"),(0,a.kt)("h3",{id:"receive"},(0,a.kt)("inlineCode",{parentName:"h3"},"receive")),(0,a.kt)("p",null,"CW20 receive msg."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "receive": {\n    "sender": "neutron...",\n    "amount": "123",\n    "msg": "<base64_encoded_json_string>"\n  }\n}\n')),(0,a.kt)("h4",{id:"initialize_pool"},(0,a.kt)("inlineCode",{parentName:"h4"},"initialize_pool")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "initialize_pool": {\n      // pool type: "usdc" or "atom"\n      "pool_type": "usdc",\n      // incentives for this concrete pool\n      "incentives_share": "10000"\n  }\n}\n')),(0,a.kt)("p",null,"Initializes necessary structs and info for a specific LP pool in the Lockdrop contract. Can be called only by the ",(0,a.kt)("a",{parentName:"p",href:"/neutron/token-generation-event/auction/overview"},"Auction contract"),".\nExecute this message by calling the LP token contract address of the corresponding pool."),(0,a.kt)("h3",{id:"increase_lockup_for"},(0,a.kt)("inlineCode",{parentName:"h3"},"increase_lockup_for")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "increase_lockup_for": {\n      "user_address": "neutron...",\n      "pool_type": "usdc",\n      "amount": "10000",\n      "duration": 100\n  }\n}\n')),(0,a.kt)("p",null,"Facilitates opening a new user position or adding to an existing position."),(0,a.kt)("h3",{id:"increase_ntrn_incentives"},(0,a.kt)("inlineCode",{parentName:"h3"},"increase_ntrn_incentives")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "increase_ntrn_incentives": {}\n}\n')),(0,a.kt)("p",null,"Admin function to increase the ",(0,a.kt)("inlineCode",{parentName:"p"},"NTRN")," incentives that are to be distributed."),(0,a.kt)("h3",{id:"update_config"},(0,a.kt)("inlineCode",{parentName:"h3"},"update_config")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "update_config": {\n    // Bootstrap Auction contract address\n    "auction_contract_address": "neutron....",\n    // Generator (Staking for dual rewards) contract address\n    "generator_address": "neutron...",\n  }\n}\n')),(0,a.kt)("p",null,"Can only be called by the admin. Facilitates updating configuration parameters."),(0,a.kt)("h3",{id:"set_token_info"},(0,a.kt)("inlineCode",{parentName:"h3"},"set_token_info")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "set_token_info": {\n    // Address of LP token of ATOM/NTRN pool\n    "atom_token": "neutron...",\n    // Address of LP token of USDC/NTRN pool\n    "usdc_token": "neutron...",\n    // Address of generator contract\n    "generator": "neutron..."\n  }\n}\n')),(0,a.kt)("p",null,"Sets info about ",(0,a.kt)("inlineCode",{parentName:"p"},"ATOM/NTRN"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"USDC/NTRN")," LP tokens and a Generator contract."),(0,a.kt)("h3",{id:"withdraw_from_lockup"},(0,a.kt)("inlineCode",{parentName:"h3"},"withdraw_from_lockup")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "withdraw_from_lockup": {\n    "user_address": "neutron...",\n    "pool_type": "usdc",\n    "duration": 111,\n    "amount": "1000"\n  }\n}\n')),(0,a.kt)("p",null,"Facilitates LP token withdrawals from lockup positions by users. 100% amount can be withdrawn during deposit window, which is then limited to 50% during 1st half of deposit window which then decreases linearly during 2nd half of deposit window. Only 1 withdrawal can be made by a user during the withdrawal windows."),(0,a.kt)("h3",{id:"claim_rewards_and_optionally_unlock"},(0,a.kt)("inlineCode",{parentName:"h3"},"claim_rewards_and_optionally_unlock")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "claim_rewards_and_optionally_unlock": {\n    "pool_type": "usdc",\n    "duration": 100,\n    "withdraw_lp_stake": true\n  }\n}\n')),(0,a.kt)("p",null,"Facilitates rewards claim by users for a particular lockup position along with unlock when possible."),(0,a.kt)("h3",{id:"propose_new_owner"},(0,a.kt)("inlineCode",{parentName:"h3"},"propose_new_owner")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{ "propose_new_owner": {\n        // Newly proposed contract owner\n        "owner": "neutron...",\n        // The date after which this proposal expires\n        "expires_in": 1111\n    }\n}\n')),(0,a.kt)("p",null,"Admin function. Creates an offer to change the contract ownership. The validity period of the offer is set in the expires_in variable. After expires_in seconds pass, the proposal expires and cannot be accepted anymore."),(0,a.kt)("h3",{id:"drop_ownership_proposal"},(0,a.kt)("inlineCode",{parentName:"h3"},"drop_ownership_proposal")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "drop_ownership_proposal": {}\n}\n')),(0,a.kt)("p",null,"Admin function. Removes an existing offer to change the contract owner."),(0,a.kt)("h3",{id:"claim_ownership"},(0,a.kt)("inlineCode",{parentName:"h3"},"claim_ownership")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "claim_ownership": {}\n}\n')),(0,a.kt)("p",null,"Admin function. Used to claim contract ownership."),(0,a.kt)("h3",{id:"callback"},(0,a.kt)("inlineCode",{parentName:"h3"},"callback")),(0,a.kt)("h4",{id:"update_pool_on_dual_rewards_claim"},(0,a.kt)("inlineCode",{parentName:"h4"},"update_pool_on_dual_rewards_claim")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "update_pool_on_dual_rewards_claim": \n  {\n      "pool_type": "usdc",\n      "prev_ntrn_balance": "1000",\n      "prev_proxy_reward_balances": []\n  }\n}\n')),(0,a.kt)("p",null,"Callback function to update contract state after pending dual staking rewards are claimed from the generator contract."),(0,a.kt)("h4",{id:"withdraw_user_lockup_rewards_callback"},(0,a.kt)("inlineCode",{parentName:"h4"},"withdraw_user_lockup_rewards_callback")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "withdraw_user_lockup_rewards_callback": {\n    "pool_type": "usdc",\n    "user_address": "neutron...",\n    "duration": 100,\n    "withdraw_lp_stake": true\n  }\n}\n')),(0,a.kt)("p",null,"Callback function to withdraw user rewards for a particular lockup position along with optional LP tokens withdrawal (upon lockup duration expiration)."))}u.isMDXComponent=!0}}]);