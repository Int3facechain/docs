"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[614],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),b=a,f=p["".concat(l,".").concat(b)]||p[b]||u[b]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},5225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={},o="BCH Regtest",c={unversionedId:"int3face/build-and-run/bch_deploy",id:"int3face/build-and-run/bch_deploy",title:"BCH Regtest",description:"Regtest",source:"@site/docs/int3face/build-and-run/bch_deploy.md",sourceDirName:"int3face/build-and-run",slug:"/int3face/build-and-run/bch_deploy",permalink:"/docs/int3face/build-and-run/bch_deploy",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Bridge",permalink:"/docs/int3face/overview"},next:{title:"BRC20 Regtest",permalink:"/docs/int3face/build-and-run/brc20"}},l={},s=[{value:"Regtest",id:"regtest",level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bch-regtest"},"BCH Regtest"),(0,a.kt)("h2",{id:"regtest"},"Regtest"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the binaries, extract to the bin folder")),(0,a.kt)("p",null,"Binaries' names intersect with the ",(0,a.kt)("inlineCode",{parentName:"p"},"bitcoin")," names. So we are going to rename them."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"wget https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases/download/v27.1.0/bitcoin-cash-node-27.1.0-x86_64-linux-gnu.tar.gz\ntar -xzvf bitcoin-cash-node-27.1.0-x86_64-linux-gnu.tar.gz\n\nmv bitcoin-cash-node-27.1.0/bin/bitcoind ~/bin/bcashd\nmv bitcoin-cash-node-27.1.0/bin/bitcoin-cli ~/bin/bcash-cli\nmv bitcoin-cash-node-27.1.0/bin/bitcoin-tx ~/bin/bcash-tx\n\nrm -rf bitcoin-cash-node-27.1.0 bitcoin-cash-node-27.1.0-x86_64-linux-gnu.tar.gz\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Create home dir for bitcoin-cash")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir ~/.bitcoin-cash\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Initialize configuration file at ",(0,a.kt)("inlineCode",{parentName:"li"},"~/.bitcoin-cash/bitcoin-cash.conf"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"regtest=1\n\n[regtest]\ndaemon=1\nserver=1\nlisten=1\nport=18544\nrpcbind=127.0.0.1\nrpcport=18323\nrpcuser=bcashrpc\nrpcpassword=CCwXB6IxXcYMlBd6w812yfmiahxYBnlR0KLlvMIjgOrGq9eqgj9WmdeTCSDVo4w9\n\ndatadir=...\n\naddnode=...\naddnode=...\n")),(0,a.kt)("p",null,"Set your own ",(0,a.kt)("inlineCode",{parentName:"p"},"rpcuser"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"rpcpassword")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"datadir"),", define addresses of all other nodes in ",(0,a.kt)("inlineCode",{parentName:"p"},"addnode")," fields."),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Start the node")),(0,a.kt)("p",null,"We need to specify path ot config, because Bitcoin-Cash uses the same defaults as Bitcoin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"bcashd -conf=$BCASH_HOME/bitcoin-cash.conf\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Verify the node is working")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"bcash-cli -conf=$BCASH_HOME/bitcoin-cash.conf getblockcount\n")))}u.isMDXComponent=!0}}]);