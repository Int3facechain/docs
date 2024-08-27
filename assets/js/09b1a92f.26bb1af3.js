"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[479],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={},i="ADR-006: Metrics And Logs",o={unversionedId:"ADR/adr-006-metrics",id:"version-1.0/ADR/adr-006-metrics",title:"ADR-006: Metrics And Logs",description:"Status",source:"@site/versioned_docs/version-1.0/ADR/adr-006-metrics.md",sourceDirName:"ADR",slug:"/ADR/adr-006-metrics",permalink:"/docs/1.0/ADR/adr-006-metrics",draft:!1,tags:[],version:"1.0",frontMatter:{},sidebar:"docs",previous:{title:"ADR-005: Bitcoin Ordinals",permalink:"/docs/1.0/ADR/adr-005-ordinals"},next:{title:"ADR-007: E2E Tests",permalink:"/docs/1.0/ADR/adr-007-e2e-tests"}},s={},m=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Steps to implement",id:"steps-to-implement",level:2},{value:"Solution",id:"solution",level:2},{value:"Metrics overview",id:"metrics-overview",level:2},{value:"Observer Node Metrics",id:"observer-node-metrics",level:3},{value:"Int3face Node Metrics",id:"int3face-node-metrics",level:3},{value:"Node Exporter Metrics",id:"node-exporter-metrics",level:3}],p={toc:m},d="wrapper";function u(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adr-006-metrics-and-logs"},"ADR-006: Metrics And Logs"),(0,r.kt)("h2",{id:"status"},"Status"),(0,r.kt)("p",null,"Done"),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"We want to collect business and infrastructure metrics from both observer and int3face node binaries."),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Implement log aggregation."),(0,r.kt)("li",{parentName:"ol"},"Add metrics for the number of incoming and outgoing transactions."),(0,r.kt)("li",{parentName:"ol"},"Add metrics for total vault supply."),(0,r.kt)("li",{parentName:"ol"},"Add metrics for total Cosmos-represented asset supply."),(0,r.kt)("li",{parentName:"ol"},"Calculate and monitor the ratio between vault and Cosmos asset supplies."),(0,r.kt)("li",{parentName:"ol"},"Monitor incoming and outgoing transaction volume."),(0,r.kt)("li",{parentName:"ol"},"Monitor node status, including health status and current height."),(0,r.kt)("li",{parentName:"ol"},"Implement TSS metrics.")),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/16846-aptos-validator-monitoring/"},"this template")," as a reference.  "),(0,r.kt)("h2",{id:"steps-to-implement"},"Steps to implement"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Determine how to scrape metrics from nodes: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Int3facechain/bridge/issues/71"},"71"),"."),(0,r.kt)("li",{parentName:"ol"},"Set up metrics storage: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Int3facechain/bridge/issues/72"},"72"),"."),(0,r.kt)("li",{parentName:"ol"},"Research methods to expose and modify Cosmos-based metrics: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Int3facechain/bridge/issues/73"},"73"),"."),(0,r.kt)("li",{parentName:"ol"},"Add business and infrastructure metrics for the Int3face node: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Int3facechain/bridge/issues/74"},"74"),"."),(0,r.kt)("li",{parentName:"ol"},"Add business and infrastructure metrics for the Observer node: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Int3facechain/bridge/issues/75"},"75"),"."),(0,r.kt)("li",{parentName:"ol"},"Deploy the metrics infrastructure to Hetzner: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Int3facechain/bridge/issues/76"},"76"),"."),(0,r.kt)("li",{parentName:"ol"},"Set up a metrics dashboard using the reference template: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Int3facechain/bridge/issues/77"},"77"),".")),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Implemented monitoring based on Prometheus and Grafana."),(0,r.kt)("li",{parentName:"ol"},"Prometheus and Grafana are deployed by docker-compose."),(0,r.kt)("li",{parentName:"ol"},"Also running as a demon:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"node-exporter to collect node metrics."),(0,r.kt)("li",{parentName:"ol"},"cosmos-exporter to collect Cosmos metrics."))),(0,r.kt)("li",{parentName:"ol"},"Monitoring repository: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Int3facechain/monitoring"},"int3face-monitoring")," contains:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Prometheus & Grafana configs "),(0,r.kt)("li",{parentName:"ol"},"Deployment scripts"),(0,r.kt)("li",{parentName:"ol"},"Docker-compose file"),(0,r.kt)("li",{parentName:"ol"},"Dashboards"))),(0,r.kt)("li",{parentName:"ol"},"Grafana dashboard (Hetzner): ",(0,r.kt)("a",{parentName:"li",href:"http://95.217.153.1:3000/d/cosmos_validator/int3face-monitoring?orgId=1&refresh=1m"},"int3face-monitoring"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Login: ",(0,r.kt)("inlineCode",{parentName:"li"},"admin")),(0,r.kt)("li",{parentName:"ol"},"Password: {please ask from a team member}"))),(0,r.kt)("li",{parentName:"ol"},"Prometheus (Hetzner): ",(0,r.kt)("a",{parentName:"li",href:"http://95.217.153.1:9099/graph"},"prometheus-ui"))),(0,r.kt)("p",null,"Architecture:\n",(0,r.kt)("img",{alt:"monitoring_architecture",src:n(9982).Z,width:"1330",height:"443"})),(0,r.kt)("h2",{id:"metrics-overview"},"Metrics overview"),(0,r.kt)("h3",{id:"observer-node-metrics"},"Observer Node Metrics"),(0,r.kt)("p",null,"Configuration block in ",(0,r.kt)("em",{parentName:"p"},"observer.toml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},"[monitoring]\n  # The flag to enable the metrics server.\n  enabled = true\n  # The port to expose the metrics on.\n  port = 27727\n")),(0,r.kt)("p",null,"Metrics list:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Labels"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"observer_transfer_success_total")),(0,r.kt)("td",{parentName:"tr",align:null},"Counter"),(0,r.kt)("td",{parentName:"tr",align:null},"[from_chain, to_chain]"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of successful transfers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"observer_transfer_failed_total")),(0,r.kt)("td",{parentName:"tr",align:null},"Counter"),(0,r.kt)("td",{parentName:"tr",align:null},"[from_chain, to_chain]"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of failed transfers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"observer_transfer_duration_seconds")),(0,r.kt)("td",{parentName:"tr",align:null},"Histogram"),(0,r.kt)("td",{parentName:"tr",align:null},"[from_chain, to_chain]"),(0,r.kt)("td",{parentName:"tr",align:null},"Time spent on processing transfer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"observer_transfers_queue_size")),(0,r.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,r.kt)("td",{parentName:"tr",align:null},"[chain_id]"),(0,r.kt)("td",{parentName:"tr",align:null},"Size of transfers queue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"observer_transferred_amount_total")),(0,r.kt)("td",{parentName:"tr",align:null},"Counter"),(0,r.kt)("td",{parentName:"tr",align:null},"[from_chain, to_chain]"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount of transferred assets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"observer_tss_sign_success_total")),(0,r.kt)("td",{parentName:"tr",align:null},"Counter"),(0,r.kt)("td",{parentName:"tr",align:null},"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of successful TSS signs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"observer_tss_sign_failed_total")),(0,r.kt)("td",{parentName:"tr",align:null},"Counter"),(0,r.kt)("td",{parentName:"tr",align:null},"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of failed TSS signs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"observer_tss_sign_duration_seconds")),(0,r.kt)("td",{parentName:"tr",align:null},"Histogram"),(0,r.kt)("td",{parentName:"tr",align:null},"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Time spent on TSS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"observer_keygen_processing_success_total")),(0,r.kt)("td",{parentName:"tr",align:null},"Counter"),(0,r.kt)("td",{parentName:"tr",align:null},"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of successful key generation processes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"observer_keygen_processing_failed_total")),(0,r.kt)("td",{parentName:"tr",align:null},"Counter"),(0,r.kt)("td",{parentName:"tr",align:null},"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of failed key generation processes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"observer_keygen_processing_duration_seconds")),(0,r.kt)("td",{parentName:"tr",align:null},"Histogram"),(0,r.kt)("td",{parentName:"tr",align:null},"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Time spent on key generation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"observer_vault_migration_duration_seconds")),(0,r.kt)("td",{parentName:"tr",align:null},"Histogram"),(0,r.kt)("td",{parentName:"tr",align:null},"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Time spent on vault migration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"observer_chain_client_health")),(0,r.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,r.kt)("td",{parentName:"tr",align:null},"[chain_id]"),(0,r.kt)("td",{parentName:"tr",align:null},"Chain client health status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"observer_chain_height")),(0,r.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,r.kt)("td",{parentName:"tr",align:null},"[chain_id]"),(0,r.kt)("td",{parentName:"tr",align:null},"Chain height")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"observer_chain_last_observed_height")),(0,r.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,r.kt)("td",{parentName:"tr",align:null},"[chain_id]"),(0,r.kt)("td",{parentName:"tr",align:null},"Last observed chain height")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"observer_total_supply")),(0,r.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,r.kt)("td",{parentName:"tr",align:null},"[chain_id, asset_id, vault_address]"),(0,r.kt)("td",{parentName:"tr",align:null},"Total supply of assets")))),(0,r.kt)("h3",{id:"int3face-node-metrics"},"Int3face Node Metrics"),(0,r.kt)("p",null,"Configuration block in ",(0,r.kt)("em",{parentName:"p"},"config/config.toml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'#######################################################\n###       Instrumentation Configuration Options     ###\n#######################################################\n[instrumentation]\n\n# When true, Prometheus metrics are served under /metrics on\n# PrometheusListenAddr.\n# Check out the documentation for the list of available metrics.\nprometheus = true\n\n# Address to listen for Prometheus collector(s) connections\nprometheus_listen_addr = ":26660"\n\n# Maximum number of simultaneous connections.\n# If you want to accept a larger number than the default, make sure\n# you increase your OS limits.\n# 0 - unlimited.\nmax_open_connections = 3\n\n# Instrumentation namespace\nnamespace = "cometbft"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Consensus metrics: link to ",(0,r.kt)("a",{parentName:"li",href:"https://docs.cometbft.com/v0.37/core/metrics"},"metrics")),(0,r.kt)("li",{parentName:"ul"},"Cosmos-exporter metrics (all the metrics provided by cosmos-exporter have the following prefixes):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"cosmos",(0,r.kt)("em",{parentName:"li"},"validator"),"* - metrics related to a single validator "),(0,r.kt)("li",{parentName:"ul"},"cosmos",(0,r.kt)("em",{parentName:"li"},"validators"),"* - metrics related to a validator set "),(0,r.kt)("li",{parentName:"ul"},"cosmos",(0,r.kt)("em",{parentName:"li"},"wallet"),"* - metrics related to a single wallet")))),(0,r.kt)("h3",{id:"node-exporter-metrics"},"Node Exporter Metrics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node exporter metrics: link to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/prometheus/node_exporter"},"metrics"))))}u.isMDXComponent=!0},9982:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/monitoring_architecture-ae0e60e1e6a53c710706d8c114332736.png"}}]);