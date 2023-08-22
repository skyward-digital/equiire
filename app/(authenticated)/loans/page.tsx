import { Metadata } from 'next';
import { NotificationBanner } from '#/ui/components/NotificationBanner';
import { LoanStatusCard } from '#/ui/components/LoanStatusCard';
import { getLoans } from '#/app/api/loans/getLoans';
import { getUser } from '#/app/api/profile';
import { userProfileComplete } from '#/lib/userProfileComplete';

export const metadata: Metadata = {
  title: 'Loans',
  description: 'View your loans',
};

export default async function Page() {
  const [loans, user] = await Promise.all([getLoans(), getUser()]);

  const incompleteLoans = loans.docs.filter(
    (loan) =>
      loan.loanStatus === 'IN_PROGRESS' ||
      (loan.loanStatus === 'PENDING' && new Date(loan.startDate) > new Date()),
  );

  const completedLoans = loans.docs.filter(
    (loan) =>
      loan.loanStatus === 'COMPLETED' ||
      loan.loanStatus === 'REJECTED' ||
      (loan.loanStatus === 'PENDING' && new Date(loan.startDate) < new Date()),
  );
  const profileCompleted = userProfileComplete(user);

  return (
    <div className="container flex flex-1 flex-col items-center justify-start gap-8 py-4">
      {!profileCompleted && (
        <NotificationBanner
          status="warning"
          message="We need a few additional details to be able to complete your first loan"
          link="/settings"
          linkLabel="Complete setup"
        />
      )}

      {incompleteLoans.map((loan) => (
        <LoanStatusCard
          key={loan._id}
          loan={loan}
          userProfileComplete={profileCompleted}
        />
      ))}

      {/* Completed loans */}
      {completedLoans.length ? (
        <div className="mt-4 w-full space-y-4">
          <h2 className="font-brand text-xl font-semibold text-gray-500 dark:text-gray-50">
            Completed Loans
          </h2>
          <div className="grid w-full gap-4 xl:grid-cols-2">
            {completedLoans.map((loan) => (
              <LoanStatusCard
                key={loan._id}
                loan={loan}
                userProfileComplete={userProfileComplete}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
