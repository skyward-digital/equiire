import { StepCard } from './StepCard';
import { StepLink } from './StepLink';

// These exist in multiple places like LoanStatusCard - potential for cleanup
export type LoanStepsProps = {
  steps?: {
    loan: boolean;
    account: boolean;
    payment: boolean;
    signature: boolean;
  };
  variant?: 'link' | 'card';
};

export const LoanSteps = ({ steps, variant }: LoanStepsProps) => {
  if (!steps) return null;
  const Component = variant === 'card' ? StepCard : StepLink;

  const stepsContent = {
    loan: {
      title: 'Add loan details',
      href: '#',
      order: 1,
      completed: steps.loan,
    },
    account: {
      title: 'Complete account setup',
      href: '#',
      order: 2,
      completed: steps.account,
    },
    payment: {
      title: 'Add payment information',
      href: '#',
      order: 3,
      completed: steps.payment,
    },
    signature: {
      title: 'Sign loan agreement',
      href: '#',
      order: 4,
      completed: steps.signature,
    },
  };

  const calculateStatus = ({
    currentStep,
    previousStep,
  }: {
    currentStep: any;
    previousStep: any;
  }) => {
    if (currentStep.completed) return 'complete';
    if (previousStep.completed) return 'next';
    return 'incomplete';
  };

  const orderedSteps = Object.values(stepsContent).sort(
    (a, b) => a.order - b.order,
  );

  return (
    <>
      {orderedSteps.map((step, index) => (
        <Component
          key={step.title}
          href={step.href}
          stage={calculateStatus({
            currentStep: step,
            previousStep: orderedSteps[index - 1],
          })}
        >
          {step.title}
        </Component>
      ))}
    </>
  );
};
