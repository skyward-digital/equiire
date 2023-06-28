import clsx from 'clsx';

export type BadgeProps = {
  as?: React.ElementType;
  type: 'info' | 'warning' | 'error';
  Icon: any;
  children: React.ReactNode;
};

export const Badge = ({ as, type, Icon, children }: BadgeProps) => {
  const Component = as || 'p';

  return (
    <Component
      className={clsx(
        'inline-flex items-center gap-1 rounded-lg border px-2 py-0.5',
        {
          'border-blue-200 bg-blue-50 text-blue-700': type === 'info',
          'border-yellow-200 bg-yellow-50 text-yellow-700': type === 'warning',
          'border-red-200 bg-red-50 text-red-700': type === 'error',
        },
      )}
    >
      <Icon className="h-5 w-5 opacity-90" strokeWidth={1.5} />
      <span className="font-semibold">{children}</span>
    </Component>
  );
};
