# ADR-005: Bitcoin Ordinals

## Status

In progress

## Background

### Glossary

**Taproot**: a proposed enhancement to the Bitcoin protocol designed to improve the privacy and efficiency of Bitcoin transactions. Tarpool, short for "transaction aggregation and relay pool," aims to address some of the limitations and challenges associated with the current transaction processing mechanisms.

**Ordinals**: a protocol that allows for the creation and transfer of unique, non-fungible tokens (NFTs) on the Bitcoin blockchain by inscribing data onto individual satoshis. Released in January 2023.

**Runes**: an experimental protocol proposed by Casey Rodarmor, the creator of Ordinals, aimed at creating a more advanced and decentralized tokenization system on Bitcoin. Runes do not use Ordinals in their implementation.

**BRC20**: a token standard for creating and managing fungible tokens on the Bitcoin blockchain, similar to the ERC-20 standard on Ethereum. It uses the Ordinals protocol to create fungible tokens on the Bitcoin blockchain. Released in March 2023.

**Ordinox**: a cross-chain automated market maker (AMM), similar to Uniswap, but it's specifically designed for easy swaps between ERC20 tokens and Bitcoin's specific tokens.

### Taproot

* Taproot is a Bitcoin upgrade activated in November 2021.
* It enhances privacy and efficiency by enabling more complex transactions that look like regular transactions.
* Taproot combines Schnorr signatures with Merkelized Abstract Syntax Trees (MAST), allowing for more flexible smart contracts and complex spending conditions.

### Ordinals

* Ordinals are a system for numbering and tracking individual satoshis (the smallest unit of Bitcoin).
* They enable the creation of digital assets, like NFTs, directly on the Bitcoin blockchain.
* Ordinals can be used to inscribe data onto individual satoshis, which can then be transferred and traded.

Inscription content is entirely on-chain, stored in taproot script-path spend scripts. Taproot scripts have very few restrictions on their content, and additionally receive the witness discount, making inscription content storage relatively economical.

Since taproot script spends can only be made from existing taproot outputs, inscriptions are made using a two-phase commit/reveal procedure. First, in the commit transaction, a taproot output committing to a script containing the inscription content is created. Second, in the reveal transaction, the output created by the commit transaction is spent, revealing the inscription content on-chain.

### BRC20 and Runes

#### BRC20

##### Origin and Purpose:

* BRC20 was inspired by Ethereum's ERC-20 standard, aimed at creating fungible tokens on Bitcoin.
* It leverages the Ordinals protocol to inscribe data onto satoshis (the smallest unit of Bitcoin).

##### Implementation:

* BRC20 tokens use Bitcoin’s OP_RETURN script to store token-related data directly on-chain.
It relies on Bitcoin's existing infrastructure but is limited by the script size and transaction structure of Bitcoin.

##### Metadata and Storage:

* The metadata for BRC20 tokens is stored on-chain but is somewhat limited by Bitcoin’s script and transaction capabilities.
* This can lead to inefficiencies and higher transaction fees due to the larger data size inscribed on the blockchain.

##### Adoption and Use Cases:

* BRC20 has been used primarily for experimental and niche projects, and while it shows the potential for fungible tokens on Bitcoin, it has not achieved widespread adoption.

##### Development and Community:

* BRC20 was developed by an independent community exploring tokenization on Bitcoin, and it remains experimental with ongoing refinements.

#### Runes

##### Origin and Purpose:

* Runes is an experimental protocol proposed by Casey Rodarmor, the creator of Ordinals, aimed at creating a more advanced and decentralized tokenization system on Bitcoin.
* It focuses on providing a robust and scalable method for creating and managing tokens directly on the Bitcoin blockchain.

##### Implementation:

* Runes aim to keep all essential information, including metadata and transaction history, on-chain, ensuring transparency and immutability.
* The protocol is designed to be decentralized and trustless, avoiding reliance on intermediaries or centralized entities.

##### Metadata and Storage:

* Runes emphasize on-chain metadata storage, ensuring all token-related information is transparent and immutable.
* This can make the system more reliable and secure, aligning with Bitcoin's principles.

##### Adoption and Use Cases:

* Runes are intended for a wide range of use cases, including stablecoins, digital collectibles, and utility tokens.
* They aim to be interoperable with existing Bitcoin infrastructure, making it easier for users to manage their tokens using familiar tools.

##### Development and Community:

* Runes are still in the experimental stage, with active development and community engagement to explore their potential and refine the protocol.

#### Summary of Differences
* **Design Philosophy**: BRC20 is inspired by ERC-20 and adapts it to Bitcoin, while Runes aim to build a more decentralized and robust tokenization system from the ground up.
* **Implementation**: BRC20 uses OP_RETURN scripts for on-chain data storage, while Runes aim to keep comprehensive metadata and transaction history on-chain.
* **Flexibility and Use Cases**: Runes are designed for broader use cases and interoperability with existing Bitcoin infrastructure, whereas BRC20 is more limited in scope and usage.
* **Development Stage**: Both are experimental, but Runes are seen as a more forward-thinking approach to tokenization on Bitcoin.

## Context

The Int3face team aims to use the bridge to transfer BRC20 and Rune tokens from Bitcoin to Cosmos. As a result, users will have a Cosmos representation of their Bitcoin assets, which can be used in various ways, starting with Osmosis integration. This is appealing to BRC20 and Runes holders because they currently have limited options for using their assets since these protocols are relatively new. 

To initiate the transfer, users must send their funds to the dedicated vault address, which will result in minting the corresponding amount of tokens in Int3face. Int3face takes a cut of the swap fees on the dex and the bridge fees, which may be initially 0.

## Approach

The approach is the same as for the usual BTC bridging.

### Inbound transfer

![inbound](/img/ADR/adr005/inbound_transfer.png)

### Outbound transfer

![outbound](/img/ADR/adr005/outbound_transfer.png)

## Steps to implement

* Examine the Ordinox btc-service repository: create a code report and explore how to reuse their code: [62](https://github.com/Int3facechain/bridge/issues/62).
* Understand the Taproot Bitcoin update: delve into advanced Bitcoin scripting: [63](https://github.com/Int3facechain/bridge/issues/63).
* Familiarize with the BRC20 and Runes formats: run a Regtest node, deploy several BRC20 tokens and Runes, transfer them to another address, and analyze the transaction formats: [64](https://github.com/Int3facechain/bridge/issues/64).
* Consider how to integrate the Bitcoin Taproot update and determine if our dependencies need updating since the Taproot update is relatively new: [65](https://github.com/Int3facechain/bridge/issues/65).
* Add BRC20 transaction witnessing to the observer: [66](https://github.com/Int3facechain/bridge/issues/66).
* Add Runes transaction witnessing to the observer: [67](https://github.com/Int3facechain/bridge/issues/67).
* Implement custom token handling on the Int3face chain: [68](https://github.com/Int3facechain/bridge/issues/68).
* Conduct TSS-signed transactions using BRC20 and Runes within the observer: [69](https://github.com/Int3facechain/bridge/issues/69).

## BRC-20 Details

### Concept

BRC-20 represents a "smart contract" on top of Ordinals protocol with following functions:

#### Deploy BRC-20

Creates a new BRC-20 token specified within the message. Only the first deploy transfer is considered valid, other deploys for the same token should be ignored.

Inscribe the deploy function to your wallet with the desired parameters set:
```json
{
    "p": "brc-20",   // Required: Protocol identifier
    "op": "deploy",  // Required: Operation
    "tick": "tokn",  // Required: Identifier for a specific BRC-20 token
    "max": "100000", // Required: Max supply
    "lim": "1000",   // Optional: Limit max minting amount per ordinal
    "dec": "18"      // Optional: Decimal precision, default 18
}
```

#### Mint BRC-20

Mints an amount of BRC-20. Provides balance only to the first owner of the mint function inscription.

Inscribe the mint function to your wallet with the desired parameters set:
```json
{
    "p": "brc-20",  // Required: Protocol identifier
    "op": "mint",   // Required: Operation
    "tick": "tokn", // Required: Identifier for a specific BRC-20 token
    "amt": "1000"   // Required: Amount to mint
}
```

#### Transfer BRC-20

Transfer BRC-20 tokens to the recipient. Deducts from the senders balance and adds to the receivers balance, only upon the first transfer of the transfer function.

Inscribe the transfer function to your wallet with the desired parameters set, then send the inscription to the destination address to transfer the balance:
```json
{
    "p": "brc-20",    // Required: Protocol identifier
    "op": "transfer", // Required: Operation
    "tick": "tokn",   // Required: Identifier for a specific BRC-20 token
    "amt": "100"      // Required: Amount to transfer
}
```

### Implementation

#### BRC-20 Indexer

Even though the data is contained inside the BTC chain. It's not verified or indexed by the chain.
Hence, we need a way to verify and observe all of the inbound/outbound transfers of the BRC-20 funds.

We need an indexer that will:
1. Aggregate data about all of the BRC-20 tokens (denoms, total supply, minted amount)
2. Aggregate data about the BRC-20 transactions (individual balances)
3. Filter out all of the invalid transactions (above the mint limit/supply or individual balance)
4. Provide a method to verify a BRC-20 transfer by its Tx idv

Indexer examples:
1. https://github.com/unisat-wallet/libbrc20-indexer
2. https://github.com/Next-DAO/brc20_indexer

#### Support Taproot tx by Observer

BRC-20 (and Ordinals) protocol requires Taproot and Schnorr signature functionality.
Our current implementation is based on `btcd v0.22` which doesn't include the Taproot support. `btcd v0.24` adds support for the Taproot but introduces breaking changes into the `ecdsa` module interfaces.

In order to add support of BRC-20 we need:
1. Upgrade `btcd` to `v0.24` in:
   - Int3face Observer repo
   - Thorchain go-tss
   - Thorchain tss-lib
   - Thorchain txscript repos
2. Integrate FROST (Schnorr based TSS) into the Observer OR add Schnorr signature support into TSS
   - Current TSS implementation only supports `ecdsa` signatures

#### FROST

[FROST](https://github.com/chainx-org/chainx-technical-archive/blob/main/LiuBinXiao/Taproot/06_Schnorr%20threshold%20signatures%20FROST.md) is a round-optimized Schnorr threshold signing scheme that allows true threshold signatures, so that the signing operation requires only a threshold number of participants.

| Lib            | Language | Signature Rounds | Audited | Link                                                    |
| -------------- | -------- | ---------------- | ------- | ------------------------------------------------------- |
| ZCash          | Rust     | 2                | Yes     | [Link](https://github.com/ZcashFoundation/frost)        |
| Bytemare       | Go       | 2                | No      | [Link](https://github.com/bytemare/frost)               |
| Taurus         | Go       | 2                | No      | [Link](https://github.com/taurushq-io/multi-party-sig)  |
| Banca d'Italia | C        | -                | No      | [Link](https://github.com/bancaditalia/secp256k1-frost) |

### Script

Each script should include an "envelope":
```
CHECKSIG
OP_FALSE
OP_IF
    OP_PUSH "ord"
    OP_PUSH 1
    OP_PUSH {Content-Type MIME as string} ("text/plain;charset=utf-8" in our case)
    OP_PUSH 0
    OP_PUSH {Data as JSON string}
OP_ENDIF
```
Each data push is limited to 520 bytes, multiple data pushes must be used for large inscriptions.

## References

1. [Ordinox: btc-service repo](https://github.com/ordinox/btc-service)
2. [Ordinox: btc-service code report](/img/ADR/adr005/btc-service-code-report.md)
3. [Ordinox: btc-service dependency graph](/img/ADR/adr005/btc-service-dep-graph.png)
4. [BRC-20 Indexer Implementation](https://github.com/unisat-wallet/libbrc20-indexer/tree/main)
5. 