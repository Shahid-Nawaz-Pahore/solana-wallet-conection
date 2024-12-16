import SendSOLToRandomAddress from "@/components/SendSOLToRandomAddress";
import Wallet from "@/components/Wallet";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <Wallet />
      <SendSOLToRandomAddress />
    </div>
  );
};

export default Dashboard;
