"use strict";(self.webpackChunkint3face=self.webpackChunkint3face||[]).push([[6266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||s;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const s={},i="Introduction to CosmWasm",o={unversionedId:"tutorials/introduction_to_cosmwasm",id:"version-2.0/tutorials/introduction_to_cosmwasm",title:"Introduction to CosmWasm",description:"Let's examine what a smart contract is and the way it works under the hood. The following is a minimal contract that stores a counter value which can be incremented and everyone can query this counter value.",source:"@site/versioned_docs/version-2.0/tutorials/introduction_to_cosmwasm.md",sourceDirName:"tutorials",slug:"/tutorials/introduction_to_cosmwasm",permalink:"/2.0/tutorials/introduction_to_cosmwasm",draft:!1,tags:[],version:"2.0",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/2.0/tutorials/overview"},next:{title:"CosmWasm + Remix IDE",permalink:"/2.0/tutorials/cosmwasm_remix"}},l={},c=[{value:"Contract basics",id:"contract-basics",level:2},{value:"Contract structure",id:"contract-structure",level:2},{value:"Contract state",id:"contract-state",level:2},{value:"Messages",id:"messages",level:2},{value:"InstantiateMsg",id:"instantiatemsg",level:3},{value:"ExecuteMsg",id:"executemsg",level:3},{value:"QueryMsg",id:"querymsg",level:3},{value:"Stitching it all together in contract.rs",id:"stitching-it-all-together-in-contractrs",level:2},{value:"Entry points",id:"entry-points",level:2},{value:"instantiate()",id:"instantiate",level:3},{value:"execute()",id:"execute",level:3},{value:"query()",id:"query",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-to-cosmwasm"},"Introduction to CosmWasm"),(0,r.kt)("p",null,"Let's examine what a smart contract is and the way it works under the hood. The following is a minimal contract that stores a counter value which can be incremented and everyone can query this counter value."),(0,r.kt)("p",null,"The counter contract template can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-template"},"this GitHub repository"),"."),(0,r.kt)("h2",{id:"contract-basics"},"Contract basics"),(0,r.kt)("p",null,"A smart contract can be considered an instance of a singleton object whose internal state is persisted on the blockchain. Users can trigger state changes by sending the smart contract JSON messages, and users can also query its state by sending a request formatted as a JSON message."),(0,r.kt)("p",null,"As a smart contract writer, your job is to define 3 functions that compose your smart contract's interface:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"instantiate()"),": a constructor which is called during contract instantiation to provide the initial state"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"execute()"),": gets called when a user wants to invoke a method on the smart contract, this invokes one of the execute messages defined in the contract under ",(0,r.kt)("inlineCode",{parentName:"li"},"ExecuteMsg")," enum which is essentially a list of transactions the contract supports"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"query()"),": gets called when a user wants to get data out of a smart contract, this invokes one of the query messages defined in the contract under ",(0,r.kt)("inlineCode",{parentName:"li"},"QueryMsg")," enum which is a list of queries the contract supports")),(0,r.kt)("p",null,"In our sample counter contract, we will implement one instantiate, one query, and two execute methods."),(0,r.kt)("h2",{id:"contract-structure"},"Contract structure"),(0,r.kt)("p",null,"Following is the file structure of the contract source:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 NOTICE\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 bin\n    \u2502\xa0\xa0 \u2514\u2500\u2500 schema.rs\n    \u251c\u2500\u2500 contract.rs\n    \u251c\u2500\u2500 error.rs\n    \u251c\u2500\u2500 helpers.rs\n    \u251c\u2500\u2500 lib.rs\n    \u251c\u2500\u2500 msg.rs\n    \u2514\u2500\u2500 state.rs\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Cargo.toml"),": Has contract's rust dependencies and some configuration parameters."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/contract.rs"),": Contract entry points such as ",(0,r.kt)("inlineCode",{parentName:"li"},"instantiate()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"execute()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"query()")," are defined here."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/error.rs"),": The contract's custom error messages are defined here."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/lib.rs"),": This file defines the list of rust source files that are part of the contract, add the file name here when adding a new one to the contract's source."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/msg.rs"),": Defines all the messages allowed to communicate with the contract."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/state.rs"),": Defines what the structure of the contract's storage will be."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/bin/schema.rs"),": Defines how to generate schema (language-agnostic format of contract messages) from the contract.")),(0,r.kt)("h2",{id:"contract-state"},"Contract state"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"State")," handles the state of the database where smart contract data is stored and accessed."),(0,r.kt)("p",null,"The counter contract has the following basic state, a singleton struct ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," containing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"count"),", a 32-bit integer with which ",(0,r.kt)("inlineCode",{parentName:"li"},"execute()")," messages will interact by increasing or resetting it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"owner"),", the sender ",(0,r.kt)("inlineCode",{parentName:"li"},"address")," of the ",(0,r.kt)("inlineCode",{parentName:"li"},"MsgInstantiateContract"),", which will determine if certain execution messages are permitted.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// src/state.rs\n\nuse schemars::JsonSchema;\nuse cw_storage_plus::Item;\nuse serde::{Deserialize, Serialize};\n\npub const STATE: Item<State> = Item::new("state");\n\n#[derive(Serialize, Debug, Deserialize, Clone, PartialEq, JsonSchema)]\npub struct State {\n    pub count: i32,\n    pub owner: Addr\n}\n')),(0,r.kt)("p",null,"Notice how the ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," struct holds both ",(0,r.kt)("inlineCode",{parentName:"p"},"count")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"owner"),". In addition, the derive attribute is applied to auto-implement some useful traits:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Serialize"),": provides serialization"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Deserialize"),": provides deserialization"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Clone"),": makes the struct copyable"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Debug"),": enables the struct to be printed to string"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PartialEq"),": provides equality comparison"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JsonSchema"),": auto-generates a JSON schema")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Addr")," refers to a human-readable Neutron address prefixed with neutron, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"neutron1retp3n0xl0sucqmg4qdk64h7kfflc032xg8na0"),"."),(0,r.kt)("h2",{id:"messages"},"Messages"),(0,r.kt)("h3",{id:"instantiatemsg"},"InstantiateMsg"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"InstantiateMsg")," is provided to the contract when a user instantiates a contract on the blockchain through a ",(0,r.kt)("inlineCode",{parentName:"p"},"MsgInstantiateContract"),". This provides the contract with its configuration as well as its initial state."),(0,r.kt)("p",null,"Neutron utilizes ",(0,r.kt)("a",{parentName:"p",href:"https://cosmwasm.com/"},"CosmWasm")," as the smart contract execution layer. In CosmWasm, the uploading of a contract's code and the instantiation of a contract are regarded as separate events, unlike on Ethereum. This is to allow a small set of vetted contract archetypes to exist as multiple instances sharing the same base code, but be configured with different parameters (imagine one canonical ERC20, and multiple tokens that use its code)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// src/msg.rs\n\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\npub struct InstantiateMsg {\n    pub count: i32,\n}\n")),(0,r.kt)("p",null,"The contract creator is expected to supply the initial state in a JSON message. We can see in the message definition below that the message holds one parameter count, which represents the initial count."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "count": 100\n}\n')),(0,r.kt)("h3",{id:"executemsg"},"ExecuteMsg"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecuteMsg")," is a JSON message passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"execute()")," function through a ",(0,r.kt)("inlineCode",{parentName:"p"},"MsgExecuteContract"),". Unlike the ",(0,r.kt)("inlineCode",{parentName:"p"},"InstantiateMsg"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecuteMsg")," can exist as several different types of messages to account for the different types of functions that a smart contract can expose to a user. The ",(0,r.kt)("inlineCode",{parentName:"p"},"execute()")," function demultiplexes these different types of messages to its appropriate message handler logic."),(0,r.kt)("p",null,"We have two ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecuteMsg"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Increment")," has no input parameter and increases the value of count by 1."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Reset")," takes a 32-bit integer as a parameter and resets the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"count")," to the input parameter.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// src/msg.rs\n\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\n#[serde(rename_all = "snake_case")]\npub enum ExecuteMsg {\n    Increment {},\n    Reset { count: i32 },\n}\n')),(0,r.kt)("p",null,"Any user can increment the current count by 1 using the following message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "increment": {}\n}\n')),(0,r.kt)("p",null,"Only the owner can reset the count to a specific number. See Logic below for the implementation details."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "reset": {\n    "count": 5\n  }\n}\n')),(0,r.kt)("h3",{id:"querymsg"},"QueryMsg"),(0,r.kt)("p",null,"To support data queries in the contract, you'll have to define both a ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryMsg")," format (which represents requests), as well as provide the structure of the query's output, ",(0,r.kt)("inlineCode",{parentName:"p"},"CountResponse")," in this case. You must do this because ",(0,r.kt)("inlineCode",{parentName:"p"},"query()")," will send information back to the user through structured JSON, so you must make the shape of your response known."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// src/msg.rs\n\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\n#[serde(rename_all = "snake_case")]\npub enum QueryMsg {\n    // GetCount returns the current count as a json-encoded number\n    GetCount {},\n}\n\n// We define a custom struct for each query response\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\npub struct CountResponse {\n    pub count: i32,\n}\n')),(0,r.kt)("p",null,"Fetch count from the contract using the following message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "get_count": {}\n}\n')),(0,r.kt)("p",null,"Which should return:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "count": 5\n}\n')),(0,r.kt)("h2",{id:"stitching-it-all-together-in-contractrs"},"Stitching it all together in contract.rs"),(0,r.kt)("p",null,"We've now defined the contract storage, messages the contract can receive. "),(0,r.kt)("p",null,"We now need to specify what method will be called for a given message the contract receives. In other words, what action will be taken when a certain message is received by the contract, which can optionally include updating the state of contract."),(0,r.kt)("h2",{id:"entry-points"},"Entry points"),(0,r.kt)("p",null,"Entry point defines how an external client can interact with the contract deployed on the chain."),(0,r.kt)("p",null,"The following entry points are commonly seen in contracts:"),(0,r.kt)("h3",{id:"instantiate"},"instantiate()"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"contract.rs"),", you will define your first entry-point, ",(0,r.kt)("inlineCode",{parentName:"p"},"instantiate()"),", or where the contract is instantiated and passed its ",(0,r.kt)("inlineCode",{parentName:"p"},"InstantiateMsg"),". Extract the count from the message and set up your initial state where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"count")," is assigned the count from the message"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"owner")," is assigned to the sender of the ",(0,r.kt)("inlineCode",{parentName:"li"},"MsgInstantiateContract"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// src/contract.rs\n\n#[cfg_attr(not(feature = "library"), entry_point)]\npub fn instantiate(\n    deps: DepsMut,\n    _env: Env,\n    info: MessageInfo,\n    msg: InstantiateMsg,\n) -> Result<Response, ContractError> {\n    let state = State {\n        count: msg.count,\n        owner: info.sender.clone(),\n    };\n    set_contract_version(deps.storage, CONTRACT_NAME, CONTRACT_VERSION)?;\n    STATE.save(deps.storage, &state)?;\n\n    Ok(Response::new()\n        .add_attribute("method", "instantiate")\n        .add_attribute("owner", info.sender)\n        .add_attribute("count", msg.count.to_string()))\n}\n')),(0,r.kt)("h3",{id:"execute"},"execute()"),(0,r.kt)("p",null,"This is your ",(0,r.kt)("inlineCode",{parentName:"p"},"execute()")," method, which uses Rust's pattern matching to route the received ExecuteMsg to the appropriate handling logic, either dispatching a ",(0,r.kt)("inlineCode",{parentName:"p"},"try_increment()")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"try_reset()")," call depending on the message received."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// src/contract.rs\n\n#[cfg_attr(not(feature = "library"), entry_point)]\npub fn execute(\n    deps: DepsMut,\n    _env: Env,\n    info: MessageInfo,\n    msg: ExecuteMsg,\n) -> Result<Response, ContractError> {\n    match msg {\n        ExecuteMsg::Increment {} => try_increment(deps),\n        ExecuteMsg::Reset { count } => try_reset(deps, info, count),\n    }\n}\n\npub fn try_increment(deps: DepsMut) -> Result<Response, ContractError> {\n    STATE.update(deps.storage, |mut state| -> Result<_, ContractError> {\n        state.count += 1;\n        Ok(state)\n    })?;\n\n    Ok(Response::new().add_attribute("method", "try_increment"))\n}\n\npub fn try_reset(deps: DepsMut, info: MessageInfo, count: i32) -> Result<Response, ContractError> {\n    STATE.update(deps.storage, |mut state| -> Result<_, ContractError> {\n        if info.sender != state.owner {\n            return Err(ContractError::Unauthorized {});\n        }\n        state.count = count;\n        Ok(state)\n    })?;\n    Ok(Response::new().add_attribute("method", "reset"))\n}\n')),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"try_increment()"),", it acquires a mutable reference to the storage to update the item located at the key ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),". It then updates the state's count by returning an ",(0,r.kt)("inlineCode",{parentName:"p"},"Ok")," result with the new state. Finally, it terminates the contract's execution with an acknowledgment of success by returning an ",(0,r.kt)("inlineCode",{parentName:"p"},"Ok")," result with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),"."),(0,r.kt)("p",null,"The logic for reset is very similar to increment, except this time, it first checks that the message sender is permitted to invoke the reset function (in this case, it must be the contract owner)."),(0,r.kt)("h3",{id:"query"},"query()"),(0,r.kt)("p",null,"The logic for ",(0,r.kt)("inlineCode",{parentName:"p"},"query()")," is similar to that of ",(0,r.kt)("inlineCode",{parentName:"p"},"execute()"),"; however, since ",(0,r.kt)("inlineCode",{parentName:"p"},"query()")," is called without the end-user making a transaction, the ",(0,r.kt)("inlineCode",{parentName:"p"},"env")," argument is omitted as no information is necessary."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// src/contract.rs\n\n#[cfg_attr(not(feature = "library"), entry_point)]\npub fn query(deps: Deps, _env: Env, msg: QueryMsg) -> StdResult<Binary> {\n    match msg {\n        QueryMsg::GetCount {} => to_binary(&query_count(deps)?),\n    }\n}\n\nfn query_count(deps: Deps) -> StdResult<CountResponse> {\n    let state = STATE.load(deps.storage)?;\n    Ok(CountResponse { count: state.count })\n}\n')),(0,r.kt)("p",null,"Note that deps is of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Deps"),", not ",(0,r.kt)("inlineCode",{parentName:"p"},"DepsMut")," (",(0,r.kt)("inlineCode",{parentName:"p"},"Mut")," stands for mutable) as in the ",(0,r.kt)("inlineCode",{parentName:"p"},"execute()"),", which implies that queries are for read-only operations and do not make any changes to contract's storage."))}m.isMDXComponent=!0}}]);