# Deployment

## Regtest

1. Download the binaries, extract to the bin folder

```sh
wget https://download.litecoin.org/litecoin-0.21.3/linux/litecoin-0.21.3-x86_64-linux-gnu.tar.gz
tar -xzvf litecoin-0.21.3-x86_64-linux-gnu.tar.gz
mv litecoin-0.21.3/bin/* ~/bin/

rm -rf litecoin-0.21.3 litecoin-0.21.3-x86_64-linux-gnu.tar.gz
```

2. Create home dir for litecoin

```sh
mkdir ~/.litecoin
```

3. Initialize configuration file at `~/.litecoin/litecoin.conf`

```
regtest=1

[regtest]
daemon=1
server=1
listen=1

port=18111
rpcport=18112
rpcconnect=127.0.0.1
rpcuser=litecoinrpc
rpcpassword=CCwXB6IxXcYMlBd6w812yfmiahxYBnlR0KLlvMIjgOrGq9eqgj9WmdeTCSDVo4w9

addnode=...
addnode=...
```

Set your own `rpcuser` and `rpcpassword`, define addresses of all other nodes in `addnode` fields.

4. Start the node

```sh
litecoind
```

5. Verify the node is working

```sh
litecoin-cli getblockcount
```

6. Create or load a wallet (ltc doesn't create wallet automatically)

```sh
litecoin-cli createwallet "$your_wallet_name"
# OR
litecoin-cli loadwallet "$your_wallet_name" true
```