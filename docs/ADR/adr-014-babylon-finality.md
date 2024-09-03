# ADR-014: Babylon Finality

## Status

Research

## Context

This ADR introduces the idea of integrating Babylon chain's Bitcoin staking with Int3face's native Bitcoin bridging. It leverages the concept of a vault as an entry point for the bridge, which allows tokens to be staked using Babylon's contract. Furthermore, Babylon Finality helps secure the chain with Bitcoin PoS consensus.

On the Babylon side, there are the following main entities:
1. **Validators**: Secure and operate the Babylon chain.
2. **Finality Providers**: Validators on the Bitcoin side, functioning similarly to PoS validators but for Bitcoin.
3. **BTC Stakers**: Users who intend to stake their BTC assets.

On the Int3face side, the main entities are:
1. **Validators**: Secure and operate the Int3face chain.
2. **Observers**: Facilitate bridge transfers between external chains and Int3face.

In Babylon, each finality provider has its own address in Bitcoin, which can be used for receiving delegations and eventually staking.

## Integration options

Int3face might get the security by adding support for finality providers. There are several ways on how to make this liquidity work for security:
1. Providing headers for timestamping (and optionally receiving their checkpointing data). It’s not a strong economic security by itself, since effectively the Babylon Finality Providers could double-sign blocks — they only can’t do that for Babylon’s blocks. This can be used for:
   1. Protecting against long-range attacks.
   2. Providing fast unbonding.
   3. Having a ‘safe’ ledger that can be used as reference for a previous chain state.
2. **Code Solution**[7]: Provisioning BTC security and requiring a Babylon Finality Provider set’s consensus to consider a block finalized. This provides similar benefits as timestamping, but it also makes it so the Bitcoin economic security is integrated into the whole process. Since the Finality Providers in this case do sign the target chain blocks, if they double-sign, that’s slashable. Therefore, the main integration step is to install FPs on every validator node and deploy a specific [smart contract](https://github.com/babylonlabs-io/babylon-contract) produced by Babylon. This also includes two main ways[8] how to integrate Babylon in the consensus:
   * **Power mixing**: Power mixing: The PoS chain validators are integrated into the Babylon Chain as Finality Providers. Through an oracle, their power is mixed to the original chain’s asset to determine the validator’s weight. It does require changing the consensus protocol significantly.
   * **Dual quorum**: : The Finality Providers, either as the PoS chain validators or as a separate actor set, sign blocks as soon as they’re finalized by the base protocol consensus. This additional signature constitutes either the block’s actual finality or an additional finality, depending on how the chain wants to deal with this fundamentally. A good point is the additional finality approach provides more security to actors that expect it, while not absolutely requiring protocol changes. This is what’s suggested in the [current Babylon-Cosmos Hub proposal](https://forum.cosmos.network/t/chips-signaling-phase-simplified-babylon-x-cosmos-hub/13932).
3. **No-code Solution**[5]: Babylon smart contract for providing a DA Layer. This assumes no code from the consumer chain side, while making Babylon a DA Layer for finality signatures. Also, this solution involves deploying backends for verifying these signatures. The whole process might look like a proof in optimistic rollups. 

## Bitcoin delegation

![delegation](/img/ADR/adr014/babylon-delegate.svg)

1. A user delegates BTC to FP using BTC Staker
2. BTC Staker submits a delegation proof to Babylon
3. Babylon updates the FP's voting power

## Bitcoin finality

![babylon-finality.svg](/img/ADR/adr014/babylon-finality.svg)

1. Int3face produces a new block and finalizes it with its own consensus
2. Now, Int3face passes the block to the special smart contract[7] and starts waiting for FPs to tally the block
3. Tally request is sent to the smart contract
4. FPs witness the signable block and generate their signatures
5. Signatures are submitted to Babylon
6. Smart contract then receives a final tally confirmation through Babylon IBC Relayer
7. Smart contract submits signed block to Int3face, the block is now considered finalized

## More Glossary

Finality Gadget is a modified Cosmos BFT implementation that includes an additional finality round on top of the standard consensus, where finality providers sign on blocks using their Bitcoin-staked voting power. However, only the active Finality Providers are included in the voting round (and receive rewards) — the Babylon Chain considers as active the first X Finality Providers in terms of overall voting power through the parameter `max_active_finality_providers`.

## Open Questions

1. In general case, how many FPs should be running on the PoS chain to make Babylon securely work?

## References

1. BTC staking overview: https://babylonchain.io/blog/technical-preliminaries-of-bitcoin-staking
2. BTC staking background: https://babylonchain.io/blog/babylon-s-bitcoin-staking-contract
3. BTC staker guide: https://docs.babylonchain.io/docs/user-guides/btc-staking-testnet/become-btc-staker
4. Finality provider guide: https://docs.babylonchain.io/docs/user-guides/btc-staking-testnet/finality-providers/overview
5. BTC staking with an external DA contract: https://emphasized-acoustic-f68.notion.site/BTC-staking-integration-without-consumer-side-change-99fe1ff56b324ebbbe745b9fdc838463
6. Babylon Phase-1 Mainnet: https://medium.com/babylonlabs-io/babylon-bitcoin-staking-mainnet-launch-phase-1-9188a2a1bf46
7. Babylon FP smart contract: https://github.com/babylonlabs-io/babylon-contract
8. Babylon overview: https://nethermind.notion.site/EXT-Babylon-Overview-d0c45a31668e4425b9fe501ccb9a3897