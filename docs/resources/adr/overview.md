---
id: adr-overview
title: Architecture Decision Records
sidebar_label: Overview
---

# Architecture Decision Records (ADR)

This section contains Architecture Decision Records (ADRs) for the Bitfrost ecosystem. ADRs are documents that capture important architectural decisions made during the development of the project.

## What are ADRs?

Architecture Decision Records are short text documents that capture a single architecture decision. They help teams understand the context and reasoning behind architectural choices.

## ADR List

### Core Protocol Decisions
- [ADR-001: Grace Period](./adr-001-grace-period.md) - Grace period implementation for cross-chain operations
- [ADR-002: Dynamic Committee](./adr-002-dynamic-committee.md) - Dynamic validator committee management
- [ADR-003: Babylon Integration](./adr-003-babylon.md) - Integration with Babylon protocol
- [ADR-004: Solana Integration](./adr-004-solana-integration.md) - Solana blockchain integration
- [ADR-005: Ordinals Support](./adr-005-ordinals.md) - Bitcoin Ordinals integration
- [ADR-012: TON Integration](./adr-012-ton-integration.md) - TON blockchain integration

### Security and Monitoring
- [ADR-006: Metrics](./adr-006-metrics.md) - Metrics and monitoring implementation
- [ADR-007: End-to-End Tests](./adr-007-e2e-tests.md) - End-to-end testing strategy
- [ADR-008: Automatic Signer List](./adr-008-automatic-signer-list.md) - Automatic signer list management
- [ADR-009: Blockchain Explorer](./adr-009-blockchain-explorer.md) - Blockchain explorer implementation
- [ADR-013: Rate Limiting](./adr-013-rate-limiting.md) - Rate limiting implementation

### Infrastructure and Operations
- [ADR-010: Node Upgrades](./adr-010-node-ungrades.md) - Node upgrade procedures
- [ADR-011: Superfluid Staking](./adr-011-superfluid-staking.md) - Superfluid staking implementation

## ADR Process

### Creating New ADRs
1. **Identify Need**: Identify when an architectural decision needs to be made
2. **Research**: Research alternatives and gather information
3. **Write ADR**: Write the ADR following the template
4. **Review**: Have the ADR reviewed by the team
5. **Approval**: Get approval from stakeholders
6. **Implementation**: Implement the decision
7. **Update**: Update the ADR with implementation details

### ADR Template
```markdown
# ADR-XXX: [Title]

## Status
[Proposed | Accepted | Rejected | Deprecated | Superseded]

## Context
[Describe the context and problem statement]

## Decision
[Describe the decision that was made]

## Consequences
[Describe the consequences of this decision]

## Implementation
[Describe the implementation details]
```

## Contributing

When creating new ADRs:
1. Follow the ADR template
2. Use clear and concise language
3. Include relevant technical details
4. Consider the impact on the broader system
5. Get feedback from the team

---

*For more information about ADRs, see the [ADR GitHub repository](https://github.com/joelparkerhenderson/architecture_decision_record).* 