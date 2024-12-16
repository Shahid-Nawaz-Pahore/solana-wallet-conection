"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { Connection, clusterApiUrl } from "@solana/web3.js";

const BalanceDisplay = () => {
  const { publicKey } = useWallet(); // Get the public key from the connected wallet
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Ensure the wallet is connected and publicKey is available
    if (publicKey) {
      const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

      const getBalance = async () => {
        try {
          // Debug: Check if the publicKey is available
          console.log("Fetching balance for publicKey:", publicKey.toBase58());

          const lamports = await connection.getBalance(publicKey); // Get balance in lamports (1 SOL = 1 billion lamports)

          // Debug: Check balance in lamports
          console.log("Lamports balance:", lamports);

          setBalance(lamports / 10 ** 9); // Convert lamports to SOL
        } catch (error) {
          console.error("Failed to fetch balance", error);
          setError("Failed to fetch balance");
        } finally {
          setLoading(false);
        }
      };

      getBalance();
    } else {
      setBalance(null);
      setLoading(false);
    }
  }, [publicKey]);

  // Show loading state
  if (loading) {
    return <p className="text-gray-500">Loading balance...</p>;
  }

  // Show error if there's an issue fetching the balance
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  // Show message if the wallet is not connected
  if (balance === null) {
    return <p className="text-gray-500">Please connect your wallet.</p>;
  }

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold text-gray-900">Wallet Balance</h2>
      <p className="text-2xl text-blue-500 font-bold">
        {balance.toFixed(4)} SOL
      </p>
    </div>
  );
};

export default BalanceDisplay;
