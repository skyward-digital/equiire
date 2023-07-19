import { Header } from '#/ui/components/Header/Header';
import { NotificationBanner } from '#/ui/components/NotificationBanner/NotificationBanner';
import { LoanStatusCard } from '#/ui/components/LoanStatusCard';

const loansData = [
  {
    id: '123450',
    status: 'pending',
    value: 100000,
    startDate: '2021-01-01',
    steps: {
      loan: true,
      account: true,
      payment: false,
      signature: false,
    },
  },
  {
    id: '123456',
    status: 'processing',
    value: 85000,
    startDate: '2021-01-01',
  },
  {
    id: '123457',
    status: 'approved',
    value: 150000,
    startDate: '2021-01-01',
  },
  {
    id: '123458',
    status: 'completed',
    value: 50000,
    startDate: '2021-01-01',
  },
];

const activeLoans = loansData.filter(
  (loan) => loan.status !== 'completed' && loan.status !== 'rejected',
);

export default function Page() {
  return (
    <>
      <Header />

      <div className="container flex flex-1 flex-col items-center justify-center gap-8 py-4 pt-24">
        <NotificationBanner
          status="warning"
          message="You still need to complete your account setup"
          link="#"
          linkLabel="Complete setup"
        />

        {activeLoans.map((loan) => (
          <LoanStatusCard key={loan.id} loan={loan} />
        ))}
      </div>
    </>
  );
}
