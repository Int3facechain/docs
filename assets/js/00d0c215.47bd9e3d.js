"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[9605],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||l;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={},o="Deployment",i={unversionedId:"int3face/build-and-run/ltc_deploy",id:"int3face/build-and-run/ltc_deploy",title:"Deployment",description:"Regtest",source:"@site/docs/int3face/build-and-run/ltc_deploy.md",sourceDirName:"int3face/build-and-run",slug:"/int3face/build-and-run/ltc_deploy",permalink:"/docs/int3face/build-and-run/ltc_deploy",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Testnet",permalink:"/docs/int3face/build-and-run/doge_deploy"},next:{title:"Overview",permalink:"/docs/int3face/tokenomics/overview"}},c={},p=[{value:"Regtest",id:"regtest",level:2}],d={toc:p},u="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deployment"},"Deployment"),(0,a.kt)("h2",{id:"regtest"},"Regtest"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the binaries, extract to the bin folder")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"wget https://download.litecoin.org/litecoin-0.21.3/linux/litecoin-0.21.3-x86_64-linux-gnu.tar.gz\ntar -xzvf litecoin-0.21.3-x86_64-linux-gnu.tar.gz\nmv litecoin-0.21.3/bin/* ~/bin/\n\nrm -rf litecoin-0.21.3 litecoin-0.21.3-x86_64-linux-gnu.tar.gz\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Create home dir for litecoin")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir ~/.litecoin\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Initialize configuration file at ",(0,a.kt)("inlineCode",{parentName:"li"},"~/.litecoin/litecoin.conf"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"regtest=1\n\n[regtest]\ndaemon=1\nserver=1\nlisten=1\n\nport=18111\nrpcport=18112\nrpcconnect=127.0.0.1\nrpcuser=litecoinrpc\nrpcpassword=CCwXB6IxXcYMlBd6w812yfmiahxYBnlR0KLlvMIjgOrGq9eqgj9WmdeTCSDVo4w9\n\naddnode=...\naddnode=...\n")),(0,a.kt)("p",null,"Set your own ",(0,a.kt)("inlineCode",{parentName:"p"},"rpcuser")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rpcpassword"),", define addresses of all other nodes in ",(0,a.kt)("inlineCode",{parentName:"p"},"addnode")," fields."),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Start the node")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"litecoind\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Verify the node is working")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"litecoin-cli getblockcount\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Create or load a wallet (ltc doesn't create wallet automatically)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'litecoin-cli createwallet "$your_wallet_name"\n# OR\nlitecoin-cli loadwallet "$your_wallet_name" true\n')))}s.isMDXComponent=!0}}]);