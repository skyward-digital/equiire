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
    <>
      <div className="z-10 flex w-full flex-col">
        <Header title="Settings" />
        <Sidebar />
      </div>

      <main className="flex max-h-screen w-full flex-col overflow-auto pl-56 pt-20">
        {children}
      </main>
    </>
  );
}
