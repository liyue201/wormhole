# TestNet deployment guide

## Prerequisites
Deploying wormhole requires installing these dependencies

- rust 1.61.0
- npm 8.11.0
- node v16.0.0
- golang 1.17.8
- docker 20.10.12

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

### Deploy Findora contracts
Work in the `ethereum` directory

Deploy FRA Wrapper token contract
```
npx truffle migrate --network findora_testnet --f 9
```
Then update `BRIDGE_INIT_WETH` in `.env.findora.testnet`   
Then deploy bridge contracts
```
cp .env.findora.testnet .env
npx truffle migrate --network findora_testnet --to 4
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
  Program Id: GSJkPVPQdqaWayNBafwrDABfx2eetQnx6vudxr6WM8sg
```

Build other contracts, set `BRIDGE_ADDRESS` to the returned `Program Id` of the deployment
```
export BRIDGE_ADDRESS=GSJkPVPQdqaWayNBafwrDABfx2eetQnx6vudxr6WM8sg
cargo build-bpf --manifest-path "bridge/cpi_poster/Cargo.toml" -- --locked
cargo build-bpf --manifest-path "modules/token_bridge/program/Cargo.toml" -- --locked
cargo build-bpf --manifest-path "modules/nft_bridge/program/Cargo.toml" -- --locked
cargo build-bpf --manifest-path "migration/Cargo.toml" -- --locked
```

Deploy other contracts
```

solana program deploy target/deploy/cpi_poster.so
 Program Id: 4Xy6tuSgpdBTJwiERD5WWLaxmVmCreeok2iLCyF697er

solana program deploy target/deploy/wormhole_migration.so
 Program Id: C4bvwVx4sgEuhZ3seHvJxdmedfeUdfepnezm4f3WgrBj

solana program deploy modules/token_bridge/token-metadata/spl_token_metadata.so
 Program Id: CM11z2r6DJhM8G3sfpkGdYecoQeYt8nV2QwxD4QjLFmU


solana program deploy target/deploy/token_bridge.so
 Program Id: B3DacE35J6uTyoa8nbr5DoAYMVvedQeCTqYWf2cjyeTu

solana program deploy target/deploy/nft_bridge.so
 Program Id: CVxxEp9A1YbNjCdxa7C7WG5zG2vBTgjBAGJhHr8ruAo3

```

Initial solana contracts
```
cargo build --release

export BRIDGE_ADDRESS=GSJkPVPQdqaWayNBafwrDABfx2eetQnx6vudxr6WM8sg
export TOKEN_BRIDGE_ADDRESS=B3DacE35J6uTyoa8nbr5DoAYMVvedQeCTqYWf2cjyeTu
export NFT_BRIDGE_ADDRESS=CVxxEp9A1YbNjCdxa7C7WG5zG2vBTgjBAGJhHr8ruAo3
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

Set keys
```
export ETH_KEY=
export INFURA_KEY=
export SOLANA_KEY=
```

Apply env
```
source solana/.env
```

Register BSC chain
```
npm --prefix clients/js start -- submit -c bsc -n testnet $REGISTER_SOL_TOKEN_BRIDGE_VAA
npm --prefix clients/js start -- submit -c bsc -n testnet $REGISTER_BSC_TOKEN_BRIDGE_VAA
npm --prefix clients/js start -- submit -c bsc -n testnet $REGISTER_ETH_TOKEN_BRIDGE_VAA
npm --prefix clients/js start -- submit -c bsc -n testnet $REGISTER_BAS_TOKEN_BRIDGE_VAA
npm --prefix clients/js start -- submit -c bsc -n testnet $REGISTER_FRA_TOKEN_BRIDGE_VAA

npm --prefix clients/js start -- submit -c bsc -n testnet $REGISTER_SOL_NFT_BRIDGE_VAA
npm --prefix clients/js start -- submit -c bsc -n testnet $REGISTER_BSC_NFT_BRIDGE_VAA
npm --prefix clients/js start -- submit -c bsc -n testnet $REGISTER_ETH_NFT_BRIDGE_VAA
npm --prefix clients/js start -- submit -c bsc -n testnet $REGISTER_BAS_NFT_BRIDGE_VAA
npm --prefix clients/js start -- submit -c bsc -n testnet $REGISTER_FRA_NFT_BRIDGE_VAA
```

Register ETH (goerli) chain
```
npm --prefix clients/js start -- submit -c ethereum -n testnet $REGISTER_SOL_TOKEN_BRIDGE_VAA
npm --prefix clients/js start -- submit -c ethereum -n testnet $REGISTER_BSC_TOKEN_BRIDGE_VAA
npm --prefix clients/js start -- submit -c ethereum -n testnet $REGISTER_ETH_TOKEN_BRIDGE_VAA
npm --prefix clients/js start -- submit -c ethereum -n testnet $REGISTER_BAS_TOKEN_BRIDGE_VAA
npm --prefix clients/js start -- submit -c ethereum -n testnet $REGISTER_FRA_TOKEN_BRIDGE_VAA

npm --prefix clients/js start -- submit -c ethereum -n testnet $REGISTER_SOL_NFT_BRIDGE_VAA
npm --prefix clients/js start -- submit -c ethereum -n testnet $REGISTER_BSC_NFT_BRIDGE_VAA
npm --prefix clients/js start -- submit -c ethereum -n testnet $REGISTER_ETH_NFT_BRIDGE_VAA
npm --prefix clients/js start -- submit -c ethereum -n testnet $REGISTER_BAS_NFT_BRIDGE_VAA
npm --prefix clients/js start -- submit -c ethereum -n testnet $REGISTER_FRA_NFT_BRIDGE_VAA
```

Register BAS chain
```
npm --prefix clients/js start -- submit -c bas -n testnet $REGISTER_SOL_TOKEN_BRIDGE_VAA
npm --prefix clients/js start -- submit -c bas -n testnet $REGISTER_BSC_TOKEN_BRIDGE_VAA
npm --prefix clients/js start -- submit -c bas -n testnet $REGISTER_ETH_TOKEN_BRIDGE_VAA
npm --prefix clients/js start -- submit -c bas -n testnet $REGISTER_BAS_TOKEN_BRIDGE_VAA
npm --prefix clients/js start -- submit -c bas -n testnet $REGISTER_FRA_TOKEN_BRIDGE_VAA

#npm --prefix clients/js start -- submit -c bas -n testnet $REGISTER_SOL_NFT_BRIDGE_VAA
npm --prefix clients/js start -- submit -c bas -n testnet $REGISTER_BSC_NFT_BRIDGE_VAA
npm --prefix clients/js start -- submit -c bas -n testnet $REGISTER_ETH_NFT_BRIDGE_VAA
npm --prefix clients/js start -- submit -c bas -n testnet $REGISTER_BAS_NFT_BRIDGE_VAA
npm --prefix clients/js start -- submit -c bas -n testnet $REGISTER_FRA_NFT_BRIDGE_VAA
```

Register solana chain

```
npm --prefix clients/js start -- submit -c solana -n testnet $REGISTER_SOL_TOKEN_BRIDGE_VAA
npm --prefix clients/js start -- submit -c solana -n testnet $REGISTER_BSC_TOKEN_BRIDGE_VAA
npm --prefix clients/js start -- submit -c solana -n testnet $REGISTER_ETH_TOKEN_BRIDGE_VAA
npm --prefix clients/js start -- submit -c solana -n testnet $REGISTER_BAS_TOKEN_BRIDGE_VAA
npm --prefix clients/js start -- submit -c solana -n testnet $REGISTER_FRA_TOKEN_BRIDGE_VAA

#npm --prefix clients/js start -- submit -c solana -n testnet $REGISTER_SOL_NFT_BRIDGE_VAA
npm --prefix clients/js start -- submit -c solana -n testnet $REGISTER_BSC_NFT_BRIDGE_VAA
npm --prefix clients/js start -- submit -c solana -n testnet $REGISTER_ETH_NFT_BRIDGE_VAA
npm --prefix clients/js start -- submit -c solana -n testnet $REGISTER_BAS_NFT_BRIDGE_VAA
npm --prefix clients/js start -- submit -c solana -n testnet $REGISTER_FRA_NFT_BRIDGE_VAA
```


Register findora chain

```
npm --prefix clients/js start -- submit -c findora -n testnet $REGISTER_SOL_TOKEN_BRIDGE_VAA
npm --prefix clients/js start -- submit -c findora -n testnet $REGISTER_BSC_TOKEN_BRIDGE_VAA
npm --prefix clients/js start -- submit -c findora -n testnet $REGISTER_ETH_TOKEN_BRIDGE_VAA
npm --prefix clients/js start -- submit -c findora -n testnet $REGISTER_BAS_TOKEN_BRIDGE_VAA
npm --prefix clients/js start -- submit -c findora -n testnet $REGISTER_FRA_TOKEN_BRIDGE_VAA

npm --prefix clients/js start -- submit -c findora -n testnet $REGISTER_SOL_NFT_BRIDGE_VAA
npm --prefix clients/js start -- submit -c findora -n testnet $REGISTER_BSC_NFT_BRIDGE_VAA
npm --prefix clients/js start -- submit -c findora -n testnet $REGISTER_ETH_NFT_BRIDGE_VAA
npm --prefix clients/js start -- submit -c findora -n testnet $REGISTER_BAS_NFT_BRIDGE_VAA
npm --prefix clients/js start -- submit -c findora -n testnet $REGISTER_FRA_NFT_BRIDGE_VAA
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
--findoraRPC ws://prod-testnet-us-west-2-full-bridge-001-open.prod.findora.org:8546 \
--solanaRPC https://api.devnet.solana.com \
--solanaWS wss://api.devnet.solana.com/ \
--publicRPC "[::]:7070" \
--publicWeb "[::]:7071" \
--dataDir /data \
--guardianKey /data/bridge.key \
--nodeKey /data/node.key \
--bootstrap /ip4/127.0.0.1/udp/8999/quic/p2p/12D3KooWQVJta8rN6nDid9v8YiG1o9bPJ8EnrxisJhXvHvX9xDri \
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
--solanaContract GSJkPVPQdqaWayNBafwrDABfx2eetQnx6vudxr6WM8sg \
--bscContract 0x2E686d5276008EEc8Fc1aeEbA9c04D3CF169Ab71 \
--ethContract 0x6A1f2c5566Fb8BBbDffb1D05c2800971CF5996E9 \
--basContract 0xC870f6e7887428f5CFA1eFAcC472F1b99a7138df \
--findoraContract 0x1fAbAf4F0386778b71B57C658460a4588b18D1C9
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







