"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[5555],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=m(n),g=o,c=p["".concat(i,".").concat(g)]||p[g]||u[g]||r;return n?a.createElement(c,s(s({ref:t},d),{},{components:n})):a.createElement(c,s({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var m=2;m<r;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},47074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=n(87462),o=(n(67294),n(3905));const r={},s="Messages",l={unversionedId:"neutron/modules/3rdparty/osmosis/tokenfactory/messages",id:"version-2.0/neutron/modules/3rdparty/osmosis/tokenfactory/messages",title:"Messages",description:"CreateDenom",source:"@site/versioned_docs/version-2.0/neutron/modules/3rdparty/osmosis/tokenfactory/messages.md",sourceDirName:"neutron/modules/3rdparty/osmosis/tokenfactory",slug:"/neutron/modules/3rdparty/osmosis/tokenfactory/messages",permalink:"/2.0/neutron/modules/3rdparty/osmosis/tokenfactory/messages",draft:!1,tags:[],version:"2.0",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/2.0/neutron/modules/3rdparty/osmosis/tokenfactory/overview"},next:{title:"Params",permalink:"/2.0/neutron/modules/3rdparty/osmosis/tokenfactory/params"}},i={},m=[{value:"CreateDenom",id:"createdenom",level:3},{value:"Mint",id:"mint",level:3},{value:"Burn",id:"burn",level:3},{value:"ForceTransfer",id:"forcetransfer",level:3},{value:"ChangeAdmin",id:"changeadmin",level:3},{value:"SetDenomMetadata",id:"setdenommetadata",level:3},{value:"SetBeforeSendHook",id:"setbeforesendhook",level:3},{value:"UpdateParams",id:"updateparams",level:3}],d={toc:m},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"messages"},"Messages"),(0,o.kt)("h3",{id:"createdenom"},"CreateDenom"),(0,o.kt)("p",null,"Creates a denom of ",(0,o.kt)("inlineCode",{parentName:"p"},"factory/{creator address}/{subdenom}")," given the denom creator address and the subdenom. Subdenoms can contain ",(0,o.kt)("inlineCode",{parentName:"p"},"[a-zA-Z0-9./]"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{.go}"},'message MsgCreateDenom {\n  string sender = 1 [ (gogoproto.moretags) = "yaml:\\"sender\\"" ];\n  string subdenom = 2 [ (gogoproto.moretags) = "yaml:\\"subdenom\\"" ];\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"State Modifications:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fund ",(0,o.kt)("a",{parentName:"li",href:"/neutron/dao/overview"},"Neutron DAO Treasury")," with the denom creation fee from the creator address, specified in ",(0,o.kt)("inlineCode",{parentName:"li"},"Params"),"; "),(0,o.kt)("li",{parentName:"ul"},"Consume an amount of gas corresponding to the ",(0,o.kt)("inlineCode",{parentName:"li"},"DenomCreationGasConsume")," parameter specified in ",(0,o.kt)("inlineCode",{parentName:"li"},"Params"),";"),(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"DenomMetaData")," via bank keeper;"),(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"AuthorityMetadata")," for the given denom to store the admin for the created denom ",(0,o.kt)("inlineCode",{parentName:"li"},"factory/{creator address}/{subdenom}"),". Admin is automatically set as the Msg sender;"),(0,o.kt)("li",{parentName:"ul"},"Add denom to the ",(0,o.kt)("inlineCode",{parentName:"li"},"CreatorPrefixStore"),", where a state of denoms created per creator is kept.")),(0,o.kt)("h3",{id:"mint"},"Mint"),(0,o.kt)("p",null,"Minting of a specific denom is only allowed for the creator of the denom registered during ",(0,o.kt)("inlineCode",{parentName:"p"},"CreateDenom")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{.go}"},'message MsgMint {\n  string sender = 1 [ (gogoproto.moretags) = "yaml:\\"sender\\"" ];\n  cosmos.base.v1beta1.Coin amount = 2 [\n    (gogoproto.moretags) = "yaml:\\"amount\\"",\n    (gogoproto.nullable) = false\n  ];\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"State Modifications:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Safety check the following",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Check that the denom minting is created via ",(0,o.kt)("inlineCode",{parentName:"li"},"tokenfactory")," module"),(0,o.kt)("li",{parentName:"ul"},"Check that the sender of the message is the admin of the denom"))),(0,o.kt)("li",{parentName:"ul"},"Mint designated amount of tokens for the denom via ",(0,o.kt)("inlineCode",{parentName:"li"},"bank")," module")),(0,o.kt)("h3",{id:"burn"},"Burn"),(0,o.kt)("p",null,"Burning of a specific denom is only allowed for the creator of the denom registered during ",(0,o.kt)("inlineCode",{parentName:"p"},"CreateDenom")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{.go}"},'message MsgBurn {\n  string sender = 1 [ (gogoproto.moretags) = "yaml:\\"sender\\"" ];\n  cosmos.base.v1beta1.Coin amount = 2 [\n    (gogoproto.moretags) = "yaml:\\"amount\\"",\n    (gogoproto.nullable) = false\n  ];\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"State Modifications:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Safety check the following",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Check that the denom has been created via ",(0,o.kt)("inlineCode",{parentName:"li"},"tokenfactory")," module"),(0,o.kt)("li",{parentName:"ul"},"Check that the sender of the message is the admin of the denom"))),(0,o.kt)("li",{parentName:"ul"},"Burn designated amount of tokens for the denom via ",(0,o.kt)("inlineCode",{parentName:"li"},"bank")," module")),(0,o.kt)("h3",{id:"forcetransfer"},"ForceTransfer"),(0,o.kt)("p",null,"Force transferring of a specific denom is only allowed for the creator of the denom registered during ",(0,o.kt)("inlineCode",{parentName:"p"},"CreateDenom"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{.go}"},'message MsgForceTransfer {\n  option (amino.name) = "osmosis/tokenfactory/force-transfer";\n\n  string sender = 1 [ (gogoproto.moretags) = "yaml:\\"sender\\"" ];\n  cosmos.base.v1beta1.Coin amount = 2 [\n    (gogoproto.moretags) = "yaml:\\"amount\\"",\n    (gogoproto.nullable) = false\n  ];\n  string transferFromAddress = 3\n  [ (gogoproto.moretags) = "yaml:\\"transfer_from_address\\"" ];\n  string transferToAddress = 4\n  [ (gogoproto.moretags) = "yaml:\\"transfer_to_address\\"" ];\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"State Modifications:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Safety check the following",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Check that the denom has been created via ",(0,o.kt)("inlineCode",{parentName:"li"},"tokenfactory")," module"),(0,o.kt)("li",{parentName:"ul"},"Check that the sender of the message is the admin of the denom"))),(0,o.kt)("li",{parentName:"ul"},"Send designated amount of tokens for the denom via ",(0,o.kt)("inlineCode",{parentName:"li"},"bank")," module from ",(0,o.kt)("inlineCode",{parentName:"li"},"transferFromAddress")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"transferToAddress"))),(0,o.kt)("h3",{id:"changeadmin"},"ChangeAdmin"),(0,o.kt)("p",null,"Change the admin of a denom. Note, this is only allowed to be called by the current admin of the denom."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'message MsgChangeAdmin {\n  string sender = 1 [ (gogoproto.moretags) = "yaml:\\"sender\\"" ];\n  string denom = 2 [ (gogoproto.moretags) = "yaml:\\"denom\\"" ];\n  string newAdmin = 3 [ (gogoproto.moretags) = "yaml:\\"new_admin\\"" ];\n}\n')),(0,o.kt)("h3",{id:"setdenommetadata"},"SetDenomMetadata"),(0,o.kt)("p",null,"Setting of metadata for a specific denom is only allowed for the admin of the denom.\nIt allows the overwriting of the denom metadata in the bank module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// MsgSetDenomMetadata is the sdk.Msg type for allowing an admin account to set\n// the denom\'s bank metadata\nmessage MsgSetDenomMetadata {\n  string sender = 1 [(gogoproto.moretags) = "yaml:\\"sender\\""];\n  cosmos.bank.v1beta1.Metadata metadata = 2 [\n  (gogoproto.moretags) = "yaml:\\"metadata\\"",\n  (gogoproto.nullable) = false\n  ];\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"State Modifications:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check that sender of the message is the admin of denom;"),(0,o.kt)("li",{parentName:"ul"},"Modify ",(0,o.kt)("inlineCode",{parentName:"li"},"Metadata")," state entry in ",(0,o.kt)("inlineCode",{parentName:"li"},"bank")," module to change the metadata for the denom;")),(0,o.kt)("h3",{id:"setbeforesendhook"},"SetBeforeSendHook"),(0,o.kt)("p",null,"Allowing to assign a CosmWasm contract to call with a BeforeSend hook for a specific denom is only allowed for the creator of the denom registered during ",(0,o.kt)("inlineCode",{parentName:"p"},"CreateDenom"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{.go}"},'message MsgSetBeforeSendHook {\n  option (amino.name) = "osmosis/tokenfactory/set-beforesend-hook";\n\n  string sender = 1 [ (gogoproto.moretags) = "yaml:\\"sender\\"" ];\n  string denom = 2 [ (gogoproto.moretags) = "yaml:\\"denom\\"" ];\n  string contract_addr = 3\n  [ (gogoproto.moretags) = "yaml:\\"contract_addr\\"" ];\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"State Modifications:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Safety check the following",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Check that the denom has been created via ",(0,o.kt)("inlineCode",{parentName:"li"},"tokenfactory")," module"),(0,o.kt)("li",{parentName:"ul"},"Check that the sender of the message is the admin of the denom"))),(0,o.kt)("li",{parentName:"ul"},"Sets a bank hook for specified ",(0,o.kt)("inlineCode",{parentName:"li"},"denom")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"contract_addr"))),(0,o.kt)("h3",{id:"updateparams"},"UpdateParams"),(0,o.kt)("p",null,"Updates ",(0,o.kt)("a",{parentName:"p",href:"/neutron/modules/3rdparty/osmosis/tokenfactory/params"},"params")," of the module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'message MsgChangeAdmin {\n  string sender = 1 [ (gogoproto.moretags) = "yaml:\\"sender\\"" ];\n  cosmos.bank.v1beta1.Metadata metadata = 2 [ (gogoproto.moretags) = "yaml:\\"metadata\\"", (gogoproto.nullable)   = false ];\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"State Modifications:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check that sender of the message is the ",(0,o.kt)("inlineCode",{parentName:"li"},"Authority")," of the module. Currently it's an address of Neutron's ",(0,o.kt)("a",{parentName:"li",href:"/neutron/modules/admin-module/overview"},"AdminModule")),(0,o.kt)("li",{parentName:"ul"},"Modify ",(0,o.kt)("inlineCode",{parentName:"li"},"Params")," state entry to update params of the module")))}u.isMDXComponent=!0}}]);