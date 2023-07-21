import clsx from 'clsx';

export type BadgeProps = {
  as?: React.ElementType;
  type: 'info' | 'warning' | 'error' | 'success';
  size?: 'sm' | 'md';
  Icon?: any;
  dot?: boolean;
  children: React.ReactNode;
};

export const Badge = ({
  as,
  type,
  size = 'md',
  Icon,
  dot,
  children,
}: BadgeProps) => {
  const Component = as || 'p';

  return (
    <Component
      className={clsx(
        'inline-flex items-center gap-1 rounded border capitalize',
        // Status
        type === 'info' &&
          'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-800 dark:text-blue-200',
        type === 'warning' &&
          'border-warning-200 bg-warning-50 text-warning-700 dark:border-warning-500 dark:bg-warning-500 dark:text-warning-950',
        type === 'error' &&
          'border-error-200 bg-error-50 text-error-700 dark:border-error-900 dark:bg-error-800 dark:text-error-200',
        type === 'success' &&
          'border-success-200 bg-success-50 text-success-700 dark:border-success-900 dark:bg-success-800 dark:text-success-200',
        !type &&
          'border-gray-200 bg-gray-50 text-gray-700 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-200',
        // Size
        size === 'sm' && 'px-1 py-0 text-xs',
        size === 'md' && 'px-2 py-0.5 text-sm',
      )}
    >
      {Icon && (
        <Icon
          className={clsx(
            'opacity-90',
            size === 'sm' && 'h-3 w-3',
            size === 'md' && 'h-5 w-5 ',
          )}
          strokeWidth={1.5}
        />
      )}
      {!Icon && dot ? (
        <span className="mr-0.5 h-1.5 w-1.5 rounded-full bg-current opacity-60" />
      ) : null}
      <span className="font-semibold">{children}</span>
    </Component>
  );
};
