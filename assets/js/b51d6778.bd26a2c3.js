"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[5225],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},i=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return t?n.createElement(f,s(s({ref:r},i),{},{components:t})):n.createElement(f,s({ref:r},i))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},62233:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const o={},s="Client",l={unversionedId:"neutron/modules/contract-manager/client",id:"neutron/modules/contract-manager/client",title:"Client",description:"Queries",source:"@site/docs/neutron/modules/contract-manager/client.md",sourceDirName:"neutron/modules/contract-manager",slug:"/neutron/modules/contract-manager/client",permalink:"/neutron/modules/contract-manager/client",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/neutron/modules/contract-manager/overview"},next:{title:"State",permalink:"/neutron/modules/contract-manager/state"}},u={},c=[{value:"Queries",id:"queries",level:2},{value:"failures address",id:"failures-address",level:3},{value:"Failure Details",id:"failure-details",level:3}],i={toc:c},d="wrapper";function p(e){let{components:r,...t}=e;return(0,a.kt)(d,(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"client"},"Client"),(0,a.kt)("h2",{id:"queries"},"Queries"),(0,a.kt)("p",null,"In this section we describe the queries required on grpc server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'// Query defines the gRPC querier service.\nservice Query {\n // Parameters queries the parameters of the module.\n rpc Params(QueryParamsRequest) returns (QueryParamsResponse) {\n  option (google.api.http).get = "/neutron-org/neutron/contractmanager/params";\n }\n\n // Queries a Failures by address.\n rpc Failure(QueryGetFailuresByAddressRequest) returns (QueryGetFailuresByAddressResponse) {\n  option (google.api.http).get = "/neutron-org/neutron/contractmanager/failure/{address}";\n }\n\n // Queries a list of failed addresses.\n rpc AllFailures(QueryAllFailureRequest) returns (QueryAllFailureResponse) {\n  option (google.api.http).get = "/neutron-org/neutron/contractmanager/failure";\n }\n}\n')),(0,a.kt)("h3",{id:"failures-address"},"failures ","[address]"),(0,a.kt)("p",null,"Returns list of all failures."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"neutrond query contractmanager failures\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example"),"Returns info about all failures:",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"neutrond query contractmanager failures\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"failures:\n- address: neutron1nxshmmwrvxa2cp80nwvf03t8u5kvl2ttr8m8f43vamudsqrdvs8qqvfwpj\nerror: 'codespace: wasm, code: 5'\nid: \"1\"\nsudo_payload: <serialized msg of MessageSudoCallback type>\n- address: neutron1nxshmmwrvxa2cp80nwvf03t8u5kvl2ttr8m8f43vamudsqrdvs8qqvfwpj\nerror: 'codespace: wasm, code: 5'\nid: \"2\"\nsudo_payload: <serialized msg of MessageSudoCallback type>\n- address: neutron1nxshmmwrvxa2cp80nwvf03t8u5kvl2ttr8m8f43vamudsqrdvs8qqvfwpj\nerror: 'codespace: contractmanager, code: 1103'\nid: \"3\"\nsudo_payload: <serialized msg of MessageSudoCallback type>\n"))),(0,a.kt)("p",null,"Returns list of all failures for specific contract address."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"neutrond query contractmanager failures [address]\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example"),"Returns failures for specific contract address:",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"neutrond query contractmanager failures neutron1nxshmmwrvxa2cp80nwvf03t8u5kvl2ttr8m8f43vamudsqrdvs8qqvfwpj\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"failures:\n- address: neutron1nxshmmwrvxa2cp80nwvf03t8u5kvl2ttr8m8f43vamudsqrdvs8qqvfwpj\nerror: 'codespace: wasm, code: 5'\nid: \"1\"\nsudo_payload: <serialized msg of MessageSudoCallback type>\n- address: neutron1nxshmmwrvxa2cp80nwvf03t8u5kvl2ttr8m8f43vamudsqrdvs8qqvfwpj\nerror: 'codespace: wasm, code: 5'\nid: \"2\"\nsudo_payload: <serialized msg of MessageSudoCallback type>\n- address: neutron1nxshmmwrvxa2cp80nwvf03t8u5kvl2ttr8m8f43vamudsqrdvs8qqvfwpj\nerror: 'codespace: contractmanager, code: 1103'\nid: \"3\"\nsudo_payload: <serialized msg of MessageSudoCallback type>\n"))),(0,a.kt)("h3",{id:"failure-details"},"Failure Details"),(0,a.kt)("p",null,"Returns an exact error why contract failed to process certain ibc acknowledgement."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),"\nIt is a CLI-like query, and you can not perform it onchain, e.g. you can not make a query from a contract. The reason is - cosmos-sdk do not store raw errors in a storage due to non-deterministic nature of errors. You can not consider the data which are not under you control as deterministic. But to make developers life easier we inorporated the following mechanism. In case of error happened during the ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo")," call we emit an event with full error text under the key ",(0,a.kt)("inlineCode",{parentName:"p"},"(contract_address,failure_id)"),". Events are not the part of the consensus, and it's safe to emit any data you want. The CLI command looks for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron/blob/v2.0.2/x/contractmanager/client/cli/query_failure.go#L85"},"transaction")," by a set of events."),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),"\nIf the node you are making query to either does not index transaction or already cleared the block with the wanted transaction, you get the error - ",(0,a.kt)("inlineCode",{parentName:"p"},"detailed failure error message not found in node events"),". In this case you need to query a node, which:"),(0,a.kt)("p",{parentName:"blockquote"},"1) Indexes transactions."),(0,a.kt)("p",{parentName:"blockquote"},"2) Keeps block with wanted height.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"neutrond q contractmanager failure-details [address] [failure_id]\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example"),"Query the detailed error related to a contract's sudo call failure:",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"neutrond q contractmanager failure-details neutron1nxshmmwrvxa2cp80nwvf03t8u5kvl2ttr8m8f43vamudsqrdvs8qqvfwpj 1\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"dispatch: submessages: Generic error: Integrations test mock submsg error: execute wasm contract failed\n"))))}p.isMDXComponent=!0}}]);