import Link from 'next/link';
import { Logo } from '#/ui/assets/Logo';
import { DarkModeToggle } from './DarkModeToggle';
import { UserProfile } from './UserProfile';

export type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="bg-brand border-brand flex items-center justify-between border-b px-6 py-2 dark:border-gray-600 dark:bg-black">
      <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
        <Link href="/" className="group flex w-full items-center gap-x-2.5">
          <Logo className="dark:text-brand fill-current text-white" />
          <p className="sr-only">Equiire</p>
        </Link>
      </div>

      <div className="flex items-center gap-4 text-sm font-semibold text-white">
        <DarkModeToggle className="" />
        <UserProfile className="hidden sm:block" />
      </div>
    </header>
  );
};
