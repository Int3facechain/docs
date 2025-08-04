# ADR-004 Solana Integration

## Status

Research

## Context

The objective is to enable cross-chain transfers of SOL tokens using our bridge.

### Requirements

1. Int3face full-node
2. Int3face Observer (with Int3face and Solana clients)
3. Access to Solana RPC (either an own node or a third-party provider)
4. Smart contract/vault on Solana

## Approach

The flow should be pretty straightforward:

### SOL -> INT3

1. User deposits SOL tokens into the Solana smart contract/vault
2. The Solana observer detects the deposit and signals Int3face about it
3. Int3face waits for the confirmation count threshold
4. Int3face mints the equivalent SOL tokens to the recipient's address

### INT3 -> SOL

1. User initiates an outbound transfer request on Int3face
2. The Int3face observer detects the request and signals the Solana smart-contract about it
3. The Solana smart contract waits for the confirmation count threshold
4. The Solana smart contract releases the tokens to the recipient's address

![flow](/img/ADR/adr004/adr004_inbound_outbound_flow.png)

### Solana smart-contract/Vault 

#### State

* List of signers
  * Only these signers can acknowledge inbound transfer requests
* List of pending inbound transfers
* Amount of SOL tokens in the vault (maybe managed automatically)
* Internal parameters
  * Minimum transfer size
  * Confirmations required

#### API

* Inbound Transfer { recipient, amount }
  * Acknowledges inbound transfer requests
  * Counts the confirmations
  * Releases tokens to the recipient's address once the confirmation threshold reached
* Outbound Transfer { sender, recipient, amount }
  * Creates a transaction on-chain for the observers to witness
* Add Signer { signer_address }
  * Adds a new signer to the signers pool
  * Accessible only by the authority entity
* Remove Signer { signer_address }
  * Removes a signer from the signers pool
  * Accessible only by the authority entity
* Methods to modify internal parameters (minimum transfer size, confirmations required)

## Steps to implement

1. Research Solana smart contract development
2. Implement the smart contract/vault on Solana
3. Deploy the smart contract on Solana
4. Implement the Solana Chain Client (RPC + observer)
5. Integrate the Solana Chain Client into the Observer
6. Add the new asset and parameters for Solana to the Bridge module

## References
1. [atomiq.exchange description](https://docs.atomiq.exchange/)
2. [Solana Smart Contract doc](https://solana.com/docs/core/programs)
3. [Solana RPC API](https://solana.com/docs/rpc)
4. 