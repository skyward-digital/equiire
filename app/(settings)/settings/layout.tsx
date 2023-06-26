import React from 'react';
import { Header } from '#/ui/components/Header/Header';
import { Sidebar } from '#/ui/components/Sidebar/Sidebar';

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
      <Header title="Settings" />

      <div className="flex overflow-y-scroll">
        <Sidebar />

        <main className="mt-4 flex min-h-screen w-full flex-col pl-72">
          {children}
        </main>
      </div>
    </div>
  );
}
