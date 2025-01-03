# THORChain & ZetaChain

## ZetaChain

### Cross-Chain Message Passing (CCMP)

1. An end user interacts with a Contract C1 on Chain A.
2. The interaction leaves an event or transaction memo, with user specified [chainID,
   contractAddress, message]. (the message is arbitrarily encoded application
   data in binary format.
3. ZetaChain observers (in zetaclient) pick up this event/memo and report to
   zetacore, which verifies the inbound transaction.
4. zetacore modifies the CCTX (cross-chain tx) state variable with OutboundTxParams
   which instructs the TSS signers (in zetaclient) to build, sign, and broadcast
   external transaction.
5. The zetaclient TSS signers observe the OutboundTxParams in the CCTX, and
   build outbound tx, enter into a TSS keysign ceremony to sign the transaction,
   and then broadcast the signed transaction to the external blockchains. For
   CCMP, the outbound transaction is mainly calling the user specified contract
   with specified addresses and parameters.
6. The CCTX structure also tracks the stages/status of the cross-chain transaction.
7. Once the broadcasted transaction is included in one of the blocks (said to be
   “mined” or “confirmed”), zetaclients will report such confirmation to zetacore,
   which will update the CCTX status.
8. If the “confirmed” outbound transaction was successful, the CCTX status becomes OutboundMined, and the CCTX is
   considered in its terminal state and
   will not be updated anymore. This CCTX processing is completed.
9. If the “confirmed” outbound transaction is failure (e.g. revert on Ethereum
   chains), then the CCTX will updates it status to PendingRevert if possible, or
   Aborted if revert is not possible. The CCTX processing is completed if it
   goes to Aborted status.
10. If the new status is “PendingRevert”, a second OutboundTxParams should be
    already in the CCTX, which instructs the zetaclients to create a “Revert” outbound tx to the incoming chain &
    contract, allowing the incoming contract to
    implement a application level revert function to cleanup contract state.
11. The zetaclients will build the revert transaction, enter into TSS keysign ceremony to sign the transaction, and
    broadcast to the incoming blockchain (Chain
    A in this case).
12. Once the revert transaction is “confirmed” on Chain A, the zetaclients will
    report the transaction status to zetacore.
13. If the revert transaction is successful, the CCTX status becomes Reverted, and
    the CCTX processing is completed.
14. If the revert transaction is failure, the CCTX status becomes Aborted, and the
    CCTX processing is completed.

### CCMP success

![success](/img/comparisons/zetachain_success-Successful_Contract_Call.png)

### CCMP failure

![failure](/img/comparisons/zetachain_failure-Failed_Contract_Call.png)

## Comparison Table

| Asset                | THORChain                                                                     | ZetaChain                                                                                                                  | Int3face                                                    |
|----------------------|-------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| Blockchain           | THORChain (Cosmos)                                                            | ZetaChain (Cosmos)                                                                                                         | Int3face (Cosmos)                                           |
| Type                 | Proof-of-Stake                                                                | Proof-of-Authority                                                                                                         | Proof-of-Authority                                          |
| Token Standart       | None                                                                          | ZRC-20 (specific internally-supported)                                                                                     | None                                                        |
| Deployment           | Off-chain Bifrost, THOR node, external full nodes                             | Off-chain ZetaClient observer, off-chain ZetaClient sequencer, ZetaChain node, external full nodes or external light nodes | Off-chain Observer, Int3face node, external full nodes      |
| Signing              | Multi-party 2/3+1 TSS ECDSA                                                   | Multi-party 2/3+1 TSS ECDSA                                                                                                | Multi-party 2/3+1 TSS ECDSA                                 |
| Cross-chain Strategy | Notary scheme (third-party blockchain as a trusted entity)                    | Notary scheme (third-party blockchain as a trusted entity)                                                                 | Message delivery service / Relay                            |
| Main Idea            | Atomic Trustful Swaps                                                         | Atomic Trustful Smart Contract Execution                                                                                   | Trustless Transfers                                         |
| Use Case             | Swap tokens from the Chain A to the Chain B                                   | Execute smart contracts from the Chain A on the Chain B                                                                    | Transfer tokens from the Chain A to Int3face                |
| Ownership            | Tokens reside on user's wallet, execution is secured by TSS                   | Tokens/operations reside on user's wallet/dApp, execution is secured by TSS                                                | Tokens reside on user's wallet, execution is secured by TSS |
| Vaults               | Multiple vaults – multiple blockchains                                        | Multiple smart contracts – multiple blockchains                                                                            | One vault – one blockchain                                  |
| Vault Rotation       | Triggered automatically with some period                                      | TBD                                                                                                                        | On-demand, after the governance proposal                    |
| Fees                 | Gas fees (Zeta **AND** external chains), Slip Fees, LP fees, Outbound TX fees | Gas fees (Zeta **AND** external chains), relayer fees, CCMX fees, LP fees + bridge fees (if applicable)                    | Gas fees (Int3face **OR** external chain), 0% bridging fee  |
| Transfer Internals   | Internal liquidity pools                                                      | Internal liquidity pools / Internal RPC routing                                                                            | None                                                        |
| Validator selection  | Automatic weight-based selection                                              | Selected entities for observers, arbitrary users for sequencers                                                            | Selected entities                                           |
| Refunds              | Triggered upon failed transactions                                            | Triggered upon failed transactions                                                                                         | TBD                                                         |