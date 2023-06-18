import React from 'react';

// Only needed when building with local APIs, as the build process is trying to build these statically
export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Route Groups',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
