"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[3787],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,m=d["".concat(l,".").concat(c)]||d[c]||p[c]||i;return n?o.createElement(m,r(r({ref:t},h),{},{components:n})):o.createElement(m,r({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},45372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(87462),a=(n(67294),n(3905));const i={},r="Neutron Launch Instructions",s={unversionedId:"neutron/consumer-chain-launch",id:"version-3.0/neutron/consumer-chain-launch",title:"Neutron Launch Instructions",description:"TL;DR",source:"@site/versioned_docs/version-3.0/neutron/consumer-chain-launch.md",sourceDirName:"neutron",slug:"/neutron/consumer-chain-launch",permalink:"/3.0/neutron/consumer-chain-launch",draft:!1,tags:[],version:"3.0",frontMatter:{},sidebar:"docs",previous:{title:"Contributing",permalink:"/3.0/neutron/contribute"},next:{title:"Neutron Core Releases",permalink:"/3.0/neutron/neutron-core-releases"}},l={},u=[{value:"TL;DR",id:"tldr",level:2},{value:"The Steps",id:"the-steps",level:3},{value:"Relevant Parameters",id:"relevant-parameters",level:3},{value:"Validator Upgrade Instructions",id:"validator-upgrade-instructions",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Here&#39;s what you need to know",id:"heres-what-you-need-to-know",level:3},{value:"Here&#39;s what you need to do",id:"heres-what-you-need-to-do",level:3},{value:"Neutron Launch Instructions",id:"neutron-launch-instructions-1",level:2},{value:"1. Initialize the Consumer Chain",id:"1-initialize-the-consumer-chain",level:3},{value:"2. Assign Consumer Key",id:"2-assign-consumer-key",level:3},{value:"Option One: Reuse your private validator key",id:"option-one-reuse-your-private-validator-key",level:4},{value:"Option Two: Use key delegation",id:"option-two-use-key-delegation",level:4},{value:"3. At the spawn time, start the Consumer Chain Binary",id:"3-at-the-spawn-time-start-the-consumer-chain-binary",level:3},{value:"4. Verify that your validator is signing blocks in the consumer chain",id:"4-verify-that-your-validator-is-signing-blocks-in-the-consumer-chain",level:3},{value:"Remember \u2013 don&#39;t go to jail..",id:"remember--dont-go-to-jail",level:3},{value:"Congratulations!",id:"congratulations",level:2},{value:"Attribution",id:"attribution",level:2}],h={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"neutron-launch-instructions"},"Neutron Launch Instructions"),(0,a.kt)("h2",{id:"tldr"},"TL;DR"),(0,a.kt)("p",null,"Prop 792 was accepted by the Cosmos Community. If Neutron's mainnet launches between the 8th and the 21st of May, it may become the Hub's first consumer chain. Since a Cosmos Hub upgrade was scheduled on the Hub on Monday the 8th, ",(0,a.kt)("strong",{parentName:"p"},"we strongly recommend validators to join a coordinated launch on Wednesday the 10th at 3pm UTC instead.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For launching consumer chains, validators have two main responsibilities:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Submit an ",(0,a.kt)("inlineCode",{parentName:"li"},"AssignConsumerKey")," transaction on the Cosmos Hub"),(0,a.kt)("li",{parentName:"ul"},"Run the consumer chain binary at the spawn time. "))),(0,a.kt)("li",{parentName:"ul"},"This guide informs validators about how to accomplish these goals.")),(0,a.kt)("h3",{id:"the-steps"},"The Steps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Initialize the Consumer Chain"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Initialize your node on the consumer chain"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Assign Consumer Key"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"In-depth instructions for this can be found ",(0,a.kt)("a",{parentName:"li",href:"https://cosmos.github.io/interchain-security/features/key-assignment"},"here")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Update the Genesis File"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"After the consumer chain state is generated, copy the updated genesis.json into the correct directory and start a node"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Start the Consumer Chain Binary"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Whenever ",(0,a.kt)("inlineCode",{parentName:"li"},"66.67%")," percent of the validator voting power is running the binary, the chain will start producing blocks.")))),(0,a.kt)("h3",{id:"relevant-parameters"},"Relevant Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Soft_opt_out_threshold: 0.05")," (e.g. 5% of the voting power)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The bottom 5% validators by voting power can decide whether or not they wish to opt-in to running a node on Neutron. They will earn rewards regardless of their decision."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Commit_timeout: 1000ms")," (leads to ","~","2.5s blocktime on Pion-1)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This increases blocktime speed on the network. See ",(0,a.kt)("a",{parentName:"li",href:"https://docs.tendermint.com/v0.34/tendermint-core/configuration.html"},"these docs")," for more information about the implications of this parameter."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Signed_blocks_window: 140,000 blocks")," (","~","4 days at 2.5s per block)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The signing window is decided by the Consumer chain via the signed-blocks-window parameter. Submitting fewer than the specified min-signed-window will result in your validator being jailed. Consumer chains will have a generous window. Submit an unjail tx on the provider to unjail your validator.")))),(0,a.kt)("h2",{id:"validator-upgrade-instructions"},"Validator Upgrade Instructions"),(0,a.kt)("p",null,"The neutron ",(0,a.kt)("a",{parentName:"p",href:"https://www.mintscan.io/cosmos/proposals/792"},"proposal has been put on-chain"),". Cosmos Hub validators are obligated to run Consumer Chain nodes. This document provides step by step instructions about how to do that."),(0,a.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,a.kt)("h3",{id:"heres-what-you-need-to-know"},"Here's what you need to know"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Consumer chain launch & upgrade support for all consumer chains will be done from the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/channels/669268347736686612/798937713474142229"},"Cosmos Hub discord validators verified channel"),". Gather in there at chain spawn time (after the ",(0,a.kt)("inlineCode",{parentName:"p"},"ConsumerChainAddition")," proposal passes) and during upgrades.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you need specialized support or have questions, you can check out the ",(0,a.kt)("a",{parentName:"p",href:"https://forum.cosmos.network/t/validator-consumer-chain-support/10570"},"forum"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Announcements will be sent across multiple channels to alert you about upgrades. The best place to stay up to date is in the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/channels/669268347736686612/1087756740562522284"},"upgrades")," channel in discord.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"There are three important parameters in every ",(0,a.kt)("inlineCode",{parentName:"p"},"ConsumerAdditionProposal"),". They are:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"spawn_time")," - the time after which the consumer chain must be started"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"genesis_hash")," - hash of the pre-ccv genesis.json; the file does not contain any validator info -",">"," the information is available only after the proposal is passed and ",(0,a.kt)("inlineCode",{parentName:"li"},"spawn_time")," is reached"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"binary_hash")," - hash of the consumer chain binary used to validate the software builds"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"signed_blocks_window")," and related ",(0,a.kt)("inlineCode",{parentName:"p"},"min_signed_per_window")," parameter for consumer chains, which determine the number of blocks you need to sign in a given window to avoid being jailed, will be determined on a consumer chain by consumer chain basis. Each consumer chain may have a different window. These parameters can be found by checking the chain\u2019s genesis.json (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/testnets/blob/master/replicated-security/baryon-1/baryon-1-genesis.json#L229"},"example from neutron\u2019s testnet"),")."),(0,a.kt)("p",{parentName:"li"},"If the chain is already running, the params can be checked by:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"`$ neutrond q slashing params --home ~/.neutron\n# example output\nsigned_blocks_window: 140000\nmin_signed_per_window: 0.050000000000000000\ndowntime_jail_duration: 600s\nslash_fraction_double_sign: 0.050000000000000000\nslash_fraction_downtime: 0.000100000000000000`\n")),(0,a.kt)("h3",{id:"heres-what-you-need-to-do"},"Here's what you need to do"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Fill out the ",(0,a.kt)("a",{parentName:"li",href:"https://eu.jotform.com/form/230744359787369"},"validator contact form")," if you haven't already"),(0,a.kt)("li",{parentName:"ol"},"Join the ",(0,a.kt)("a",{parentName:"li",href:"https://discord.com/channels/669268347736686612/798937713474142229"},"Cosmos Hub discord")," and ping an admin to request to be added to the relevant channels"),(0,a.kt)("li",{parentName:"ol"},"Read the rest of this document and ask on the forum if you have questions")),(0,a.kt)("h2",{id:"neutron-launch-instructions-1"},"Neutron Launch Instructions"),(0,a.kt)("h3",{id:"1-initialize-the-consumer-chain"},"1. Initialize the Consumer Chain"),(0,a.kt)("p",null,"You can initialize the Consumer chain before the spawn time specified in the ConsumerChainAddition proposal. You should not attempt to start the chain binary (neutrond start) before the spawn time - you need the genesis.json file with the initial validator set populated. The final genesis.json will be provided by the consumer chain team."),(0,a.kt)("p",null,"You need to initialize the Consumer chain node before assigning a key. Initializing the node will provide you with a random private key (",(0,a.kt)("inlineCode",{parentName:"p"},"<node_home>/config/priv_validator_key.json"),")"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Node initialization procedure (example):"),"\t"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'## 1. install neutrond.\n$ git clone https://github.com/neutron-org/neutron\n$ cd neutron\n\n# switch to version to be used\n# the version might change\n# You should have go >1.20 installed in order to build binary\n$ git checkout v1.0.1\n$ make install\n\n# after installing the neutrond tool is available; check the installation\n$ neutrond version --long\nname: neutron\nserver_name: neutrond\nversion: 1.0.1\ncommit: c236f1045f866c341ec26f5c409c04d201a19cde\n....\n\n## 2. initialize your node\n$ neutrond init neutron-val --chain-id neutron-1\n{"app_message":{"adminmodule":{"admins":[]},"auth"... }}}\n\n# <node_home>/config/priv_validator_key.json contains your new key\n# show the validator key (needed for key assignment on provider)\n$ neutrond tendermint show-validator\n{"@type":"/cosmos.crypto.ed25519.PubKey","key":"qVifseOYMsfeKnzSHlkEb+0ZZeuZrVPJ7sqMZJHAbBc="}\n')),(0,a.kt)("h3",{id:"2-assign-consumer-key"},"2. Assign Consumer Key"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Information about Key Assignment")),(0,a.kt)("p",null,"You may notice that some consumer chains do not implement the x/staking module, which means there is no way to set up a validator in the conventional way on the consumer chain."),(0,a.kt)("p",null,"On the consumer chain, a validator's activity is identified by the private validator key used to sign blocks. There are two mutually exclusive methods for connecting activity on a consumer chain back to a provider."),(0,a.kt)("p",null,"Assigning a key to be used on the consumer chain is optional, but highly recommended."),(0,a.kt)("p",null,"Having different keys for all the chains helps minimize the impact of any of the keys being leaked.  "),(0,a.kt)("p",null,"In the examples below we will show how to use a consumer key created in the section above and how to reuse your provider key. We only need the public key information - the private key should never be exposed. Your setup may vary depending on your infrastructure and operational security."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("h4",{id:"option-one-reuse-your-private-validator-key"},"Option One: Reuse your private validator key"),(0,a.kt)("p",null,"Within the machine running the provider node, this key is found at "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"~/.gaia/config/priv_validator_key.json\n")),(0,a.kt)("p",null,"Copy the contents of this file into a new file on the machine hosting the consumer chain, at "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"~/.<neutron_node_home>/config/priv_validator_key.json\n")),(0,a.kt)("p",null,"Upon start, the consumer chain should begin signing blocks with the same validator key as present on the provider."),(0,a.kt)("h4",{id:"option-two-use-key-delegation"},"Option Two: Use key delegation"),(0,a.kt)("p",null,"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"If you did not use the key delegation feature before spawn time, do not use it until the chain is live, stable and receiving VSCPackets from the provider! "),"\u26a0\ufe0f"),(0,a.kt)("p",null,"If you do not wish to reuse the private validator key from your provider chain, an alternative method is to use multiple keys managed by the Key Assignment feature."),(0,a.kt)("p",null,"\u26a0\ufe0f Ensure that the ",(0,a.kt)("inlineCode",{parentName:"p"},"priv_validator_key.json")," on the consumer node is different from the key that exists on the provider node."),(0,a.kt)("p",null,"\u26a0\ufe0f The ",(0,a.kt)("inlineCode",{parentName:"p"},"AssignConsumerKey")," transaction can be sent to the provider chain before the consumer chain's spawn time. This ensures that the key to be used by that consumer chain is recorded as part of the state in the genesis file."),(0,a.kt)("p",null,"\u26a0\ufe0f The ",(0,a.kt)("inlineCode",{parentName:"p"},"AssignConsumerKey")," transaction can also be sent after spawn time. In that case the genesis file will include your provider key. Your assigned consumer key will be active as soon as the provider informs the consumer about the key assignment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# run this on the machine that you will use to run neutron\n# the command gets the public key to use for neutron\n$ neutrond tendermint show-validator\n{"@type":"/cosmos.crypto.ed25519.PubKey","key":"qVifseOYMsfeKnzSHlkEb+0ZZeuZrVPJ7sqMZJHAbBc="}\n\n# do this step on the provider machine\n# you should have a key available on the provider that you can use to sign the key assignment transaction\n$ NEUTRON_KEY=\'{"@type":"/cosmos.crypto.ed25519.PubKey","key":"qVifseOYMsfeKnzSHlkEb+0ZZeuZrVPJ7sqMZJHAbBc="}\'\n$ gaiad tx provider assign-consensus-key neutron-1 $NEUTRON_KEY --from <tx-signer> --home <home_dir> --gas 900000 -y -o json\n\n# confirm your key has been assigned\n$ GAIA_VALCONSADDR=$(gaiad tendermint show-address --home ~/.gaia)\n$ gaiad query provider validator-consumer-key neutron-1 $GAIA_VALCONSADDR\nconsumer_address: "<your_address>"\n')),(0,a.kt)("p",null,"Read more on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/interchain-security/blob/main/docs/docs/features/key-assignment.md"},"Key Assignment"),"."),(0,a.kt)("h3",{id:"3-at-the-spawn-time-start-the-consumer-chain-binary"},"3. At the spawn time, start the Consumer Chain Binary"),(0,a.kt)("p",null,"Once the genesis state is initiated after the chain spawn time, the Neutron team will distribute the genesis.json file to validators. Copy this file into your neutron node home directory and start your node."),(0,a.kt)("p",null,"In this example we are simply using neutron\u2019s start command. Your actual steps depend on the tooling you use (cosmovisor, systemd, kubectl, ansible etc.)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Final genesis URL will be announced shortly after spawn time\n$ wget <URL_to_final_genesis.json>\n$ mv genesis.json ~/.neutrond/config\n\n# start the binary\n$ neutrond start\n")),(0,a.kt)("h3",{id:"4-verify-that-your-validator-is-signing-blocks-in-the-consumer-chain"},"4. Verify that your validator is signing blocks in the consumer chain"),(0,a.kt)("p",null,"You can compare the signatures on a recently-produced block with your validator's signature to confirm you are signing blocks with the assigned key"),(0,a.kt)("p",null,"Parse your signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ neutrond keys parse $(neutrond tendermint show-address)\n\nExample output:\nhuman: neutronvalcons\nbytes: AE84D29EC8E3BBCF123B48C702DAA982EEC2830B\n")),(0,a.kt)("p",null,"To grab only the byte string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ neutrond keys parse $(neutrond tendermint show-address) --output json | jq '.bytes'\n\n# Query the latest block for your signature:\n$ neutrond q block | jq '.block.last_commit.signatures' | grep <your byte string from step above>\n")),(0,a.kt)("h3",{id:"remember--dont-go-to-jail"},"Remember \u2013 don't go to jail.."),(0,a.kt)("p",null,"If you sign less than ",(0,a.kt)("inlineCode",{parentName:"p"},"min_signed_per_window")," within the ",(0,a.kt)("inlineCode",{parentName:"p"},"signed_blocks_window"),", your validator node will be jailed. If a jailing occurs, your validator will be jailed on both provider and all consumer chains. At present, you will not be slashed for downtime, though in the future this may change. "),(0,a.kt)("p",null,"To get out of jail, submit an unjail tx on the provider chain:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ gaiad tx slashing unjail --chain-id cosmoshub-4 --from=<key_name>\n")),(0,a.kt)("h2",{id:"congratulations"},"Congratulations!"),(0,a.kt)("p",null,"You now know how to start a consumer chain node. We look forward to running our network with you! "),(0,a.kt)("p",null,"The Cosmos community is here to assist you and support you as the ATOM economic zone grows. Please don't hesitate to reach out on the ",(0,a.kt)("a",{parentName:"p",href:"https://forum.cosmos.network/t/validator-consumer-chain-support/10570"},"forum")," or in the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/channels/669268347736686612/1045074791968804995"},"consumer chain support discord channel")," with any questions or concerns. "),(0,a.kt)("h2",{id:"attribution"},"Attribution"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Thanks to the teams at Interchain, Informal, and Hypha Worker Co-operative for their support preparing this documentation.")))}p.isMDXComponent=!0}}]);