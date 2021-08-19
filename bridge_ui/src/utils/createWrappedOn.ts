import {
  postVaaSolana,
  createWrappedOnEth as createWrappedOnEthTx,
  createWrappedOnSolana as createWrappedOnSolanaTx,
} from "@certusone/wormhole-sdk";
import Wallet from "@project-serum/sol-wallet-adapter";
import { Connection } from "@solana/web3.js";
import { ethers } from "ethers";
import { fromUint8Array } from "js-base64";
import { MsgExecuteContract } from "@terra-money/terra.js";
import { ConnectedWallet as TerraConnectedWallet } from "@terra-money/wallet-provider";
import {
  ETH_TOKEN_BRIDGE_ADDRESS,
  SOLANA_HOST,
  SOL_BRIDGE_ADDRESS,
  SOL_TOKEN_BRIDGE_ADDRESS,
  TERRA_TOKEN_BRIDGE_ADDRESS,
  TERRA_BRIDGE_ADDRESS,
} from "./consts";
import { signSendAndConfirm } from "./solana";

export async function createWrappedOnEth(
  signer: ethers.Signer | undefined,
  signedVAA: Uint8Array
) {
  if (!signer) return;
  await createWrappedOnEthTx(ETH_TOKEN_BRIDGE_ADDRESS, signer, signedVAA);
}

export async function createWrappedOnTerra(
  wallet: TerraConnectedWallet | undefined,
  signedVAA: Uint8Array
) {
  console.log("creating wrapped");
  console.log("PROGRAM:", TERRA_TOKEN_BRIDGE_ADDRESS);
  console.log("BRIDGE:", TERRA_BRIDGE_ADDRESS);
  console.log("VAA:", signedVAA);
  wallet &&
    (await wallet.post({
      msgs: [
        new MsgExecuteContract(
          wallet.terraAddress,
          TERRA_TOKEN_BRIDGE_ADDRESS,
          {
            submit_vaa: {
              data: fromUint8Array(signedVAA),
            },
          },
          { uluna: 1000 }
        ),
      ],
      memo: "Create Wrapped",
    }));
}

export async function createWrappedOnSolana(
  wallet: Wallet | undefined,
  payerAddress: string | undefined, //TODO: we may not need this since we have wallet
  signedVAA: Uint8Array
) {
  if (!wallet || !wallet.publicKey || !payerAddress) return;
  // TODO: share connection in context?
  const connection = new Connection(SOLANA_HOST, "confirmed");
  await postVaaSolana(
    connection,
    wallet,
    SOL_BRIDGE_ADDRESS,
    payerAddress,
    Buffer.from(signedVAA)
  );
  const transaction = await createWrappedOnSolanaTx(
    connection,
    SOL_BRIDGE_ADDRESS,
    SOL_TOKEN_BRIDGE_ADDRESS,
    payerAddress,
    signedVAA
  );
  await signSendAndConfirm(wallet, connection, transaction);
}