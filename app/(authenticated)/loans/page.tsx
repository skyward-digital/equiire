// import { NotificationBanner } from '#/ui/components/NotificationBanner/NotificationBanner';
import { LoanStatusCard } from '#/ui/components/LoanStatusCard';
import { getLoans } from '#/app/api/loans/getLoans';

export default async function Page() {
  const loans = await getLoans();

  const incompleteLoans = loans.docs.filter(
    (loan) =>
      loan.loanStatus === 'IN_PROGRESS' ||
      (loan.loanStatus === 'PENDING' && new Date(loan.startDate) > new Date()),
  );

  const completedLoans = loans.docs.filter(
    (loan) =>
      loan.loanStatus === 'COMPLETED' ||
      loan.loanStatus === 'REJECTED' ||
      new Date(loan.startDate) < new Date(),
  );

  return (
    <div className="container flex flex-1 flex-col items-center justify-start gap-8 py-4">
      {/* <NotificationBanner
        status="warning"
        message="You still need to complete your account setup"
        link="#"
        linkLabel="Complete setup"
      /> */}

      {incompleteLoans.map((loan) => (
        <LoanStatusCard key={loan._id} loan={loan} />
      ))}

      {/* Completed loans */}
      {completedLoans.length ? (
        <div className="mt-4 w-full space-y-4">
          <h2 className="font-brand text-xl font-semibold text-gray-500 dark:text-gray-50">
            Completed Loans
          </h2>
          <div className="grid w-full grid-cols-2 gap-4">
            {completedLoans.map((loan) => (
              <LoanStatusCard key={loan._id} loan={loan} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
