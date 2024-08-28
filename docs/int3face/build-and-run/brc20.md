# BRC20 Regtest

Instruction on how to setup Bitcoin Regtest node alongside Ordinals node, and how to perform brc-20 tx inscription and execution.

## Setup

## Bitcoin Regtest Node

1. Download the binaries, extract to the bin folder
```sh
wget https://bitcoincore.org/bin/bitcoin-core-25.0/bitcoin-25.0-x86_64-linux-gnu.tar.gz
tar -xzvf bitcoin-25.0-x86_64-linux-gnu.tar.gz
mv bitcoin-25.0/bin/* ~/bin/

rm -rf bitcoin-25.0  bitcoin-25.0-x86_64-linux-gnu.tar.gz
```

2. Create home dir for bitcoin

```sh
mkdir ~/.bitcoin
```

3. Initialize configuration file at `~/.bitcoin/bitcoin.conf`

```
daemon=1
server=1
regtest=1
listen=1
txindex=1
rpcconnect=127.0.0.1
rpcuser=bitcoinrpc
rpcpassword=pass
```

4. Start the node

```sh
bitcoind
```

5. Verify the node is working

```sh
bitcoin-cli getblockcount
```

## Ord Node

Prerequisites:
* Rust 1.78+

1. Clone the [Ord repo](https://github.com/ordinals/ord)

```sh
git clone https://github.com/ordinals/ord.git
```

2. Build the `ord` binary

```sh
cargo build --release
```
Built binary will be located at `{project_root}/target/release/ord`

3. Create config file for the ord server `ord.yaml`

```
bitcoin_data_dir: $HOME/.bitcoin/
bitcoin_rpc_password: CCwXB6IxXcYMlBd6w812yfmiahxYBnlR0KLlvMIjgOrGq9eqgj9WmdeTCSDVo4w9
bitcoin_rpc_url: http://localhost:18443
bitcoin_rpc_username: bitcoinrpc
chain: regtest
data_dir: $HOME/.ord/
first_inscription_height: 0
index: $HOME/.ord/index.redb
index_addresses: true
index_cache_size: 1000000000
index_runes: true
index_sats: true
index_spent_sats: true
index_transactions: true
server_password: foo
server_url: http://localhost:80
server_username: bar
```

4. Start the `ord` node

```sh
ord --config ord.yaml server --decompress
```

5. Create a wallet

```sh
ord --config ord.yaml wallet create
```

Save the provided mnemonic. Your wallet name by default is `ord`

6. Create a BTC address for your wallet

```sh
ord --config ord.yaml wallet receive
```

Use this address in the next step

7. Mine some tokens for your wallet

```sh
bitcoin-cli generatetoaddress 110 "{YOUR_ADDR}"
```

## Execution

Now we have everything ready to inscribe and execute brc-20 txs

### Deploy BRC-20

1. Create a json file with a deploy message

```json
{
    "p": "brc-20",
    "op": "deploy",
    "tick": "ordi",
    "max": "1000000",
    "lim": "1000",
    "dec": "18"
}
```

2. Create a transaction with the inscription for your wallet

```shell
ord --config ../release/ord.yaml wallet inscribe --fee-rate 1 --file deploy.json
```

3. Mine new block to include your tx

```shell
bitcoin-cli generatetoaddress 1 "{YOUR_ADDR}"
```

### Mint BRC-20

1. Create a json file with a mint message

```json
{
    "p": "brc-20",
    "op": "mint",
    "tick": "ordi",
    "amt": "1000"
}
```

2. Create a transaction with the inscription for your wallet

```shell
ord --config ../release/ord.yaml wallet inscribe --fee-rate 1 --file mint.json
```

3. Mine new block to include your tx

```shell
bitcoin-cli generatetoaddress 1 "{YOUR_ADDR}"
```

### Transfer BRC-20

1. Create a json file with a transfer message

```json
{
    "p": "brc-20",
    "op": "transfer",
    "tick": "ordi",
    "amt": "100"
}
```

2. Create a transaction with the inscription for your wallet

```shell
ord --config ../release/ord.yaml wallet inscribe --fee-rate 1 --file transfer.json
```

3. Mine new block to include your tx

```shell
bitcoin-cli generatetoaddress 1 "{YOUR_ADDR}"
```