'use client';
import { useState } from 'react';
import clsx from 'clsx';
import { useSelectedLayoutSegment } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { navigation } from '#/lib/navigation';
import { SidebarLink } from './SidebarLink';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { logout } from '#/hooks/useAuth';

export function Sidebar({ segment }: { segment?: string | null }) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="fixed top-0 z-10 flex h-full w-full flex-col border-b border-gray-200  dark:border-gray-700 sm:pt-20 lg:bottom-0 lg:z-auto lg:w-56 lg:border-b-0 lg:border-r lg:border-gray-300">
      {/* This div is the same size as the Header so we can position the sidebar mobile menu icon perfectly in the center */}
      <div className="absolute left-6 top-0 h-14 py-9">
        <button
          type="button"
          className="focus:outline-brand-100 bg-brand-400 group flex -translate-y-1/2 items-center rounded-full p-2 dark:bg-gray-800 dark:hover:bg-gray-500 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="block w-4 text-white" />
          ) : (
            <Bars3Icon className="block w-4 text-white" />
          )}
        </button>
      </div>

      <div
        className={clsx('flex flex-1 overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-black': isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="flex h-full flex-1 flex-col gap-6 px-6 py-8">
          {navigation.map((section, index) => {
            return (
              <div className="space-y-2" key={index}>
                {section.items.map((item) => (
                  <SidebarLink
                    key={item.slug}
                    item={item}
                    isActive={item.slug === segment}
                    close={close}
                  />
                ))}
              </div>
            );
          })}

          <div className="mt-auto space-y-2">
            <SidebarLink
              item={{
                name: 'Logout',
                icon: ArrowLeftIcon,
                slug: 'logout',
              }}
              close={close}
              onClick={logout}
            />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default function SidebarWithSegment() {
  const segment = useSelectedLayoutSegment(); // This can't be tested in isolation

  return <Sidebar segment={segment} />;
}
