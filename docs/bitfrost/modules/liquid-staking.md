---
id: liquid-staking
title: Liquid Staking
sidebar_label: Liquid Staking
---

# Liquid Staking Module

The Liquid Staking module enables users to stake assets across multiple blockchain networks while maintaining liquidity through liquid staking tokens.

## Overview

Liquid Staking allows users to earn staking rewards while keeping their assets liquid and tradeable across different DeFi protocols.

## Features

- **Cross-Chain Staking**: Stake assets on any supported blockchain
- **Liquid Staking Tokens**: Receive liquid tokens representing staked assets
- **Yield Generation**: Earn staking rewards while maintaining liquidity
- **Flexible Exit**: Exit staking positions without waiting periods

## How It Works

1. **Stake Assets**: Users stake assets through Bitfrost
2. **Receive LSTs**: Users receive liquid staking tokens
3. **Delegation**: Assets delegated to validators
4. **Reward Distribution**: Staking rewards distributed to LST holders

## API Reference

```javascript
// Stake assets
const lst = await bitfrost.staking.stake({
  asset: 'ETH',
  amount: '10',
  chain: 'ethereum'
});

// Get staking rewards
const rewards = await bitfrost.staking.getRewards({
  lstAddress: lst.address
});
```

---

*For detailed API documentation, see the Bitfrost SDK reference.* 