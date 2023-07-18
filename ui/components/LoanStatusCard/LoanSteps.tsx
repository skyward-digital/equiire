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
          : 'hover:text-brand-600 dark:hover:text-brand text-gray-600 duration-200 dark:text-gray-200',
      )}
    >
      {completed ? (
        <CheckBadgeIcon className="h-8 w-8" strokeWidth={1.25} />
      ) : (
        <XCircleIcon className="h-8 w-8" strokeWidth={1.25} />
      )}
      <span className="font-brand -mb-1">{children}</span>
      {!completed && (
        <ArrowLongRightIcon
          className="h-8 w-8 text-gray-400 duration-200 group-hover:translate-x-1 group-focus:translate-x-1"
          strokeWidth={1}
        />
      )}
    </Component>
  );
};
