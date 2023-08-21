import { Metadata } from 'next';
import { NotificationBanner } from '#/ui/components/NotificationBanner/NotificationBanner';
import { LoanStatusCard } from '#/ui/components/LoanStatusCard';
import { getLoans } from '#/app/api/loans/getLoans';
import { getUser } from '#/app/api/profile/getUser';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Welcome to your Equiire homescreen',
};

export default async function Page() {
  const loans = await getLoans();
  const user = await getUser();

  const activeLoans = loans.docs.filter(
    (loan) =>
      loan.loanStatus === 'IN_PROGRESS' ||
      (loan.loanStatus === 'PENDING' && new Date(loan.startDate) > new Date()),
  );

  const userProfileIncomplete =
    !user.company ||
    !user.address ||
    !user.phone ||
    !user.ssn ||
    !user.ein ||
    !user.dateOfBirth;

  return (
    <div className="container flex flex-1 flex-col items-center justify-start gap-8 py-4">
      {userProfileIncomplete && (
        <NotificationBanner
          status="warning"
          message="We need a few additional details to be able to complete your first loan"
          link="/settings"
          linkLabel="Complete setup"
        />
      )}

      {activeLoans.map((loan) => (
        <LoanStatusCard key={loan._id} loan={loan} />
      ))}
    </div>
  );
}
