import clsx from 'clsx';

export const Divider = ({ className }: { className: string }) => (
  <div
    className={clsx(
      className,
      'w-full border-b border-dashed border-gray-300 dark:border-gray-500',
    )}
  />
);
