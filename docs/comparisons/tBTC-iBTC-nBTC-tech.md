# tBTC & nBTC: Technical

# tBTC Main Components Diagram

![1](/img/comparisons/tbtc_components.png)

To start the tBTC node validator needs:
1. tBTC node
2. Access to the Ethereum API
   - By running their own ETH node
   - OR using 3rd-party RPC provider
3. Access to the Bitcoin API - tBTC requires using Electrum protocol for BTC communication
   - By running their own Electrum Personal Server (includes full BTC node)
   - OR using public Electrum Server

# iBTC Main Components Diagram

![2](/img/comparisons/ibtc_components.png)

To start the iBTC node validator needs:
1. iBTC node
2. Observer node
3. Access to the Int3face API
   - By running their own INT3 node
4. Access to the Bitcoin API
   - By running their own node
   - OR using 3rd-party dedicated node

# tBTC Hardware Recommendations
Recommended hardware to run a singe tBTC v2 node:
2 vCPU / 2 GB RAM / 1 GiB Persistent Storage

# iBTC Hardware Recommendations
Estimated recommended hardware to run a single iBTC node:
8 vCPU / 64 GB RAM / 1+ TB Persistent Storage

# tBTC signing timeline

1. Signers announce readiness - ~1.2 minutes (6 ETH blocks)
2. Signature production - <= 6 minutes (<= 30 ETH blocks)
3. Cooldown - ~1 minute (5 ETH blocks)

In total - ~8 minutes (41 ETH blocks)

![1](/img/comparisons/tbtc_signature_timeline.png)

In case of signature failure - next attempt will be performed after 41 block window. Maximum is 5 signing attempts.
Worst case scenario - signature will take 205 blocks or ~40 minutes on ETH

# iBTC signing timeline

According to the [Thorchain's benchmarks](https://github.com/thorchain/Resources/blob/master/Whitepapers/THORChain-TSS-Benchmark-July2020.pdf) TSS signature production for 10 nodes takes around 10 seconds.

In case of signature failure - next attempt will be performed ASAP. We have a total timeout of 5 minutes for signing.

# tBTC complete timeline

## Inbound transfer

![2](/img/comparisons/tbtc_inbound_timeline.png)

## Outbound transfer

![3](/img/comparisons/tbtc_outbound_timeline.png)

# iBTC complete timeline

## Inbound transfer

![4](/img/comparisons/ibtc_inbound_timeline.png)

## Outbound transfer

![5](/img/comparisons/ibtc_outbound_timeline.png)