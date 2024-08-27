"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[5786],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},i="Integration tests",s={unversionedId:"tutorials/integration-tests",id:"version-1.0/tutorials/integration-tests",title:"Integration tests",description:"There is a set of integration tests which cover main Neutron features. If you develop a smart contract for Neutron you can add some tests into this set to make sure everything works as expected.",source:"@site/versioned_docs/version-1.0/tutorials/integration-tests.md",sourceDirName:"tutorials",slug:"/tutorials/integration-tests",permalink:"/1.0/tutorials/integration-tests",draft:!1,tags:[],version:"1.0",frontMatter:{},sidebar:"docs",previous:{title:"CosmWasm + ICQ",permalink:"/1.0/tutorials/cosmwasm-icq"},next:{title:"CosmWasm + Remix IDE",permalink:"/1.0/tutorials/cosmwasm-remix"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Running the tests",id:"running-the-tests",level:2},{value:"Environment variables you can redefine",id:"environment-variables-you-can-redefine",level:2},{value:"Config",id:"config",level:2},{value:"Creating your own tests",id:"creating-your-own-tests",level:2},{value:"Creating your contract",id:"creating-your-contract",level:3},{value:"Updating artifacts",id:"updating-artifacts",level:3},{value:"Your first test",id:"your-first-test",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integration-tests"},"Integration tests"),(0,a.kt)("p",null,"There is a set of integration tests which cover main Neutron features. If you develop a smart contract for Neutron you can add some tests into this set to make sure everything works as expected."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Installation"},"Installation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Running-the-tests"},"Running the tests")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Environment-variables-you-can-redefine"},"Environment variables")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Creating-your-own-tests"},"Creating your own tests"))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git clone git@github.com:neutron-org/neutron-integration-tests.git")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git clone -b v1.0.4 git@github.com:neutron-org/neutron.git")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git clone -b v0.1.1 git@github.com:neutron-org/neutron-query-relayer.git")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git clone -b v9.0.3 git@github.com:cosmos/gaia.git")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cd neutron-integration-tests")),(0,a.kt)("li",{parentName:"ul"},"*"," ",(0,a.kt)("inlineCode",{parentName:"li"},"make -C setup build-all")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yarn")),(0,a.kt)("li",{parentName:"ul"},"Make sure you have docker installed and docker daemon running")),(0,a.kt)("p",null,"*"," Only for the first run, to build hermes ibc relayer and gaiad containers"),(0,a.kt)("h2",{id:"running-the-tests"},"Running the tests"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn test # all tests\nyarn test:simple # basic tests\nyarn test:interchaintx # interchain txs test\nyarn test:interchain_tx_query_plain # interchain tx query test\nyarn test:interchain_tx_query_resubmit # interchain tx query test #2\nyarn test:interchain_kv_query # interchain kv query test\n")),(0,a.kt)("h2",{id:"environment-variables-you-can-redefine"},"Environment variables you can redefine"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"APP_DIR - applications directory where Neutron, Gaia and Neutron query relayer are located\nNEUTRON_DENOM - neutron network denom\nCOSMOS_DENOM - gaia (cosmoshub) network denom\nIBC_ATOM_DENOM \u2014 denom of a native token which is used as a fake IBC transferred ATOM\nIBC_USDC_DENOM \u2014 denom of a native token which is used as a fake IBC transferred USDC\nCONTRACTS_PATH - path to contracts that will be used in tests\nNEUTRON_ADDRESS_PREFIX - address prefix for neutron controller network\nCOSMOS_ADDRESS_PREFIX - address prefix for gaia (cosmoshub) host network\nNODE1_URL - url to the first node\nNODE1_WS_URL - url to websocket of the first node\nNODE2_URL - url to the second node\nNODE2_WS_URL - url to websocket of the second node\nBLOCKS_COUNT_BEFORE_START - how many blocks we wait before start first test\nNO_DOCKER - do not start cosmopark for tests\nNO_REBUILD - skip containers rebuilding\n")),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"src/config.json\n")),(0,a.kt)("h2",{id:"creating-your-own-tests"},"Creating your own tests"),(0,a.kt)("h3",{id:"creating-your-contract"},"Creating your contract"),(0,a.kt)("p",null,"To create a new contract you can refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron-sdk"},"Neutron Cosmwasm SDK Repo")," to have an idea how to use Neutron SDK."),(0,a.kt)("h3",{id:"updating-artifacts"},"Updating artifacts"),(0,a.kt)("p",null,"You'll need to update artifacts in ",(0,a.kt)("inlineCode",{parentName:"p"},"./contracts")," folder in case you have created a new contract. Place your contract(s) into ",(0,a.kt)("inlineCode",{parentName:"p"},"./contracts/artifacts")," folder. Let's say you have the contract  with name ",(0,a.kt)("inlineCode",{parentName:"p"},"my_contract.wasm")),(0,a.kt)("h3",{id:"your-first-test"},"Your first test"),(0,a.kt)("p",null,"Create a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"new_one.test.ts")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"./src/testcases/parallel")," with following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { TestStateLocalCosmosTestNet } from './common_localcosmosnet';\nimport {\n  NEUTRON_DENOM,\n  CosmosWrapper,\n  WalletWrapper,\n} from '../../helpers/cosmos';\n\ndescribe('Neutron / My test', () => {\n  let testState: TestStateLocalCosmosTestNet;\n  let neutronChain: CosmosWrapper;\n  let neutronAccount: WalletWrapper;\n  let codeId: string;\n  let contractAddress: string;\n\n  beforeAll(async () => {\n    testState = new TestStateLocalCosmosTestNet();\n    await testState.init();\n\n    neutronChain = new CosmosWrapper(\n      testState.sdk1,\n      testState.blockWaiter1,\n      NEUTRON_DENOM,\n    );\n    neutronAccount = new WalletWrapper(\n      neutronChain,\n      testState.wallets.qaNeutron.genQaWal1,\n    );\n  });\n\n  test('store contract', async () => {\n    codeId = await neutronAccount.storeWasm('my_contract.wasm');\n    expect(codeId).toBeGreaterThan(0);\n  });\n  test('instantiate', async () => {\n    const res = await neutronAccount.instantiateContract(\n      codeId,\n      '{}',\n      'my_contract',\n    );\n    contractAddress = res[0]._contract_address;\n    expect(contractAddress).toStartWith('neutron');\n  });\n  test('execute contract', async () => {\n    const res = await neutronAccount.executeContract(\n      contractAddress,\n      JSON.stringify({\n        my_method: {\n          //we assume you have this method in the contract\n          foo: 'bar',\n        },\n      }),\n    );\n    expect(res.code).toEqual(0);\n  });\n});\n\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Warning: Use ",(0,a.kt)("inlineCode",{parentName:"p"},"src/testcases/run_in_band")," folder for your test if it cannot be run in parallel!\nThis is usually the case if test mutates some global chain state that other tests use directly or indirectly.")),(0,a.kt)("p",null,"Then update ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," in the root folder. Like this"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'...\n    "test:new_one": "jest --runInBand -b src/testcases/parallel/new_one",\n...\n')),(0,a.kt)("p",null,"Now you can run your test:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn test:new_one\n")))}d.isMDXComponent=!0}}]);