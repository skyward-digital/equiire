import React from 'react';
import { Boundary } from '#/ui/boundary';
import { ClickCounter } from '#/ui/click-counter';
import { Header } from '#/ui/components/Header/Header';

export const metadata = {
  title: 'History',
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header title="History" />

      <div className="container flex flex-1 flex-col items-center justify-center py-2">
        <ClickCounter />

        <div className="w-full flex-1">{children}</div>
      </div>
    </>
  );
}
