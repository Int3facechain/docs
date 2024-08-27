"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[6684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),k=r,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||a;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},20519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const a={},o="Overview",l={unversionedId:"neutron/modules/3rdparty/skip/slinky/overview",id:"neutron/modules/3rdparty/skip/slinky/overview",title:"Overview",description:"Slinky is a revolutionary enshrined oracle built for the highest performance DeFi. It leverages Neutron chain security to provide guaranteed per-block price updates with millisecond refresh rates.",source:"@site/docs/neutron/modules/3rdparty/skip/slinky/overview.md",sourceDirName:"neutron/modules/3rdparty/skip/slinky",slug:"/neutron/modules/3rdparty/skip/slinky/overview",permalink:"/neutron/modules/3rdparty/skip/slinky/overview",draft:!1,tags:[],version:"current",frontMatter:{}},s={},c=[{value:"F.A.Q",id:"faq",level:2},{value:"I&#39;m a validator, how should i run Slinky&#39;s Sidecar?",id:"im-a-validator-how-should-i-run-slinkys-sidecar",level:3},{value:"How can i access prices from the Slinky?",id:"how-can-i-access-prices-from-the-slinky",level:3},{value:"Getting Supported Assets",id:"getting-supported-assets",level:4},{value:"Accessing Slinky Prices over node APIs and RPC",id:"accessing-slinky-prices-over-node-apis-and-rpc",level:4},{value:"Price Metadata within Slinky",id:"price-metadata-within-slinky",level:4},{value:"Slinky Price Update Timing",id:"slinky-price-update-timing",level:4},{value:"Q: Can I get historical prices in Slinky?",id:"q-can-i-get-historical-prices-in-slinky",level:4}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Slinky")," is a revolutionary enshrined oracle built for the highest performance DeFi. It leverages Neutron chain security to provide guaranteed per-block price updates with millisecond refresh rates."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," you can find more info about Slinky and how it works in the official Skip's Slinky docs: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.skip.money/slinky/overview"},"https://docs.skip.money/slinky/overview"))),(0,r.kt)("h2",{id:"faq"},"F.A.Q"),(0,r.kt)("h3",{id:"im-a-validator-how-should-i-run-slinkys-sidecar"},"I'm a validator, how should i run Slinky's Sidecar?"),(0,r.kt)("p",null,"Please use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/skip-mev/docs/blob/main/docs/slinky/integrations/1-neutron.md"},"the official")," Slinky's documentation how to get the Sidecar up and running."),(0,r.kt)("h3",{id:"how-can-i-access-prices-from-the-slinky"},"How can i access prices from the Slinky?"),(0,r.kt)("p",null,"Slinky prices are stored within the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/skip-mev/slinky/tree/main/x/oracle"},(0,r.kt)("inlineCode",{parentName:"a"},"x/oracle"))," module by default."),(0,r.kt)("p",null,"These prices are updated on a per-block basis, when there is sufficient difference from the last block's price. They can be accessed natively by ",(0,r.kt)("a",{parentName:"p",href:"TODO:link_to_the_tutorials"},"CosmWasm smart contracts"),", by other modules, or by anyone else who has access to chain state."),(0,r.kt)("p",null,"Slinky market configuration is stored in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/skip-mev/slinky/tree/main/x/marketmap"},(0,r.kt)("inlineCode",{parentName:"a"},"x/marketmap")),". This module, unlike ",(0,r.kt)("inlineCode",{parentName:"p"},"x/oracle"),", does ",(0,r.kt)("strong",{parentName:"p"},"not")," store price data. Instead, it stores which currency pairs are supported and how they are configured."),(0,r.kt)("h4",{id:"getting-supported-assets"},"Getting Supported Assets"),(0,r.kt)("p",null,"You can find out which assets are supported on Neutron by either running:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"(via a local running chain): ",(0,r.kt)("inlineCode",{parentName:"li"},"curl http://<NEUTRON_REST_NODE_ADDRESS>:1317/slinky/marketmap/v1/marketmap")),(0,r.kt)("li",{parentName:"ol"},"(via chain app CLI): ",(0,r.kt)("inlineCode",{parentName:"li"},"neutrond q marketmap marketmap")),(0,r.kt)("li",{parentName:"ol"},"(via gRPC): ",(0,r.kt)("inlineCode",{parentName:"li"},"grpcurl -plaintext <NEUTRON_GRPC_NODE_ADDRESS>:9090 slinky.marketmap.v1.Query/MarketMap"))),(0,r.kt)("p",null,"This will return a JSON list of supported assets with associated metadata."),(0,r.kt)("h4",{id:"accessing-slinky-prices-over-node-apis-and-rpc"},"Accessing Slinky Prices over node APIs and RPC"),(0,r.kt)("p",null,"To access ",(0,r.kt)("strong",{parentName:"p"},"all")," Slinky prices (as of the last committed block), you can run:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"(via a local running chain): ",(0,r.kt)("inlineCode",{parentName:"li"},"curl http://<NEUTRON_REST_NODE_ADDRESS>:1317/slinky/oracle/v1/get_prices?currency_pair_ids=ADA%2FUSD&currency_pair_ids=ADA%2FUSD")),(0,r.kt)("li",{parentName:"ol"},"(via gRPC): ",(0,r.kt)("inlineCode",{parentName:"li"},"grpcurl -plaintext <NEUTRON_GRPC_NODE_ADDRESS>:9090 slinky.oracle.v1.Query/GetPrices"))),(0,r.kt)("p",null,"To get a ",(0,r.kt)("strong",{parentName:"p"},"specific")," currency pair, you can call:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"(Get all currency pairs request) ",(0,r.kt)("inlineCode",{parentName:"li"},"neutrond q oracle currency-pairs")),(0,r.kt)("li",{parentName:"ol"},"(Get price request) ",(0,r.kt)("inlineCode",{parentName:"li"},"neutrond q oracle price [base] [quote]"))),(0,r.kt)("h4",{id:"price-metadata-within-slinky"},"Price Metadata within Slinky"),(0,r.kt)("p",null,"When calling ",(0,r.kt)("inlineCode",{parentName:"p"},"getPrices")," via the above methods, you are returned an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"GetPriceResponse"),", each of which contains the following metadata about individual prices:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"QuotePrice")),(0,r.kt)("li",{parentName:"ol"},"nonce"),(0,r.kt)("li",{parentName:"ol"},"decimals"),(0,r.kt)("li",{parentName:"ol"},"ID")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GetPriceResponse")," looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    // GetPriceResponse is the response from the GetPrice grpc method exposed from\n    // the x/oracle query service.\n\n    message GetPriceResponse {\n        // QuotePrice represents the quote-price for the CurrencyPair given in\n        // GetPriceRequest (possibly nil if no update has been made)\n        QuotePrice price = 1 [ (gogoproto.nullable) = true ];\n        // nonce represents the nonce for the CurrencyPair if it exists in state\n        uint64 nonce = 2;\n        // decimals represents the number of decimals that the quote-price is\n        // represented in. For Pairs where ETHEREUM is the quote this will be 18,\n        // otherwise it will be 8.\n        uint64 decimals = 3;\n        // ID represents the identifier for the CurrencyPair.\n        uint64 id = 4;\n    }\n")),(0,r.kt)("p",null,"Inside ",(0,r.kt)("inlineCode",{parentName:"p"},"QuotePrice"),", you can fetch for the currency-pair:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"price"),(0,r.kt)("li",{parentName:"ol"},"timestamp of last update"),(0,r.kt)("li",{parentName:"ol"},"blockheight of last update")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"QuotePrice")," looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    // QuotePrice is the representation of the aggregated prices for a CurrencyPair,\n    // where price represents the price of Base in terms of Quote\n    message QuotePrice {\n    string price = 1 [\n        (cosmos_proto.scalar) = "cosmos.Int",\n        (gogoproto.customtype) = "cosmossdk.io/math.Int",\n        (gogoproto.nullable) = false\n    ];\n\n    // BlockTimestamp tracks the block height associated with this price update.\n    // We include block timestamp alongside the price to ensure that smart\n    // contracts and applications are not utilizing stale oracle prices\n    google.protobuf.Timestamp block_timestamp = 2\n        [ (gogoproto.nullable) = false, (gogoproto.stdtime) = true ];\n\n    // BlockHeight is height of block mentioned above\n    uint64 block_height = 3;\n    }\n')),(0,r.kt)("h4",{id:"slinky-price-update-timing"},"Slinky Price Update Timing"),(0,r.kt)("p",null,"Prices within Slinky committed on a one-block delay, since validators use the vote extensions from block ",(0,r.kt)("inlineCode",{parentName:"p"},"n-1")," to securely submit their price data for block ",(0,r.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,r.kt)("p",null,"Most of the time, Slinky feeds will update every single block. This happens when there is a non-insignificant update to the price, and over 66% of validators are correctly running their price-fetching sidecar."),(0,r.kt)("p",null,"However, an individual Slinky feed will not update on any given block if:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"(More common) There was not a sufficient enough change from last block's price to surpass the Slinky ",(0,r.kt)("inlineCode",{parentName:"li"},"min_price_change")," parameter. To save network bandwidth, the price won't update."),(0,r.kt)("li",{parentName:"ol"},"(Less common) The market is disabled (i.e. not updating) within ",(0,r.kt)("inlineCode",{parentName:"li"},"x/marketmap")),(0,r.kt)("li",{parentName:"ol"},"(Less common) Less than 2/3s of validators (by stake weight) contributed to a price update. This can happen if not enough validators run the Slinky sidecar, or there is a massive, widespread outage across providers.")),(0,r.kt)("h4",{id:"q-can-i-get-historical-prices-in-slinky"},"Q: Can I get historical prices in Slinky?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," No, the ",(0,r.kt)("inlineCode",{parentName:"p"},"x/oracle")," module only stores the most recently posted price. However, you can use blockchain indexers or inspect past blocks to see the prices committed on previous heights."))}d.isMDXComponent=!0}}]);