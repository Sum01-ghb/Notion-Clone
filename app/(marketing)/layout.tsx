import React from "react";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen dark:bg-[#1F1F1F] ">
      <Navbar />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default MarketingLayout;
