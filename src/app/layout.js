"use client";
import { Poppins } from "next/font/google";
import "./globals.css";

import { usePathname } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import StoreProvider from "@/lib/StoreProvider";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${poppins.className} relative`}>{children}</body>
      </html>
    </StoreProvider>
  );
}
