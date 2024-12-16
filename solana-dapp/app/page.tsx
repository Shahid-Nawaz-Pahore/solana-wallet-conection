// app/page.js

"use client"; // Marks this file as a client-side component

import React, { useEffect, useState } from "react";
import LoginPage from "./(routes)/(auth)/login/page"; // Adjust the path if necessary
import { ClipLoader } from "react-spinners"; // Import the ClipLoader spinner
import { CSSProperties } from "react"; // For custom styling

const Home = () => {
  // Client-side flag to ensure the component works correctly on hydration
  const [isClient, setIsClient] = useState(false);

  // Define the loading spinner style
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red", // You can customize the border color, but we set the spinner color below
    position: "absolute", // To center it relative to the screen
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", // Center the spinner
  };

  useEffect(() => {
    setIsClient(true); // This runs only on the client
  }, []);

  if (!isClient) {
    return (
      <div style={{ position: "relative", height: "100vh" }}>
        {/* Display the loading spinner while waiting for hydration */}
        <ClipLoader
          color="#0000FF" // Customize spinner color (blue)
          loading={!isClient} // Show the loader while hydration is in progress
          cssOverride={override}
          size={150} // Spinner size
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <div>
      <LoginPage /> {/* Render LoginPage only after client-side hydration */}
    </div>
  );
};

export default Home;
