import React from "react";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-full dark:bg-[#1F1F1F]">{children}</div>;
};

export default PublicLayout;
