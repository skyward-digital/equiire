import React from 'react';
import { Header } from '#/ui/components/Header';
import Sidebar from '#/ui/components/Sidebar';

export const metadata = {
  title: 'Settings',
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="fixed flex h-full w-full flex-col">
        <Header title="Settings" />
        <Sidebar />
      </div>

      <div className="flex overflow-y-scroll">
        <main className="mt-4 flex min-h-screen w-full flex-col pl-72">
          {children}
        </main>
      </div>
    </div>
  );
}
