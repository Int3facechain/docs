"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[1577],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(o),h=n,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||a;return o?r.createElement(m,s(s({ref:t},u),{},{components:o})):r.createElement(m,s({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<a;p++)s[p]=o[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},85614:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=o(87462),n=(o(67294),o(3905));const a={},s="DAO configuration parameters [mainnet]",i={unversionedId:"neutron/dao/params",id:"version-3.0/neutron/dao/params",title:"DAO configuration parameters [mainnet]",description:"This document describes the configuration parameters for the Neutron DAO on the mainnet (testnet parameters differ for easier testing/administration).",source:"@site/versioned_docs/version-3.0/neutron/dao/params.md",sourceDirName:"neutron/dao",slug:"/neutron/dao/params",permalink:"/docs/3.0/neutron/dao/params",draft:!1,tags:[],version:"3.0",frontMatter:{},sidebar:"docs",previous:{title:"Differences from DAO-DAO",permalink:"/docs/3.0/neutron/dao/dao-dao-diff"},next:{title:"Overview",permalink:"/docs/3.0/neutron/tokenomics/overview"}},l={},p=[{value:"Single and multiple proposals",id:"single-and-multiple-proposals",level:2},{value:"Deposit",id:"deposit",level:3},{value:"Proposal submission restrictions",id:"proposal-submission-restrictions",level:3},{value:"Voting period",id:"voting-period",level:3},{value:"Quorum and threshold",id:"quorum-and-threshold",level:3},{value:"Revoting",id:"revoting",level:3},{value:"Proposal execution parameters",id:"proposal-execution-parameters",level:3},{value:"Overrule proposals",id:"overrule-proposals",level:2},{value:"Deposit",id:"deposit-1",level:3},{value:"Proposal submission restrictions",id:"proposal-submission-restrictions-1",level:3},{value:"Voting period",id:"voting-period-1",level:3},{value:"Quorum and threshold",id:"quorum-and-threshold-1",level:3},{value:"Revoting",id:"revoting-1",level:3},{value:"Proposal execution parameters",id:"proposal-execution-parameters-1",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"dao-configuration-parameters-mainnet"},"DAO configuration parameters ","[mainnet]"),(0,n.kt)("p",null,"This document describes the configuration parameters for the Neutron DAO on the mainnet (testnet parameters differ for easier testing/administration)."),(0,n.kt)("p",null,"This page is of interest to those who are interested in the Neutron DAO internals."),(0,n.kt)("p",null,"Neutron DAO has 3 proposal modules:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Single choice"),(0,n.kt)("li",{parentName:"ul"},"Multiple choice"),(0,n.kt)("li",{parentName:"ul"},"Overrule")),(0,n.kt)("p",null,"The first two are used for regular proposals, while the last one is used for overruling the decisions of the subDAOs.\nFurthermore, the users create single and multiple-choice proposals, while overrule proposals are created automatically by subDAOs.\nThus, single and multiple-choice proposals are primarily consistent regarding parameters, and the overrule proposal module is significantly different."),(0,n.kt)("h2",{id:"single-and-multiple-proposals"},"Single and multiple proposals"),(0,n.kt)("h3",{id:"deposit"},"Deposit"),(0,n.kt)("p",null,"The deposit amount is ",(0,n.kt)("strong",{parentName:"p"},"1000 NTRN"),". The user (or smart contract) must deposit 1000 NTRN to submit a proposal. The deposit is refunded according to the deposit refund policy.\nThe deposit refund policy, ",(0,n.kt)("inlineCode",{parentName:"p"},"only_passed")," means the deposit is refunded if the proposal passes and is executed. If a proposal is rejected explicitly or hasn't got a quorum, the deposit stays on the pre-propose module's balance, and the DAO can withdraw it eventually."),(0,n.kt)("h3",{id:"proposal-submission-restrictions"},"Proposal submission restrictions"),(0,n.kt)("p",null,"Open proposal submission is set to ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),". It means that anyone can submit a proposal.\nThe reasoning behind this is that the voting power in Neutron DAO is based on NTRN tokens; becoming a DAO member requires holding NTRN tokens, with even 1 NTRN being sufficient. So, a proposal submission restricted to DAO members wouldn't make sense."),(0,n.kt)("h3",{id:"voting-period"},"Voting period"),(0,n.kt)("p",null,"The voting period is set to 2 weeks. This timing is typical for many DAOs and, according to the governance practice, is good enough to avoid proposal rejections because of not getting the quorum while still being long enough to review the proposal carefully."),(0,n.kt)("h3",{id:"quorum-and-threshold"},"Quorum and threshold"),(0,n.kt)("p",null,"The quorum is set to 5%. Any proposal can only pass if at least 5% of the voting power voted for it.\nThis value might look low because it reaches 10%-40 % for many Cosmos chains.\nHowever, the big difference between Neutron and most other Cosmos chains is that Neutron DAO is based on smart contracts and DAO DAO.\nCosmos chains based on the ",(0,n.kt)("inlineCode",{parentName:"p"},"gov")," module have native delegation mechanics based on stake delegation to validators.\nA bigger quorum makes sense since 100% of the stake is delegated to validators who actively participate in governance.\nDelegations are absent in Neutron DAO (yet), so it's critical to have a quorum of reasonable size so that DAO will stay operable."),(0,n.kt)("p",null,'Here, single and multiple-choice proposals are different in behavior.\nA single-choice proposal has a quorum of 5%, and at the same time, it has a threshold of 50%.\nIt means that a single-choice proposal passes if at least 50% of the votes are "for" the proposal.\nFor example, if 6% of the total voting power participated in voting, 4% voted "for," and 2% voted "against," the proposal would pass.'),(0,n.kt)("p",null,"The multiple-choice proposal module has only a quorum and no threshold.\nIf the quorum is reached, the option with the most votes wins.\nFor example, if there are 5 options, the turnout is 6%, and votes are distributed 2%/1%/1%/1%/1%, the first option wins."),(0,n.kt)("h3",{id:"revoting"},"Revoting"),(0,n.kt)("p",null,"Revoting is enabled both for single-choice proposals and for multi-choice proposals. There are a couple of reasons for this:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"It allows DAO members to change their minds and vote for a different option during the voting period."),(0,n.kt)("li",{parentName:"ol"},"It doesn't allow the DAO to execute a proposal immediately after the quorum is reached.")),(0,n.kt)("p",null,"For proposals, it means that they can only be executed once the voting period is over, even if a quorum/threshold is reached earlier (since it's implied that someone can change their mind)."),(0,n.kt)("h3",{id:"proposal-execution-parameters"},"Proposal execution parameters"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"only_members_execute")," parameter is set to ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),". It means that anyone can execute a proposal after it passed. The reasoning for this is that the DAO is a decentralized organization, and it's not reasonable to restrict the execution of proposals to DAO members since one can become a DAO member pretty easily by buying ",(0,n.kt)("inlineCode",{parentName:"p"},"1untrn")," and depositing it to the NTRN vault. Moreover, it simplifies possible automation."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"close_proposal_on_execution_failure")," option is set to ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),".\nIt means that if a proposal fails to execute, it becomes closed, and there's no way to make another try to execute it.\nIt's done for security reasons. It's implied that proposals should be carefully tested before getting submitted to the DAO. Execution failure might be evidence of unexpected changes in the environment or a bug in external contracts. If that's the case, DAO probably doesn't want this proposal to stick until the environment changes."),(0,n.kt)("p",null,"For example, there is a malformed external smart contract call in proposal A, and it's discovered during this proposal execution failure. Proposal B was created to adapt it to the proper external smart contract interface and was successfully executed. However, proposal A isn't closed and can be re-executed. The admin of the external smart contract can adapt the interface to proposal A and re-execute it, while the DAO does not plan it. While this case is hypothetical, it's more secure to keep the ",(0,n.kt)("inlineCode",{parentName:"p"},"close_proposal_on_execution_failure")," option as ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,n.kt)("h2",{id:"overrule-proposals"},"Overrule proposals"),(0,n.kt)("h3",{id:"deposit-1"},"Deposit"),(0,n.kt)("p",null,"Deposit is turned off for overrule proposals because they are created automatically by subDAOs.\nAlso, they're meant to be rejected in normal conditions by not reaching the quorum, so a deposit makes no sense."),(0,n.kt)("h3",{id:"proposal-submission-restrictions-1"},"Proposal submission restrictions"),(0,n.kt)("p",null,"Technically, proposal creation is open.\nHowever, overrule proposals are created automatically by subDAOs, so it's not a matter of concern.\nOverrule proposal creation is carefully restricted on the source code level to prevent the creation of duplicates and spam.\nSince overrule proposals are created automatically by subDAOs and duplications are prohibited, there's essentially no chance for a user to create an overrule proposal while technically it's possible."),(0,n.kt)("h3",{id:"voting-period-1"},"Voting period"),(0,n.kt)("p",null,"The voting period is 3 days. Overrule proposals voting period should be a trade-off between two considerations:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"It should be long enough to allow DAO members to express their concerns about the underlying subDAO proposal."),(0,n.kt)("li",{parentName:"ol"},"It should be short enough to make subDAOs operable.")),(0,n.kt)("p",null,"Given that, 3 days is a reasonable trade-off since it's a minimal timeframe that covers weekends and leaves enough time for DAO members to review the proposal."),(0,n.kt)("h3",{id:"quorum-and-threshold-1"},"Quorum and threshold"),(0,n.kt)("p",null,"The threshold is set to 0.5% of the total voting power. Only 0.5% of total voting power is required to overrule any subDAO proposal.\nThis threshold should be low by its nature: in controversial cases, the DAO should be able to prevent the subDAO from doing anything that might be harmful to the DAO.\nOf course, it also creates a potential surface for sabotage. A whale big enough or a coordinated telegram group can effectively block any subDAO proposal.\nHowever, this situation isn't expected in the first place. Secondly, if it happens, it allows DAO to identify the issue of the DAO members' subset being non-aligned (or even malicious) and take the necessary measures to fix it.\nSince DAO has ultimate power over subDAOs, it's possible.\nConsidering the subDAO mechanics as a tool to make DAO more efficient by alleviating governance pressure, a low threshold is a reasonable trade-off. In the worst case, the DAO rolls back to the default situation, where the DAO itself makes all the decisions."),(0,n.kt)("p",null,"Unlike single and multi proposals, overrule proposals have an ",(0,n.kt)("inlineCode",{parentName:"p"},"absolute_percentage")," type of threshold.\nIt means that for a proposal to pass, it's only required to get the threshold of ",(0,n.kt)("inlineCode",{parentName:"p"},"yes")," votes.\nEven if the ",(0,n.kt)("inlineCode",{parentName:"p"},"no")," votes are more than the ",(0,n.kt)("inlineCode",{parentName:"p"},"yes")," votes, the proposal still passes if the ",(0,n.kt)("inlineCode",{parentName:"p"},"yes")," votes are more than the threshold.\nThis is done to make overrule proposals pass (and reject the underlying subDAO proposal) even when the subDAO proposal is slightly controversial."),(0,n.kt)("h3",{id:"revoting-1"},"Revoting"),(0,n.kt)("p",null,"Revoting is set to false. It's done to be able to execute proposals as soon as the quorum is reached.\nIt's critical to overrule proposals as soon as possible since they have a limited execution time.\nThe overrule proposal execution after the end of the voting period makes no sense since a subDAO proposal has already been executed by that time."),(0,n.kt)("h3",{id:"proposal-execution-parameters-1"},"Proposal execution parameters"),(0,n.kt)("p",null,"Proposal execution isn't restricted for the same reasons as single and multiple-choice proposals (there's no sense in restricting it + more automation opportunities).\nThe ",(0,n.kt)("inlineCode",{parentName:"p"},"close_proposal_on_execution_failure")," option is set to ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),".\nBecause overrule proposals are of a very special format and (in general) are created automatically, the chance of overrule proposals to fail is very low.\nMoreover, the failure during overrule proposal execution indicates some problems with DAO internals.\nIn this case, the better strategy is restricting possible permissionless actions, so re-execution is disabled."))}d.isMDXComponent=!0}}]);