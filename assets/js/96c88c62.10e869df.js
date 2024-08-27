"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[4277],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>h});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},l=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),d=p(t),k=r,h=d["".concat(s,".").concat(k)]||d[k]||c[k]||i;return t?n.createElement(h,o(o({ref:a},l),{},{components:t})):n.createElement(h,o({ref:a},l))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=k;var m={};for(var s in a)hasOwnProperty.call(a,s)&&(m[s]=a[s]);m.originalType=e,m[d]="string"==typeof e?e:r,o[1]=m;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},81033:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>p});var n=t(87462),r=(t(67294),t(3905));const i={},o="Tick Liquidity",m={unversionedId:"neutron/modules/dex/overview/concepts/tick-liquidity",id:"neutron/modules/dex/overview/concepts/tick-liquidity",title:"Tick Liquidity",description:"TickLiquidity structs are used to store liquidity within the Dex. Each tick has a specific price and holds liquidity for a single token. TickLiquidity come in two general types --PoolReserves for storing LP positions and LimitOrderTranches for storing limit orders. Both TickLiquidity types are indexed by a key which shares a number of feilds in common. These two types make up the fundemental building blocks of the DEX orderbook, and are critical to the liquidity iteration mechanism. TickLiquiditys contain all of the neccesary information to perform a swap, namely price and available reserves. Each TickLiquidity instance has a TradePairID, TickIndexTakerToMaker. A TradePairID containing the feilds MakerDenom and TakerDenom describes what denom is held in the TickLiquidity (MakerDenom) and what denom it can be traded with (TakerDenom). TickIndexTakerToMaker describes the tick at which a certain liquidity is stored and by extension its PriceTakerToMaker.",source:"@site/docs/neutron/modules/dex/overview/concepts/tick-liquidity.md",sourceDirName:"neutron/modules/dex/overview/concepts",slug:"/neutron/modules/dex/overview/concepts/tick-liquidity",permalink:"/neutron/modules/dex/overview/concepts/tick-liquidity",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Ticks",permalink:"/neutron/modules/dex/overview/concepts/ticks"},next:{title:"Liquidity Iteration",permalink:"/neutron/modules/dex/overview/concepts/liquidity-iteration"}},s={},p=[{value:"PairID",id:"pairid",level:2},{value:"Pool",id:"pool",level:2},{value:"Pool Reserves",id:"pool-reserves",level:2},{value:"Limit Order Tranches",id:"limit-order-tranches",level:2}],l={toc:p},d="wrapper";function c(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tick-liquidity"},"Tick Liquidity"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TickLiquidity")," structs are used to store liquidity within the Dex. Each tick has a specific price and holds liquidity for a single token. ",(0,r.kt)("inlineCode",{parentName:"p"},"TickLiquidity")," come in two general types --",(0,r.kt)("inlineCode",{parentName:"p"},"PoolReserves")," for storing LP positions and ",(0,r.kt)("inlineCode",{parentName:"p"},"LimitOrderTranche"),"s for storing limit orders. Both ",(0,r.kt)("inlineCode",{parentName:"p"},"TickLiquidity")," types are indexed by a key which shares a number of feilds in common. These two types make up the fundemental building blocks of the DEX orderbook, and are critical to the ",(0,r.kt)("a",{parentName:"p",href:"/neutron/modules/dex/overview/concepts/liquidity-iteration"},"liquidity iteration mechanism"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"TickLiquidity"),"s contain all of the neccesary information to perform a swap, namely price and available reserves. Each ",(0,r.kt)("inlineCode",{parentName:"p"},"TickLiquidity")," instance has a ",(0,r.kt)("inlineCode",{parentName:"p"},"TradePairID"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TickIndexTakerToMaker"),". A ",(0,r.kt)("inlineCode",{parentName:"p"},"TradePairID")," containing the feilds ",(0,r.kt)("inlineCode",{parentName:"p"},"MakerDenom")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TakerDenom")," describes what denom is held in the ",(0,r.kt)("inlineCode",{parentName:"p"},"TickLiquidity")," (",(0,r.kt)("inlineCode",{parentName:"p"},"MakerDenom"),") and what denom it can be traded with (",(0,r.kt)("inlineCode",{parentName:"p"},"TakerDenom"),"). ",(0,r.kt)("inlineCode",{parentName:"p"},"TickIndexTakerToMaker")," describes the tick at which a certain liquidity is stored and by extension its ",(0,r.kt)("inlineCode",{parentName:"p"},"PriceTakerToMaker"),"."),(0,r.kt)("h2",{id:"pairid"},"PairID"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PairID"),"s are the canonical way which we refer to the two tokens in a pair. In order to ensure uniqueness the denoms are sorted alphabetically, with the first denom stored as ",(0,r.kt)("inlineCode",{parentName:"p"},"Token0")," and the second as ",(0,r.kt)("inlineCode",{parentName:"p"},"Token"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type PairID struct {\n    Token0 string\n    Token1 string\n}\n")),(0,r.kt)("p",null,"For example, in an ATOM<",">","USDC pair, ATOM would be ",(0,r.kt)("inlineCode",{parentName:"p"},"Token0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"USDC")," would be ",(0,r.kt)("inlineCode",{parentName:"p"},"Token1")),(0,r.kt)("p",null,"We stringify ",(0,r.kt)("inlineCode",{parentName:"p"},"PairID"),'s in the form "',"[Token0]","<",">","[Token1]",' ie. "ATOM<',">",'USDC".'),(0,r.kt)("h2",{id:"pool"},"Pool"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Pool")," contains all the information required for a single constant-priced AMM to exist. It holds liquidity for both sides of a pair, ",(0,r.kt)("inlineCode",{parentName:"p"},"Token0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Token1")," named ",(0,r.kt)("inlineCode",{parentName:"p"},"LowerTick")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"UpperTick")," respectively. Pools are not explicitly stored anywhere, but their ",(0,r.kt)("inlineCode",{parentName:"p"},"PoolReserves")," content is."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Pool struct {\n    Id         uint64\n    LowerTick0 *PoolReserves\n    UpperTick1 *PoolReserves\n}\n")),(0,r.kt)("h2",{id:"pool-reserves"},"Pool Reserves"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PoolReserves")," are the core components for Neutron DEX\u2019s AMM design. Each ",(0,r.kt)("inlineCode",{parentName:"p"},"PoolReserves")," instance represents a single side of a liquidity pool. They contain all the information needed to perform that swap.  They also nest a ",(0,r.kt)("inlineCode",{parentName:"p"},"Fee")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"TradePaidId"),", both of which are used to find the corresponding PoolReserves on the other side of the pool."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type PoolReserves struct {\n    Key                       *PoolReservesKey\n    ReservesMakerDenom        Int\n    PriceTakerToMaker         PrecDec\n    PriceOppositeTakerToMaker PrecDec\n}\ntype PoolReservesKey struct {\n    TradePairId           *TradePairID\n    TickIndexTakerToMaker int64\n    Fee                   uint64\n}\ntype TradePairID struct {\n    MakerDenom string\n    TakerDenom string\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ReservesMakerDenom")," is used to store the total amount of ",(0,r.kt)("inlineCode",{parentName:"p"},"MakerDenom")," within a given ",(0,r.kt)("inlineCode",{parentName:"p"},"PoolReserves")," instance."),(0,r.kt)("p",null,"In the context of LP liquidity, ",(0,r.kt)("inlineCode",{parentName:"p"},"PoolReserves")," exist in reciprocal pairs with one side (",(0,r.kt)("inlineCode",{parentName:"p"},"LowerTick"),") holding Token0 and the other side (",(0,r.kt)("inlineCode",{parentName:"p"},"UpperTick"),") holding token1. Each of these pairs makes up a single constant price liquidity pool. Within each liquidity pool, the following invariants will always hold True:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Both PoolsReserves within a pair will have the same fee: ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"L"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"w"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"T"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,r.kt)("mi",{parentName:"mrow"},"K"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"y"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,r.kt)("mi",{parentName:"mrow"},"F"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mi",{parentName:"mrow"},"U"),(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"T"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,r.kt)("mi",{parentName:"mrow"},"K"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"y"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,r.kt)("mi",{parentName:"mrow"},"F"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"e")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"LowerTick.Key.Fee == UpperTick.Key.Fee")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"L"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"er"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mord"},"."),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"Key"),(0,r.kt)("span",{parentName:"span",className:"mord"},"."),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"ee"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"=="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"U"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"pp"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"er"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mord"},"."),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"Key"),(0,r.kt)("span",{parentName:"span",className:"mord"},"."),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"ee")))))),(0,r.kt)("li",{parentName:"ul"},"When swaps occur the tokens will always be added to one side of the liquidity pool and deducted from the other side.")),(0,r.kt)("p",null,"When LP liquidity is deposited with a given fee and price it is added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"TickLiquidity")," instances such that the given fee is already included in the price. For example, if Alice deposits 100 TokenA  and 100TokenB at price 1 (tick 0) with a fee of 1 then both ",(0,r.kt)("inlineCode",{parentName:"p"},"PoolReserves")," representing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Pool")," will be placed at tick  1 with a ",(0,r.kt)("inlineCode",{parentName:"p"},"PriceTakerToMaker")," of 0.999 each. If Bob were to swap 50Token0 for Token1 using Alice\u2019s liquidity his exchange rate would be ","~"," .999. His 50 Token0 would be deposited into the ",(0,r.kt)("inlineCode",{parentName:"p"},"Pool"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"LowerTick0 PoolReserves"),"at tick 1 and fee 1. and he would receive 49 Token1 which would be deducted from  pool's ",(0,r.kt)("inlineCode",{parentName:"p"},"LowerTick1")," ",(0,r.kt)("inlineCode",{parentName:"p"},"PoolReserves"),"."),(0,r.kt)("p",null,"It is important to note that multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"PoolReserves")," can exist with the same TickIndex but each one will have a unique fee."),(0,r.kt)("h2",{id:"limit-order-tranches"},"Limit Order Tranches"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LimitOrderTranches")," are used to store liquidity in the form of limit orders. Like ",(0,r.kt)("inlineCode",{parentName:"p"},"PoolReserves"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"LimitOrderTranches")," also store a reference to a specific ",(0,r.kt)("inlineCode",{parentName:"p"},"TradePairId")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TickIndexTakerToMaker"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type LimitOrderTranche struct {\n    Key                *LimitOrderTrancheKey\n    ReservesMakerDenom cosmossdk_io_math.Int\n    ReservesTakerDenom cosmossdk_io_math.Int\n    TotalMakerDenom    cosmossdk_io_math.Int\n    TotalTakerDenom    cosmossdk_io_math.Int\n    ExpirationTime    *time.Time\n    PriceTakerToMaker github_com_neutron_org_neutron_v4_utils_math.PrecDec\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type LimitOrderTrancheKey struct {\n    TradePairId           *TradePairID\n    TickIndexTakerToMaker int64\n    TrancheKey            string\n}\n")),(0,r.kt)("p",null,"TrancheKey is a unique identifier for each ",(0,r.kt)("inlineCode",{parentName:"p"},"LimitOrderTranche"),". TrancheKeys also represent a lexicographically sortable order in which tranches with a common ",(0,r.kt)("inlineCode",{parentName:"p"},"TradePairID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TickIndex")," will be traded through. Ie. A tranche with ",(0,r.kt)("inlineCode",{parentName:"p"},"TrancheKey")," \u201cA1\u201d will be traded through before a tranche with ",(0,r.kt)("inlineCode",{parentName:"p"},"TrancheKey")," \u201cA2\u201d. ReservesTokenIn is the available token that has been added to a limit order by the \u201cmaker\u201d (limit order placer) and represents the amount of ",(0,r.kt)("inlineCode",{parentName:"p"},"TokenIn")," that can be traded against. ",(0,r.kt)("inlineCode",{parentName:"p"},"ReservesTokenOut")," represents the filled amount of the limit order and can be withdrawn by the \u201cmakers\u201d. ",(0,r.kt)("inlineCode",{parentName:"p"},"TotalTokenIn")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TotalTokenOut")," are used to store the respective high watermarks for ",(0,r.kt)("inlineCode",{parentName:"p"},"ReservesTokenIn")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ReservesTokenOut")," and are used for the internal accounting of a limit order."),(0,r.kt)("p",null,"Lastly, ExpirationTime is an optional field used for Expiring limit orders ",(0,r.kt)("a",{parentName:"p",href:"/neutron/modules/dex/messages#order-types"},"(",(0,r.kt)("inlineCode",{parentName:"a"},"JUST_IN_TIME")," and ",(0,r.kt)("inlineCode",{parentName:"a"},"GOOD_TIL_TIME"),")"),". At the beginning (",(0,r.kt)("inlineCode",{parentName:"p"},"BeginBlocker"),") of each block any LimitOrders with ",(0,r.kt)("inlineCode",{parentName:"p"},"ExpirationTime")," <= ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.BlockTime()")," is converted to an ",(0,r.kt)("inlineCode",{parentName:"p"},"InactiveLimitOrderTranche")," where it can no longer be traded against."))}c.isMDXComponent=!0}}]);