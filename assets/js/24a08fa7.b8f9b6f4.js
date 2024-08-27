"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[3957],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>y});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(t),h=o,y=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return t?r.createElement(y,i(i({ref:n},l),{},{components:t})):r.createElement(y,i({ref:n},l))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=h;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u[p]="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},70835:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={},i="Overview",u={unversionedId:"neutron/build-and-run/overview",id:"version-3.0/neutron/build-and-run/overview",title:"Overview",description:"The main topic we want to cover here is how to build and run a Neutron node in a standalone way. If you need only a Neutron node to be running and plan no interactions with other chains or you have your own setup for running a sidechain and relaying applications, stick with the Neutron node sole running manual. This is the easiest way to get a running Neutron node.",source:"@site/versioned_docs/version-3.0/neutron/build-and-run/overview.md",sourceDirName:"neutron/build-and-run",slug:"/neutron/build-and-run/overview",permalink:"/3.0/neutron/build-and-run/overview",draft:!1,tags:[],version:"3.0",frontMatter:{},sidebar:"docs",previous:{title:"F.A.Q.",permalink:"/3.0/neutron/faq"},next:{title:"Neutron build from sources",permalink:"/3.0/neutron/build-and-run/neutron-build"}},s={},c=[],l={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The main topic we want to cover here is how to build and run a Neutron node in a standalone way. If you need only a Neutron node to be running and plan no interactions with other chains or you have your own setup for running a sidechain and relaying applications, stick with the ",(0,o.kt)("a",{parentName:"p",href:"/neutron/build-and-run/neutron-docker"},"Neutron node sole running manual"),". This is the easiest way to get a running Neutron node."),(0,o.kt)("p",null,"However, we assume that a ready-to-use multi-chain setup with relayers in between can also be handy for developers who want to deploy on Neutron. Therefore we decided to describe a guide on how to run a Neutron node along with a Gaia node connected via a Hermes IBC Relayer and a Neutron ICQ Relayer. The Neutron's integration tests project is the base for this setup. If this is your case, stick with the ",(0,o.kt)("a",{parentName:"p",href:"/neutron/build-and-run/cosmopark"},"Cosmopark running manual"),". This is likely your option if you're up to create a smart contract that will take advantage of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron-sdk"},"Neutron cosmwasm SDK")," and its interchain queries and interchain transactions. This is a more advanced section than the basic sole Neutron node flow."),(0,o.kt)("p",null,"Overall, these sections can be useful if you're up to develop/debug/test your Neutron-related apps and smart contracts. If you need to prepare a production version of Neutron, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/mainnet-assets"},"this repository")," which contains all details you need."),(0,o.kt)("p",null,"In some cases, you might be required to run an archive node with the entire blockchain history. If you want, you can start syncing your node from the very beginning, or you can use our ",(0,o.kt)("a",{parentName:"p",href:"https://snapshot.neutron.org/"},"snapshot service")," to download a complete history snapshot."))}d.isMDXComponent=!0}}]);