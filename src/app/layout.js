"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/lib/StoreProvider";
import ProtectedRoutes from "@/middleware/ProtectedRoutes";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <ProtectedRoutes>
        <html lang="en">
          <body className={`${poppins.className} relative`}>{children}</body>
        </html>
      </ProtectedRoutes>
    </StoreProvider>
  );
}
