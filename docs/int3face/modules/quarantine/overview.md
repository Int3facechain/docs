---
id: quarantine-overview
title: Quarantine
sidebar_label: Overview
---

# Quarantine Module

The Quarantine module provides security mechanisms to isolate and review suspicious transactions before execution.

## Overview

The Quarantine module is a security system that detects, isolates, and reviews potentially malicious or suspicious transactions to protect the network and users.

## Key Features

### Suspicious Activity Detection
- **Pattern Recognition**: Detect unusual transaction patterns
- **Anomaly Detection**: Identify anomalous behavior
- **Risk Scoring**: Assign risk scores to transactions
- **Real-time Monitoring**: Continuous monitoring of all transactions

### Transaction Isolation
- **Quarantine Holding**: Hold suspicious transactions for review
- **Review Process**: Human or AI review of quarantined transactions
- **Action Management**: Approve, reject, or require additional verification
- **Audit Trails**: Complete audit trails for all actions

## Configuration

### Detection Parameters
```yaml
detection:
  high_value_threshold: 10000
  unusual_pattern_threshold: 0.8
  risk_score_threshold: 0.7
  review_timeout: 3600
```

### Review Process
```yaml
review:
  auto_review_enabled: true
  human_review_threshold: 0.9
  ai_review_confidence: 0.8
  escalation_timeout: 1800
```

## API Reference

```javascript
// Check transaction status
const status = await quarantine.checkTransaction({
  transactionId: 'tx123',
  userId: 'user123'
});

// Review quarantined transaction
const result = await quarantine.reviewTransaction({
  transactionId: 'tx123',
  action: 'approve',
  reason: 'Verified by human reviewer'
});
```

---

*For detailed API documentation, see the Int3face SDK reference.*
