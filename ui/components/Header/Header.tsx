import Link from 'next/link';
import clsx from 'clsx';
import { Logo } from '#/ui/assets/Logo';
import { DarkModeToggle } from './DarkModeToggle';
import { UserProfile } from './UserProfile';
import { User } from '#/app/api/profile/user';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

export const Header = ({
  user,
  sidebarOpen,
  setSidebarOpen,
}: {
  user: User;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}) => {
  return (
    <header className="from-brand to-brand-400 fixed top-0 z-10 flex h-20 w-full items-center justify-center border-b border-transparent bg-gradient-to-r px-6 py-2 dark:border-gray-600 dark:from-black dark:to-black lg:justify-between">
      {/* Sidebar menu mobile button */}
      <button
        className="focus:outline-brand-100 bg-brand-400 absolute left-0 ml-6 rounded-full p-2 dark:bg-gray-800 lg:hidden"
        type="button"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? (
          <XMarkIcon className="block w-4 text-white" />
        ) : (
          <Bars3Icon className="block w-4 text-white" />
        )}
      </button>
      <div
        className={clsx('flex h-14 items-center px-4 py-4 lg:h-auto', {
          'hidden lg:flex': sidebarOpen,
        })}
      >
        <Link
          href="/"
          className="focus:outline-brand-100 group flex w-full items-center gap-x-2.5"
        >
          <Logo className="dark:text-brand fill-current text-white" />
          <p className="sr-only">Equiire</p>
        </Link>
      </div>

      <div className="flex items-center gap-4 text-sm font-semibold text-white">
        <DarkModeToggle
          className={clsx('lg:block', sidebarOpen ? 'block' : 'hidden')}
        />
        <UserProfile user={user} className="hidden lg:block" />
      </div>
    </header>
  );
};
