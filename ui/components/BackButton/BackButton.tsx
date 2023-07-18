import { ElementType } from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

type BackButtonProps = {
  back: string | (() => void);
  ariaLabel?: string;
};

export const BackButton = ({ back, ariaLabel = 'Back' }: BackButtonProps) => {
  const Component: ElementType = typeof back === 'string' ? Link : 'button';
  const props = typeof back === 'string' ? { href: back } : { onClick: back };

  const ArrowIcon = () => (
    <ArrowLeftIcon className="h-5 w-5 text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-100" />
  );

  return (
    <Component
      {...props}
      aria-label={ariaLabel}
      className="flex w-min items-center justify-center rounded-full bg-gray-100 p-2 dark:bg-gray-800 dark:hover:bg-gray-500"
    >
      <ArrowIcon />
    </Component>
  );
};
