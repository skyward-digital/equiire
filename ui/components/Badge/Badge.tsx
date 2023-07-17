import clsx from 'clsx';

export type BadgeProps = {
  as?: React.ElementType;
  type: 'info' | 'warning' | 'error' | 'success';
  Icon?: any;
  dot?: boolean;
  children: React.ReactNode;
};

export const Badge = ({ as, type, Icon, dot, children }: BadgeProps) => {
  const Component = as || 'p';

  return (
    <Component
      className={clsx(
        'inline-flex items-center gap-1 rounded border px-2 py-0.5',
        {
          'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-800 dark:text-blue-200':
            type === 'info',
          'border-warning-400 bg-warning-50 text-warning-700 dark:border-warning-500 dark:bg-warning-500 dark:text-warning-950':
            type === 'warning',
          'border-error-200 bg-error-50 text-error-700 dark:border-error-900 dark:bg-error-800 dark:text-error-200':
            type === 'error',
          'border-success-200 bg-success-50 text-success-700 dark:border-success-900 dark:bg-success-800 dark:text-success-200':
            type === 'success',
        },
      )}
    >
      {Icon && <Icon className="h-5 w-5 opacity-90" strokeWidth={1.5} />}
      {!Icon && dot ? (
        <span className="mr-0.5 h-1.5 w-1.5 rounded-full bg-current" />
      ) : null}
      <span className="font-semibold">{children}</span>
    </Component>
  );
};
