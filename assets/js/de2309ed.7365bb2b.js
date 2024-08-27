"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[5923],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={},i="Differences from DAO-DAO",l={unversionedId:"neutron/dao/dao-dao-diff",id:"neutron/dao/dao-dao-diff",title:"Differences from DAO-DAO",description:"Note: We forked DAO-DAO contracts from commit 9e496379a1c1e89e00133865c9a1041dfdb20612",source:"@site/docs/neutron/dao/dao-dao-diff.md",sourceDirName:"neutron/dao",slug:"/neutron/dao/dao-dao-diff",permalink:"/docs/neutron/dao/dao-dao-diff",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Overrules",permalink:"/docs/neutron/dao/overrules"},next:{title:"DAO configuration parameters [mainnet]",permalink:"/docs/neutron/dao/params"}},c={},s=[{value:"DAO Core Contract",id:"dao-core-contract",level:3},{value:"Pre-Propose Contracts (Single and Multiple)",id:"pre-propose-contracts-single-and-multiple",level:3},{value:"Proposal Single Contract",id:"proposal-single-contract",level:3},{value:"Proposal Multiple Contract",id:"proposal-multiple-contract",level:3},{value:"Voting contracts",id:"voting-contracts",level:3},{value:"SubDao contracts",id:"subdao-contracts",level:3}],p={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"differences-from-dao-dao"},"Differences from DAO-DAO"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," We forked DAO-DAO contracts from commit ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DA0-DA0/dao-contracts/tree/9e496379a1c1e89e00133865c9a1041dfdb20612"},"9e496379a1c1e89e00133865c9a1041dfdb20612"))),(0,r.kt)("h3",{id:"dao-core-contract"},"DAO Core Contract"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Admin functionality is removed (",(0,r.kt)("inlineCode",{parentName:"li"},"ExecuteMsg::ExecuteAdminMsgs"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ExecuteMsg::NominateAdmin"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ExecuteMsg::AcceptAdminNomination"),",\n",(0,r.kt)("inlineCode",{parentName:"li"},"ExecuteMsg::WithdrawAdminNomination")," messages are removed with all the corresponding handlers);"),(0,r.kt)("li",{parentName:"ol"},"Some config fields are removed (",(0,r.kt)("inlineCode",{parentName:"li"},"image_url"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"automatically_add_cw20s"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"automatically_add_cw721s"),");"),(0,r.kt)("li",{parentName:"ol"},"We use ",(0,r.kt)("a",{parentName:"li",href:"/neutron/dao/overview#voting-power-registry"},"Voting Registry Contract")," instead of Voting Module Contract;"),(0,r.kt)("li",{parentName:"ol"},"Vanilla ",(0,r.kt)("inlineCode",{parentName:"li"},"Response")," is replaced with ",(0,r.kt)("inlineCode",{parentName:"li"},"Response<NeutronMsg>"),";"),(0,r.kt)("li",{parentName:"ol"},"CW20 and CW721 handlers are removed (",(0,r.kt)("inlineCode",{parentName:"li"},"ExecuteMsg::Receive"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ExecuteMsg::ReceiveNft"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ExecuteMsg::UpdateCw20List"),",\n",(0,r.kt)("inlineCode",{parentName:"li"},"ExecuteMsg::UpdateCw721List")," messages are removed).")),(0,r.kt)("h3",{id:"pre-propose-contracts-single-and-multiple"},"Pre-Propose Contracts (Single and Multiple)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"CosmosMsg<Empty>")," is replaced with ",(0,r.kt)("inlineCode",{parentName:"li"},"CosmosMsg<NeutronMsg>"),";"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"ExecuteMsg::Extension")," is removed;"),(0,r.kt)("li",{parentName:"ol"},"Couple of changes in dependency versions (upgrades, replaces with Neutron packages instead of DA0-DA0).")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," ",(0,r.kt)("strong",{parentName:"p"},"Pre-Propose Single Overrule Contract")," is a completely new contract!")),(0,r.kt)("h3",{id:"proposal-single-contract"},"Proposal Single Contract"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Couple of changes in dependency versions;"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"CosmosMsg<Empty>")," is replaced with ",(0,r.kt)("inlineCode",{parentName:"li"},"CosmosMsg<NeutronMsg>"),";"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"only_members_execute")," field is removed from ",(0,r.kt)("inlineCode",{parentName:"li"},"Config")," with all the corresponding logic;"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/DA0-DA0/dao-contracts/blob/9e496379a1c1e89e00133865c9a1041dfdb20612/contracts/proposal/cwd-proposal-single/src/contract.rs#L173"},(0,r.kt)("inlineCode",{parentName:"a"},"IsActive"))," query to a voting module is removed;"),(0,r.kt)("li",{parentName:"ol"},"Migration logic from ",(0,r.kt)("inlineCode",{parentName:"li"},"V1")," is removed;")),(0,r.kt)("h3",{id:"proposal-multiple-contract"},"Proposal Multiple Contract"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Couple of changes in dependency versions (upgrades, replaces with Neutron packages instead of DA0-DA0).")),(0,r.kt)("h3",{id:"voting-contracts"},"Voting contracts"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"cwd-voting-cw20-staked"),", ",(0,r.kt)("strong",{parentName:"li"},"cwd-voting-cw4"),", ",(0,r.kt)("strong",{parentName:"li"},"cwd-voting-cw721-staked"),", ",(0,r.kt)("strong",{parentName:"li"},"cwd-voting-native-staked"),",\n",(0,r.kt)("strong",{parentName:"li"},"cwd-voting-staking-denom-staked")," source codes are completely removed from our DAO repo,\nbut we use vanilla ",(0,r.kt)("strong",{parentName:"li"},"CW4 Group")," and ",(0,r.kt)("strong",{parentName:"li"},"CW4 Voting")," precompiled contract binaries in our DAO system."),(0,r.kt)("li",{parentName:"ol"},"We've developed two completely new contracts: ",(0,r.kt)("a",{parentName:"li",href:"/neutron/dao/overview#voting-power-registry"},"Voting Registry Contract"),"\nand ",(0,r.kt)("a",{parentName:"li",href:"/neutron/dao/overview#neutron-bonding-vault"},"Bonding Vault Contract"),".")),(0,r.kt)("h3",{id:"subdao-contracts"},"SubDao contracts"),(0,r.kt)("p",null,"Generally speaking, all ",(0,r.kt)("strong",{parentName:"p"},"SubDao")," contracts are the same as ",(0,r.kt)("strong",{parentName:"p"},"DAO Core")," contracts\n(meaning they have the same functionality and differences with DAO-DAO), except some changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron-dao/blob/448c7c91e85ccd02d13fdaf7cddb66f04abf8ca9/contracts/subdaos/cwd-subdao-core/src/contract.rs#L128"},"Pausing logic")," - ",(0,r.kt)("strong",{parentName:"li"},"SubDAO")," contract can be paused by ",(0,r.kt)("strong",{parentName:"li"},"Core DAO")," contract or by special ",(0,r.kt)("strong",{parentName:"li"},"Security SubDAO")," contract.\nBut ",(0,r.kt)("strong",{parentName:"li"},"SubDAO Core")," can be unpaused only by main ",(0,r.kt)("strong",{parentName:"li"},"Core DAO")," contract;"),(0,r.kt)("li",{parentName:"ul"},"Completely new ",(0,r.kt)("a",{parentName:"li",href:"/neutron/dao/overview#timelocks--overrules"},(0,r.kt)("strong",{parentName:"a"},"Timelock contract"))," is introduced;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pre-Propose Single Contract")," is patched to use ",(0,r.kt)("strong",{parentName:"li"},"Timelock")," module - ",(0,r.kt)("inlineCode",{parentName:"li"},"Propose")," messages\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron-dao/blob/448c7c91e85ccd02d13fdaf7cddb66f04abf8ca9/contracts/subdaos/pre-propose/cwd-subdao-pre-propose-single/src/contract.rs#L105"},"are wrapped now"),"\ninto ",(0,r.kt)("inlineCode",{parentName:"li"},"TimelockExecuteMsg::TimelockProposal")," message.")))}m.isMDXComponent=!0}}]);