# ADR-012 TON Integration

## Status

Research

## Context

The objective is to enable cross-chain transfers of TON tokens using our bridge.

### What is TON?

The Open Network (TON) is a decentralized and open internet platform made up of several components. These include: TON Blockchain, TON DNS, TON Storage, and TON Sites. TON Blockchain is the core protocol that connects TON’s underlying infrastructure together to form the greater TON Ecosystem.

TON is focused on achieving widespread cross-chain interoperability, while operating in a highly scalable secure framework. TON is designed to process millions of transactions per second (TPS), with the goal of eventually reaching hundreds of millions of users moving forward.

#### TON Bridge

TON already has a bridge implemented. It connects TON with the Ethereum Network and Binance Smart Chain. This bridge allows cross-chain transfers of TON, USDC, DAI, WBTC, jUSDT and other custom tokens on ETH network, and TON tokens on Binance.

## Approach

### High-level implementation points

#### TON Chain Client for the Observer

TON chain provides [Go SDK](https://github.com/xssnick/tonutils-go) for interacting with the TON blockchain.

1. TON observer to scan TON chain for the inbound transfers into our TON smart contract
2. Functionality to build, sign and broadcast outbound transfers
3. Functionality to update valset in the TON smart contract on keygen request
4. Monitoring

#### Smart-contract on TON chain

TON blockchain provides [FunC](https://docs.ton.org/develop/func/cookbook) - it's own language for the smart contracts.

##### State

* List of signers
  * Only these signers can acknowledge inbound transfer requests
* List of pending inbound transfers
* Amount of TON tokens in the vault
* Total volume of recently transferred tokens
* Internal parameters
  * Minimum transfer size
  * Amount of confirmations required

##### API

* Inbound Transfer { recipient, amount }
  * Acknowledged only if sent by the participant of the current signer set
  * Acknowledges inbound transfer requests
  * Counts the confirmations
  * Releases tokens to the recipient's address once the confirmation threshold reached
* Outbound Transfer { sender, recipient, amount }
  * Creates a transaction on-chain for the observers to witness
* Update Signers { new_signers_list }
  * Acknowledged only if sent by the participant of the current signer set
  * Counts the confirmations
  * Updates internal list of signers once the confirmation threshold reached
* Update Params { min_transfer_size, confirmations_required }
  * Acknowledged only if sent by the participant of the current signer set
  * Counts the confirmations
  * Updates the params once the confirmation threshold reached

#### Add TON into the x/bridge as a new asset

Create and execute gov proposal with the `MsgCreateAsset` message

#### Learn to deploy local TON chain or to connect to TON testnet

[TON provides binaries to run the chain locally](https://docs.ton.org/participate/run-nodes/local-ton) as well as [testnet network](https://docs.ton.org/participate/nodes/node-types)

### High-level flow

#### TON -> INT3

1. User deposits TON tokens into the TON smart contract
2. TON observer detects the deposit and signals Int3face about it
3. Int3face waits for the confirmation count threshold
4. Int3face mints the equivalent TON tokens to the recipient's address

#### INT3 -> TON

1. User initiates an outbound transfer request on Int3face
2. Int3face observer detects the request and signals the TON smart contract about it
3. TON smart contract waits for the confirmation count threshold
4. TON smart contract releases the tokens to the recipient's address

#### Keygen

1. Gov proposal `MsgKeyGen` with the new signers list is created and accepted on the Int3face
2. Int3face observer detects the proposal and signals TON smart contract about it
3. TON smart contract waits for the confirmation count threshold
4. TON smart contract updates internal signers list to the new one

![flow](/img/ADR/adr012/adr012_inbound_outbound_flow.png)

## Steps to implement

1. Research FunC and TON smart contract development
2. Implement the smart contract on TON
3. Deploy smart contract on TON
4. Implement TON Chain Client (RPC + Observer)
5. Integrate TON Chain Client into the Observer
6. Add new asset and parameters for TON token to the x/bridge

## References

1. [TON Introduction](https://docs.ton.org/learn/introduction)
2. [TON Smart Contract doc](https://docs.ton.org/develop/smart-contracts/)
3. [FunC doc](https://docs.ton.org/develop/smart-contracts/#func-language)
4. [TON Go SDK](https://github.com/xssnick/tonutils-go)
5. [Local TON node](https://github.com/neodix42/MyLocalTon)