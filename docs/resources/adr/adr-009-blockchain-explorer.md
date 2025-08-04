# ADR-009: Blockchain Explorer

## Status

Done

## Context

The Int3face chain requires a blockchain explorer to effectively monitor and interact with the network.
An explorer will provide essential visibility into the chain's operations, allowing for real-time and historical analysis of blocks, transactions, and addresses.
It's crucial for both developers and stakeholders to trace transaction histories, audit balances, and verify network activity, enhancing transparency and trust in the Int3face chain.

## Steps to implement

1. **Research**:
   - Evaluate existing blockchain explorers that support Cosmos SDK.
   - Compare features, options, and security measures to identify the best fit for our needs.

2. **Deploy local explorer**:
    - Prepare a dedicated node to run the explorer software.
    - Configure the explorer to connect to the Int3face chain and index relevant data.
   
3. **Integration into public explorer**:
   - Choose a public blockchain explorer to integrate with.
   - Prepare the necessary code and APIs to feed Int3face chain data into the explorer.
   - Collaborate with the development team of an explorer to integrate the Int3face chain.
   - Ensure that the explorer accurately represents Int3face chain data and provides real-time updates.

## Research

### Existing blockchain explorers

Top most used block explorers offered by the Cosmos ecosystem: https://cosmos.network/block-explorers/

1. **MintScan**:
   - Official website: [MintScan](https://www.mintscan.io/).
   - Closed-source, proprietary explorer developed by [Cosmostation](https://cosmostation.io/).
   - Leading, most robust explorer for Cosmos SDK-based chains, on *07.24* has:
     - 80 mainnets & testnets
   - Can be requested to extension through the fork of [chainlist](https://github.com/cosmostation/chainlist) repository.
   - Features:
     - Multiple networks support
       - Cosmos SDK based chains (Cosmos, Osmosis, Celestia, etc)
       - EVM compatible chains (Kava)
     - Detailed information on (with examples by Celestia):
       - Informative dashboard: [example](https://www.mintscan.io/celestia)
       - Validators: [example](https://www.mintscan.io/celestia/validators)
       - Blocks: [example](https://www.mintscan.io/celestia/block)
       - Transactions: [example](https://www.mintscan.io/celestia/tx)
       - Assets: [example](https://www.mintscan.io/celestia/assets)
       - Accounts: [example](https://www.mintscan.io/celestia/address)
       - Proposals: [example](https://www.mintscan.io/celestia/proposals)
       - Relayers: [example](https://www.mintscan.io/celestia/relayers)
       - DApps ecosystem: [example](https://www.mintscan.io/celestia/ecosystem)
       - Blockchain parameters: [example](https://www.mintscan.io/celestia/parameters)

2. **Ping.Pub Dashboard**:
    - Official website: [Ping Dashboard](https://ping.pub/).
    - Open-source explorer developed by [Ping.pub](https://github.com/ping-pub).
    - Most widely used explorer, encountered on *07.24* has:
      - 113 mainnets & testnets.
    - Features:
      - Supports Cosmos SDK based chains.
      - Provides detailed information on (with examples by Cosmos Hub):
        - Dashboard: [example](https://ping.pub/cosmos)
        - Blockchain parameters: [example](https://ping.pub/cosmos/parameters)
        - Governance: [example](https://ping.pub/cosmos/gov)
        - Staking: [example](https://ping.pub/cosmos/staking)
        - Blocks: [example](https://ping.pub/cosmos/block)
        - Transactions: [example](https://ping.pub/cosmos/tx)
        - Uptime: [example](https://ping.pub/cosmos/uptime)
        - IBC: [example](https://ping.pub/cosmos/ibc/connection/connection-0)
        - Supply: [example](https://ping.pub/cosmos/supply)
        - Consensus state: [example](https://ping.pub/cosmos/consensus)
        - Cosmwasm: [example](https://ping.pub/cosmos/cosmwasm)
        - State sync: [example](https://ping.pub/cosmos/statesync)
        - Widgets: [example](https://ping.pub/cosmos/widget)
    - Architecture:
      - Consists only from a light client (frontend app) which fetches data from a full-nodes without any caching.
      - Scheme:
        + ![image](/img/common/ping_pub_architecture.png)

3. **Big Dipper**:
    - Official website: [Big Dipper](https://bigdipper.io/).
    - Open-source explorer developed by [Forbole](https://forbole.com/).
    - Has two versions:
      - [Big Dipper (legacy)](https://github.com/forbole/big-dipper) monolithic explorer.
      - [Big Dipper 2.0](https://github.com/forbole/big-dipper-2.0-cosmos) modular explorer.
    - Popular explorer, encountered on *07.24* has:
      - 43 mainnets & testnets. 
    - Features:
      - Supports Cosmos SDK based chains.
      - Provides information on (with examples by Cheqd):
        - Overview: [example](https://explorer.cheqd.io/)
        - Blocks: [example](https://explorer.cheqd.io/blocks)
        - Validators: [example](https://explorer.cheqd.io/validators)
        - Transactions: [example](https://explorer.cheqd.io/transactions)
        - Proposals: [example](https://explorer.cheqd.io/proposals)
        - Accounts: [example](https://explorer.cheqd.io/accounts)
        - Blockchain params: [example](https://explorer.cheqd.io/params)
    - Architecture:
      - Consists of a 
        - Frontend UI App
        - Three backend components 
          - PostgresSQL DB: used as a cache to improve performance.
          - BDJuno: a middleware that fetches data from the full-node and stores it in the DB.
          - Hasura: a GraphQL API that serves data to the frontend.
      - Scheme:
        + ![image](/img/common/big_dipper_architecture.png)

### Comparative Table of Blockchain Explorers

| Explorer           | Network Support                         | Data Visualization                             | User Interface                | API Access                   | Real-time Updates | Search Functionality                                 | Customizability           | Security Features                  | Mobile Responsiveness  | Integration Ease        |
|--------------------|-----------------------------------------|------------------------------------------------|-------------------------------|------------------------------|-------------------|------------------------------------------------------|---------------------------|------------------------------------|------------------------|-------------------------|
| **MintScan**       | Cosmos SDK based, EVM compatible chains | Blocks, Transactions, Validators, Assets       | Highly intuitive and detailed | Yes                          | Yes               | Transactions, blocks, addresses                      | Limited                   | Standard HTTPS and data validation | Fully responsive       | Moderate to high        |
| **Ping Dashboard** | Cosmos SDK based chains                 | Validators, Proposals, Governance              | Simplified and minimalistic   | Limited API capabilities     | Yes               | Limited to blocks and validators                     | High (modular components) | Basic security measures            | Responsive             | High                    |
| **Big Dipper**     | Cosmos SDK based chains                 | Blocks, Transactions, Validators, Voting power | Detailed with rich features   | Extensive API for developers | Yes               | Extensive, including transactions, blocks, addresses | Moderate                  | HTTPS, rate limiting               | Fully responsive       | High                    |


## Solution

- Installed a local Big Dipper explorer to monitor the Int3face chain. UI: [Big Dipper](http://95.217.153.1:13005/int3face)
