"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer, NavBar } from "@/components/";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const routesWithoutNavigation = [
    "/login",
    "/register",
    "/register_details",
    "/personal_details",
    "/account_details",
    "/experience_details",
  ];
  const hideNavigation = routesWithoutNavigation.includes(pathname);
  return (
    <html lang="en">
      <body className={poppins.className}>
        {!hideNavigation && <NavBar />}
        {children}
        {!hideNavigation && <Footer />}
      </body>
    </html>
  );
}
