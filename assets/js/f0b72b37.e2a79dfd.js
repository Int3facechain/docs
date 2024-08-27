"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[6464],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(t),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||s;return t?r.createElement(h,a(a({ref:n},u),{},{components:t})):r.createElement(h,a({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var i=2;i<s;i++)a[i]=t[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76481:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var r=t(87462),o=(t(67294),t(3905));const s={},a="Overview",l={unversionedId:"neutron/modules/cron/overview",id:"neutron/modules/cron/overview",title:"Overview",description:"Abstract",source:"@site/docs/neutron/modules/cron/overview.md",sourceDirName:"neutron/modules/cron",slug:"/neutron/modules/cron/overview",permalink:"/neutron/modules/cron/overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"State",permalink:"/neutron/modules/feeburner/state"},next:{title:"Client",permalink:"/neutron/modules/cron/client"}},c={},i=[{value:"Abstract",id:"abstract",level:2},{value:"Concepts",id:"concepts",level:2},{value:"High level Mechanism",id:"high-level-mechanism",level:3},{value:"General Mechanics",id:"general-mechanics",level:3},{value:"Example",id:"example",level:2},{value:"Adding schedule",id:"adding-schedule",level:3},{value:"Removing schedule",id:"removing-schedule",level:3}],u={toc:i},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("h2",{id:"abstract"},"Abstract"),(0,o.kt)("p",null,"This document specifies the Cron module for the Neutron network."),(0,o.kt)("p",null,"Cron module implement a mechanism to add cron schedules through governance proposals to execute arbitrary cosmwasm messages with given period."),(0,o.kt)("h2",{id:"concepts"},"Concepts"),(0,o.kt)("h3",{id:"high-level-mechanism"},"High level Mechanism"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"add schedule using governance proposals ","[Permissioned - Main DAO]",";"),(0,o.kt)("li",{parentName:"ul"},"remove schedule using governance proposals ","[Permissioned - Main DAO or Security subDAO]",";"),(0,o.kt)("li",{parentName:"ul"},"every given block period execute cosmwasm msgs for added schedules.")),(0,o.kt)("h3",{id:"general-mechanics"},"General Mechanics"),(0,o.kt)("p",null,"The module allows to receive ",(0,o.kt)("inlineCode",{parentName:"p"},"AddSchedule")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"RemoveSchedule")," custom neutron messages from cosmwasm contracts."),(0,o.kt)("p",null,"It also contains permissions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"AddSchedule can only be executed as main dao governance proposal"),(0,o.kt)("li",{parentName:"ul"},"RemoveSchedule can only be executed as main dao governance proposal OR security subdao proposal")),(0,o.kt)("p",null,"In EndBlocker module searches for all schedules (with limit by ",(0,o.kt)("inlineCode",{parentName:"p"},"Params.Limit"),") that are ready to be executed, using ",(0,o.kt)("inlineCode",{parentName:"p"},"last_execute_height"),"."),(0,o.kt)("p",null,"That way after the schedule was added it will be executed every ",(0,o.kt)("inlineCode",{parentName:"p"},"period")," of blocks (or more than ",(0,o.kt)("inlineCode",{parentName:"p"},"period")," if too many schedules ready to execute)."),(0,o.kt)("p",null,"The formats are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// AddSchedule adds new schedule to the cron module\ntype AddSchedule struct {\n  // Name of the schedule\n    Name   string               `json:"name"`\n  // Period of the schedule in blocks\n    Period uint64               `json:"period"`\n  // Msgs that will be executed every period\n    Msgs   []MsgExecuteContract `json:"msgs"`\n}\n\n// MsgExecuteContract defined separate from wasmtypes since we can get away with just passing the string into bindings\ntype MsgExecuteContract struct {\n    // Contract is the address of the smart contract\n    Contract string `json:"contract,omitempty"`\n    // Msg json encoded message to be passed to the contract\n    Msg string `json:"msg,omitempty"`\n}\n')),(0,o.kt)("p",null,"After collecting all schedules ready for execution, we execute them in order."),(0,o.kt)("p",null,"For each schedule, every stored msg is complemented with more necessary fields to form wasmtypes.MsgExecuteContract:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// wasmtypes.MsgExecuteContract\nmsg := type MsgExecuteContract struct {\n    Sender string // Cron module account\n    Contract string // Passed with AddSchedule.Msgs\n    Msg // Passed with AddSchedule.Msgs\n    Funds sdk.Coins // Empty Coins\n}\n")),(0,o.kt)("p",null,"Then it's executed using wasmd WasmMsgServer implementation."),(0,o.kt)("p",null,"For state to be modified, all messages in a given schedule should return successful result.\nIf any cosmwasm msg fails to execute for any reason, all messages in a given schedule will be rolled back."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("h3",{id:"adding-schedule"},"Adding schedule"),(0,o.kt)("p",null,"To add schedule we need to send governance proposal using dao contracts."),(0,o.kt)("p",null,"Construct a message in a following format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "propose": {\n    "msg": {\n      "propose": {\n        "title": "Proposal title",\n        "description": "Proposal description",\n        "msgs": [\n          {\n            "custom": {\n              "add_schedule": {\n                "name": "simple", // schedule name\n                "period": 5, // period in blocks\n                [\n                  {\n                    "contract": "neutron123412341234", // contract address to be called\n                    "msg": "{\\"send\\": {\\"to\\": "neutron123", \\"amount\\": 100}}", // message to be executed\n                  },\n                ],\n              },\n            }\n          },\n        ],\n      },\n    },\n  },\n}\n')),(0,o.kt)("p",null,"Submit the proposal to the Main DAO using prePropose contract address."),(0,o.kt)("p",null,"If it will be accepted, schedule will be added with the given params."),(0,o.kt)("h3",{id:"removing-schedule"},"Removing schedule"),(0,o.kt)("p",null,"To remove schedule we need to send governance proposal using dao contracts."),(0,o.kt)("p",null,"Construct a message in a following format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "propose": {\n    "msg": {\n      "propose": {\n        "title": "Proposal title",\n        "description": "Proposal description",\n        "msgs": [\n          {\n            "custom": {\n              "remove_schedule": {\n                "name": "simple", // schedule name\n              },\n            }\n          },\n        ],\n      },\n    },\n  },\n}\n')),(0,o.kt)("p",null,"Submit the proposal to the Main DAO using prePropose contract address."),(0,o.kt)("p",null,"If it will be accepted, schedule will be added with the given params."),(0,o.kt)("p",null,"TODO: how to propose RemoveSchedule message using Security DAO?"))}p.isMDXComponent=!0}}]);