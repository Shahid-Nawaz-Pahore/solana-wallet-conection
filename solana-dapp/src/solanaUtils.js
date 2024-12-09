import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";

// Set up the connection to Solana devnet (you can change to mainnet later)
export const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

// Function to get the provider (wallet) from window.solana
export const getProvider = () => {
  if ("solana" in window) {
    return window.solana; // Phantom (or other wallets) object
  } else {
    throw new Error("Solana wallet not found");
  }
};

// Function to get wallet balance (convert lamports to SOL)
export const getBalance = async (publicKey) => {
  const balance = await connection.getBalance(publicKey);
  return balance / 1e9; // convert lamports to SOL (1 SOL = 1e9 lamports)
};
