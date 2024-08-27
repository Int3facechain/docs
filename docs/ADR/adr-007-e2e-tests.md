# ADR-007: E2E Tests

## Status

In progress

## Context

E2E tests for inbound and outbound flow as well as key generation and vault migration.

## Test Cases Template

| No | Scenario | Pre-condition | Pre-condition check | Steps | Expected result | Covered By |
|----|----------|---------------|---------------------|-------|-----------------|------------|
| 1  |          |               |                     |       |                 |            |       
| 2  |          |               |                     |       |                 |            |       
| 3  |          |               |                     |       |                 |            |       

## Test Cases

| No | Scenario                                              | Pre-condition                                                                                             | Pre-condition check                            | Steps                                                                                                                                                                  | Expected result                                                                                                                                                                                                                                                             | Covered By |
|----|-------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1  | Inbound transfer                                      | - Funded BTC addr<br/>- 3 observer nodes<br/>- 3 int3face nodes<br/>- 3 BTC nodes                         | Observer int3face, BTC nodes are healthy       | 1. Send tokens from BTC addr to the vault<br/>2. Wait until the tx is confirmed                                                                                        | 1. Int3face balance is funded<br/>2. Vault is funded<br/>3. Int3face token supply == vault balance                                                                                                                                                                          | TODO       |
| 2  | Outbound transfer                                     | - Funded int3face addr<br/>- 3 observer nodes<br/>- 3 int3face nodes<br/>- 3 BTC nodes                    | Observer int3face, BTC nodes are healthy       | 1. Send MsgOutboundTransfer                                                                                                                                            | 1. BTC addr is funded<br/>2. Vault supply is decreased<br/>3. Int3face token supply == vault balance                                                                                                                                                                        | TODO       |
| 3  | Key generation                                        | - 3 observer nodes<br/>- 3 int3face nodes<br/>- 3 BTC nodes                                               | Observer int3face, BTC nodes are healthy       | 1. Generate gov proposal to execute KeyGen tx<br/>2. Vote on the proposal and accept it                                                                                | 1. Old vault is empty<br/>2. New vault is funded<br/>3. New vault balance is decreased by the fee                                                                                                                                                                           | TODO       |
| 4  | Vault migration: inbound transfer to the new vault    | - Funded BTC addr<br/>- 3 observer nodes<br/>- 3 int3face nodes<br/>- 3 BTC nodes                         | Observer int3face, BTC nodes are healthy       | 1. Generate gov proposal to execute KeyGen tx<br/>2. Vote on the proposal and accept it<br/>3. Send tokens from BTC addr to the new vault                              | 1. Old vault is empty<br/>2. New vault is funded (old vault + incoming tokens)<br/>3. New vault balance is decreased by the fee<br/>4. Int3face balance is funded<br/>5. Int3face token supply == vault balance (considering fees)                                          | TODO       |
| 5  | Vault migration: outbound transfer from the new vault | - Funded int3face addr<br/>- 3 observer nodes<br/>- 3 int3face nodes<br/>- 3 BTC nodes                    | Observer int3face, BTC nodes are healthy       | 1. Generate gov proposal to execute KeyGen tx<br/>2. Vote on the proposal and accept it<br/>3. Send MsgOutboundTransfer                                                | 1. Old vault is empty<br/>2. New vault is funded (old vault - outgoing tokens)<br/>3. New vault balance is decreased by the fee<br/>4. BTC addr is funded<br/>5. Int3face token supply == vault balance (considering fees)                                                  | TODO       |
| 6  | Vault migration: multiple chains                      | - Funded int3face addr<br/>- 3 observer nodes<br/>- 3 int3face nodes<br/>- 3 BTC nodes<br/>- 3 DOGE nodes | Observer int3face, BTC, DOGE nodes are healthy | 1. Generate gov proposal to execute KeyGen tx<br/>2. Vote on the proposal and accept it<br/>3. Send MsgOutboundTransfer to BTC<br/>4. Send MsgOutboundTransfer to DOGE | 1. Old vault is empty<br/>2. New vault is funded (old vault - outgoing tokens)<br/>3. New vault balance is decreased by the fee<br/>4. BTC addr is funded<br/>5. DOGE addr is funded<br/>5. Int3face token supply == vault balance for both BTC and DOGE (considering fees) | TODO       |
| 7  | Observer shutdown after vault migration               | - Funded int3face addr<br/>- 3 observer nodes<br/>- 3 int3face nodes<br/>- 3 BTC nodes<br/>- 3 DOGE nodes | Observer int3face, BTC, DOGE nodes are healthy | 1. Generate gov proposal to execute KeyGen tx<br/>2. Vote on the proposal and accept it<br/>3. Shutdown the observer                                                   | 1. Old vault is empty<br/>2. New vault is funded (old vault - outgoing tokens)<br/>3. New vault balance is decreased by the fee<br/>4. Pool public key is updated for all the observers<br/>5. Last observed height is updated for all the observers                        | TODO       |

## Steps to implement

1. Find libraries to run all the nodes in docker containers (there may be some dedicated repos to run BTC and
   DOGE): [79](https://github.com/Int3facechain/bridge/issues/79).
2. Scaffold tests, test utilities and helpers: [80](https://github.com/Int3facechain/bridge/issues/80).
3. Test `Inbound transfer`: [81](https://github.com/Int3facechain/bridge/issues/81).
4. Test `Outbound transfer`: [82](https://github.com/Int3facechain/bridge/issues/82).
5. Test `Key generation`: [83](https://github.com/Int3facechain/bridge/issues/83).
6. Test `Vault migration: inbound transfer to the new vault`: [84](https://github.com/Int3facechain/bridge/issues/84).
7. Test `Vault migration: outbound transfer from the new vault`: [85](https://github.com/Int3facechain/bridge/issues/85).
8. Test `Vault migration: multiple chains`: [86](https://github.com/Int3facechain/bridge/issues/86).
9. Test `Observer shutdown after vault migration`: [87](https://github.com/Int3facechain/bridge/issues/87).
10. Research how to run tests in the CI/CD: [88](https://github.com/Int3facechain/bridge/issues/88).
