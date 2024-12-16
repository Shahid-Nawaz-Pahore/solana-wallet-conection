"use client";

import React, { ReactNode } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

// List the wallets you want to support
const WalletContext = ({ children }: { children: ReactNode }) => {
  // Set up the network you want to use. 'devnet', 'testnet', or 'mainnet-beta'
  const endpoint = clusterApiUrl("devnet"); // You can change to 'testnet' or 'mainnet' based on your needs

  // Add supported wallets here
  const wallets = [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(),
    // Add more wallets here as needed
  ];

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletContext;
