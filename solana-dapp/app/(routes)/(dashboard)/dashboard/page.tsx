"use client";
import BalanceDisplay from "@/components/BalanceDisplay";
import SendSOLToRandomAddress from "@/components/SendSOLToRandomAddress";
import Wallet from "@/components/Wallet";
import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 min-h-screen flex flex-col items-center justify-center py-12 px-6 sm:px-8">
      {/* Main container */}
      <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Dashboard
        </h1>

        {/* Cards Section */}
        <div className="space-y-8">
          {/* Wallet Section */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Wallet
            </h2>
            <Wallet />
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <BalanceDisplay />{" "}
            {/* Display the balance of the connected wallet */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
