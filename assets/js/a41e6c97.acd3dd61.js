"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[8732],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>m});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},u=Object.keys(e);for(t=0;t<u.length;t++)r=u[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)r=u[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,u=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||u;return r?t.createElement(m,a(a({ref:n},s),{},{components:r})):t.createElement(m,a({ref:n},s))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var u=r.length,a=new Array(u);a[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[f]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<u;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},23818:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>u,metadata:()=>l,toc:()=>c});var t=r(87462),o=(r(67294),r(3905));const u={},a="Client",l={unversionedId:"neutron/modules/feerefunder/client",id:"version-1.0/neutron/modules/feerefunder/client",title:"Client",description:"Queries",source:"@site/versioned_docs/version-1.0/neutron/modules/feerefunder/client.md",sourceDirName:"neutron/modules/feerefunder",slug:"/neutron/modules/feerefunder/client",permalink:"/1.0/neutron/modules/feerefunder/client",draft:!1,tags:[],version:"1.0",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/1.0/neutron/modules/feerefunder/overview"},next:{title:"State",permalink:"/1.0/neutron/modules/feerefunder/state"}},i={},c=[{value:"Queries",id:"queries",level:2},{value:"fee-info port-id sequence",id:"fee-info-port-id-sequence",level:3}],s={toc:c},f="wrapper";function p(e){let{components:n,...r}=e;return(0,o.kt)(f,(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"client"},"Client"),(0,o.kt)("h2",{id:"queries"},"Queries"),(0,o.kt)("p",null,"In this section we describe the queries required on grpc server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'// Query defines the gRPC querier service.\nservice Query {\n  // Parameters queries the parameters of the module.\n  rpc Params(QueryParamsRequest) returns (QueryParamsResponse) {\n    option (google.api.http).get = "/neutron-org/neutron/feerefunder/params";\n  }\n  rpc FeeInfo(FeeInfoRequest) returns (FeeInfoResponse) {\n    option (google.api.http).get = "/neutron-org/neutron/feerefunder/info";\n  }\n}\n')),(0,o.kt)("h3",{id:"fee-info-port-id-sequence"},"fee-info ","[port-id][channel-id]"," ","[sequence]"),(0,o.kt)("p",null,"Returns list of all failures."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"neutrond query feerefunder fee-info [port-id] [channel-id] [sequence]\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example"),"Returns fee info by port id, channel id and sequence:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"neutrond query feerefunder fee-info icacontroller-neutron14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s5c2epq_1 channel_1 1\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'fee_info:\n  - payer: neutron1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqcd0mrx\n    packet_id:\n      - channel_id: channel_1\n        port_id: icacontroller-neutron14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s5c2epq_1\n        sequence: 1\n    fee:\n      - recv_fee:\n          - denom: "untrn"\n            amount: "0"\n        ack_fee:\n          - denom: "untrn"\n            amount: "500"\n        timeout_fee:\n          - denom: "untrn"\n            amount: "500"\n'))))}p.isMDXComponent=!0}}]);