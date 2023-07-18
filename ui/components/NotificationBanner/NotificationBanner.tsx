import clsx from 'clsx';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { Button } from '#/ui/components/Button';

export type NotificationBannerProps = {
  message: string;
  status: 'success' | 'warning' | 'error' | 'info';
  link: string;
  linkLabel: string;
};

const mapIcon = {
  success: ExclamationCircleIcon,
  warning: ExclamationCircleIcon,
  error: ExclamationCircleIcon,
  info: ExclamationCircleIcon,
};

export const NotificationBanner = ({
  message,
  status,
  link,
  linkLabel,
}: NotificationBannerProps) => {
  const Icon = mapIcon[status];

  return (
    <div className="flex w-full rounded-lg border bg-white p-4 shadow-sm dark:border-gray-500 dark:bg-black">
      <div
        className={clsx(
          'mr-4 flex items-center justify-center rounded-full border-8 p-2',
          {
            'border-success-50 bg-success-100 dark:border-success-700 dark:bg-success-600':
              status === 'success',
            'border-warning-50 dark:border-warning-700 bg-warning-100 dark:bg-warning-600':
              status === 'warning',
            'border-error-50 bg-error-100 dark:border-error-700 dark:bg-error-600':
              status === 'error',
            'border-blue-50 bg-blue-100 dark:border-blue-700 dark:bg-blue-600':
              status === 'info',
          },
        )}
      >
        <Icon
          className={clsx('h-8 w-8', {
            'text-success-600 dark:text-success-100': status === 'success',
            'text-warning-600 dark:text-warning-100': status === 'warning',
            'text-error-600 dark:text-error-100': status === 'error',
            'text-blue-600 dark:text-blue-100': status === 'info',
          })}
        />
      </div>
      <div className="flex w-full items-center justify-between gap-4">
        <p className="font-brand -mb-1 text-2xl font-semibold">{message}</p>

        {link ? (
          <Button href={link} variant="primary">
            {linkLabel}
          </Button>
        ) : null}
      </div>
    </div>
  );
};
