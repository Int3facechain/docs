"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[998],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3710:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="Deployment",l={unversionedId:"int3face/build-and-run/btc_deploy",id:"int3face/build-and-run/btc_deploy",title:"Deployment",description:"Regtest",source:"@site/docs/int3face/build-and-run/btc_deploy.md",sourceDirName:"int3face/build-and-run",slug:"/int3face/build-and-run/btc_deploy",permalink:"/docs/int3face/build-and-run/btc_deploy",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Regtest Demo",permalink:"/docs/int3face/build-and-run/brc20"},next:{title:"Testnet",permalink:"/docs/int3face/build-and-run/doge_deploy"}},c={},p=[{value:"Regtest",id:"regtest",level:2}],d={toc:p},u="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deployment"},"Deployment"),(0,a.kt)("h2",{id:"regtest"},"Regtest"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the binaries, extract to the bin folder")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"wget https://bitcoincore.org/bin/bitcoin-core-25.0/bitcoin-25.0-x86_64-linux-gnu.tar.gz\ntar -xzvf bitcoin-25.0-x86_64-linux-gnu.tar.gz\nmv bitcoin-25.0/bin/* ~/bin/\n\nrm -rf bitcoin-25.0  bitcoin-25.0-x86_64-linux-gnu.tar.gz\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Create home dir for bitcoin")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir ~/.bitcoin\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Initialize configuration file at ",(0,a.kt)("inlineCode",{parentName:"li"},"~/.bitcoin/bitcoin.conf"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"daemon=1\nserver=1\nregtest=1\nlisten=1\nport=18344\nrpcconnect=127.0.0.1\nrpcport=18343\nrpcuser=bitcoinrpc\nrpcpassword=CCwXB6IxXcYMlBd6w812yfmiahxYBnlR0KLlvMIjgOrGq9eqgj9WmdeTCSDVo4w9\n\naddnode=...\naddnode=...\n")),(0,a.kt)("p",null,"Set your own ",(0,a.kt)("inlineCode",{parentName:"p"},"rpcuser")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rpcpassword"),", define addresses of all other nodes in ",(0,a.kt)("inlineCode",{parentName:"p"},"addnode")," fields. Default P2P port for regtest is ",(0,a.kt)("inlineCode",{parentName:"p"},"18445")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Start the node")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"bitcoind\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Verify the node is working")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"bitcoin-cli getblockcount\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Create or load a wallet (btc doesn't create wallet automatically)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'bitcoin-cli createwallet "$your_wallet_name$"\n# OR\nbitcoin-cli loadwallet "$your_wallet_name$" true\n')))}s.isMDXComponent=!0}}]);