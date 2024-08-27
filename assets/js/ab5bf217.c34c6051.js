"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[5114],{3905:(e,o,t)=>{t.d(o,{Zo:()=>u,kt:()=>h});var r=t(67294);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function n(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,r,a=function(e,o){if(null==e)return{};var t,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var o=r.useContext(i),t=o;return e&&(t="function"==typeof e?e(o):l(l({},o),e)),t},u=function(e){var o=p(e.components);return r.createElement(i.Provider,{value:o},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},m=r.forwardRef((function(e,o){var t=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,h=c["".concat(i,".").concat(m)]||c[m]||d[m]||n;return t?r.createElement(h,l(l({ref:o},u),{},{components:t})):r.createElement(h,l({ref:o},u))}));function h(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var n=t.length,l=new Array(n);l[0]=m;var s={};for(var i in o)hasOwnProperty.call(o,i)&&(s[i]=o[i]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<n;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},65912:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const n={},l="Overrules",s={unversionedId:"neutron/dao/overrules",id:"neutron/dao/overrules",title:"Overrules",description:"Overview",source:"@site/docs/neutron/dao/overrules.md",sourceDirName:"neutron/dao",slug:"/neutron/dao/overrules",permalink:"/neutron/dao/overrules",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/neutron/dao/overview"},next:{title:"Differences from DAO-DAO",permalink:"/neutron/dao/dao-dao-diff"}},i={},p=[{value:"Overview",id:"overview",level:2},{value:"Technical details",id:"technical-details",level:2},{value:"Smart contracts design",id:"smart-contracts-design",level:3},{value:"Caveats",id:"caveats",level:3},{value:"Deployment",id:"deployment",level:3},{value:"UX",id:"ux",level:2}],u={toc:p},c="wrapper";function d(e){let{components:o,...t}=e;return(0,a.kt)(c,(0,r.Z)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overrules"},"Overrules"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Being inspired by the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.lido.fi/guides/easy-track-guide#general-overview"},"Lido's EasyTracks"),", Overrules\nallows to reduce governance load on the main Neutron DAO.\nInstead of creating the special motions that allow making actions on behalf of the main DAO, Overrules allow for a\nsubDAOs to manage things by themselves still being limited by the main DAO."),(0,a.kt)("p",null,"It works in the following way:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Special-purpose subDAO is created (e.g. Security subDAO, Grants subDAO, Liquidity Mining subDAO, etc.)"),(0,a.kt)("li",{parentName:"ul"},"This subDAO gets allocated budget from the main DAO and also gets any permissions needed"),(0,a.kt)("li",{parentName:"ul"},"This subDAO can now manage its budget and permissions without the need to ask the main DAO for every action"),(0,a.kt)("li",{parentName:"ul"},"Still, every subDAO proposal can be overruled by the main DAO within a specified timelock period")),(0,a.kt)("p",null,"To prevent subDAOs from experiencing operational delays, the timelock period should be reasonably brief (e.g. 3 days).\nAt the same time, overruling should be easy enough, so the threshold should be low enough (e.g. 10 times lower than\nregular proposal threshold)."),(0,a.kt)("h2",{id:"technical-details"},"Technical details"),(0,a.kt)("p",null,"This section describes the technical details of the Overrules implementation. It can be interesting for developers who\nwant to understand how it works for using Overrules in their DAO or making the integrations with Neutron DAO."),(0,a.kt)("h3",{id:"smart-contracts-design"},"Smart contracts design"),(0,a.kt)("p",null,"To implement the Overrules, we add several smart contracts to the DAO:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron-dao/tree/main/contracts/dao/pre-propose/cwd-pre-propose-single-overrule"},"Overrule pre-propose module for main DAO")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron-dao/tree/main/contracts/subdaos/pre-propose/cwd-subdao-pre-propose-single"},"subDAO pre-propose module for subDAOs")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron-dao/tree/main/contracts/subdaos/cwd-subdao-timelock-single"},"Timelock contract"))),(0,a.kt)("p",null,"This design allows to implement the Overrules in a way that doesn't require any significant changes in the main DAO\nsmart contracts. (The only change made to the main DAO is the addition of\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron-dao/blob/376cd05df727fbf9c1730a469f94cb6f373e05db/contracts/dao/cwd-core/src/contract.rs#L333"},"the query to check if subDAO is in the DAO's subDAOs list"),",\nalso there is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron-dao/blob/f8dc6cd51eca7c1f109ffe46c27284263bef761b/contracts/subdaos/cwd-subdao-core/src/contract.rs#L109"},(0,a.kt)("inlineCode",{parentName:"a"},"ExecuteTimelockedMsgs"))," message added for SubDao Core)."),(0,a.kt)("p",null,"How it works:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"subDAO member submits a proposal to subDAO pre-propose module, which takes the proposal message and wraps it in a\n",(0,a.kt)("inlineCode",{parentName:"li"},"TimelockProposal")," message."),(0,a.kt)("li",{parentName:"ol"},"subDAO members vote for the proposal and..."),(0,a.kt)("li",{parentName:"ol"},"it gets executed, which means that timelock contract",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"locks the subDAO proposal,"),(0,a.kt)("li",{parentName:"ol"},"creates a new overrule proposal in the overrule pre-propose module of main DAO."))),(0,a.kt)("li",{parentName:"ol"},"Main DAO members vote for the overrule proposal."),(0,a.kt)("li",{parentName:"ol"},"Overrule proposal is executed and subDAO proposal is rejected.")),(0,a.kt)("p",null,"Simplified schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"                                                  subDAO members\n                                                        \u2502\n                                                      2 \u2502Vote\n            1       \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510     1       \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u25bc\u2500\u2500\u2500\u2500\u2500\u2510      3      \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510    3        \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\nsubDAO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502  sudDAO      \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502  proposal  \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524 subDAO core \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502 timelock\u2502\nmember  Propose(    \u2502  pre-propose \u2502 Propose(    \u2502            \u2502 Execute(    \u2502             \u2502 Timelock(   \u2502         \u2502\n        Execute(    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 Timelock(   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 Timelock(   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 Timelock(   \u2514\u2500\u252c\u2500\u2500\u2500\u2500\u25b2\u2500\u2500\u2518\n        ProposeMsg))                 Execute(                   Execute(                    Execute(      \u2502    \u2502\n                                     ProposeMsg)))              ProposeMsg)))               ProposeMsg))) \u2502    \u2502\n                                                       3                                                  \u2502    \u2502\n  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518    \u2502\n  \u2502                              ProposeOverrule(timelock, proposal_id)                                        \u2502\n  \u2502                                                                                                            \u2502\n  \u2502                                                                                                            \u2502\n  \u2502        \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510      3        \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510         5       \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510        5           \u2502\n  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502  overrule    \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502  proposal  \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502 Main DAO core  \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n           \u2502  pre-propose \u2502 Propose(      \u2502            \u2502    Execute(     \u2502                \u2502    Overrule(\n           \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 Overrule(     \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u25b2\u2500\u2500\u2500\u2500\u2500\u2518    Overrule(    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518    proposal_id)\n                            timelock,            \u2502          timelock,\n                            proposal_id))      4 \u2502Vote      proposal_id))\n                                                 \u2502\n                                             DAO members\n")),(0,a.kt)("p",null,"...or"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"(same as above)"),(0,a.kt)("li",{parentName:"ol"},"(same as above)"),(0,a.kt)("li",{parentName:"ol"},"(same as above)"),(0,a.kt)("li",{parentName:"ol"},"DAO members ignore the overrule proposal."),(0,a.kt)("li",{parentName:"ol"},"Timelocked proposal can be executed once voting period of overrule proposal is over.")),(0,a.kt)("p",null,"Simplified schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"                                                  subDAO members                         5         ProposeMsg\n                                                        \u2502                           \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\n                                                      2 \u2502Vote                       \u2502\n            1       \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510     1       \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u25bc\u2500\u2500\u2500\u2500\u2500\u2510      3      \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2510    3        \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\nsubDAO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502  sudDAO      \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502  proposal  \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524 subDAO core \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502timelock \u2502\nmember  Propose(    \u2502  pre-propose \u2502 Propose(    \u2502            \u2502 Execute(    \u2502             \u2502 Timelock(   \u2502         \u2502\n        Execute(    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 Timelock(   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 Timelock(   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b2\u2500\u2500\u2500\u2500\u2500\u2518 Timelock(   \u2514\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u252c\u2500\u2518\n        ProposeMsg))                 Execute(                   Execute(            \u2502       Execute(       \u2502    \u2502\n                                     ProposeMsg)))              ProposeMsg)))       \u2502       ProposeMsg)))  \u2502    \u2502\n                                                                                    \u2502                      \u2502    \u2502\n                                                                                    \u2502  5                   \u2502    \u2502\n                                                                                    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518    \u2502\n                                                                                       Execute(ProposeMsg)      \u2502\n                                                       3                                                        \u2502\n  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n  \u2502                              ProposeOverrule(timelock, proposal_id)\n  \u2502\n  \u2502\n  \u2502        \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510      3        \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510                 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502  overrule    \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502  proposal  \u2502                 \u2502 Main DAO core  \u2502\n           \u2502  pre-propose \u2502 Propose(      \u2502            \u2502                 \u2502                \u2502\n           \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 Overrule(     \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                            timelock,\n                            proposal_id))         4\n\n                                             DAO members\n")),(0,a.kt)("p",null,"If the subDAO proposal is rejected by subDAO members, everything works the same way as without any timelocks/overrules\nsince they're not triggered."),(0,a.kt)("p",null,"Overrule pre-propose module allows only overrule messages to be created, thus, it takes only timelock contract address\nand subDAO proposal id as parameters. Title and description are generated automatically."),(0,a.kt)("p",null,"The proposal module for overrule proposals is just a properly configured regular SingleChoiceProposal module."),(0,a.kt)("p",null,"When an overrule proposal is going to be created, the overrule pre-propose module does some checks:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"does the timelock contract correspond to the subDAO"),(0,a.kt)("li",{parentName:"ol"},"is the subDAO in the DAO's subDAOs list"),(0,a.kt)("li",{parentName:"ol"},"is the proposal timelocked"),(0,a.kt)("li",{parentName:"ol"},"is an overrule proposal for this subDAO proposal already created")),(0,a.kt)("p",null,"Those checks are needed to avoid spam and duplications. It's pretty crucial since the spam proposals and duplications\ncan mislead DAO members and make the proposal that supposed to be overruled passed by washing out voting power to wrong\noverrule proposals.\nLack of check also could allow to create overrule proposals for the unregistered subDAOs/contracts which is not great\neither."),(0,a.kt)("p",null,"For check #4 pre-propose module stores the map from pair <timelock_contract_address, subDAO_proposal_id> to overrule\nproposal id.\nIt also allows one to get the corresponding overrule proposal id for given subDAO proposal via\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron-dao/blob/376cd05df727fbf9c1730a469f94cb6f373e05db/contracts/dao/pre-propose/cwd-pre-propose-single-overrule/src/contract.rs#L277"},"special query"),".\nReverse query (get subDAO proposal id for given overrule proposal id) is also possible, one just needs to query the\noverrule proposal content from proposal module and get the subDAO proposal id from the proposal message."),(0,a.kt)("p",null,"In general, overrule proposal creation is permissionless. Still, since it's created in the very same transaction as the\nproposal is getting timelocked and duplications aren't allowed, there's no moment in time when one can create overrule\nproposal themself."),(0,a.kt)("h3",{id:"caveats"},"Caveats"),(0,a.kt)("p",null,"Current implementation has several caveats:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The model might be a bit confusing in terms of proposal statuses. subDAO proposal now have two phases:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"subDAO-decision phase: the proposal is created, voted and executed by the subDAO. On this phase, the proposal has\nregular statuses (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"Passed"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Rejected"),", etc.). Still, ",(0,a.kt)("inlineCode",{parentName:"li"},"Executed")," doesn't mean that the proposal is executed, it\nmeans that subDAO sent the proposal to the timelock contract."),(0,a.kt)("li",{parentName:"ol"},"Timelock phase: the proposal is locked at the Timelock contract. On this phase, the proposal has statuses\n",(0,a.kt)("inlineCode",{parentName:"li"},"Timelocked"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Overruled"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Executed"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ExecutionFailed"),". Here ",(0,a.kt)("inlineCode",{parentName:"li"},"Executed")," means actual proposal execution."))),(0,a.kt)("li",{parentName:"ol"},"The overrule proposal module should be configured in a very special way:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Obviously, it should have lower threshold and lower voting period than regular single choice proposal module."),(0,a.kt)("li",{parentName:"ol"},"Revoting should be disabled so that once threshold is reached, the overrule message can be executed."),(0,a.kt)("li",{parentName:"ol"},"Quorum should be set to the absolute percentage type so that even if significant voting power is against overruling, it\nwould happen anyway."),(0,a.kt)("li",{parentName:"ol"},"It should have no deposit since rejection of the overrule proposal is the only way to execute the subDAO proposal\nand should be considered normal thing, no one should be punished for creation such proposal."))),(0,a.kt)("li",{parentName:"ol"},"Overrules modules require both from main DAO and a subDAO to be configured in a special way:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Main DAO should have the overrule-compatible pre-propose module."),(0,a.kt)("li",{parentName:"ol"},"subDAO should have the subDAO pre-propose module with timelocking feature.",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"Actually, 1st requirement can be avoided by changing the overrule proposal module in a way so that it won't create\nProposal message based on input parameters but will validate one. It'll make it fully compatible with regular\npre-propose modules and allow to use it already existing pre-propose modules for overrules. However, it's a bit tricky\nbecause of title and description.")))))),(0,a.kt)("h3",{id:"deployment"},"Deployment"),(0,a.kt)("p",null,"Overrule pre-propose module is deployed pretty much the same way as any other pre-propose module and doesn't have any\nadditional init message."),(0,a.kt)("p",null,"subDAO pre-propose module is also deployed the same way as regular pre-propose modules. Still, it instantiates\ntimelock module and should have the message to instantiate it (the only thing required is the overrule pre proposal\nmodule address of main DAO: it's required so that timelock module could create overrule proposals and check their\nstatuses)."),(0,a.kt)("h2",{id:"ux"},"UX"),(0,a.kt)("p",null,"While Overrules are technically just another-proposal-type for main DAO, to avoid confusion, we should have a separate\nUX for them.\nGiven that, the Overrule proposal can be voted on the subDAO proposal page."))}d.isMDXComponent=!0}}]);