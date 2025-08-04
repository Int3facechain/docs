---
id: bitfrost-sdk
title: Bitfrost SDK
sidebar_label: Bitfrost SDK
---

# Bitfrost SDK

The Bitfrost SDK provides a comprehensive set of tools and libraries for integrating with the Bitfrost ecosystem.

## Installation

### JavaScript/TypeScript
```bash
npm install @bitfrost/sdk
```

### Python
```bash
pip install bitfrost-sdk
```

### Go
```bash
go get github.com/bitfrost/bitfrost-sdk-go
```

## Quick Start

### JavaScript/TypeScript
```javascript
import { Bitfrost } from '@bitfrost/sdk';

// Initialize SDK
const bitfrost = new Bitfrost({
  network: 'mainnet',
  apiKey: 'your_api_key'
});

// Send cross-chain transfer
const transfer = await bitfrost.sendTransfer({
  from: { chain: 'ethereum', address: '0x1234...', asset: 'USDC' },
  to: { chain: 'solana', address: 'ABC123...', asset: 'USDC' },
  amount: '1000'
});
```

### Python
```python
from bitfrost_sdk import Bitfrost

# Initialize SDK
bitfrost = Bitfrost(
    network='mainnet',
    api_key='your_api_key'
)

# Send cross-chain transfer
transfer = bitfrost.send_transfer(
    from_chain='ethereum',
    from_address='0x1234...',
    to_chain='solana',
    to_address='ABC123...',
    asset='USDC',
    amount='1000'
)
```

## Core Features

### Cross-Chain Transfers
```javascript
// Send transfer
const transfer = await bitfrost.sendTransfer(transferParams);

// Get transfer status
const status = await bitfrost.getTransferStatus(transferId);

// Get transfer history
const history = await bitfrost.getTransferHistory(address);
```

### Liquidity Management
```javascript
// Create liquidity pool
const pool = await bitfrost.liquidity.createPool(poolParams);

// Add liquidity
const position = await bitfrost.liquidity.addLiquidity(poolId, amounts);

// Remove liquidity
const result = await bitfrost.liquidity.removeLiquidity(poolId, positionId);
```

### Liquid Staking
```javascript
// Stake assets
const lst = await bitfrost.staking.stake(stakeParams);

// Get staking rewards
const rewards = await bitfrost.staking.getRewards(lstAddress);

// Unstake assets
const result = await bitfrost.staking.unstake(lstAddress, amount);
```

### AI Agents
```javascript
// Deploy agent
const agent = await bitfrost.agents.deploy(agentParams);

// Monitor performance
const performance = await bitfrost.agents.getPerformance(agentId);

// Stop agent
await bitfrost.agents.stop(agentId);
```

## API Reference

### Configuration
```javascript
const config = {
  network: 'mainnet' | 'testnet',
  apiKey: string,
  timeout: number,
  retries: number
};
```

### Transfer Parameters
```javascript
const transferParams = {
  from: {
    chain: string,
    address: string,
    asset: string
  },
  to: {
    chain: string,
    address: string,
    asset: string
  },
  amount: string,
  fee?: string
};
```

### Error Handling
```javascript
try {
  const result = await bitfrost.sendTransfer(transferParams);
} catch (error) {
  console.error('Transfer failed:', error.message);
  console.error('Error code:', error.code);
  console.error('Error details:', error.details);
}
```

## Examples

### Complete Transfer Example
```javascript
import { Bitfrost } from '@bitfrost/sdk';

async function sendCrossChainTransfer() {
  // Initialize SDK
  const bitfrost = new Bitfrost({
    network: 'mainnet',
    apiKey: process.env.BITFROST_API_KEY
  });

  try {
    // Check balance
    const balance = await bitfrost.getBalance({
      chain: 'ethereum',
      address: '0x1234...'
    });

    console.log('Current balance:', balance);

    // Send transfer
    const transfer = await bitfrost.sendTransfer({
      from: {
        chain: 'ethereum',
        address: '0x1234...',
        asset: 'USDC'
      },
      to: {
        chain: 'solana',
        address: 'ABC123...',
        asset: 'USDC'
      },
      amount: '1000'
    });

    console.log('Transfer initiated:', transfer.id);

    // Monitor status
    const status = await bitfrost.getTransferStatus(transfer.id);
    console.log('Transfer status:', status);

  } catch (error) {
    console.error('Transfer failed:', error.message);
  }
}
```

## Best Practices

### Error Handling
- Always implement proper error handling
- Check for specific error codes
- Implement retry logic for transient errors
- Log errors for debugging

### Performance
- Use connection pooling
- Implement caching where appropriate
- Batch operations when possible
- Monitor API rate limits

### Security
- Store API keys securely
- Use environment variables
- Validate all inputs
- Implement proper authentication

## Support

- **Documentation**: [Full API Reference](https://docs.bitfrost.com/api)
- **GitHub**: [SDK Repository](https://github.com/bitfrost/bitfrost-sdk)
- **Discord**: [Community Support](https://discord.gg/bitfrost)
- **Email**: [Developer Support](mailto:dev@bitfrost.com)

---

*For the complete API reference and advanced usage examples, visit the [Bitfrost Documentation](https://docs.bitfrost.com).* 