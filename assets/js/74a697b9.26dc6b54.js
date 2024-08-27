"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[2201],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3248:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i="Overview",s={unversionedId:"neutron/modules/contract-manager/overview",id:"version-3.0/neutron/modules/contract-manager/overview",title:"Overview",description:"Abstract",source:"@site/versioned_docs/version-3.0/neutron/modules/contract-manager/overview.md",sourceDirName:"neutron/modules/contract-manager",slug:"/neutron/modules/contract-manager/overview",permalink:"/3.0/neutron/modules/contract-manager/overview",draft:!1,tags:[],version:"3.0",frontMatter:{},sidebar:"docs",previous:{title:"Messages",permalink:"/3.0/neutron/modules/transfer/messages"},next:{title:"Client",permalink:"/3.0/neutron/modules/contract-manager/client"}},l={},c=[{value:"Abstract",id:"abstract",level:2},{value:"Concepts",id:"concepts",level:2},{value:"SudoLimitWrapper",id:"sudolimitwrapper",level:2},{value:"Gas limitation",id:"gas-limitation",level:3},{value:"Binding msgs",id:"binding-msgs",level:2},{value:"ResubmitFailure",id:"resubmitfailure",level:3},{value:"Binding queries",id:"binding-queries",level:2},{value:"Failures details",id:"failures-details",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("h2",{id:"abstract"},"Abstract"),(0,a.kt)("p",null,"This document specifies the ContractManager module for the Neutron network."),(0,a.kt)("p",null,"The ContractManager module implements a mechanism and contains methods to make sudo calls to the contracts as well it helps to store sudo handler calls errors during IBC ACK."),(0,a.kt)("h2",{id:"concepts"},"Concepts"),(0,a.kt)("p",null,"Due to the fact that contracts are allowed to make calls to the IBC, as well as process all received data, a problem arises in which a malicious contract can make a call to the IBC and, during the response of the ACK, make an error in the sudo handler, or simply do not implement it. Which will lead to disruption of the channel (in the case of a ORDERED channel), or force the relayer to send ACK requests over and over again, thereby loading the nodes serving the blockchain."),(0,a.kt)("p",null,"In order to avoid this problem, the code in the module from which the sudo handler is called should ignore the error and instead return the success status of the call.\nBut this in turn exposes the problem of informing the owner of the contract that a failure has occurred. To do this, in case of an unsuccessful call, the module from which the sudo handler is called must call the ",(0,a.kt)("inlineCode",{parentName:"p"},"AddContractFailure")," method of the ",(0,a.kt)("inlineCode",{parentName:"p"},"keeper")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ContractManager")," module."),(0,a.kt)("p",null,"To ensure that the state of the contract is consistent, the call to the sudo handler takes place in a temporary state (using ",(0,a.kt)("inlineCode",{parentName:"p"},"CacheContext"),"), which is written to the active state if the call succeeds."),(0,a.kt)("h2",{id:"sudolimitwrapper"},"SudoLimitWrapper"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron/blob/v2.0.3/x/contractmanager/ibc_middleware.go#L14"},"SudoLimitWrapper")," is a middleware wrapper with interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type WasmKeeper interface {\n    HasContractInfo(ctx sdk.Context, contractAddress sdk.AccAddress) bool\n    Sudo(ctx sdk.Context, contractAddress sdk.AccAddress, msg []byte) ([]byte, error)\n}\n")),(0,a.kt)("p",null,"It performs two important functions:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Make sure that the sudo contract call does not use more gas than allowed by a chain ",(0,a.kt)("a",{parentName:"li",href:"#gas-limitation"},"parameter"),". If the gas limit is exceeded and an out of gas panic occurs inside the sudo call, the wrapper intercepts the panic (only the out of gas panic is intercepted) and converts it to an error."),(0,a.kt)("li",{parentName:"ol"},"Capture an error from the sudo handler of the interchaintxs module, either directly initiated by the contract or an error that was received from an out of gas panic and write the error with the data to ",(0,a.kt)("a",{parentName:"li",href:"#failures-details"},"Failures")," for further processing")),(0,a.kt)("h3",{id:"gas-limitation"},"Gas limitation"),(0,a.kt)("p",null,"To make sure there are no exploits with infinite recursion of IBC messages which call other IBC messages in sudo handler we use constant gas ",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT")," to spend. The LIMIT is small, so you can't place extensive work in Sudo handlers. As a workaround, in such cases you can use Sudo handlers to simply store required payload in contract's state, and use Execute messages to handle results separately."),(0,a.kt)("p",null,"If your contract exceeds this constant ",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT"),", it will terminate sudo handler call and save a ",(0,a.kt)("inlineCode",{parentName:"p"},"Failure")," with full call info. You can ",(0,a.kt)("a",{parentName:"p",href:"#resubmitfailure"},"resubmit failure")," from this contract."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT")," is defined by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron/blob/v2.0.2/x/contractmanager/types/params.pb.go#L29"},(0,a.kt)("inlineCode",{parentName:"a"},"SudoCallGasLimit"))," module's parameter."),(0,a.kt)("p",null,"We provide an ability to resubmit bindings through the contract that initiated the IBC transaction."),(0,a.kt)("h2",{id:"binding-msgs"},"Binding msgs"),(0,a.kt)("h3",{id:"resubmitfailure"},"ResubmitFailure"),(0,a.kt)("p",null,"Cosmwasm contracts that sent an IBC transfer or ICA transaction can resubmit their failures."),(0,a.kt)("p",null,"This binding is permissioned - only the contract that sent an IBC transfer or transaction can call it."),(0,a.kt)("p",null,"The format is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type ResubmitFailure struct {\n    FailureId uint64 `json:"failure_id"`\n}\n')),(0,a.kt)("p",null,"Binding in cosmwasm described ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron-sdk/blob/feat/contract-manager-resubmit/packages/neutron-sdk/src/bindings/msg.rs#L184"},"here"),"."),(0,a.kt)("p",null,"It will call sudo handler with exact same arguments as the original handler that failed.\nThe only difference is that this ",(0,a.kt)("inlineCode",{parentName:"p"},"SubmitHandler")," will be called not from relayer, so the gas limitations above do not apply."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that you can only resubmit failure through cosmwasm contract.")),(0,a.kt)("p",null,"See examples on how to resubmit failure for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron-dev-contracts/blob/feat/contract-manager-resubmit/contracts/neutron_interchain_txs/src/contract.rs#L441"},"interchain txs")," and for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron-dev-contracts/blob/feat/contract-manager-resubmit/contracts/ibc_transfer/src/contract.rs#L271"},"ibc transfer")),(0,a.kt)("h2",{id:"binding-queries"},"Binding queries"),(0,a.kt)("p",null,"Failures for contract address can be queried using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron/blob/feat/contract-manager-resubmit/wasmbinding/bindings/query.go#L39"},"bindings"),"."),(0,a.kt)("p",null,"Query request struct should be like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type Failures struct {\n    Address    string             `json:"address"`\n    Pagination *query.PageRequest `json:"pagination,omitempty"`\n}\n')),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type FailuresResponse struct {\n    Failures []contractmanagertypes.Failure `json:"failures"`\n}\n\ntype Failure struct {\n    // Address of the failed contract\n    Address string `protobuf:"bytes,1,opt,name=address,proto3" json:"address,omitempty"`\n    // Id of the failure under specific address\n    Id uint64 `protobuf:"varint,2,opt,name=id,proto3" json:"id,omitempty"`\n    // Serialized MessageSudoCallback with Packet and Ack(if exists)\n    SudoPayload []byte `protobuf:"bytes,3,opt,name=sudo_payload,json=sudoPayload,proto3" json:"sudo_payload,omitempty"`\n    // Redacted error response of the sudo call. Full error is emitted as an event\n    Error string `protobuf:"bytes,4,opt,name=error,proto3" json:"error,omitempty"`\n}\n')),(0,a.kt)("p",null,"You're encouraged to use our neutron-sdk implementation in contracts - ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron-sdk/blob/feat/contract-manager-resubmit/packages/neutron-sdk/src/bindings/query.rs#L61"},"request")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron-sdk/blob/feat/contract-manager-resubmit/packages/neutron-sdk/src/bindings/query.rs#L119"},"response")),(0,a.kt)("h2",{id:"failures-details"},"Failures details"),(0,a.kt)("p",null,"In the case of a contract-initiated error, the error is stored in ",(0,a.kt)("a",{parentName:"p",href:"/3.0/neutron/modules/contract-manager/state"},"Failure"),". Since raw errors are not part of the consensus and cannot guarantee determinism when saved to the state, errors saved in ",(0,a.kt)("inlineCode",{parentName:"p"},"Failure")," are redacted to ",(0,a.kt)("inlineCode",{parentName:"p"},"codespace + code_id")," using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron/blob/v2.0.2/x/contractmanager/keeper/failure.go#L109"},"RedactError")," function. At the same time, we emit the full text of the error into transaction events that do not affect the consensus and if you need to get detailed information about the error returned by the contract, you need to find the transaction in which the redacted error occurred and see the events in which we emit the error. To simplify this procedure we added a special ",(0,a.kt)("a",{parentName:"p",href:"/3.0/neutron/modules/contract-manager/client#failure-details"},"cli query"),", the error can be found by the ",(0,a.kt)("inlineCode",{parentName:"p"},"Failure.Address")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Failure.Id"),"."))}p.isMDXComponent=!0}}]);