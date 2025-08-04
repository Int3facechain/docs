# ADR-003: Babylon Integration

## Status

Research

## Context

This ADR introduces the idea of integrating Babylon chain's Bitcoin staking with Int3face's native Bitcoin bridging. It leverages the concept of a vault as an entry point for the bridge, which allows tokens to be staked using Babylon's contract.

On the Babylon side, there are the following main entities:
1. **Validators**: Secure and operate the Babylon chain.
2. **Finality Providers**: Validators on the Bitcoin side, functioning similarly to PoS validators but for Bitcoin.
3. **BTC Stakers**: Users who intend to stake their BTC assets.

On the Int3face side, the main entities are:
1. **Validators**: Secure and operate the Int3face chain.
2. **Observers**: Facilitate bridge transfers between external chains and Int3face.

In Babylon, each finality provider has its own address in Bitcoin, which can be used for receiving delegations and eventually staking. In contrast, Int3face uses a single address representing the vault, which serves as the entry point for incoming and outgoing transfers.

Bitcoin delegation process:

![adr003_babylon_staking](/img/ADR/adr003/adr003_babylon_staking.png)

Bitcoin transfer process:

![adr003_int3face_transferring](/img/ADR/adr003/adr003_int3face_transferring.png)

The idea is to use the Int3face vault address as the staking vault. All users who use it for staking will receive an equivalent amount of funds in Cosmos-based tokens. Conversely, everyone intending to transfer will simultaneously receive bonus fees for staking. This can be considered a form of **Bitcoin Liquid Staking**.

## Approach 1

**Distribute vault funds across multiple finality providers**. As soon as the Int3face vault receives an incoming transfer, it stakes the funds using several finality providers.

![adr003_babylon_int3face_option_1](/img/ADR/adr003/adr003_babylon_int3face_option_1.png)

Difficulties:

1. Does the vault need to unbond from several finality providers to collect all necessary funds?
2. How to handle immediate unbonding if the vault doesn't have enough funds at the moment?
3. What if the vault is rotated?
4. Such token distribution is quite difficult and unsafe.
5. All transfers require TSS communication.

## Approach 2

**Transfer the asset to Babylon using IBC and stake directly, bypassing Bitcoin**. This option involves establishing the IBC connection, allowing special wrapped tokens to be transferred to Babylon and staked directly without interacting with Bitcoin.

![adr003_babylon_int3face_option_2](/img/ADR/adr003/adr003_babylon_int3face_option_2.png)

Difficulties:

1. How to properly burn/mint tokens?
2. The IBC connection is quite complex.
3. Additional work required on the Babylon side.

These questions apply to all solutions and must be addressed in detail before implementation:

1. How to process unbonding?
2. 
3. How to handle immediate unbonding?
3. In which currency do users receive incentives?
4. What will happen during vault rotation?

## References

1. BTC staking overview: https://babylonchain.io/blog/technical-preliminaries-of-bitcoin-staking
2. BTC staking background: https://babylonchain.io/blog/babylon-s-bitcoin-staking-contract
3. BTC staker guide: https://docs.babylonchain.io/docs/user-guides/btc-staking-testnet/become-btc-staker
4. Finality provider guide: https://docs.babylonchain.io/docs/user-guides/btc-staking-testnet/finality-providers/overview
5. 