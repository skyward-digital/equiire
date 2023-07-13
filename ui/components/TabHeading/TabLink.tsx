import clsx from 'clsx';

export type TabLinkProps = {
  title: string;
  href: string;
  Icon?: any;
  active?: boolean;
};

export const TabLink = ({ title, href, Icon, active }: TabLinkProps) => {
  return (
    <a
      href={href}
      className={clsx(
        '-mb-px flex items-center gap-2 px-3 pb-1.5 font-semibold',
        active
          ? '!text-brand border-brand border-b-[3px]'
          : 'text-gray-600 dark:text-gray-400',
      )}
    >
      {Icon ? (
        <Icon
          className={clsx('h-5 w-5', active ? 'text-brand' : 'text-gray-500')}
        />
      ) : null}
      {title}
    </a>
  );
};
