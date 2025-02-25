import { Metadata } from 'next';
import { NotificationBanner } from '#/ui/components/NotificationBanner';
import { LoanStatusCard } from '#/ui/components/LoanStatusCard';
import { getLoans } from '#/app/api/loans/getLoans';
import { getUser } from '#/app/api/profile';
import { userProfileComplete } from '#/lib/userProfileComplete';
import { isExpiredLoan } from '#/lib/isExpiredLoan';

export const metadata: Metadata = {
  title: 'Loans',
  description: 'View your loans',
};

export default async function Page() {
  const [loans, user] = await Promise.all([getLoans(), getUser()]);

  const incompleteLoans = loans.docs.filter(
    (loan) =>
      loan.loanStatus === 'IN_PROGRESS' ||
      // We show loans that are pending with a start date of today or later
      (loan.loanStatus === 'PENDING' && !isExpiredLoan(loan)),
  );

  const completedLoans = loans.docs.filter(
    (loan) =>
      loan.loanStatus === 'COMPLETED' ||
      loan.loanStatus === 'REJECTED' ||
      // Pending loans with a start date in the past appear in the "Completed" section as expired
      (loan.loanStatus === 'PENDING' && isExpiredLoan(loan)),
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
          profileCompleted={profileCompleted}
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
                profileCompleted={profileCompleted}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
