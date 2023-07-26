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
    startDate: '2021-06-01',
    endDate: '2022-06-01',
  },
  {
    id: '123459',
    status: 'completed',
    value: 90000,
    startDate: '2021-01-01',
    endDate: '2022-01-01',
  },
  {
    id: '123460',
    status: 'completed',
    value: 30000,
    startDate: '2020-01-01',
    endDate: '2021-01-01',
  },
];

const incompleteLoans = loansData.filter((loan) => loan.status !== 'completed');

const completedLoans = loansData.filter((loan) => loan.status === 'completed');

export default function Page() {
  return (
    <div className="container flex flex-1 flex-col items-center justify-center gap-8 py-4">
      <NotificationBanner
        status="warning"
        message="You still need to complete your account setup"
        link="#"
        linkLabel="Complete setup"
      />

      {incompleteLoans.map((loan) => (
        <LoanStatusCard key={loan.id} loan={loan} />
      ))}

      {/* Completed loans */}
      {completedLoans.length ? (
        <div className="mt-4 w-full space-y-4">
          <h2 className="font-brand text-xl font-semibold text-gray-500 dark:text-gray-50">
            Completed Loans
          </h2>
          <div className="grid w-full grid-cols-2 gap-4">
            {completedLoans.map((loan) => (
              <LoanStatusCard key={loan.id} loan={loan} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
