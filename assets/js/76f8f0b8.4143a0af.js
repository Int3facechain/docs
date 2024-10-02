"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={},o="Inbound Transfer Using Frontend UI",s={unversionedId:"demos/mainnet/transfers/doge-transfers-example",id:"demos/mainnet/transfers/doge-transfers-example",title:"Inbound Transfer Using Frontend UI",description:"Preconditions:",source:"@site/docs/demos/mainnet/transfers/doge-transfers-example.md",sourceDirName:"demos/mainnet/transfers",slug:"/demos/mainnet/transfers/doge-transfers-example",permalink:"/docs/demos/mainnet/transfers/doge-transfers-example",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"TON demo",permalink:"/docs/demos/ton/ton_inbound_outbound"},next:{title:"ADR-001: Grace Period",permalink:"/docs/ADR/adr-001-grace-period"}},p={},l=[{value:"Preconditions:",id:"preconditions",level:2},{value:"Steps:",id:"steps",level:2},{value:"Preconditions:",id:"preconditions-1",level:2},{value:"Steps:",id:"steps-1",level:2},{value:"Preconditions:",id:"preconditions-2",level:2},{value:"Steps:",id:"steps-2",level:2}],c={toc:l},m="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"inbound-transfer-using-frontend-ui"},"Inbound Transfer Using Frontend UI"),(0,r.kt)("h2",{id:"preconditions"},"Preconditions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"XDEFI wallet browser extension is installed."),(0,r.kt)("li",{parentName:"ul"},"DOGE tokens are available for transfer.")),(0,r.kt)("h2",{id:"steps"},"Steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Access the Transfer UI"),(0,r.kt)("br",{parentName:"p"}),"\n","Navigate to ",(0,r.kt)("a",{parentName:"p",href:"http://95.217.153.1/ui/"},"Int3face Transfer UI"),". Note that the UI currently supports inbound transfers only.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Select Currency"),(0,r.kt)("br",{parentName:"p"}),"\n","Choose the currency you want to transfer."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"img.png",src:n(5395).Z,width:"865",height:"785"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Connect with XDEFI"),(0,r.kt)("br",{parentName:"p"}),"\n",'Click the "Connect with XDEFI" button.'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"img.png",src:n(6985).Z,width:"736",height:"668"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"XDEFI Wallet Connected"),(0,r.kt)("br",{parentName:"p"}),"\n","Your XDEFI wallet is now connected."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"img.png",src:n(8806).Z,width:"1736",height:"1398"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Input Transfer Details"),(0,r.kt)("br",{parentName:"p"}),"\n","Now you can send DOGE tokens from your address. The following fields should be filled:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Amount"),": The amount of DOGE tokens to send (can be a floating number)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"To Address"),": Int3face Vault address to send DOGE tokens to (ask the actual vault address from the Int3face team)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Memo"),": The target int3face address to mint the tokens if successful."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Submit the Transfer"),(0,r.kt)("br",{parentName:"p"}),"\n","Fill out the fields and click the 'Transfer' button."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"img.png",src:n(7251).Z,width:"674",height:"628"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Approve the Transfer"),(0,r.kt)("br",{parentName:"p"}),"\n","XDEFI wallet will show a confirmation window. Click 'Approve'."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"img.png",src:n(4811).Z,width:"2185",height:"1303"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Check Transaction Status"),(0,r.kt)("br",{parentName:"p"}),"\n","Open the 'Activity' tab in XDEFI wallet to monitor the transaction. Ensure the correct chain is selected."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"img.png",src:n(5673).Z,width:"667",height:"964"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Verify on Explorer"),(0,r.kt)("br",{parentName:"p"}),"\n","Visit the Int3face Ping.Pub Explorer to verify your transaction. You can check your int3face address and see the transaction history ",(0,r.kt)("a",{parentName:"p",href:"http://95.217.153.1/explorer/int3face-1/account/%7Byour_int3face_address%7D"},"here"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"img.png",src:n(9945).Z,width:"2027",height:"148"})))),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"outbound-transfer-using-cli"},"Outbound transfer using CLI"),(0,r.kt)("h2",{id:"preconditions-1"},"Preconditions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First option: Int3face node is installed and running on the int3face-1 mainnet."),(0,r.kt)("li",{parentName:"ul"},"Second option: You also can use int3faced binary just as a CLI client and connect to the int3face-1 full-node - ",(0,r.kt)("a",{parentName:"li",href:"http://162.55.33.158:26657"},"http://162.55.33.158:26657"),". (In this case you don`t need to install the full node on your machine, but must install the int3faced binary).")),(0,r.kt)("h2",{id:"steps-1"},"Steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Option 1"),": If you have an Int3face node installed, you can perform an outbound transfer immediately.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Option 2"),": If you want to use only CLI as a client, you need to import a key to the Int3face node."),(0,r.kt)("p",{parentName:"li"},"Import an existing key using mnemonic:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"int3faced keys add key_name --recover\n")),(0,r.kt)("p",{parentName:"li"},"Check the key list:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"int3faced keys list\n")),(0,r.kt)("p",{parentName:"li"}," Check address balances:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"int3faced q bank balances {your_int3face_address} --node http://162.55.33.158:26657\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Perform Outbound Transfer")),(0,r.kt)("p",{parentName:"li"},"Use the following command to transfer (add --node ",(0,r.kt)("a",{parentName:"p",href:"http://162.55.33.158:26657"},"http://162.55.33.158:26657")," flag if you use Option 2)"),(0,r.kt)("p",{parentName:"li"},"Command template:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"int3faced tx bridge outbound-transfer {recipient_address} {asset} {amount} --from {key_name} --chain-id int3face-1\n")),(0,r.kt)("p",{parentName:"li"},"Example of transfer 1 DOGE (note that amount is in satoshis (* 10^8) for DOGE and other UTXO denoms):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"int3faced tx bridge outbound-transfer D7g8fBaUG9wDw93Ri1PBGAYd7mQxxFdubH dogecoin-doge 100000000 --from ove-validator --chain-id int3face-1\n")),(0,r.kt)("p",{parentName:"li"},"Tx execution result:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"img.png",src:n(4173).Z,width:"2373",height:"492"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Check the Transaction Status")),(0,r.kt)("p",{parentName:"li"},"After tx is executed, copy tx hash, you can check the transaction status in the Int3face Pig.Pub explorer. "),(0,r.kt)("p",{parentName:"li"},"Link example -> ",(0,r.kt)("a",{parentName:"p",href:"http://95.217.153.1/explorer/int3face-1/tx/6E360EF7CCA387F0A4F73E8AEF61716CC4C223FEA35844511E82EC7F31ED54FA"},"http://95.217.153.1/explorer/int3face-1/tx/6E360EF7CCA387F0A4F73E8AEF61716CC4C223FEA35844511E82EC7F31ED54FA"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Verify on DOGE Explorer")),(0,r.kt)("p",{parentName:"li"},"Also, check the balance of the recipient address in the DOGE explorer. You can find your DOGE address and see transactions list."),(0,r.kt)("p",{parentName:"li"},"Link example -> ",(0,r.kt)("a",{parentName:"p",href:"https://dogechain.info/address/D7g8fBaUG9wDw93Ri1PBGAYd7mQxxFdubH"},"https://dogechain.info/address/D7g8fBaUG9wDw93Ri1PBGAYd7mQxxFdubH"),"."))),(0,r.kt)("h1",{id:"ibc-transfer-using-cli"},"IBC Transfer using CLI"),(0,r.kt)("h2",{id:"preconditions-2"},"Preconditions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First option: Int3face node is installed and running on the int3face-1 mainnet."),(0,r.kt)("li",{parentName:"ul"},"Second option: You also can use int3faced binary just as a CLI client and connect to the int3face-1 full-node - ",(0,r.kt)("a",{parentName:"li",href:"http://162.55.33.158:26657"},"http://162.55.33.158:26657"),". (In this case you don`t need to install the full node on your machine, but must install the int3faced binary).")),(0,r.kt)("h2",{id:"steps-2"},"Steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Option 1"),": If you have an Int3face node installed, you can perform an outbound transfer immediately.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Option 2"),": If you want to use only CLI as a client, you need to import a key to the Int3face node."),(0,r.kt)("p",{parentName:"li"},"Import an existing key using mnemonic:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"int3faced keys add key_name --recover\n")),(0,r.kt)("p",{parentName:"li"},"Check the key list:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"int3faced keys list\n")),(0,r.kt)("p",{parentName:"li"},"Check address balances:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"int3faced q bank balances {your_int3face_address} --node http://162.55.33.158:26657\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Perform IBC Transfer")),(0,r.kt)("p",{parentName:"li"},"Use the following command (add --node ",(0,r.kt)("a",{parentName:"p",href:"http://162.55.33.158:26657"},"http://162.55.33.158:26657")," flag if you use a second option):"),(0,r.kt)("p",{parentName:"li"},"Command template:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"int3faced tx ibc-transfer transfer {source-port} {source-channel} {receiver_address} {amount}{denom} --from {key_name} --chain-id int3face-1 --fees 10000uint3 --gas auto --packet-timeout-height 0-10000 --packet-timeout-timestamp 600000000000\n")),(0,r.kt)("p",{parentName:"li"},"Example of transfer 1 IBC token (note that amount is in satoshis (* 10^8) for DOGE and other UTXO denoms):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"int3faced tx ibc-transfer transfer \\\ntransfer \\\nchannel-0 \\\nosmo1jssqq9mas2dg5p5x847fz0n58uqqz2nl9q9mhy \\\n10000factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/dogecoin-doge \\\n--from ove-validator \\\n--chain-id int3face-1 \\\n--fees 10000uint3 \\\n--gas auto \\\n--packet-timeout-height 0-10000 \\\n--packet-timeout-timestamp 600000000000\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Verify on Mintscan Explorer")),(0,r.kt)("p",{parentName:"li"},"After tx is executed, you can monitor tokens received in the recipient address using Mintscan."),(0,r.kt)("p",{parentName:"li"},"Link example -> ",(0,r.kt)("a",{parentName:"p",href:"https://www.mintscan.io/osmosis/address/osmo1jssqq9mas2dg5p5x847fz0n58uqqz2nl9q9mhy"},"https://www.mintscan.io/osmosis/address/osmo1jssqq9mas2dg5p5x847fz0n58uqqz2nl9q9mhy"),"."),(0,r.kt)("p",{parentName:"li"},"Navigate to the 'Transactions' tab to see the transaction details."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"img.png",src:n(365).Z,width:"2114",height:"1386"})))))}d.isMDXComponent=!0},4811:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/approve-transfer-c532dc33efc65c820ef7b067e94ab8e5.png"},6985:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connect-with-xdefi-42e31353ccf78cd6c4393f548b7caa78.png"},9945:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explorer-inbound-transfers-1720ac1d486ec4966bd38e9491f919ff.png"},7251:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fill-out-and-transfer-989ebb69fc557fb85ec4d6710ecf392d.png"},365:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mintscan-ibc-transactions-d57b8e7910f22af67efa3cd603302b70.png"},4173:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/outbound-tx-submitted-b17145b97e8c2b59d212a1a3aeba193a.png"},5395:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/select-currency-a039af8da29174b154354721d7e4407f.png"},5673:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/xdefi-wallet-activity-647c07460a1a41de69d7998382cfe6b4.png"},8806:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/xdefi-wallet-connected-bbd8d06385600a42a47463ed12b2fd99.png"}}]);