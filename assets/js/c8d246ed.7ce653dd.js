"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[9254],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=o,k=c["".concat(u,".").concat(m)]||c[m]||p[m]||a;return t?r.createElement(k,i(i({ref:n},d),{},{components:t})):r.createElement(k,i({ref:n},d))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},27320:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const a={},i="Neutron standalone docker",l={unversionedId:"neutron/build-and-run/neutron-docker",id:"version-3.0/neutron/build-and-run/neutron-docker",title:"Neutron standalone docker",description:"This page contains information about building and running a Neutron node in a standalone way.",source:"@site/versioned_docs/version-3.0/neutron/build-and-run/neutron-docker.md",sourceDirName:"neutron/build-and-run",slug:"/neutron/build-and-run/neutron-docker",permalink:"/docs/3.0/neutron/build-and-run/neutron-docker",draft:!1,tags:[],version:"3.0",frontMatter:{},sidebar:"docs",previous:{title:"Neutron build from sources",permalink:"/docs/3.0/neutron/build-and-run/neutron-build"},next:{title:"Cosmopark",permalink:"/docs/3.0/neutron/build-and-run/cosmopark"}},u={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Build and run",id:"build-and-run",level:2},{value:"1. Make sure you have the required golang version",id:"1-make-sure-you-have-the-required-golang-version",level:3},{value:"2. Clone Neutron core repository and cd into it",id:"2-clone-neutron-core-repository-and-cd-into-it",level:3},{value:"3. Build a Neutron node image",id:"3-build-a-neutron-node-image",level:3},{value:"4. Run a Neutron node as a docker container",id:"4-run-a-neutron-node-as-a-docker-container",level:3},{value:"Usage",id:"usage",level:2},{value:"Ports",id:"ports",level:3},{value:"Interaction with the node using neutrond",id:"interaction-with-the-node-using-neutrond",level:3},{value:"Making transactions",id:"making-transactions",level:3}],d={toc:s},c="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"neutron-standalone-docker"},"Neutron standalone docker"),(0,o.kt)("p",null,"This page contains information about building and running a Neutron node in a standalone way."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docker engine;"),(0,o.kt)("li",{parentName:"ul"},"Golang v1.21 (",(0,o.kt)("a",{parentName:"li",href:"https://go.dev/dl/"},"go releases and instructions"),").")),(0,o.kt)("h2",{id:"build-and-run"},"Build and run"),(0,o.kt)("h3",{id:"1-make-sure-you-have-the-required-golang-version"},"1. Make sure you have the required golang version"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"go version\n")),(0,o.kt)("p",null,"The output should comply with the golang version mentioned in the ",(0,o.kt)("a",{parentName:"p",href:"#prerequisites"},"Prerequisites")," section."),(0,o.kt)("h3",{id:"2-clone-neutron-core-repository-and-cd-into-it"},"2. Clone Neutron core repository and cd into it"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone -b v3.0.2 https://github.com/neutron-org/neutron.git\ncd neutron\n")),(0,o.kt)("h3",{id:"3-build-a-neutron-node-image"},"3. Build a Neutron node image"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"make build-docker-image\n")),(0,o.kt)("h3",{id:"4-run-a-neutron-node-as-a-docker-container"},"4. Run a Neutron node as a docker container"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"make start-docker-container\n")),(0,o.kt)("p",null,"A Neutron node is now running in the background. To see the app logs, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker ps\n")),(0,o.kt)("p",null,"And use the ",(0,o.kt)("inlineCode",{parentName:"p"},"neutron-node")," container ID in the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker logs -f <neutron-node-contained-id>\n")),(0,o.kt)("p",null,"To stop the node, run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"make stop-docker-container\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"ports"},"Ports"),(0,o.kt)("p",null,"The Neutron node exposes several ports to be used by you and your applications:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1317:1317 \u2014 the REST server;"),(0,o.kt)("li",{parentName:"ul"},"26657:26657 \u2014 the Tendermint RPC server;"),(0,o.kt)("li",{parentName:"ul"},"26656:26656 \u2014 the Tendermint P2P server;"),(0,o.kt)("li",{parentName:"ul"},"9090:8090 \u2014 the gRPC server.")),(0,o.kt)("h3",{id:"interaction-with-the-node-using-neutrond"},"Interaction with the node using neutrond"),(0,o.kt)("p",null,"The Neutron node is available to be interacted with using ",(0,o.kt)("inlineCode",{parentName:"p"},"neutrond")," command. The following command will install ",(0,o.kt)("inlineCode",{parentName:"p"},"neutrond")," at your computer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"make install\n")),(0,o.kt)("p",null,"It will build the ",(0,o.kt)("inlineCode",{parentName:"p"},"neutrond")," based on the current version of the Neutron core and place the result binary to your ",(0,o.kt)("inlineCode",{parentName:"p"},"GOBIN")," directory. Make sure ",(0,o.kt)("inlineCode",{parentName:"p"},"GOBIN")," is defined and is a part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," env variable. If you have any troubles at this step, try to shoot them by verifying you have the golang related env variables set properly."),(0,o.kt)("p",null,"Once installation is done, the ",(0,o.kt)("inlineCode",{parentName:"p"},"neutrond")," is ready to be used:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"neutrond query bank total\n")),(0,o.kt)("h3",{id:"making-transactions"},"Making transactions"),(0,o.kt)("p",null,"There are several accounts added at the genesis state that possess NTRN and are at your service. See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron/blob/main/network/init.sh"},"genesis init script")," to find out more details about it. The following command will list you all the preallocated addresses:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker exec <neutron-node-contained-id> neutrond keys list --keyring-backend test --home data/test-1/\n")),(0,o.kt)("p",null,"We suggest you to add the accounts from the init script mentioned above to your local test keyring to make them useful directly from command line. To do so, copy a mnemonic from the script and use it in a keypair recovery procedure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"neutrond keys add <name> --recover --keyring-backend test\n> Enter your bip39 mnemonic\n")),(0,o.kt)("p",null,"After that, you'll be able to make transactions on behalf of the account and fund your applications and smart contracts."))}p.isMDXComponent=!0}}]);