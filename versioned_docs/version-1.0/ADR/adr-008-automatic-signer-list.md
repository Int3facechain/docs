# ADR-008: Automatic Signer List

## Status

Design

## Problem 1: Two gov proposals 
Currently, the `x/bridge` module's signers list does not update automatically when a new pool public key is generated via TSS. So, one additional government proposal is required to update this list and complete the key generation process. Without this update, the list of authorized signers for outbound and inbound transfer would be inconsistent.

## Problem 2: Uncontrolled committee participants

At present, when peers generate the keygen request, they query all **online** peers from the TSS server and include them in the keygen message. This scenario can lead to problems:
1. If a peer has a different list of peers (due to unforeseen circumstances like network issues), the keygen process may fail as consensus on the list of participants would not be possible. This could trigger multiple attempts before a successful result is achieved.
2. There is no control over the committee participants. The list of **online** peers may not align with our expectations.

## Current Keygen Process

Now, the complete process of key generation is the following:
The current key generation process is as follows:
1. Create a government proposal that includes a keygen block, and approve it.
2. Witness the keygen block with observers.
3. Form a committee based on all the **online** peers.
4. <-- At this point, the committee used for outbound transfer varies from the list of signers for inbound transfer. Also, the committee was created based on online peers, so we cannot know the list of participants beforehand.
5. Request validator public keys from all validators.
6. Create another government proposal that includes the updated signer list (with all those validator public keys) and approve it.
7. <-- By now, the keygen process is fully complete.

It is important to note that this process requires two government proposals and extensive interaction with validators. Moreover, the list of peers is undetermined.

## Accepted Approach: Returning Keygen Result

### Design

One proposed solution is to return the keygen result to the Int3face chain after the TSS keygen procedure is completed. Here, all validators will need to automatically submit a message listing new committee peers and a new pool public key to Int3face.

Once Int3face receives these messages, and their count surpasses the threshold (more than 2/3 of the number of participants), the keygen block is considered to be successfully executed.

Following the success, Int3face auto-updates the list of signers, including all the signers listed in the accepted keygen block result.

For Int3face to correctly handle the threshold, it needs to know the count of signers beforehand. Hence, it is recommended to incorporate the list of all expected peers in the keygen block. This adjustment can make the keygen process more transparent and manageable. In addition, the keygen government proposal will include new peers, allowing voters to verify the committee participants and vote for them in advance.

### Schema

```protobuf
message MsgKeyGen {
  // ParticipantsPKs is a list of observers' public keys that we expect 
  // to include in the next committee.
  repeated string participants_pks = 1;
  // Randomness is used in the leader election during the key generation
  // process and can be considered a deterministic source of entropy for all peers.
  // Essentially, just a random number.
  uint64 randomness = 2;
}

message MsgKeyGenResponse {}
```

```protobuf
message MsgSubmitKeyGenResult {
  // Sender is a sender's address. Must be part of the original ParticipantsPKs list.
  string sender = 1;
  // KeygenID is a unique identifier for the original keygen. May be either
  // proposal ID or keygen tx hash.
  string keygen_id = 2;
  // ParticipantsPKs is a list of observers' public keys participating 
  // in the newly generated committee.
  repeated string participants_pks = 3;
  // PoolPK is a newly generated pool public key of the committee.
  string pool_pk = 4;
}

message MsgSubmitKeyGenResultResponse {}
```

### State

**KeyGen**

When accepting the keygen results, the `KeyGenResult` object is saved in the state.

* KeyGen: `0x04 | hash(keygen_id + participants_pks + pool_pk) -> ProtocolBuffer(KeyGen)`

```protobuf
message KeyGen {
  // KeygenID is a unique identifier for the original keygen. May be either
  // proposal ID or keygen tx hash.
  string keygen_id = 1;
  // ParticipantsPKs is a list of observers' public keys participating 
  // in the newly generated committee.
  repeated string participants_pks = 2;
  // PoolPK is a newly generated pool public key of the committee.
  string pool_pk = 3;
  // Voters is a list of validators signed this keygen result.
  repeated string voters = 4 [ (gogoproto.moretags) = "yaml:\"voters\"" ];
  // Finalized indicates whether the keygen needs more votes or has
  // already accumulated a sufficient number. The finalised flag is set
  // to true as soon as length(voters) is greater than or equal to
  // the 2/3th of the expected participants number.
  bool finalized = 5 [ (gogoproto.moretags) = "yaml:\"finalized\"" ];
}
```

**KeyGenResult**

This object is saved in the state after `KeyGen` accumulates a sufficient number of votes. 

* KeyGenResult: `0x05 | pool_pk -> ProtocolBuffer(KeyGenResult)`

```protobuf
message KeyGenResult {
  // KeygenID is a unique identifier for the original keygen. May be either
  // proposal ID or keygen tx hash.
  string keygen_id = 1;
  // ParticipantsPKs is a list of observers' public keys participating 
  // in the newly generated committee.
  repeated string participants_pks = 2;
}
```

## Unresolved Issues

1. Observers have public keys and validator private keys, that are different. The first is utilized during the TSS signing while the second is applied during the inbound transfer signing. How to associate the observer public key with the validator public key?

## Implementation Steps

1. Research how to associate the validator address with the observer address.
2. Modify `MsgKeygen` to include the expected list of signers.
3. Modify the observer to work with the list of signers instead of online peers.
4. Add a message to submit the keygen results to Int3face.
5. Store keygen results in the state: pool public key along with related participants.
6. Add a mechanism to vote on keygen results and accept the one with the super majority of votes.
7. Auto-update the list of legit signers after the keygen result is accepted.
