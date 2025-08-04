---
id: running-observer
title: Running an Observer
sidebar_label: Running an Observer
---

# Running an Observer

This guide will walk you through the process of setting up and running a Bitfrost observer node.

## Overview

Observers monitor blockchain networks and report events to the Bitfrost network. They play a crucial role in maintaining data availability and cross-chain communication.

## Prerequisites

- **Hardware Requirements**:
  - CPU: 4+ cores
  - RAM: 16GB+
  - Storage: 500GB+ SSD
  - Network: 50+ Mbps connection

- **Software Requirements**:
  - Linux (Ubuntu 20.04+ recommended)
  - Docker and Docker Compose
  - Git

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/bitfrost/bitfrost-observer.git
cd bitfrost-observer
```

### 2. Configure Environment
```bash
cp .env.example .env
# Edit .env with your configuration
```

### 3. Start the Observer
```bash
docker-compose up -d
```

## Configuration

### Observer Configuration
```yaml
observer:
  name: "Your Observer Name"
  networks:
    - ethereum
    - polygon
    - solana
  reporting_interval: 30
```

### Network Configuration
```yaml
networks:
  ethereum:
    rpc_url: "https://eth-mainnet.alchemyapi.io/v2/YOUR_KEY"
    ws_url: "wss://eth-mainnet.ws.alchemyapi.io/v2/YOUR_KEY"
  polygon:
    rpc_url: "https://polygon-rpc.com"
    ws_url: "wss://polygon-rpc.com"
```

## Monitoring

### Health Checks
```bash
# Check observer status
curl http://localhost:8080/health

# Check network connections
curl http://localhost:8080/networks
```

### Logs
```bash
# View logs
docker-compose logs -f bitfrost-observer

# View specific service logs
docker-compose logs -f observer
```

## Security

### Network Security
- Configure firewalls
- Use VPN for remote access
- Implement intrusion detection
- Regular security updates

### Data Security
- Encrypt sensitive data
- Implement access controls
- Regular backups
- Monitor for data breaches

## Troubleshooting

### Common Issues
1. **Network connection issues**: Check RPC endpoints and network connectivity
2. **High resource usage**: Optimize configuration and hardware
3. **Data synchronization**: Check network status and RPC endpoints

### Support
- Check the [FAQ](../resources/faq.md)
- Join the [Discord community](https://discord.gg/bitfrost)
- Open an issue on [GitHub](https://github.com/bitfrost/bitfrost-observer)

---

*For more detailed information, refer to the observer documentation or contact the Bitfrost team.* 