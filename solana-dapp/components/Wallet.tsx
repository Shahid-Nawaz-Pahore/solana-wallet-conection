"use client"; // To use client-side React components

import React, { FC, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletMultiButton,
  WalletDisconnectButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

// Default styles for wallet adapter UI components
import "@solana/wallet-adapter-react-ui/styles.css";

const Wallet: FC = () => {
  // Define the network (devnet, testnet, mainnet-beta)
  const network = WalletAdapterNetwork.Devnet;

  // Set the RPC endpoint (you can use custom endpoints)
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // Define supported wallets (e.g., UnsafeBurnerWalletAdapter)
  const wallets = useMemo(() => [new UnsafeBurnerWalletAdapter()], [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "10px" }}
          >
            <WalletMultiButton />
            <WalletDisconnectButton />
          </div>
          {/* Other components of your app go here */}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default Wallet;
