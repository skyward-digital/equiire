'use client';
import { useState } from 'react';
import clsx from 'clsx';
import { Header } from '#/ui/components/Header';
import Sidebar from '#/ui/components/Sidebar';
import { User } from '#/app/api/profile/user';

export function NavigationLayout({ user }: { user: User }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const close = () => setSidebarOpen(false);

  return (
    <div className="fixed z-30 w-full">
      {/* transparent overlay on mobile only */}
      <div
        className={clsx(
          'fixed right-0 z-20 h-screen w-1/4 border-l border-gray-300 bg-black/50 dark:border-gray-700 lg:hidden',
          {
            hidden: !sidebarOpen,
          },
        )}
      ></div>
      <Header
        sidebarOpen={sidebarOpen}
        user={user}
        setSidebarOpen={setSidebarOpen}
      />
      <Sidebar close={close} isOpen={sidebarOpen} user={user} />
    </div>
  );
}
