import { SignupForm } from '#/ui/components/SignupForm';

export interface Loan {
  type: 'CREDIT_BUILDER' | 'STANDARD';
  amount: string;
  length: string;
  monthlyPayment: string;
  interestType: 'FIXED' | 'VARIABLE';
  apr: string;
  totalRepayable: string;
  creditCost: string;
  startDate: string;
  firstPayment: string;
  endDate: string;
}

export default function Page({ searchParams }: { searchParams: Loan }) {
  return <SignupForm loan={searchParams} />;
}
