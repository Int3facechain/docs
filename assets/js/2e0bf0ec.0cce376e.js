"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[7173],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=l(a),d=r,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||s;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},60359:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const s={},i="Overview",o={unversionedId:"neutron/modules/dex/overview/overview",id:"neutron/modules/dex/overview/overview",title:"Overview",description:"The Dex (decentralized exchange) module contains the central business logic of Neutron DEX. Users may interact with this module to provide liquidity and execute trades according to commonly-accepted exchange semantics.",source:"@site/docs/neutron/modules/dex/overview/overview.md",sourceDirName:"neutron/modules/dex/overview",slug:"/neutron/modules/dex/overview/",permalink:"/docs/neutron/modules/dex/overview/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Events",permalink:"/docs/neutron/modules/interchain-queries/events"},next:{title:"AMMs and Orderbooks",permalink:"/docs/neutron/modules/dex/overview/concepts/amms-and-orderbooks"}},p={},l=[{value:"Dictionary",id:"dictionary",level:2},{value:"<strong>Flexible</strong>",id:"flexible",level:2},{value:"<strong>Better Prices</strong>",id:"better-prices",level:2},{value:"App-Specific Infrastructure",id:"app-specific-infrastructure",level:2}],m={toc:l},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Dex (decentralized exchange) module contains the central business logic of Neutron DEX. Users may interact with this module to provide liquidity and execute trades according to commonly-accepted exchange semantics."),(0,r.kt)("p",null,"The Neutron DEX, at its core, is a novel AMM design. We are also building a set of features around the AMM in order to enable powerful and sustainable financial markets. At the core of the AMM lays an incredibly simple swap mechanic: liquidity pools that allow traders to buy or sell tokens at a constant price."),(0,r.kt)("p",null,"Constant-price pools enable a new level of simplicity, flexibility, and capital efficiency which benefits liquidity providers and traders alike. Reasoning about external use cases and core features becomes much easier, leading to an enhanced, simplified user experience."),(0,r.kt)("h2",{id:"dictionary"},"Dictionary"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Concentrated Liquidity"),": AMMs which allow LPs to choose targeted ranges to provide liquidity to and typically more capital efficient as a result."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Capital Efficiency"),": The ability of an AMM to give traders better prices on the same amount liquidity."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Liquidity Pools"),": Holds liquidity, price and fee data that tells users how they can interact with it (i.e., how much they'll get in output on some input). Allows liquidity providers to pool their liquidity together instead of fragmenting it."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Liquidity Fragmentation"),": When liquidity of the same pairs is spread across numerous exchanges or AMMs. This increases the costs of trying to get the best price on a trade."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ticks"),": Integers that map to data about the liquidity that can be traded at. The price for tick ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"i")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i")))))," is ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mn",{parentName:"mrow"},"1.000"),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mn",{parentName:"msup"},"1"),(0,r.kt)("mi",{parentName:"msup"},"i"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p(i) = 1.0001^{i}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8247em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1.000"),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8247em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"))))))))))))),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fees"),": The way LPs charge traders in order to make returns. It is similar to a bid-ask spread on orderbooks."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Bid-ask Spread"),": The difference between the highest buy price (bid) and lowest sell price (ask)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Market Order"),": An order to buy/sell some amount of token at the best available price."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Limit Order"),": An order to buy/sell some amount token at a set price determined by the placer of the order."),(0,r.kt)("h2",{id:"flexible"},(0,r.kt)("strong",{parentName:"h2"},"Flexible")),(0,r.kt)("p",null,"Neutron DEX is the one-stop shop for any payoff or trading style."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Traders")," can choose between market orders and limit orders."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Liquidity providers")," can replicate ",(0,r.kt)("em",{parentName:"p"},"any feasible AMM curve")," (liquidity distribution) by strategically choosing prices and the distribution of liquidity across them."),(0,r.kt)("p",null,"While two liquidity providers on Neutron DEX may prefer completely different liquidity distributions, they will still use the same underlying pools. The only difference is the amount deposited in each pool. We call this feature ",(0,r.kt)("em",{parentName:"p"},"shared liquidity")," because it has numerous advantages, such as reducing liquidity fragmentation and increasing the cost of price manipulation for traders and liquidity providers."),(0,r.kt)("h2",{id:"better-prices"},(0,r.kt)("strong",{parentName:"h2"},"Better Prices")),(0,r.kt)("p",null,"Neutron DEX\u2019s mechanism design is extremely ",(0,r.kt)("strong",{parentName:"p"},"capital efficient")," since liquidity providers can arbitrarily concentrate their liquidity on a single price. If there is enough liquidity at the peg price, traders can benefit from true zero-slippage swaps on stablecoins and highly correlated assets (e.g., staked:non-staked pools)."),(0,r.kt)("h2",{id:"app-specific-infrastructure"},"App-Specific Infrastructure"),(0,r.kt)("p",null,"Computer scientist Alan Kay famously said that those who are serious about software build their own hardware. We believe that people who are serious about exchanges own their whole stack."),(0,r.kt)("p",null,"App-chains (and soon app-rollups) open up a rich design space of unexplored possibilities that can solve some of DeFi\u2019s most urgent problems."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"MEV protections can be implemented at the consensus level and/or expressed through more complex application logic, which is not reasonable on generalized smart contracting chains."),(0,r.kt)("li",{parentName:"ol"},"Expensive transactions fees and network congestion become less of an issue with app-specific infrastructure."),(0,r.kt)("li",{parentName:"ol"},"New incentive schemes based on order flow and fee markets can put an end to DeFi\u2019s unsustainable token emissions models.")),(0,r.kt)("p",null,"Neutron DEX strives to be a hub of innovation for pushing the boundaries of what is possible with app-specific infrastructure."))}u.isMDXComponent=!0}}]);