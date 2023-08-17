import { Metadata } from 'next';
// import { NotificationBanner } from '#/ui/components/NotificationBanner/NotificationBanner';
import { LoanStatusCard } from '#/ui/components/LoanStatusCard';
import { getLoans } from '#/app/api/loans/getLoans';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Welcome to your Equiire homescreen',
};

export default async function Page() {
  const loans = await getLoans();

  const activeLoans = loans.docs.filter(
    (loan) =>
      loan.loanStatus === 'IN_PROGRESS' ||
      (loan.loanStatus === 'PENDING' && new Date(loan.startDate) > new Date()),
  );

  return (
    <div className="container flex flex-1 flex-col items-center justify-start gap-8 py-4">
      {/* <NotificationBanner
        status="warning"
        message="You still need to complete your account setup"
        link="#"
        linkLabel="Complete setup"
      /> */}

      {activeLoans.map((loan) => (
        <LoanStatusCard key={loan._id} loan={loan} />
      ))}
    </div>
  );
}
