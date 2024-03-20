"use client";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import React from "react";

const NavBar = dynamic(() => import("@/components/NavBar"), { ssr: false });

export default function LandingLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
