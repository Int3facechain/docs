"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[4508],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,g=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return t?r.createElement(g,l(l({ref:n},d),{},{components:t})):r.createElement(g,l({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8766:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={},l="Testnet",i={unversionedId:"int3face/build-and-run/doge_deploy",id:"version-1.0/int3face/build-and-run/doge_deploy",title:"Testnet",description:"1. Download the binaries, extract to the bin folder",source:"@site/versioned_docs/version-1.0/int3face/build-and-run/doge_deploy.md",sourceDirName:"int3face/build-and-run",slug:"/int3face/build-and-run/doge_deploy",permalink:"/docs/1.0/int3face/build-and-run/doge_deploy",draft:!1,tags:[],version:"1.0",frontMatter:{},sidebar:"docs",previous:{title:"Deployment",permalink:"/docs/1.0/int3face/build-and-run/btc_deploy"},next:{title:"Deployment",permalink:"/docs/1.0/int3face/build-and-run/ltc_deploy"}},c={},s=[],d={toc:s},p="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testnet"},"Testnet"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the binaries, extract to the bin folder")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"wget https://github.com/dogecoin/dogecoin/releases/download/v1.14.7/dogecoin-1.14.7-x86_64-linux-gnu.tar.gz\ntar -xzvf dogecoin-1.14.7-x86_64-linux-gnu.tar.gz\nmv dogecoin-1.14.7/bin/* ~/bin/\n\n# We can remove these\nrm -rf dogecoin-1.14.7 dogecoin-1.14.7-x86_64-linux-gnu.tar.gz\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create home dir for dogecoin")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir ~/.dogecoin\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Initialize configuration, set your own ",(0,o.kt)("inlineCode",{parentName:"li"},"rpcuser")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"rpcpassword"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"echo 'daemon=1\nserver=1\ntestnet=1\nlisten=1\nrpcconnect=127.0.0.1\nrpcuser=dogecoinrpc\nrpcpassword=CCwXB6IxXcYMlBd6w812yfmiahxYBnlR0KLlvMIjgOrGq9eqgj9WmdeTCSDVo4w9\npaytxfee=0.01' > ~/.dogecoin/dogecoin.conf\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Start the node")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"dogecoind\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Verify the node is started")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"dogecoin-cli getinfo\n")),(0,o.kt)("p",null,"You should see a response like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": 1140700,\n  "protocolversion": 70015,\n  "walletversion": 130000,\n  "balance": 0.00000000,\n  "blocks": 55054,\n  "timeoffset": 0,\n  "connections": 8,\n  "proxy": "",\n  "difficulty": 0.0005981929943754981,\n  "testnet": true,\n  "keypoololdest": 1715596527,\n  "keypoolsize": 100,\n  "paytxfee": 0.01000000,\n  "relayfee": 0.00100000,\n  "errors": ""\n}\n')),(0,o.kt)("h1",{id:"regtest"},"Regtest"),(0,o.kt)("p",null,"Alternative way is to create our own ",(0,o.kt)("inlineCode",{parentName:"p"},"regtest")," network."),(0,o.kt)("p",null,"Everything is the same, but we should set different ",(0,o.kt)("inlineCode",{parentName:"p"},"dogecoin.conf")," configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"daemon=1\nserver=1\nregtest=1\nlisten=1\nrpcconnect=127.0.0.1\nrpcuser=dogecoinrpc\nrpcpassword=CCwXB6IxXcYMlBd6w812yfmiahxYBnlR0KLlvMIjgOrGq9eqgj9WmdeTCSDVo4w9\npaytxfee=0.01\n\naddnode=...\naddnode=...\n")),(0,o.kt)("p",null,"Define addresses of all other nodes in ",(0,o.kt)("inlineCode",{parentName:"p"},"addnode")," field. Default P2P port for regtest is ",(0,o.kt)("inlineCode",{parentName:"p"},"18444"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Mine first blocks")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'dogecoin-cli generate 110\n[\n  "ad3c340e804e0b08af4b3302613b8f8f02ad7b4ea1cb2267e296868ee9705027",\n  ...\n]\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Verify blocks are mined")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"dogecoin-cli getblockcount\n110\n")),(0,o.kt)("p",null,"You can do the same on the other nodes, to verify P2P connection."),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Check the balance on our node")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"dogecoin-cli getbalance\n35000000.00000000\n")))}u.isMDXComponent=!0}}]);