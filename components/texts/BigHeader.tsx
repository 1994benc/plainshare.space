import React from "react";

export default function BigHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="bg-yellow-200 w-3/4 -z-10 absolute left-16 top-8 h-10"></div>
      <h1 className="sm:text-6xl text-4xl font-bold">{children}</h1>
    </div>
  );
}
