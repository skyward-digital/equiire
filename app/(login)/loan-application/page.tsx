import { Metadata } from 'next';
import { LoanApplication } from './LoanApplication';

export const metadata: Metadata = {
  title: 'Loan Application',
};

export default async function Page() {
  return <LoanApplication />;
}
