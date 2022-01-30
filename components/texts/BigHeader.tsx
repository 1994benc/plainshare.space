import React from 'react';

export default function BigHeader({ children }: { children: React.ReactNode }) {
  return <h1 className="text-6xl font-bold">{children}</h1>;
}
