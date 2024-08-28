# BCH Regtest

## Regtest

1. Download the binaries, extract to the bin folder

Binaries' names intersect with the `bitcoin` names. So we are going to rename them.

```sh
wget https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases/download/v27.1.0/bitcoin-cash-node-27.1.0-x86_64-linux-gnu.tar.gz
tar -xzvf bitcoin-cash-node-27.1.0-x86_64-linux-gnu.tar.gz

mv bitcoin-cash-node-27.1.0/bin/bitcoind ~/bin/bcashd
mv bitcoin-cash-node-27.1.0/bin/bitcoin-cli ~/bin/bcash-cli
mv bitcoin-cash-node-27.1.0/bin/bitcoin-tx ~/bin/bcash-tx

rm -rf bitcoin-cash-node-27.1.0 bitcoin-cash-node-27.1.0-x86_64-linux-gnu.tar.gz
```

2. Create home dir for bitcoin-cash

```sh
mkdir ~/.bitcoin-cash
```

3. Initialize configuration file at `~/.bitcoin-cash/bitcoin-cash.conf`

```
regtest=1

[regtest]
daemon=1
server=1
listen=1
port=18544
rpcbind=127.0.0.1
rpcport=18323
rpcuser=bcashrpc
rpcpassword=CCwXB6IxXcYMlBd6w812yfmiahxYBnlR0KLlvMIjgOrGq9eqgj9WmdeTCSDVo4w9

datadir=...

addnode=...
addnode=...
```

Set your own `rpcuser`, `rpcpassword` and `datadir`, define addresses of all other nodes in `addnode` fields.

4. Start the node

We need to specify path ot config, because Bitcoin-Cash uses the same defaults as Bitcoin

```sh
bcashd -conf=$BCASH_HOME/bitcoin-cash.conf
```

5. Verify the node is working

```sh
bcash-cli -conf=$BCASH_HOME/bitcoin-cash.conf getblockcount
```