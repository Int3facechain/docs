---
id: sending-transfers
title: Sending Transfers
sidebar_label: Sending Transfers
---

# Sending Cross-Chain Transfers

This guide will walk you through the process of sending cross-chain transfers using the Bitfrost protocol.

## Overview

Bitfrost enables seamless asset transfers across multiple blockchain networks, including UTXO chains, Solana, TON, and XRPL.

## Supported Networks

### UTXO Chains
- **Bitcoin (BTC)**: Native BTC transfers
- **Bitcoin Cash (BCH)**: Fast transactions with larger blocks
- **Litecoin (LTC)**: Faster block times than Bitcoin
- **Dogecoin (DOGE)**: Fast block times and low fees

### Account-Based Chains
- **Solana**: High-performance blockchain with SPL tokens
- **TON**: The Open Network with Jetton tokens
- **XRPL**: XRP Ledger with IOU tokens

## Transfer Process

### 1. Initialize Connection
```javascript
// Connect to Bitfrost
const bitfrost = await Bitfrost.connect({
  network: 'mainnet',
  apiKey: 'your_api_key'
});
```

### 2. Check Balance
```javascript
// Check source chain balance
const balance = await bitfrost.getBalance({
  chain: 'ethereum',
  address: '0x1234...'
});
```

### 3. Send Transfer
```javascript
// Send cross-chain transfer
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
  amount: '1000',
  fee: '0.001'
});
```

### 4. Monitor Status
```javascript
// Monitor transfer status
const status = await bitfrost.getTransferStatus({
  transferId: transfer.id
});
```

## Network-Specific Examples

### Bitcoin Transfer
```javascript
// Send Bitcoin to Ethereum
const btcTransfer = await bitfrost.utxo.sendBitcoin({
  amount: '0.001',
  destination: 'ethereum',
  destinationAddress: '0x1234...',
  fee: '0.00001'
});
```

### Solana Transfer
```javascript
// Send SOL to Polygon
const solTransfer = await bitfrost.solana.sendSol({
  amount: '1.0',
  destination: 'polygon',
  destinationAddress: '0x1234...',
  fee: '0.000005'
});
```

### TON Transfer
```javascript
// Send TON to Ethereum
const tonTransfer = await bitfrost.ton.sendTon({
  amount: '10',
  destination: 'ethereum',
  destinationAddress: '0x1234...'
});
```

## Configuration

### Network Parameters
```yaml
networks:
  bitcoin:
    confirmations: 6
    fee_rate: 5
  solana:
    commitment: confirmed
    max_retries: 3
  ton:
    timeout: 30000
```

### Fee Estimation
```javascript
// Estimate transfer fees
const fees = await bitfrost.estimateFees({
  from: 'ethereum',
  to: 'solana',
  amount: '1000',
  asset: 'USDC'
});
```

## Best Practices

### Security
- **Verify Addresses**: Always verify destination addresses
- **Test Transfers**: Test with small amounts first
- **Monitor Transactions**: Monitor transaction status
- **Use Secure Connections**: Use HTTPS and secure APIs

### Performance
- **Optimize Fees**: Use appropriate fee levels
- **Batch Transfers**: Batch multiple transfers when possible
- **Monitor Network**: Monitor network conditions
- **Retry Logic**: Implement retry logic for failed transfers

### Error Handling
```javascript
try {
  const transfer = await bitfrost.sendTransfer(transferParams);
} catch (error) {
  if (error.code === 'INSUFFICIENT_BALANCE') {
    // Handle insufficient balance
  } else if (error.code === 'NETWORK_ERROR') {
    // Handle network errors
  } else {
    // Handle other errors
  }
}
```

## Troubleshooting

### Common Issues
1. **Insufficient Balance**: Check source chain balance
2. **Network Congestion**: Wait for network conditions to improve
3. **Invalid Address**: Verify destination address format
4. **Fee Issues**: Adjust fee levels based on network conditions

### Support
- Check the [FAQ](../resources/faq.md)
- Join the [Discord community](https://discord.gg/bitfrost)
- Open an issue on [GitHub](https://github.com/bitfrost/bitfrost-sdk)

---

*For more detailed information, refer to the API documentation or contact the Bitfrost team.* 