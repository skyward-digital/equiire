'use client';
import { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { navigation, type Item } from '#/lib/navigation';

export function Sidebar({ segment }: { segment?: string | null }) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="fixed top-0 z-10 flex h-full w-full flex-col border-b border-gray-200 bg-white pt-20 dark:border-gray-700 dark:bg-black lg:bottom-0 lg:z-auto lg:w-56 lg:border-b-0 lg:border-r lg:border-gray-300">
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-gray-100 group-hover:text-gray-400">
          Menu
        </div>
        {isOpen ? (
          <XMarkIcon className="block w-6 text-gray-400" />
        ) : (
          <Bars3Icon className="block w-6 text-gray-400" />
        )}
      </button>

      <div
        className={clsx('flex flex-1 overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-black': isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="flex h-full flex-1 flex-col gap-6 px-6 py-8">
          {navigation.map((section, index) => {
            return (
              <div
                key={index}
                className={clsx(index === navigation.length - 1 && 'mt-auto')}
              >
                <div className="space-y-2">
                  {section.items.map((item) => (
                    <GlobalNavItem
                      key={item.slug}
                      item={item}
                      isActive={item.slug === segment}
                      close={close}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

function GlobalNavItem({
  item,
  isActive,
  close,
}: {
  item: Item;
  isActive: boolean;
  close: () => false | void;
}) {
  const Icon = item.icon;

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        'flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium hover:text-gray-800 dark:hover:text-gray-300',
        {
          'text-black hover:bg-gray-200 dark:text-white dark:hover:bg-gray-800':
            !isActive,
          'text-brand-primary': isActive,
        },
      )}
    >
      <Icon className="stroke-1.5 w-5" />
      {item.name}
    </Link>
  );
}

export default function SidebarWithSegment() {
  const segment = useSelectedLayoutSegment(); // This can't be tested in isolation

  return <Sidebar segment={segment} />;
}
