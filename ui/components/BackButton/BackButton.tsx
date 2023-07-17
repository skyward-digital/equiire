import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export const BackButton = ({
  href = '/login',
  onClick,
}: {
  href?: string;
  onClick?: any;
}) => {
  if (onClick) {
    return (
      <button
        onClick={onClick}
        aria-label="Back"
        className="flex w-min items-center justify-center rounded-full bg-gray-100 p-2 dark:bg-gray-800 dark:hover:bg-gray-500"
      >
        <ArrowLeftIcon className="h-5 w-5 text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-100" />
      </button>
    );
  }

  return (
    <Link
      href={href}
      aria-label="Back to login"
      className="flex w-min items-center justify-center rounded-full bg-gray-100 p-2 dark:bg-gray-800 dark:hover:bg-gray-500"
    >
      <ArrowLeftIcon className="h-5 w-5 text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-100" />
    </Link>
  );
};
