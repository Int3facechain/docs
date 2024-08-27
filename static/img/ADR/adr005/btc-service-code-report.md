# Code report

## brc20

1. Transfer runes
2. Transfer BRC20
3. Mint BRC20

## btc

1. Transfer BTC

## client

1. Best-in-slot API for runes and BRC20

## cmd

1. Some simple aliases for `bitcoin-cli`
   2. Transfer runes
   3. Transfer BRC20
   4. Mint BRC20
   5. Generate BTC blocks

## common

1. **Esplorg** block explorer API (?)
2. **Sandshrew** RPC API for accessing a remote BTC node
3. Get UTXOs from **Sandshrew** responses
4. Some wrappers for BTC transactions

## config

1. Application config

## inscription

1. Inscription methods
2. The process of inscribing data onto a satoshi is called "inscription"
3. This data can include text, images, videos, and other digital content, making each satoshi distinct and trackable

## runes

1. Mint runes
2. Split UTXOs (?)
3. Transfer runes
4. Verify deposit (?)

## taproot

1. Scripts inscriptions (something specific which came with the taproot update)


# Dependency graph generation command

```shell 
godepgraph -p github.com/rs/,github.com/btcsuite/,github.com/spf13/,github.com/mark,github.com/multi,github.com/alex -s -novendor . | dot -Tpng -o btc-service-dep-graph.png
```