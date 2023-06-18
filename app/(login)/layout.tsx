import { Boundary } from '#/ui/boundary';
import { ClickCounter } from '#/ui/click-counter';
import { TabGroup } from '#/ui/tab-group';
import React from 'react';

export const metadata = {
  title: 'Login',
};

// This layout should be different from the main app layout which can be achieved by turning this into a root layout (and removing the layout at app/layout.tsx)
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Boundary labels={['Login layout']} color="blue" animateRerendering={false}>
      <div className="space-y-9">
        <div className="flex w-96 max-w-full justify-between">
          <TabGroup
            path=""
            items={[
              {
                text: 'Log in',
                slug: 'login',
              },
              { text: 'Sign Up', slug: 'sign-up' },
            ]}
          />

          <div className="self-start">
            <ClickCounter />
          </div>
        </div>

        <div>{children}</div>
      </div>
    </Boundary>
  );
}
