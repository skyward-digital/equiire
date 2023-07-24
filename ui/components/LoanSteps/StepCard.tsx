import Link from 'next/link';
import clsx from 'clsx';
import {
  ArrowLongRightIcon,
  CheckBadgeIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';

type StepProps = {
  stage: 'complete' | 'next' | 'incomplete';
  href: string;
  children: React.ReactNode;
};

export const StepCard = ({ stage, href, children }: StepProps) => {
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
          'text-gray-400 duration-200 hover:text-black focus:text-black dark:text-gray-500 dark:hover:text-gray-200 dark:focus:text-gray-200 ',
      )}
    >
      {completed ? (
        <CheckBadgeIcon className="h-8 w-8" strokeWidth={1.25} />
      ) : (
        <XCircleIcon className="h-8 w-8" strokeWidth={1.25} />
      )}
      <span className="font-brand -mb-1 group-hover:underline group-focus:underline">
        {children}
      </span>
      {stage === 'next' && (
        <ArrowLongRightIcon
          className="h-8 w-8 text-gray-400 duration-200 group-hover:translate-x-1 group-hover:text-black group-focus:translate-x-1 group-focus:text-black"
          strokeWidth={1}
        />
      )}
    </Component>
  );
};
