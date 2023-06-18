import clsx from 'clsx';

export type StatusProps = {
  type?: 'success' | 'warning' | 'error' | 'info';
  children: React.ReactNode;
  className?: string;
};

export const Status = ({ type, className, children }: StatusProps) => {
  return (
    <p
      className={clsx(
        'inline-flex rounded-full px-3 py-1 text-sm font-medium',
        {
          'bg-green-200 text-green-800': type === 'success',
          'bg-yellow-200 text-yellow-800': type === 'warning',
          'bg-red-200 text-red-800': type === 'error',
          'bg-blue-200 text-blue-800': type === 'info',
        },
        className,
        !type &&
          !className?.includes('bg-') &&
          'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200',
      )}
    >
      {children}
    </p>
  );
};
