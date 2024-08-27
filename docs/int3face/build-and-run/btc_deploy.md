# Deployment

## Regtest

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
port=18344
rpcconnect=127.0.0.1
rpcport=18343
rpcuser=bitcoinrpc
rpcpassword=CCwXB6IxXcYMlBd6w812yfmiahxYBnlR0KLlvMIjgOrGq9eqgj9WmdeTCSDVo4w9

addnode=...
addnode=...
```

Set your own `rpcuser` and `rpcpassword`, define addresses of all other nodes in `addnode` fields. Default P2P port for regtest is `18445`

4. Start the node

```sh
bitcoind
```

5. Verify the node is working

```sh
bitcoin-cli getblockcount
```

6. Create or load a wallet (btc doesn't create wallet automatically)

```sh
bitcoin-cli createwallet "$your_wallet_name$"
# OR
bitcoin-cli loadwallet "$your_wallet_name$" true
```