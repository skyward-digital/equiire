import Link from 'next/link';
import { Logo } from '#/ui/assets/Logo';
import { DarkModeToggle } from './DarkModeToggle';
import { UserProfile } from './UserProfile';
import { AuthSession } from '#/lib/auth';

export const Header = ({ user }: { user: AuthSession['user'] }) => {
  return (
    <header className="from-brand to-brand-400 fixed top-0 z-10 flex max-h-20 w-full items-center justify-between border-b border-transparent bg-gradient-to-r px-6 py-2 dark:border-gray-600 dark:bg-black">
      <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
        <Link href="/" className="group flex w-full items-center gap-x-2.5">
          <Logo className="dark:text-brand fill-current text-white" />
          <p className="sr-only">Equiire</p>
        </Link>
      </div>

      <div className="flex items-center gap-4 text-sm font-semibold text-white">
        <DarkModeToggle />
        <UserProfile user={user} className="hidden sm:block" />
      </div>
    </header>
  );
};
