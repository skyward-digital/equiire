import Link from 'next/link';
import clsx from 'clsx';
import {
  ArrowLongRightIcon,
  CheckBadgeIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';

export type StepLinkProps = {
  stage: 'complete' | 'next' | 'incomplete';
  href: string;
  children: React.ReactNode;
};

export const StepLink = ({ stage, href, children }: StepLinkProps) => {
  const completed = stage === 'complete';
  const Component = completed ? 'p' : Link;

  return (
    <Component
      href={href}
      className={clsx(
        'group flex items-center gap-2 text-xl font-semibold',
        completed && 'text-success',
        stage === 'next' &&
          'text-gray-600 duration-200 hover:text-black focus:text-black dark:text-gray-200 dark:hover:text-gray-200 dark:focus:text-gray-200',
        stage === 'incomplete' &&
          'text-gray-300 duration-200 hover:text-black focus:text-black dark:text-gray-500 dark:hover:text-gray-200 dark:focus:text-gray-200 ',
      )}
    >
      {completed ? (
        <CheckBadgeIcon className="h-8 w-8" strokeWidth={1.25} />
      ) : (
        <XCircleIcon className="h-8 w-8" strokeWidth={1.25} />
      )}
      <span
        className={clsx(
          'font-brand -mb-1',
          !completed && 'group-hover:underline group-focus:underline',
        )}
      >
        {children}
      </span>
      {stage !== 'complete' && (
        <ArrowLongRightIcon
          className={clsx(
            'h-8 w-8 duration-200 group-hover:translate-x-1 group-hover:text-black group-focus:translate-x-1 group-focus:text-black',
            stage === 'next' && 'text-gray-400',
            stage === 'incomplete' && 'text-transparent',
          )}
          strokeWidth={1}
        />
      )}
    </Component>
  );
};
