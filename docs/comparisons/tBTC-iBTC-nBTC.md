# tBTC & nBTC

# tBTC

tBTC is a decentralized bridge between Bitcoin and Ethereum, enabling Bitcoin holders to access DeFi and the expanding Web3 universe without relying on intermediaries. It allows users to bridge their Bitcoin assets securely and without the need for trust in third parties.

![tbtc_arch](/img/comparisons/tbtc_arch.png)

## Components

### Bridge
- Deployed as smart-contract on the ETH chain
- Handles deposits to the vault
- Issues withdrawal, sweeping and move requests to the Wallet Coordinator
- Issues balance updates to the Bank
- Issues create/close vault wallets requests to the Wallet Registry

### Wallet Coordinator
- Deployed as smart-contract on the ETH chain
- Handles withdrawal, sweeping and move requests for the BTC chain

### Wallet Registry
- Deployed as smart-contract on the ETH chain
- Handles creating and closing vault wallet on the BTC chain

### Bank
- Deployed as smart-contract on the ETH chain
- Keeps track of tBTC balances and allowances
- DOES NOT issue ERC-20 tokens

### tBTC Vault
- Deployed as smart-contract on the ETH chain
- Mints/burns tBTC tokens
- Handles tBTC tokens on user's behalf

### Random Beacon
- Deployed as smart-contract on the ETH chain
- Provides randomness to the validation group selection and key generation process

### Threshold Node
- Deployed off-chain
- Handles key generation for the DKG process
- Handles signing transactions

### TSS
- Multi-party threshold ECDSA algorithm
- Randomly selected 51-of-100 wallet signers to produce signature

# Nomic BTC

Nomic BTC is a Bitcoin sidechain based on the Tendermint consensus protocol, enabling the development of decentralized networks which coordinate to manage reserves of Bitcoin, allowing for custom application code and smart contracts which use Bitcoin as the native currency.

![nbtc_arch](/img/comparisons/nbtc_arch.png)

## Components

### Nomic Node

- Handles processing inbound/outbound transfers
- Stores transactions waiting to be signed
- Stores public key shares from signers

### Relayer

- Observes BTC chain
- Broadcasts new BTC block info to the Nomic chain
- Broadcasts deposits to the Nomic chain
- Broadcasts transactions from the Nomic chain to BTC

### Signer

- Generates new key shares
- Submits key shares to the Nomic chain

### Reserve Wallet (Vault)

- A Taproot script - "reserve script"

## Signing

### Checkpoints

Transaction on the BTC chain which spends from the current "reserve script" incorporates:
- Collecting latest deposits
- Updating the "reserve script" (vault) to reflect changes in signatory set
- Executing pending withdrawals

### Flow

1. Collect smallest set of signers with >2/3 voting power - Musig2 N-of-N
2. Create aggregated pub key for this set
3. Create a "fallback script" - a large weighted multisig script for all signers
   * Allows correct funds unlock in case Musig2 aggregation fails
4. Relayers broadcast signed checkpoint txs to the BTC chain

# iBTC

iBTC facilitates cross-chain asset transfers between Int3face and various external chains to enable decentralized cross-chain asset transfers, seamlessly connecting Int3face with other blockchain ecosystems.

![ibtc_arch](/img/comparisons/ibtc_arch.png)

## Components

### Bridge
- Deployed as part of the Int3face node
- Handles processing inbound/outbound transactions
- Issues mint/burn requests to the Token Factory

### Token Factory
- Deployed as part of the Int3face node
- Handles minting/burning tokens to/from user's wallet

### Bank
- Deployed as part of the Int3face node
- Keeps track of user's balances on the Int3face chain

### UTXO Chain Observer
- Deployed off-chain
- Observes target chain for inbound transactions
- Notifies Observer about inbound transactions

### UTXO Chain Client
- Deployed off-chain
- Handles communication (signing, broadcasting, queries) with the target chains

### Int3face Chain Observer
- Deployed off-chain
- Observes Int3face chain for outbound transactions
- Notifies Observer about outbound transactions

### Int3face Chain Client
- Deployed off-chain
- Handles communication (signing, broadcasting, queries) with the Int3face chain

### Observer
- Deployed off-chain
- Handles routing inbound/outbound transactions between chains

### TSS
- Multi-party 2/3+1 threshold ECDSA algorithm

# Comparison

| Asset               | tBTC                                                                      | iBTC                                                          | Nomic BTC                                                 |
| ------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------- | --------------------------------------------------------- |
| Blockchain          | Ethereum                                                                  | Int3face (Cosmos)                                             | Nomic (Cosmos)                                            |
| Token               | ERC-20                                                                    | Custom Token Factory token (IBC compatible)                   | nBTC (IBC compatible)                                     |
| Finality            | Settles on ETH                                                            | Settles on Int3face                                           | Settles on Nomic                                          |
| Deployment          | On-chain smart contracts and off-chain                                    | Part of the chain and off-chain                               | Sidechain network                                         |
| TSS                 | Multi-party 51-of-100 threshold ECDSA                                     | Multi-party 2/3+1 threshold ECDSA                             | Musig2 N-of-N for 2/3 of voting power + "fallback" script |
| Deposit flow        | Manually triggered by user after transfer to vault                        | Automatically triggered by observer                           | Manually triggered by user after transfer to vault        |
| Deposit script      | P2SH/P2WSH with custom sig script format                                  | P2PK, P2PKH, P2WPKH, P2SH, P2WSH with additional OP_RETURN tx | P2TR with OP_RETURN tx and optional timelock              |
| Withdrawal flow     | Triggered by user with transaction to bridge                              | Triggered by user with transaction to bridge                  | Triggered by user with transaction to bridge              |
| Withdrawal script   | P2PKH, P2WPKH, P2SH, P2WSH                                                | P2PK, P2PKH, P2WPKH, P2SH, P2WSH                              | P2PK, P2PKH, P2WSH                                        |
| Ownership           | Vault handles tokens on user's behalf                                     | Tokens reside on user's wallet                                | Tokens reside on user's wallet                            |
| Vaults              | Multiple active vaults                                                    | Single vault                                                  | Single vault                                              |
| Vault rotation      | Triggered on timeout, reaching an amount of funds or failing to heartbeat | TBD                                                           | On timeout, ideally - each block                          |
| Fees                | Mint 0%, Withdraw 0.2%                                                    | TBD                                                           | Deposit 1%, Withdrawal 0%                                 |
| Sweeping            | Each 8 hours                                                              | TBD                                                           | On the vault rotation                                     |
| Validator selection | Token-weighted selection                                                  | TBD                                                           | Token-weighted selection                                  |
| Refunds             | Embedded into tx script                                                   | TBD                                                           | Timelock embedded into the tx script                      |
| Valset entry        | Stake of 40,000T                                                          | TBD                                                           | No info                                                   |
| Unstake period      | 45 days                                                                   | TBD                                                           | 14 days                                                   |
