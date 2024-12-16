"use client";
import React, { useEffect } from "react";
import BalanceDisplay from "@/components/BalanceDisplay";
import Wallet from "@/components/Wallet";
import { useWallet } from "@solana/wallet-adapter-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Dashboard = () => {
  const { connected, publicKey } = useWallet();

  // Initialize AOS for smooth animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 min-h-screen flex flex-col items-center justify-center py-12 px-6 sm:px-8">
      {/* Main container */}
      <div className="w-full max-w-4xl bg-white p-10 rounded-3xl shadow-2xl space-y-8 overflow-hidden">
        {/* Title Section */}
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-10">
          Tokens Tracker
        </h1>

        {/* Cards Section */}
        <div className="space-y-10">
          {/* Wallet Section */}
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-700 p-8 rounded-3xl shadow-xl text-white hover:shadow-2xl transition-shadow duration-500"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-semibold mb-6">Your Wallet</h2>
            <div className="flex items-center space-x-6">
              <Wallet />
            </div>
          </div>

          {/* Balance Section */}
          <div
            className="bg-gradient-to-r from-green-500 to-teal-600 p-8 rounded-3xl shadow-xl text-white hover:shadow-2xl transition-shadow duration-500"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-semibold mb-6">Wallet Balance</h2>
            <div className="flex items-center justify-between space-x-4">
              <BalanceDisplay />
              <div className="p-6 bg-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-20 h-20 text-teal-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12l5 5L20 7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Actions Section */}
          {connected && (
            <div
              className="bg-gradient-to-r from-yellow-500 to-orange-600 p-8 rounded-3xl shadow-xl text-white hover:shadow-2xl transition-shadow duration-500"
              data-aos="fade-up"
            >
              <div className="flex justify-between items-center">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full shadow-xl focus:outline-none transform hover:scale-105 transition-all duration-300">
                  Disconnect
                </button>
                <div className="flex items-center space-x-4">
                  {/* Profile Section */}
                  <img
                    src="https://i.pinimg.com/originals/9f/d0/3b/9fd03b0d7f1adfcb57556e7d5ad92e90.png"
                    alt="profile"
                    className="w-16 h-16 rounded-full shadow-md ring-4 ring-purple-300 transition-all duration-300 transform hover:scale-110"
                  />
                  <span className="text-2xl font-medium">My Wallet</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
