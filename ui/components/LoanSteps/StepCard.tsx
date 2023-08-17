import Link from 'next/link';
import clsx from 'clsx';
import { CheckBadgeIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { Button } from '../Button';

type StepProps = {
  stage: 'complete' | 'next' | 'incomplete';
  href: string;
  children: React.ReactNode;
};

export const StepCard = ({ stage, href, children }: StepProps) => {
  const completed = stage === 'complete';
  const Component = completed ? 'div' : Link;

  return (
    <Component
      href={href}
      className={clsx(
        'relative flex w-full items-center gap-2 overflow-hidden rounded-lg border bg-white px-3 py-2 font-semibold shadow-md dark:bg-black sm:p-6 sm:text-xl',
        !completed && 'group',
        completed && 'border-success-200 dark:border-success-800',
        stage === 'next' && 'border-brand-200 dark:border-brand-800',
        stage === 'incomplete' && 'border-gray-200 dark:border-gray-800',
      )}
    >
      <span
        className={clsx(
          'absolute left-0 h-full w-2',
          stage === 'complete' && 'bg-success',
          stage === 'next' && 'bg-brand',
          stage === 'incomplete' && 'bg-gray-300 dark:bg-gray-700',
        )}
      />
      <div
        className={clsx(
          'rounded-full p-2 text-inherit',
          completed && 'bg-success-100',
          stage === 'next' && 'bg-brand-100',
          stage === 'incomplete' && 'bg-gray-50 dark:bg-gray-700',
        )}
      >
        {completed ? (
          <CheckBadgeIcon
            className="text-success-600 h-4 w-4 sm:h-8 sm:w-8"
            strokeWidth={1.5}
          />
        ) : (
          <XCircleIcon
            className={clsx(
              'h-4 w-4 duration-200 sm:h-8 sm:w-8',
              stage === 'next' && 'text-brand-600',
              stage === 'incomplete' &&
                'text-gray-300 group-hover:text-gray-400 dark:text-gray-400',
            )}
            strokeWidth={1.5}
          />
        )}
      </div>
      <span
        className={clsx(
          'font-brand -mb-1 flex-1 duration-200 group-hover:underline group-focus:underline',
          completed && 'text-success-600',
          stage === 'next' && 'text-black dark:text-white',
          stage === 'incomplete' &&
            'text-gray-300 group-hover:text-black dark:text-gray-600 dark:group-hover:text-white',
        )}
      >
        {children}
      </span>

      {!completed && (
        <Button
          variant={(stage === 'incomplete' && 'secondary') || 'primary'}
          size="md"
          className={clsx(
            stage === 'incomplete' &&
              'opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 group-focus:opacity-100',
          )}
        >
          Finish Now
        </Button>
      )}
    </Component>
  );
};
