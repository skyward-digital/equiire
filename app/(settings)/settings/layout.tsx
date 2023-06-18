import React from 'react';
import { Boundary } from '#/ui/boundary';
import { ClickCounter } from '#/ui/click-counter';
import { Header } from '#/ui/components/Header/Header';

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
      <Header title="Settings" />

      <div className="container flex flex-1 flex-col items-center justify-center py-2">
        <Boundary
          labels={['Settings layout']}
          color="blue"
          animateRerendering={false}
        >
          <div className="space-y-9">
            <ClickCounter />

            <div>{children}</div>
          </div>
        </Boundary>
      </div>
    </>
  );
}
