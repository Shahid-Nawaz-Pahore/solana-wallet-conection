import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WalletContext from "@/context/WalletContext";
import "@solana/wallet-adapter-react-ui/styles.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
import "@solana/wallet-adapter-react-ui/styles.css";
export const metadata: Metadata = {
  title: "Solana Gateway",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WalletContext>{children}</WalletContext>
      </body>
    </html>
  );
}
