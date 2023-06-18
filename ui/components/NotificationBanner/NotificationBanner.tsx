import clsx from 'clsx';

export type NotificationBannerProps = {
  type: 'success' | 'warning' | 'error' | 'info';
  children: React.ReactNode;
};

export const NotificationBanner = ({
  type,
  children,
}: NotificationBannerProps) => {
  return (
    <div
      className={clsx('flex w-full justify-between rounded-lg border p-4', {
        'border-green-500 bg-green-600/25': type === 'success',
        'border-yellow-500 bg-yellow-600/25': type === 'warning',
        'border-red-500 bg-red-600/25': type === 'error',
        'border-blue-500 bg-blue-600/25': type === 'info',
      })}
    >
      {children}
    </div>
  );
};
