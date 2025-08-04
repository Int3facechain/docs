# Bitfrost Documentation

Official documentation for the Bitfrost ecosystem - a comprehensive cross-chain interoperability and liquidity solution powered by AI agents.

## About

Bitfrost combines two main protocols:
- **Int3face Protocol**: Cross-chain bridge and message passing for UTXO chains, Solana, TON, and XRPL
- **Bitfrost Protocol**: Universal liquidity layer with cross-chain liquid staking and AI agent management

## Quick Start

### Prerequisites
- Node.js >= 16.14
- Yarn package manager

### Installation
```bash
yarn install
```

### Development
```bash
yarn start
```
Starts local development server at `http://localhost:3000`

### Build
```bash
yarn build
```
Generates static content in the `build` directory

### Deployment
```bash
# Using SSH
USE_SSH=true yarn deploy

# Without SSH
GIT_USER=<Your GitHub username> yarn deploy
```

## Documentation Structure

- **Introduction**: Key concepts and architecture overview
- **Connected Chains**: Supported blockchain networks
- **Int3face Protocol**: Cross-chain messaging and bridging
- **Bitfrost Protocol**: Liquidity and staking solutions
- **Guides**: Practical implementation tutorials
- **Resources**: Additional references and tools

## Tech Stack

- [Docusaurus 2](https://docusaurus.io/) - Static site generator
- React 17 - UI framework
- KaTeX - Math rendering
- Local search functionality

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Links

- **Documentation**: [docs.bitfrost.ai](https://docs.bitfrost.ai)
- **GitHub**: [Int3facechain](https://github.com/Int3facechain)
- **Discord**: [Community](https://discord.com/invite/2xs9YvtpjF)
- **Twitter**: [@_Bitfrost](https://twitter.com/_Bitfrost)
