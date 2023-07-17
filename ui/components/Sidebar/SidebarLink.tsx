import Link from 'next/link';
import { type Item } from '#/lib/navigation';
import clsx from 'clsx';

type SidebarLinkProps = {
  item: Item;
  isActive: boolean;
  close: () => false | void;
};

export const SidebarLink = ({ item, isActive, close }: SidebarLinkProps) => {
  const Icon = item.icon;

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        'flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium hover:text-gray-800 dark:hover:text-gray-300',
        isActive
          ? 'text-brand'
          : 'text-black hover:bg-gray-200 dark:text-white dark:hover:bg-gray-800',
      )}
    >
      <Icon className="stroke-1.5 w-5" />
      {item.name}
    </Link>
  );
};
