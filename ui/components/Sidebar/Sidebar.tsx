import clsx from 'clsx';
import { useSelectedLayoutSegment } from 'next/navigation';
import { navigation } from '#/lib/navigation';
import { SidebarLink } from './SidebarLink';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { logout } from '#/app/api/auth';
import { UserProfile } from '../Header/UserProfile';
import { User } from '#/app/api/profile/user';

type SidebarProps = {
  segment?: string | null;
  user: User;
  isOpen: boolean;
  close: () => void;
};

export function Sidebar({ user, isOpen, segment, close }: SidebarProps) {
  return (
    <div
      className={clsx('fixed top-0 h-screen lg:w-56', {
        'w-3/4': isOpen,
      })}
    >
      <div
        className={clsx(
          'flex h-full w-full flex-col border-gray-300 bg-white pt-20 dark:border-gray-700 dark:bg-black lg:border-r',
          {
            'hidden lg:block': !isOpen,
          },
        )}
      >
        <nav className="flex h-full flex-1 flex-col justify-between gap-6 border-b border-gray-300 px-6 py-8 dark:border-gray-700 lg:border-0">
          <div>
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
          </div>
          <SidebarLink
            item={{
              name: 'Logout',
              icon: ArrowLeftIcon,
              slug: 'logout',
            }}
            close={close}
            onClick={logout}
          />
        </nav>
        <UserProfile
          className="my-4 ml-8 block text-sm font-semibold text-gray-600 dark:text-gray-300 lg:hidden"
          user={user}
        />
      </div>
    </div>
  );
}

export default function SidebarWithSegment({
  user,
  isOpen,
  close,
}: {
  user: User;
  isOpen: boolean;
  close: () => void;
}) {
  const segment = useSelectedLayoutSegment(); // This can't be tested in isolation

  return (
    <Sidebar close={close} isOpen={isOpen} user={user} segment={segment} />
  );
}
