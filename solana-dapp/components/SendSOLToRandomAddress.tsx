"use client";

import React, { FC, useCallback } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";

const SendSOLToRandomAddress: FC = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const onClick = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();

    // Calculate the minimum balance for rent exemption (this can vary depending on your needs)
    const lamports = await connection.getMinimumBalanceForRentExemption(0);

    // Create a new transaction that sends SOL from the connected wallet to a random address
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: Keypair.generate().publicKey, // Random address
        lamports,
      })
    );

    // Fetch the latest blockhash to include in the transaction
    const {
      context: { slot: minContextSlot },
      value: { blockhash, lastValidBlockHeight },
    } = await connection.getLatestBlockhashAndContext();

    // Send the transaction
    const signature = await sendTransaction(transaction, connection, {
      minContextSlot,
    });

    // Confirm the transaction
    await connection.confirmTransaction({
      blockhash,
      lastValidBlockHeight,
      signature,
    });
  }, [publicKey, sendTransaction, connection]);

  return (
    <button onClick={onClick} disabled={!publicKey}>
      Send SOL to a random address!
    </button>
  );
};

export default SendSOLToRandomAddress;
