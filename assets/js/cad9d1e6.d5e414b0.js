"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[3321],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12322:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=t(87462),r=(t(67294),t(3905));const l={},o="Localnet",i={unversionedId:"neutron/build-and-run/localnet",id:"version-1.0/neutron/build-and-run/localnet",title:"Localnet",description:"This page describes how to run Neutron, Gaia, IBC and ICQ relayers locally, without Docker environment.",source:"@site/versioned_docs/version-1.0/neutron/build-and-run/localnet.md",sourceDirName:"neutron/build-and-run",slug:"/neutron/build-and-run/localnet",permalink:"/docs/1.0/neutron/build-and-run/localnet",draft:!1,tags:[],version:"1.0",frontMatter:{},sidebar:"docs",previous:{title:"Cosmopark",permalink:"/docs/1.0/neutron/build-and-run/cosmopark"},next:{title:"Contributing",permalink:"/docs/1.0/neutron/contribute"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Install Neutron",id:"1-install-neutron",level:3},{value:"2. Install Gaia",id:"2-install-gaia",level:3},{value:"3. Install Hermes",id:"3-install-hermes",level:3},{value:"4. Install Neutron Query Relayer",id:"4-install-neutron-query-relayer",level:3},{value:"Start Localnet",id:"start-localnet",level:2},{value:"Some wallets and RPC&#39;s you could use",id:"some-wallets-and-rpcs-you-could-use",level:2}],c={toc:u},d="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"localnet"},"Localnet"),(0,r.kt)("p",null,"This page describes how to run Neutron, Gaia, IBC and ICQ relayers locally, without Docker environment.\nBeware: you will have to clone all these repositories in the same parent directory, just like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 neutron\n\u251c\u2500\u2500 gaia\n\u2514\u2500\u2500 neutron-query-relayer\n")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go version 1.20 or newer"),(0,r.kt)("li",{parentName:"ul"},"Rust toolchain v1.69 or newer")),(0,r.kt)("h3",{id:"1-install-neutron"},"1. Install Neutron"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone -b v1.0.4 https://github.com/neutron-org/neutron\ncd neutron\nmake install\n")),(0,r.kt)("h3",{id:"2-install-gaia"},"2. Install Gaia"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"clone gaia: ",(0,r.kt)("inlineCode",{parentName:"li"},"git clone -b v9.0.3 https://github.com/cosmos/gaia.git")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"cd gaia")),(0,r.kt)("li",{parentName:"ol"},"for some reason, gaia v9.0.3 checks if you have go v1.18 installed,\nnot newer, not older, however, it builds fine with go v1.20, so, before\nrunning ",(0,r.kt)("inlineCode",{parentName:"li"},"make install"),", you will have to edit gaia's Makefile on line 110\nlike this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"-$(BUILD_TARGETS): check_version go.sum $(BUILDDIR)/\n+$(BUILD_TARGETS): go.sum $(BUILDDIR)/\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"finally, run ",(0,r.kt)("inlineCode",{parentName:"li"},"make install"))),(0,r.kt)("h3",{id:"3-install-hermes"},"3. Install Hermes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install ibc-relayer-cli --bin hermes --version 1.6.0 --locked\n")),(0,r.kt)("h3",{id:"4-install-neutron-query-relayer"},"4. Install Neutron Query Relayer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/neutron-org/neutron-query-relayer\ncd neutron-query-relayer\nmake install\n")),(0,r.kt)("h2",{id:"start-localnet"},"Start Localnet"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"go to ",(0,r.kt)("inlineCode",{parentName:"li"},"neutron/")," folder and run ",(0,r.kt)("inlineCode",{parentName:"li"},"make init"),", this will start Neutron and Gaia chains"),(0,r.kt)("li",{parentName:"ol"},"after ",(0,r.kt)("inlineCode",{parentName:"li"},"make init")," completes, run ",(0,r.kt)("inlineCode",{parentName:"li"},"make start-rly"),", this will start IBC relayer"),(0,r.kt)("li",{parentName:"ol"},"(if you want to use ",(0,r.kt)("a",{parentName:"li",href:"/1.0/tutorials/cosmwasm-icq"},"ICQ"),") go to ",(0,r.kt)("inlineCode",{parentName:"li"},"neutron-query-relayer/")," folder and run ",(0,r.kt)("inlineCode",{parentName:"li"},"export $(grep -v '^#' .env.example.dev | xargs) && make dev"),", this will start ICQ relayer ")),(0,r.kt)("h2",{id:"some-wallets-and-rpcs-you-could-use"},"Some wallets and RPC's you could use"),(0,r.kt)("p",null,"Gaia chain's RPC is exposed at ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0:16657"),",\nyou can add and use mnemonic with some preallocated funds using"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "banner spread envelope side kite person disagree path silver will brother under couch edit food venture squirrel civil budget number acquire point work mass" | gaiad keys add test --recover\n')),(0,r.kt)("p",null,"You can also check your balance using"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'gaiad query bank balances "$(gaiad keys show test -a)" --node tcp://0.0.0.0:16657\n')),(0,r.kt)("p",null,"Neutron chain's RPC is exposed at ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0:26657"),",\nyou can add and use mnemonic with some preallocated funds using"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "veteran try aware erosion drink dance decade comic dawn museum release episode original list ability owner size tuition surface ceiling depth seminar capable only" | neutrond keys add test --recover\n')),(0,r.kt)("p",null,"You can also check your balance using"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'neutrond query bank balances "$(neutrond keys show test -a)" --node tcp://0.0.0.0:26657\n')))}p.isMDXComponent=!0}}]);