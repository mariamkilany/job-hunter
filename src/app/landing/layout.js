import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

export default function LandingLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
