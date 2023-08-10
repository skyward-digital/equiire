import Link from 'next/link';
import { Logo } from '#/ui/assets/Logo';
import { DarkModeToggle } from './DarkModeToggle';
import { UserProfile } from './UserProfile';
import { User } from '#/app/api/profile/user';

export const Header = ({ user }: { user: User }) => {
  return (
    <header className="from-brand to-brand-400 fixed top-0 z-10 flex max-h-20 w-full items-center justify-center border-b border-transparent bg-gradient-to-r px-6 py-2 dark:border-gray-600 dark:bg-black lg:justify-between">
      <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
        <Link href="/" className="group flex w-full items-center gap-x-2.5">
          <Logo className="dark:text-brand fill-current text-white" />
          <p className="sr-only">Equiire</p>
        </Link>
      </div>

      <div className="flex items-center gap-4 text-sm font-semibold text-white">
        <DarkModeToggle className="hidden lg:block" />
        <UserProfile user={user} className="hidden lg:block" />
      </div>
    </header>
  );
};
