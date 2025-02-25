import { Metadata } from 'next';
import { NotificationBanner } from '#/ui/components/NotificationBanner';
import { LoanStatusCard } from '#/ui/components/LoanStatusCard';
import { getLoans } from '#/app/api/loans/getLoans';
import { getUser } from '#/app/api/profile/getUser';
import { userProfileComplete } from '#/lib/userProfileComplete';
import { isExpiredLoan } from '#/lib/isExpiredLoan';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Welcome to your Equiire homescreen',
};

export default async function Page() {
  const [loans, user] = await Promise.all([getLoans(), getUser()]);

  const activeLoans = loans.docs.filter(
    (loan) =>
      loan.loanStatus === 'IN_PROGRESS' ||
      // We show pending loans with a start date of today or later
      (loan.loanStatus === 'PENDING' && !isExpiredLoan(loan)),
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

      {activeLoans.map((loan) => (
        <LoanStatusCard
          key={loan._id}
          loan={loan}
          profileCompleted={profileCompleted}
        />
      ))}
    </div>
  );
}
