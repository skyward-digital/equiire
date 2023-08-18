import { notFound, redirect } from 'next/navigation';
import { getServerSession } from '#/app/api/session';
import { LoanPastTransaction, LoanFutureTransaction } from './loans';

export async function getLoanTransactions({ id }: { id: string }) {
  const { accessToken } = await getServerSession();

  const [pastTransactionsResponse, futureTransactionsResponse] =
    await Promise.all([
      fetch(
        `${process.env.API_URL}/payments/history?query=loanId:${id}&access_token=${accessToken}`,
      ),
      fetch(
        `${process.env.API_URL}/loans/${id}/future-payments?access_token=${accessToken}`,
      ),
    ]);

  if (pastTransactionsResponse.status === 401) redirect('/login');

  if (!pastTransactionsResponse.ok) notFound();
  if (!futureTransactionsResponse.ok) notFound();

  const pastTransactionsJson = await pastTransactionsResponse.json();
  const futureTransactionsJson = await futureTransactionsResponse.json();

  const pastTransactions = pastTransactionsJson.docs.map(
    (transaction: LoanPastTransaction, index: number) => ({
      ...transaction,
      date: transaction.created
        ? new Date(
            Date.parse(transaction.created.replace(' ', 'T')),
          ).toDateString()
        : '',
      transactionCount: index + 1,
    }),
  );
  const futureTransactions = futureTransactionsJson.data.map(
    (transaction: LoanFutureTransaction, index: number) => ({
      ...transaction,
      transactionCount: index + pastTransactions.length + 1,
    }),
  );
  return {
    docs: [...pastTransactions, ...futureTransactions],
    data: {
      history: pastTransactions,
      scheduled: futureTransactions,
      first: pastTransactions[0] || futureTransactions[0],
      last:
        futureTransactions[futureTransactions.length - 1] ||
        pastTransactions[pastTransactions.length - 1],
      next: futureTransactions[0],
    },
  };
}
