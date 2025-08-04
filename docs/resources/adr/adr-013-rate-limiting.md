# ADR-010: Rate Limiting

## Status

Design

## Context: Rate Limit

**Rate limiting** is a strategy used to restrict the amount of incoming volume over a specified period of time. For
instance, consider a scenario where the limit is set to 5 BTC every day. Should the module receive more than 5 BTC
within this 24-hours timeframe, any excess volume above the permitted amount would not be minted and instead be placed
in **quarantine** (for more details, please see the [Quarantine](#quarantine) section). This approach is crucial for
ensuring chain security, as it prevents the system from being overwhelmed by excessive, uncontrolled minting.
Essentially, rate limiting acts as a safeguard, setting a maximum on potential losses the chain might incur due to
unforeseen malicious activities.

The Int3face rate limiting is inspired
by [the Osmosis IBC Rate Limiting](https://github.com/osmosis-labs/osmosis/tree/main/x/ibc-rate-limit)
and [the Stride-Labs native golang module](https://github.com/Stride-Labs/ibc-rate-limiting/tree/main).

## Context: Quarantine

The **quarantine** mechanism ensures the smooth handling of inbound transfers, even during periods when asset activity
is paused due to rate limiting, maintenance, or other factors that might otherwise halt the minting process.

The **quarantine** solves the following problem: when the module is unable to process transfers for reasons like
exceeding rate limits, maintenance shutdowns, or other transfer-blocking circumstances, it cannot accept new transfers.
For outbound transfers, this is straightforward, as new requests are simply rejected with an error message. However,
managing inbound transfers is more complex. Users perceive inbound transfers as transactions to the dedicated **vault**,
and since the incoming flow on external chains can't be directly controlled, users might continue sending transfers
irrespective of module availability.

Refunding these transfers could be an option, but it's neither efficient nor entirely secure. Therefore, the *
*quarantine** approach is employed. Transfers that cannot be minted immediately are placed in the **quarantine**, to be
processed at a later, more suitable time. Crucially, **quarantine** does not block transfers; it merely defers them.
This process is transparent, informing users that their transfers are delayed but will be processed as soon as
conditions allow.

## Existing Hacks

### Polygon

- The Polygon bridge hack in 2022 was caused by a vulnerability in the smart contract logic. The issue was that one privileged contract could call another contract, allowing the attacker to drain funds.
- The vulnerability was due to a lack of proper access controls and validation in the contract code. This allowed the attacker to bypass intended security measures.
- The hack resulted in the loss of over $190 million worth of crypto assets.

### BNB Chain

- The BNB Chain bridge hack in 2022 was due to a vulnerability in the Merkle root verification process in the smart contract.
- Attackers were able to forge Merkle proofs, allowing them to withdraw funds from the bridge contract.
- This was caused by insufficient validation of the Merkle proof data submitted by users when making withdrawals.
- Approximately $570 million was stolen in this attack.

### Wormhole

- The Wormhole bridge, which connects Solana to other blockchains, was hacked in 2022 due to issues with Solana signature verification in the smart contracts.
- Attackers were able to forge Solana signatures, tricking the bridge contract into approving unauthorized transfers.
- This was a result of improper validation of the Solana-originated data used in the bridge's logic.
- The hack led to the loss of over $320 million in crypto assets.

### THORChain

- The THORChain bridge was hacked multiple times in 2021 due to vulnerabilities in the Bifrost Go code used in the project.
- The issues allowed attackers to exploit the bridge's liquidity pools and drain funds.
- The vulnerabilities were related to the complex cross-chain transaction handling and security measures implemented in the Bifrost Go code.
- THORChain lost over $8 million in these attacks.

## Rate Limiting: Accepted approach

Each rate limit has a configurable threshold that dictates the max inflow/outflow along the cross-chain asset. The
threshold is represented as a percentage of the total value. The channel value is calculated by querying the total
supply of the denom at the start of the time window, and it remains constant until the window expires. For instance, the
rate limit described above might have a threshold of 10% for both inflow and outflow. If the total supply
of `bitcoin-btc` was 100, then any transfer that would cause a net inflow or outflow greater than 10 (i.e. greater than
10% the channel value) would be rejected. Once the time window expires, the net inflow and outflow are reset to 0 and
the channel value is re-calculated.

The _net inflow_ and outflow is used (rather than the total inflow/outflow) to prevent DOS attacks where someone
repeatedly sends the same token back and forth across the same channel, causing the rate limit to be reached.

### Example

Let's say we created a 24-hour rate limit on `bitcoin-btc` with a 10% send and receive threshold.

1. At the start of the window, the supply will be queried, to determine the channel value. Let's say the total supply
   was 100
2. If someone transferred `8bitcoin-btc` from `Bitcoin -> Int3face`, the `Inflow` would increment by 8
3. If someone tried to transfer another `8bitcoin-btc` from `Bitcoin -> Int3face`, it would exceed the quota
   since `(8+8)/100 = 16%` (which is greater than 10%) and thus, the transfer would be rejected.
4. If someone tried to transfer `8bitcoin-btc` from `Int3face -> Bitcoin`, the `Outflow` would increment by 12. Notice,
   even
   though 12 is greater than 10% the total channel value, the _net_ outflow is only `8bitcoin-btc` (since it's offset by
   the `8btc` `Inflow`). As a result, this transaction would succeed.
5. Now if the person in (3) attempted to retry their transfer of`8bitcoin-btc` from `Bitcoin -> Int3face`, the `Inflow`
   would increment by 8 and the transaction would succeed (leaving a net inflow of 4).
6. Finally, at the end of the 24 hours, the `Inflow` and `Outflow` would get reset to 0 and the `ChannelValue` would be
   re-calculated. In this example, the new channel value would be 104 (since more `bitcoin-btc` was sent to Stride, and
   thus more `bitcoin-btc` was minted)

| Step |            Description            | Transfer Status | Inflow | Outflow | Net Inflow | Net Outflow | Channel Value |
|:----:|:---------------------------------:|:---------------:|:------:|:-------:|:----------:|:-----------:|:-------------:|
|  1   |        Rate limit created         |                 |   0    |    0    |            |             |      100      |
|  2   |  8bitcoin-btc Bitcoin → Int3face  |   Successful    |   8    |    0    |     8%     |             |      100      |
| 3.1  |  8bitcoin-btc Bitcoin → Int3face  |    Rejected     |   16   |    0    | 16% (>10%) |             |      100      |
| 3.2  | The TX is put into the quarantine |                 |   8    |    0    |     8%     |             |      100      |
|  4   | 12bitcoin-btc Int3face → Bitcoin  |   Successful    |   8    |   12    |            |     4%      |      100      |
|  5   |  8bitcoin-btc Bitcoin → Int3face  |   Successful    |   16   |   12    |     4%     |             |      100      |
|  6   |            Quota Reset            |                 |   0    |    0    |            |             |      104      |

## Quarantine: Accepted approach

The **quarantining** might be initiated right after an inbound transfer reaches the required number of votes for
processing. When a transfer receives the final necessary vote, the module evaluates it against the asset's rate limits.
If the transfer exceeds these limits, it is added to the end of the quarantine queue. This queue can be activated for
processing through a governance proposal. Notably, **quarantining** allows for partial execution: if a part of the
transfer falls within the rate limits, that portion will be minted, while the remainder goes into the queue.

There are two methods for managing quarantined assets:

* Simply storing the queue in the state. Here, if rate limits are exceeded, the coins are added to the state queue
  without minting. Upon release, the tokenfactory's Mint function is called for the relevant addresses.
* Minting all coins to a special **quarantine** address (not the destination address) immediately after finalization.
  The coins are then transferred to their intended addresses upon release following a governance proposal. This method
  still requires the state queue, but operations are based solely on straightforward transfers. It also offers a
  transparent view of the **quarantine**, represented by a dedicated **quarantine** vault on Int3face.

![quarantine](/img/ADR/adr013/quarantine.png)

For **quarantining**, a queue is utilized instead of a map to allow sequential execution of transfers and to potentially
filter out malicious transactions. To better understand the difference, consider the following example.

Suppose transfers are stored in a map. In this case, when releasing assets from the **quarantining** vault, the only
available figure is the total volume of transfers to addresses, as depicted in the following diagram:

```text
Alice_destination_addr -> 9 + 7 + 3 = 19
...
Bob_destination_addr   -> 1 + 2 = 3
...
```

Conversely, when using a queue, the same data might be represented as follows:

```text
[
  {
    dest  : Alice_destination_addr
    amount: 9
    height: 2
  }
  {
    dest  : Alice_destination_addr
    amount: 7
    height: 1
  }
  {
    dest  : Alice_destination_addr
    amount: 3
    height: 6
  }
  ...
  
  {
    dest  : Bob_destination_addr
    amount: 1
    height: 2
  }
  {
    dest  : Bob_destination_addr
    amount: 2
    height: 8
  }
  ...
]
```

Imagine the module detects unusual activity at height 6. It could then decide to mint all coins except those associated
with that specific height. It's important to note that the order of elements in the queue is not significant. The queue
is merely a practical data structure for storage purposes.

While the queue cannot eliminate all malicious transfers, it can help segregate them and make them less harmful. As a
security measure, periodically matching the total supply of minted assets with the balances in external vaults can help
identify fraudulent activity.

## Questions

1. Net flow rate limiting VS Direction-based rate-limiting
2. DoS attacks to quarantining queue:
    1. Do we need to limit the queue?
    2. How to process infinitely-growing queue?

## Alternative approaches

## Steps to implement

### x/ratelimit

1. `x/ratelimit` design document
2. `x/ratelimit` proto contracts
3. `x/ratelimit` module scaffolding
4. `x/ratelimit` types validation and unit tests
5. `x/ratelimit` draft keeper
6. `x/ratelimit` MsgServer and state updates
7. `x/ratelimit` import/export genesis
8. `x/ratelimit` integration tests
9. `x/bridge` support for `x/ratelimit`
10. `x/bridge` integration tests

### x/quarantine

1. `x/quarantine` design document
2. `x/quarantine` proto contracts
3. `x/quarantine` module scaffolding
4. `x/quarantine` types validation and unit tests
5. `x/quarantine` draft keeper
6. `x/quarantine` MsgServer and state updates
7. `x/quarantine` import/export genesis
8. `x/quarantine` integration tests
9. `x/ratelimit` support for `x/quarantine`
10. `x/ratelimit` integration tests

## References

- [Osmosis IBC Rate Limiting](https://github.com/osmosis-labs/osmosis/tree/main/x/ibc-rate-limit)
- [Stride-Labs native golang module](https://github.com/Stride-Labs/ibc-rate-limiting/tree/main).
