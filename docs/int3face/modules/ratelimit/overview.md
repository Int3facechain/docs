---
id: ratelimit-overview
title: Cross-chain Rate Limit
sidebar_label: Overview
---

# Cross-chain Rate Limit Module

The Cross-chain Rate Limit module provides transaction rate limiting and abuse prevention mechanisms across multiple blockchain networks.

## Overview

The Rate Limit module prevents abuse and ensures fair usage of cross-chain infrastructure by implementing sophisticated rate limiting mechanisms that work across different blockchain networks.

## Key Features

### Rate Limiting
- **Per-User Limits**: Individual user transaction limits
- **Network Limits**: Overall network capacity limits
- **Dynamic Adjustment**: Limits that adjust based on network conditions
- **Whitelist Management**: Special permissions for trusted entities

### Abuse Prevention
- **Pattern Detection**: Detect unusual transaction patterns
- **Spam Prevention**: Prevent spam and DoS attacks
- **Resource Protection**: Protect network resources
- **Fair Usage**: Ensure fair usage across all users

## Configuration

### Rate Limit Parameters
```yaml
rate_limits:
  per_user:
    transactions_per_minute: 10
    transactions_per_hour: 100
    transactions_per_day: 1000
  per_network:
    transactions_per_minute: 1000
    transactions_per_hour: 10000
    transactions_per_day: 100000
```

### Dynamic Adjustment
```yaml
dynamic_adjustment:
  enabled: true
  network_congestion_threshold: 0.8
  adjustment_factor: 0.5
  min_limit_multiplier: 0.1
  max_limit_multiplier: 2.0
```

## API Reference

```javascript
// Check rate limit status
const status = await ratelimit.checkLimit({
  userId: 'user123',
  network: 'ethereum'
});

// Get current limits
const limits = await ratelimit.getLimits({
  userId: 'user123'
});
```

---

*For detailed API documentation, see the Int3face SDK reference.*
