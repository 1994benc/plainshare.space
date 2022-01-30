import React from "react";
import MainNavBar from "../navigation/MainNavBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MainNavBar />
      <div className="p-10 my-10 mx-auto max-w-5xl">{children}</div>
    </div>
  );
}
