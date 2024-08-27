"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[1925],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:e},p),{},{components:n})):r.createElement(f,i({ref:e},p))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[m]="string"==typeof t?t:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80083:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={},i="Integration tests for smart contracts",s={unversionedId:"tutorials/integration-tests/smart_contracts",id:"tutorials/integration-tests/smart_contracts",title:"Integration tests for smart contracts",description:"There is an improved version of integration tests framework which is used for testing new smart contracts. It is based on top of Cosmopark and Contracts2ts.",source:"@site/docs/tutorials/integration-tests/smart_contracts.md",sourceDirName:"tutorials/integration-tests",slug:"/tutorials/integration-tests/smart_contracts",permalink:"/docs/tutorials/integration-tests/smart_contracts",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Integration tests for chain",permalink:"/docs/tutorials/integration-tests/chain"},next:{title:"Overview",permalink:"/docs/tutorials/indexers/intro"}},l={},c=[{value:"Cosmopark",id:"cosmopark",level:2},{value:"Contracts2ts",id:"contracts2ts",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"What&#39;s inside the tests (<code>integration_tests</code> folder)",id:"whats-inside-the-tests-integration_tests-folder",level:2},{value:"Environment variables",id:"environment-variables",level:2}],p={toc:c},m="wrapper";function u(t){let{components:e,...n}=t;return(0,o.kt)(m,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integration-tests-for-smart-contracts"},"Integration tests for smart contracts"),(0,o.kt)("p",null,"There is an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hadronlabs-org/demo-integration-tests"},"improved version of integration tests framework")," which is used for testing new smart contracts. It is based on top of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/cosmopark/"},"Cosmopark")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/contracts2ts"},"Contracts2ts"),". "),(0,o.kt)("h2",{id:"cosmopark"},"Cosmopark"),(0,o.kt)("p",null,"Cosmopark \u2013 is a tool that allows to run multiple networks on the same machine. Under the hood it uses docker containers and require docker images for a network you want to run. It can spin up ",(0,o.kt)("inlineCode",{parentName:"p"},"Hermes Relayer")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Neutron Query Relayer")," for a deployment if required."),(0,o.kt)("h2",{id:"contracts2ts"},"Contracts2ts"),(0,o.kt)("p",null,"Contracts2ts \u2013 is a tool that allows to generate typescript clients for set of contracts. It uses json generated schemas from contracts with ",(0,o.kt)("inlineCode",{parentName:"p"},"write_api")," method."),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clone the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/hadronlabs-org/demo-integration-tests"},"repository")),(0,o.kt)("li",{parentName:"ol"},"Place your own contracts source code in the ",(0,o.kt)("inlineCode",{parentName:"li"},"contracts")," folder. The ",(0,o.kt)("inlineCode",{parentName:"li"},"pump")," contract is just an example which can be removed"),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"make schema")," to generate json schemas for your contracts"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"make build")," - Build your contracts"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"cd integration-tests")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"yarn")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"yarn build-images")," - Build docker images for the networks used"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"yarn build-ts-client")," - Build TS client for your contracts"),(0,o.kt)("li",{parentName:"ol"},"Implement you own tests in the ",(0,o.kt)("inlineCode",{parentName:"li"},"src/testcases")," folder. The ",(0,o.kt)("inlineCode",{parentName:"li"},"pump")," test files are examples which can be removed"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"yarn test"))),(0,o.kt)("h2",{id:"whats-inside-the-tests-integration_tests-folder"},"What's inside the tests (",(0,o.kt)("inlineCode",{parentName:"h2"},"integration_tests")," folder)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"src/testSuite.ts")," contains configuration of the networks used with defined network params and docker image names."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"src/testcases")," folder contains the tests for the contracts. Each test is a separate file with a set of tests for a contract. Please check the existing tests to understand how to write your own. In the ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeAll")," method you can see the configuration of the networks and the deployment of the contracts."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"src/vite.config.ts")," contains of the configuration for the tests."),(0,o.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MAX_THREADS")," - maximum threads to run tests in parallel"))}u.isMDXComponent=!0}}]);