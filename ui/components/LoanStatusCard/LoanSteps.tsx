import Link from 'next/link';
import clsx from 'clsx';
import {
  ArrowLongRightIcon,
  CheckBadgeIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';
import { LoanProps } from './LoanStatusCard';

export const LoanSteps = ({ steps }: { steps: LoanProps['steps'] }) => {
  if (!steps) return null;
  const { loan, account, payment, signature } = steps;

  return (
    <>
      <Step href="#" completed={loan}>
        Add loan details
      </Step>
      <Step href="#" completed={account}>
        Complete account setup
      </Step>
      <Step href="#" completed={payment}>
        Add payment information
      </Step>
      <Step href="#" completed={signature}>
        Sign loan agreement
      </Step>
    </>
  );
};

type StepProps = {
  completed: boolean;
  href: string;
  children: React.ReactNode;
};

const Step = ({ completed, href, children }: StepProps) => {
  const Component = completed ? 'p' : Link;

  return (
    <Component
      href={href}
      className={clsx(
        'group flex items-center gap-2 text-xl font-semibold',
        completed
          ? 'text-success'
          : 'text-gray-600 duration-200 hover:text-black focus:text-black dark:text-gray-200 dark:hover:text-gray-200 dark:focus:text-gray-200',
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
      {!completed && (
        <ArrowLongRightIcon
          className="h-8 w-8 text-gray-400 duration-200 group-hover:translate-x-1 group-hover:text-black group-focus:translate-x-1 group-focus:text-black"
          strokeWidth={1}
        />
      )}
    </Component>
  );
};
