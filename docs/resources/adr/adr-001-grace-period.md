# ADR-001: Grace Period

## Status

Done

## Context

The outbound transfer consists of the following steps:

1. Alice sends a MsgOutboundTransfer to the node.
2. The node adds this transaction to the block.
3. The blockchain executes this transaction.
4. The execution includes burning the corresponding tokens from Alice's address.
5. The observer detects the MsgOutboundTransfer.
6. The observer adds it to the internal quest.
7. The observer uses the corresponding external chain client to build, sign, and broadcast the transaction.
 
![outbound_current](/img/ADR/adr001/outbound_queue.png)

The flow is quite straightforward. However, dynamic committee handling involves many corner cases that we need to be aware of:
1. **Observer reboots**: Which block should the observer use if it reboots and misses some blocks?
2. **Majority is down**: What happens if the majority of observers are down and the transaction cannot be signed?
3. **Observer failures**: What if some observers cannot process the transfer for any reason?

## Accepted approach

As seen, most problems arise from the pessimistic scenario where the majority is down. This scenario is highly unlikely, especially in a Proof-of-Authority system. Therefore, the solution relies on an optimistic mechanism. This means it is easy to handle when we trust the system, but more challenging (though not impossible) to manage in pessimistic cases.

The optimistic approach allows the observer to start monitoring the Int3face chain from the **latest** height. It may miss some transfers that occurred before, but they are not stuck as long as the majority of observers are active.

But what happens if the majority is down? In that case, the **grace period** is applied. The grace period is a specific time during which the user can submit `MsgOutboundTransferRetry`, which serves as a retry mechanism for `MsgOutboundTransfer`. For example, if the transfer is submitted at 10:20 and the execution time parameter is 2 hours, the grace period starts at 12:20 and lasts for a relatively long period, such as around 7 days.

![outbound_current](/img/ADR/adr001/grace_period.png)

During this time, the user can submit `MsgOutboundTransferRetry` containing the Int3face hash of the `MsgOutboundTransfer` transaction.
```protobuf
message MsgOutboundTransferRetry {
  // TransferHash is the hash of the outbound transfer intended to retry.
  string transfer_hash = 1;
}
```

Considering that, once the observer receives the `MsgOutboundTransferRetry` command, it goes through all transactions that occurred in the vault within the specified grace period and checks whether this transaction was executed before or not. If not, the observer executes it. However, vault transactions do not have any marking indicating the Int3face hash of the transfer. Therefore, this hash needs to be added to the memo of every transaction generated based on `MsgOutboundTransfer`.

Thus, the retry process looks like the following:

![outbound_current](/img/ADR/adr001/outbound_queue_retry.png)

And the observer start up is as follows:

![observer_reboot](/img/ADR/adr001/observer_reboot.png)

## Alternative approaches

1. Adding earliest-observer-height to allow observers to process blocks from the last stuck transfer.
2. Adding an on-chain stateful queue.

## Steps to implement

1. `MsgOutboundTransferRetry` handler: proto contract and MsgServer [30](https://github.com/Int3facechain/bridge/issues/30).
2. Validation for `MsgOutboundTransferRetry`: check that transfer_hash is present in Int3face [30](https://github.com/Int3facechain/bridge/issues/30).
3. Witnessing of `MsgOutboundTransferRetry` in the observer [31](https://github.com/Int3facechain/bridge/issues/31).
4. Include the original Int3face transfer hash in the transaction memo [32](https://github.com/Int3facechain/bridge/issues/32).
5. Vault history check mechanism [33](https://github.com/Int3facechain/bridge/issues/33).
6. `MsgOutboundTransferRetry` observer processing [33](https://github.com/Int3facechain/bridge/issues/33).

## Consequences

1. How to prevent DDoS attacks on `MsgOutboundTransferRetry`? What if a malicious user sends many requests, triggering multiple historical checks?
2. A special watcher may be implemented to automate the submission of `MsgOutboundTransferRetry`.
