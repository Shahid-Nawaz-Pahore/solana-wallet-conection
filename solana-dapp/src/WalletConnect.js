import React, { useState, useEffect } from "react";
import { PublicKey } from "@solana/web3.js";
import { getProvider, getBalance } from "./solanaUtils";

const WalletConnect = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [balance, setBalance] = useState(null);

  const connectWallet = async () => {
    try {
      const provider = getProvider();
      
      // Trigger Phantom wallet pop-up to connect
      await provider.connect();
      
      const publicKey = provider.publicKey.toString();
      setWalletAddress(publicKey);
      
      // Fetch wallet balance
      const balance = await getBalance(provider.publicKey);
      setBalance(balance);
    } catch (error) {
      console.error("Failed to connect wallet", error);
    }
  };

  const disconnectWallet = () => {
    try {
      const provider = getProvider();
      provider.disconnect(); // Disconnect from the wallet

      // Clear local state
      setWalletAddress(null);
      setBalance(null);
    } catch (error) {
      console.error("Failed to disconnect wallet", error);
    }
  };

  useEffect(() => {
    if (walletAddress) {
      // Optionally auto-refresh wallet balance
      const refreshBalance = async () => {
        const balance = await getBalance(new PublicKey(walletAddress));
        setBalance(balance);
      };
      
      // Refresh balance every 10 seconds
      const interval = setInterval(refreshBalance, 10000);

      // Clean up on component unmount
      return () => clearInterval(interval);
    }
  }, [walletAddress]);

  return (
    <div>
      {!walletAddress ? (
        <button onClick={connectWallet}>Connect Phantom Wallet</button>
      ) : (
        <div>
          <p>Connected: {walletAddress}</p>
          <p>Balance: {balance} SOL</p>
          <button onClick={disconnectWallet}>Disconnect</button>
        </div>
      )}
    </div>
  );
};

export default WalletConnect;
