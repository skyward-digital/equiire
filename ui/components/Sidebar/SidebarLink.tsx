import Link from 'next/link';
import { type Item } from '#/lib/navigation';
import clsx from 'clsx';

type SidebarLinkProps = {
  item: Item;
  isActive?: boolean;
  close: () => false | void;
  onClick?: () => void;
};

export const SidebarLink = ({
  item,
  isActive,
  close,
  onClick,
}: SidebarLinkProps) => {
  const Component = onClick ? 'button' : Link;
  const Icon = item.icon;

  return (
    <Component
      onClick={() => {
        if (onClick) onClick();
        close();
      }}
      href={`/${item.slug}`}
      className={clsx(
        'flex w-full items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium',
        isActive
          ? 'text-brand'
          : 'text-gray-600 hover:bg-gray-200 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-300',
      )}
    >
      <Icon className="stroke-1.5 w-5" />
      {item.name}
    </Component>
  );
};
