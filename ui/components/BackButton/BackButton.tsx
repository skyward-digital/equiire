import { ElementType } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

type BackButtonProps = {
  back: string | (() => void);
  ariaLabel?: string;
  className: string;
};

export const BackButton = ({
  back,
  ariaLabel = 'Back',
  className,
}: BackButtonProps) => {
  const Component: ElementType = typeof back === 'string' ? Link : 'button';
  const props = typeof back === 'string' ? { href: back } : { onClick: back };

  return (
    <Component
      {...props}
      aria-label={ariaLabel}
      className={clsx(
        className,
        'focus:ring-brand-100 focus:border-brand-300 flex w-min items-center justify-center rounded-full bg-gray-100 p-2 focus:outline-none focus:ring-4 dark:bg-gray-800 dark:hover:bg-gray-500',
      )}
    >
      <ArrowLeftIcon className="h-5 w-5 text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-100" />
    </Component>
  );
};
