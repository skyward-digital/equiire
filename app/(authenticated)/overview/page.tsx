import { NotificationBanner } from '#/ui/components/NotificationBanner/NotificationBanner';
import { LoanStatusCard } from '#/ui/components/LoanStatusCard';
import { getLoans } from '#/app/api/loans/getLoans';

export default async function Page() {
  const loans = await getLoans();

  const activeLoans = loans.docs.filter(
    (loan) => loan.loanStatus !== 'COMPLETED' && loan.loanStatus !== 'REJECTED',
  );

  return (
    <div className="container flex flex-1 flex-col items-center justify-center gap-8 py-4">
      <NotificationBanner
        status="warning"
        message="You still need to complete your account setup"
        link="#"
        linkLabel="Complete setup"
      />

      {activeLoans.map((loan) => (
        <LoanStatusCard key={loan._id} loan={loan} />
      ))}
    </div>
  );
}
