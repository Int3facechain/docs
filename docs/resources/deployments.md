---
id: deployments
title: Deployments
sidebar_label: Deployments
---

# Deployments

This section provides information about Bitfrost deployments across different networks and environments.

## Network Deployments

### Mainnet
- **Status**: Active
- **Launch Date**: Q1 2024
- **Supported Chains**: Ethereum, Polygon, Solana, TON, XRPL, Bitcoin, Litecoin
- **Features**: Full cross-chain functionality, liquid staking, AI agents

### Testnet
- **Status**: Active
- **Purpose**: Testing and development
- **Supported Chains**: All mainnet chains
- **Features**: Full functionality with test tokens

### Devnet
- **Status**: Active
- **Purpose**: Development and testing
- **Supported Chains**: Ethereum, Polygon, Solana
- **Features**: Core functionality for development

## Environment Configuration

### Mainnet Configuration
```yaml
environment: mainnet
networks:
  ethereum:
    rpc_url: https://eth-mainnet.alchemyapi.io/v2/YOUR_KEY
    chain_id: 1
  polygon:
    rpc_url: https://polygon-rpc.com
    chain_id: 137
  solana:
    rpc_url: https://api.mainnet-beta.solana.com
    network: mainnet-beta
```

### Testnet Configuration
```yaml
environment: testnet
networks:
  ethereum:
    rpc_url: https://eth-goerli.alchemyapi.io/v2/YOUR_KEY
    chain_id: 5
  polygon:
    rpc_url: https://polygon-mumbai.infura.io/v3/YOUR_KEY
    chain_id: 80001
  solana:
    rpc_url: https://api.devnet.solana.com
    network: devnet
```

## Deployment Status

### Current Status
- **Mainnet**: ✅ Active
- **Testnet**: ✅ Active
- **Devnet**: ✅ Active

### Upcoming Deployments
- **Layer 2 Networks**: Q2 2024
- **Additional UTXO Chains**: Q2 2024
- **AI Agent Marketplace**: Q3 2024

## Monitoring

### Health Checks
- **Mainnet**: [Status Page](https://status.bitfrost.com)
- **Testnet**: [Testnet Status](https://testnet.bitfrost.com/status)
- **Devnet**: [Devnet Status](https://devnet.bitfrost.com/status)

### Metrics
- **Transaction Volume**: Real-time transaction volume
- **Network Performance**: Network latency and throughput
- **Validator Status**: Validator uptime and performance
- **Error Rates**: Error rates and failure analysis

## Support

### Documentation
- **API Documentation**: [API Docs](https://docs.bitfrost.com/api)
- **SDK Documentation**: [SDK Docs](https://docs.bitfrost.com/sdk)
- **Integration Guides**: [Integration Guides](https://docs.bitfrost.com/guides)

### Community
- **Discord**: [Join Community](https://discord.gg/bitfrost)
- **GitHub**: [Repository](https://github.com/bitfrost)
- **Twitter**: [Follow Updates](https://twitter.com/bitfrost)

---

*For real-time deployment status and updates, visit the [Bitfrost Status Page](https://status.bitfrost.com).* 