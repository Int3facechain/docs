# ADR-011: Superfluid Staking

## What is Superfluid Staking?

Superfluid staking is a concept created by Osmosis that allows OSMO tokens contributed to DEX liquidity pools to be reused, continuing to generate profits through staking.

## Superfluid Staking Overview

Superfluid staking, also known as **"Proof of Useful Staking"** allows holders to simply place their assets into the liquidity pool and earn rewards from both: *trading fees* and *staking*. \
This approach is better compared with regular Staking cause allows to utilize tokens more effectively and simpler compared to Liquid Staking, 
which requires users to actively manage their staked tokens on their own.

## Flow Diagrams

**Staking**

![img.png](/img/common/staking.png)

**Liquid Staking**

![img.png](/img/common/liquid_staking.png)

**Superfluid Staking**

![img.png](/img/common/superfluid_staking.png)

## How-to Process:
1. Choose the pool you want to deposit your assets.
   1. Visit https://app.osmosis.zone/pools
   2. Select the pool containing OSMO tokens you wish to deposit.
2. Add liquidity into the pool.
3. You will receive LP tokens in return.
4. Bond the LP Tokens to receive the additional yield.
   1. Select the 'Bond Shares' button. 
   2. You will be asked to bond your tokens for 1, 7, or 14 days. The returns are proportional to the bonding period. 
   3. Choose your bonding period and bond your LP tokens. Only 14 days option has a perform superfluid staking (+5% APR)
5. Choose your preferred staking validator for superfuid staking.
6. You will receive the rewards directly in your wallet.

## Example

Alice has 500 GAMM tokens bonded to the ATOM - OSMO, she will have the equivalent value of OSMO minted, delegated to her chosen staker, and burned for her each day with Superfluid staking. \
On the user side, all she has to know is who she wants to delegate her tokens to. In order to switch delegation, she has to unbond her tokens from the pool first and then redeposit. \
Bob, who has a share of the same liquidity pool before Superfluid Staking went live, also has to re-deposit into the pool for the above process to kickstart.

## Benefits

Superfluid staking brings major benefits to the ecosystem:

1. Through superfluid staking, users support the PoS mechanism of the Osmosis blockchain while adding liquidity to their DEX.
2. Liquidity providers get higher returns. The 50% of the OSMO tokens added to the ATOM/OSMO pair are reused for staking. This way, they get two types of rewards simultaneously.
3. As it is a strong incentive for LPs, it helps to increase the LTV of the Osmosis DEX.

## Risks

However, superfluid staking brings some risks to the ecosystem:

1. Slashing can be prevented by delegating to a trusted validator. In the event that a validator is affected by slashing, the assets are allocated to the community Osmosis fund.
2. Impermanent loss, on the other hand, is a term you may be familiar with if you come from DeFi. When you deposit a pair of assets into the liquidity pool at a certain price, over time this price may depreciate and become worth less in dollar terms. This is known as an "impermanent" loss because you are not considered to have lost until you finally withdraw the assets by agreeing to take them out at their current value.

## Superfluid Staking Dogecoin on Osmosis

1. Make transfer from Dogecoin Vault into the Int3face chain.
2. The Observer detects the transfer and performs it.
3. Initiate a transfer using IBC protocol to Osmosis chain.
4. Create a new pool on Osmosis with Dogecoin and OSMO tokens.
5. Deposit Dogecoin into this pool to start earning transaction fees from swaps and rewards from superfluid staking


