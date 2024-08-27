"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[5523],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(t),p=a,g=d["".concat(c,".").concat(p)]||d[p]||m[p]||s;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},35388:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const s={},i="Messages",o={unversionedId:"neutron/token-generation-event/investors-vesting/messages",id:"version-2.0/neutron/token-generation-event/investors-vesting/messages",title:"Messages",description:"InstantiateMsg",source:"@site/versioned_docs/version-2.0/neutron/token-generation-event/investors-vesting/messages.md",sourceDirName:"neutron/token-generation-event/investors-vesting",slug:"/neutron/token-generation-event/investors-vesting/messages",permalink:"/2.0/neutron/token-generation-event/investors-vesting/messages",draft:!1,tags:[],version:"2.0",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/2.0/neutron/token-generation-event/investors-vesting/overview"},next:{title:"Queries",permalink:"/2.0/neutron/token-generation-event/investors-vesting/queries"}},c={},l=[{value:"InstantiateMsg",id:"instantiatemsg",level:2},{value:"ExecuteMsg",id:"executemsg",level:2},{value:"<code>RegisterVestingAccounts</code>",id:"registervestingaccounts",level:3},{value:"<code>claim</code>",id:"claim",level:3},{value:"<code>withdraw_from_active_schedule</code>",id:"withdraw_from_active_schedule",level:3}],u={toc:l},d="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"messages"},"Messages"),(0,a.kt)("h2",{id:"instantiatemsg"},"InstantiateMsg"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "owner": "neutron...",\n  // Token info manager address\n  "token_info_manager": "neutron...",\n}\n')),(0,a.kt)("h2",{id:"executemsg"},"ExecuteMsg"),(0,a.kt)("h3",{id:"registervestingaccounts"},(0,a.kt)("inlineCode",{parentName:"h3"},"RegisterVestingAccounts")),(0,a.kt)("p",null,"Creates vesting schedules for the NTRN token. Also, each schedule will unlock tokens at a different rate according to its time duration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "RegisterVestingAccounts": {\n    "vesting_accounts": [\n      {  \n        "address": "neutron...",\n        "schedules": {\n          "start_point": {\n            "time": "1634125119000000000",\n            "amount": "123"\n          },\n          "end_point": {\n            "time": "1664125119000000000",\n            "amount": "123"\n          }\n        }\n      }\n    ]\n  }\n}\n')),(0,a.kt)("h3",{id:"claim"},(0,a.kt)("inlineCode",{parentName:"h3"},"claim")),(0,a.kt)("p",null,"Transfer vested tokens from all vesting schedules that have the same ",(0,a.kt)("inlineCode",{parentName:"p"},"VestingContractAddress")," (address that's vesting tokens)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "claim": {\n    "recipient": "neutron...",\n    "amount": "123"\n  }\n}\n')),(0,a.kt)("h3",{id:"withdraw_from_active_schedule"},(0,a.kt)("inlineCode",{parentName:"h3"},"withdraw_from_active_schedule")),(0,a.kt)("p",null,"Withdraw tokens from active vesting schedule.",(0,a.kt)("br",{parentName:"p"}),"\n","Withdraw is possible if there is only one active vesting schedule. Active schedule's remaining amount must be greater than withdraw amount.\nThis endpoint terminates current active schedule (updates end_point) and creates a new one with remaining amount minus withdrawn amount."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "withdraw_from_active_schedule": {\n    "account": "neutron...",\n    "recipient": "neutron...",\n    "withdraw_amount": "123"\n  }\n}\n')))}m.isMDXComponent=!0}}]);