"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[1447],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),f=o,g=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return t?r.createElement(g,i(i({ref:n},l),{},{components:t})):r.createElement(g,i({ref:n},l))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},13189:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const a={},i="Queries",s={unversionedId:"neutron/token-generation-event/credits/queries",id:"version-2.0/neutron/token-generation-event/credits/queries",title:"Queries",description:"",source:"@site/versioned_docs/version-2.0/neutron/token-generation-event/credits/queries.md",sourceDirName:"neutron/token-generation-event/credits",slug:"/neutron/token-generation-event/credits/queries",permalink:"/2.0/neutron/token-generation-event/credits/queries",draft:!1,tags:[],version:"2.0",frontMatter:{},sidebar:"docs",previous:{title:"Messages",permalink:"/2.0/neutron/token-generation-event/credits/messages"},next:{title:"Overview",permalink:"/2.0/neutron/token-generation-event/lockdrop/overview"}},c={},u=[],l={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"queries"},"Queries"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum QueryMsg {\n    /// Returns the current vestings of the given address.\n    WithdrawableAmount { address: String },\n    /// Returns the amount that is left vested of the given address.\n    VestedAmount { address: String },\n    /// Returns the current allocation of the given address.\n    Allocation { address: String },\n    /// Returns the current balance of the given address, 0 if unset.\n    Balance { address: String },\n    /// Returns the total supply at provided height, or current total supply if `height` is unset.\n    TotalSupplyAtHeight { height: Option<u64> },\n    /// Returns the balance of the given address at a given block height or current balance if `height` is unset.\n    /// Returns 0 if no balance found.\n    BalanceAtHeight {\n        address: String,\n        height: Option<u64>,\n    },\n    /// Returns metadata on the contract - name, decimals, supply, etc.\n    TokenInfo {},\n    /// Returns who can mint and the hard cap on maximum tokens after minting.\n    Minter {},\n    /// Returns how much spender can use from owner account, 0 if unset.\n    Allowance { owner: String, spender: String },\n    /// Returns all allowances this owner has approved. Supports pagination.\n    AllAllowances {\n        owner: String,\n        start_after: Option<String>,\n        limit: Option<u32>,\n    },\n    /// Returns all accounts that have balances. Supports pagination.\n    AllAccounts {\n        start_after: Option<String>,\n        limit: Option<u32>,\n    },\n    /// Returns current config of Credits contract\n    Config {},\n}\n")))}d.isMDXComponent=!0}}]);