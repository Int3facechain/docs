---
id: running-validator
title: Running a Validator
sidebar_label: Running a Validator
---

# Running a Validator

This guide will walk you through the process of setting up and running a Bitfrost validator node.

## Prerequisites

- **Hardware Requirements**:
  - CPU: 8+ cores
  - RAM: 32GB+
  - Storage: 1TB+ SSD
  - Network: 100+ Mbps connection

- **Software Requirements**:
  - Linux (Ubuntu 20.04+ recommended)
  - Docker and Docker Compose
  - Git

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/bitfrost/bitfrost-node.git
cd bitfrost-node
```

### 2. Configure Environment
```bash
cp .env.example .env
# Edit .env with your configuration
```

### 3. Generate Keys
```bash
./scripts/generate-keys.sh
```

### 4. Start the Node
```bash
docker-compose up -d
```

## Configuration

### Validator Configuration
```yaml
validator:
  name: "Your Validator Name"
  commission_rate: 0.10
  min_self_delegation: 1000000
  max_total_delegation: 10000000
```

### Network Configuration
```yaml
networks:
  - name: "ethereum"
    rpc_url: "https://eth-mainnet.alchemyapi.io/v2/YOUR_KEY"
  - name: "polygon"
    rpc_url: "https://polygon-rpc.com"
```

## Monitoring

### Health Checks
```bash
# Check node status
curl http://localhost:26657/status

# Check validator status
curl http://localhost:26657/validators
```

### Logs
```bash
# View logs
docker-compose logs -f bitfrost-node

# View specific service logs
docker-compose logs -f validator
```

## Security

### Key Management
- Store private keys securely
- Use hardware security modules (HSM) for production
- Implement key rotation procedures
- Monitor for unauthorized access

### Network Security
- Configure firewalls
- Use VPN for remote access
- Implement intrusion detection
- Regular security updates

## Troubleshooting

### Common Issues
1. **Node not syncing**: Check network connectivity and RPC endpoints
2. **Validator not active**: Verify stake amount and commission settings
3. **High resource usage**: Optimize configuration and hardware

### Support
- Check the [FAQ](../resources/faq.md)
- Join the [Discord community](https://discord.gg/bitfrost)
- Open an issue on [GitHub](https://github.com/bitfrost/bitfrost-node)

---

*For more detailed information, refer to the validator documentation or contact the Bitfrost team.* 