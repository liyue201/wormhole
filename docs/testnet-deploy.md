# TestNet deployment guide

## Deploy contracts

### Set EVN

```
export MNEMONIC=
export INFURA_KEY=
```

### Deploy BSC contracts
Work in the `ethereum` directory

Deploy BNB Wrapper token contract
```
npx truffle migrate --network binance_testnet --f 9
```
Then update `BRIDGE_INIT_WETH` in `.env.bsc.testnet`   
Then deploy bridge contracts   
```
cp .env.bsc.testnet .env
npx truffle migrate --network binance_testnet --to 4
```

### Deploy ETH contracts
Work in the `ethereum` directory

Deploy ETH Wrapper token contract
```
npx truffle migrate --network goerli --f 9
```
Then update `BRIDGE_INIT_WETH` in `.env.goerli`  
Then deploy bridge contracts  
```
cp .env.goerli .env
npx truffle migrate --network goerli  --to 4
```

### Deploy BAS contracts
Work in the `ethereum` directory

Deploy OVR Wrapper token contract
```
npx truffle migrate --network bas_testnet --f 9
```
Then update `BRIDGE_INIT_WETH` in `.env.bas.testnet`   
Then deploy bridge contracts
```
cp .env.bas.testnet .env
npx truffle migrate --network bas_testnet --to 4
```

### Deploy solana contracts

Install solana tool
```
sh -c "$(curl -sSfL https://release.solana.com/v1.9.4/install)"
```

Set chain url
```
solana config set --url https://api.devnet.solana.com
```

Create account and get some token
```
solana-keygen new
solana airdrop 1
solana airdrop 1
solana airdrop 1
```

Go to the `solana` directory, Build core bridge
```
export EMITTER_ADDRESS=11111111111111111111111111111115
cargo build-bpf --manifest-path "bridge/program/Cargo.toml" -- --locked
```
Deploy core bridge
```
solana program deploy target/deploy/bridge.so
  Program Id: 7izWzS4CxwGnyihtjiBfVpgQ7dyR8UmoJ6TiEqrhLbb5
```

Build other contracts, set `BRIDGE_ADDRESS` to the returned `Program Id` of the deployment
```
export BRIDGE_ADDRESS=7izWzS4CxwGnyihtjiBfVpgQ7dyR8UmoJ6TiEqrhLbb5
cargo build-bpf --manifest-path "bridge/cpi_poster/Cargo.toml" -- --locked
cargo build-bpf --manifest-path "modules/token_bridge/program/Cargo.toml" -- --locked
cargo build-bpf --manifest-path "modules/nft_bridge/program/Cargo.toml" -- --locked
cargo build-bpf --manifest-path "migration/Cargo.toml" -- --locked
```

Deploy other contracts
```

solana program deploy target/deploy//cpi_poster.so
 Program Id: FmVLwmeqWyCfeDuHTxR8UrfXb1vTHWH1AHttWuXW3XTU

solana program deploy target/deploy/wormhole_migration.so
 Program Id: 9r1k4n3imJmv1HxPQBB2SzniiBYKps8FXjPpYjYRtV5W

solana program deploy modules/token_bridge/token-metadata/spl_token_metadata.so
 Program Id: FcK14TDw1FvMuD5zCHq2XbBjnMmBGHPfmxwzorASqodY


solana program deploy target/deploy/token_bridge.so
 Program Id: 7oJZZwJRDnH2kWdw77AGsEooHKvQJH9U7DcmmKMZpe4

solana program deploy target/deploy/nft_bridge.so
 Program Id: 3SSz94Z9tp6psLmmGre4RmBSorpCiTcEpduYVVH99jSj

```

Initial solana contracts
```
cargo build --release

export BRIDGE_ADDRESS=7izWzS4CxwGnyihtjiBfVpgQ7dyR8UmoJ6TiEqrhLbb5
export TOKEN_BRIDGE_ADDRESS=7oJZZwJRDnH2kWdw77AGsEooHKvQJH9U7DcmmKMZpe4
export NFT_BRIDGE_ADDRESS=3SSz94Z9tp6psLmmGre4RmBSorpCiTcEpduYVVH99jSj
export EMITTER_ADDRESS=11111111111111111111111111111115
export INIT_SIGNERS_CSV=beFA429d57cD18b7F8A4d91A2da9AB4AF05d0FBe

./target/release/bridge_client create-bridge "$BRIDGE_ADDRESS" "$INIT_SIGNERS_CSV" 86400 100

./target/release/token_bridge_client create-bridge "$TOKEN_BRIDGE_ADDRESS" "$BRIDGE_ADDRESS"

./target/release/token_bridge_client create-bridge "$NFT_BRIDGE_ADDRESS" "$BRIDGE_ADDRESS"

```

Get solana bridge emitter address
```
./target/release/token_bridge_client  emitter "$BRIDGE_ADDRESS"
./target/release/token_bridge_client  emitter "$TOKEN_BRIDGE_ADDRESS"
./target/release/token_bridge_client  emitter "$NFT_BRIDGE_ADDRESS"
```

## Build SDK

Update contracts address in `sdk/js/utils/consts.ts`

```
DOCKER_BUILDKIT=1 docker build --target node-export  -f Dockerfile.proto -o type=local,dest=. .
DOCKER_BUILDKIT=1 docker build -f solana/Dockerfile.wasm -o type=local,dest=. solana
npm ci --prefix ethereum
npm ci --prefix sdk/js
npm run build --prefix sdk/js
npm ci --prefix clients/js
npm install --prefix clients/js ./sdk/js
```

## Register Chain

Update contract addresses and emitter addresses in  `scripts/devnet-consts.json`

Create VAA
```
./scripts/guardian-set-init.sh 1
```


Register BSC chain
```
cd ethereum
npx truffle exec --network binance_testnet scripts/register_bsc_chain.js
npx truffle exec --network binance_testnet scripts/register_solana_chain.js
npx truffle exec --network binance_testnet scripts/register_bas_chain.js
npx truffle exec --network binance_testnet scripts/register_eth_chain.js
```

Register ETH chain
```
npx truffle exec --network goerli scripts/register_bsc_chain.js
npx truffle exec --network goerli scripts/register_solana_chain.js
npx truffle exec --network goerli scripts/register_bas_chain.js
npx truffle exec --network goerli scripts/register_eth_chain.js
```

Register BAS chain
```
npx truffle exec --network bas_testnet scripts/register_bsc_chain.js
npx truffle exec --network bas_testnet scripts/register_solana_chain.js
npx truffle exec --network bas_testnet scripts/register_bas_chain.js
npx truffle exec --network bas_testnet scripts/register_eth_chain.js
```




Register solana chain

```
cd ..
source solana/.env

npm --prefix clients/js start -- submit -c solana -n testnet $REGISTER_SOL_TOKEN_BRIDGE_VAA
npm --prefix clients/js start -- submit -c solana -n testnet $REGISTER_BSC_TOKEN_BRIDGE_VAA
npm --prefix clients/js start -- submit -c solana -n testnet $REGISTER_ETH_TOKEN_BRIDGE_VAA
npm --prefix clients/js start -- submit -c solana -n testnet $REGISTER_BAS_TOKEN_BRIDGE_VAA

#npm --prefix clients/js start -- submit -c solana -n testnet $REGISTER_SOL_NFT_BRIDGE_VAA
npm --prefix clients/js start -- submit -c solana -n testnet $REGISTER_BSC_NFT_BRIDGE_VAA
npm --prefix clients/js start -- submit -c solana -n testnet $REGISTER_ETH_NFT_BRIDGE_VAA
npm --prefix clients/js start -- submit -c solana -n testnet $REGISTER_BAS_NFT_BRIDGE_VAA
```


## Deploy guardian

Build docker image
```
cd tools
CGO_ENABLED=0 ./build.sh

cd ../node
tools/bin/buf lint && tools/bin/buf generate
DOCKER_BUILDKIT=1  docker build -t guardian .
```

Run 

```
docker run --name guardian -d \
-p 7070:7070 \
-p 7071:7071 \
-v /guardian_data:/data \
-w / \
--cap-add=IPC_LOCK \
guardian \
/guardiand node \
--testnetMode true \
--nodeName guardiand0 \
--ethRPC ws://eth1:8545 \
--polygonRPC ws://eth1:8545 \
--avalancheRPC ws://eth1:8545 \
--terraWS ws://eth1:8545 \
--terraLCD ws://eth1:8545 \
--oasisRPC ws://eth1:8545 \
--fantomRPC ws://eth1:8545 \
--auroraRPC ws://eth1:8545 \
--karuraRPC ws://eth1:8545 \
--klaytnRPC ws://eth1:8545 \
--celoRPC ws://eth1:8545 \
--ethRopstenRPC ws://eth1:8545 \
--acalaRPC ws://eth1:8545 \
--moonbeamRPC ws://eth1:8545 \
--algorandAlgodRPC ws://eth1:8545 \
--algorandIndexerRPC ws://eth1:8545 \
--algorandIndexerToken "00" \
--algorandAlgodToken "00" \
--algorandAppID 1 \
--ethRPC wss://goerli.infura.io/ws/v3/cdcc3e7f476546ffa7e686d5d0ae3dce \
--bscRPC wss://data-seed-prebsc-2-s1.binance.org:8545/ \
--basRPC ws://35.87.87.204:8546/ \
--solanaRPC https://api.devnet.solana.com \
--solanaWS wss://api.devnet.solana.com/ \
--publicRPC "[::]:7070" \
--publicWeb "[::]:7071" \
--dataDir /data \
--guardianKey /data/bridge.key \
--nodeKey /data/node.key \
--disableTelemetry true \
--adminSocket /tmp/admin.sock \
--terraContract 0x00 \
--ethContract 0x00 \
--polygonContract 0x00 \
--fantomContract 0x00 \
--auroraContract 0x00 \
--karuraContract x00 \
--klaytnContract x00 \
--celoContract x00 \
--ethRopstenContract x00 \
--acalaContract x00 \
--moonbeamContract x00 \
--solanaContract 7izWzS4CxwGnyihtjiBfVpgQ7dyR8UmoJ6TiEqrhLbb5 \
--bscContract 0x9221EAb1e8d986CC9EE8a9F3EEAb2dF5c5a1DF91 \
--ethContract 0xdF814331a20448F60dE16AA942d010C24022E43F \
--basContract 0x98fdd30102cB8Dc8d62dD66E88D66Bf1C43c5A50

```

## Deploy bridge_ui

Update contract addresses in  `bridge_ui/src/utils/consts.js`

Build

```
npm ci  --prefix bridge_ui
npm install --prefix bridge_ui  ./sdk/js
cd bridge_ui
REACT_APP_CLUSTER=testnet  REACT_APP_COVALENT_API_KEY=ckey_b4c4f5e6010c434aad864430298 npm run build
docker build -t bridge_ui . -f Dockerfile.deploy
```

Run by docker
```
docker run -d  --name bridge_ui -p 8081:80 bridge_ui
```

Or
```
npm install -g serve
serve -s build
```

Or run in development mode
```
REACT_APP_CLUSTER=testnet  REACT_APP_COVALENT_API_KEY=ckey_b4c4f5e6010c434aad864430298 npm run start
```







