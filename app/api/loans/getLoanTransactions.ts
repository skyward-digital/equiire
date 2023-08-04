import { redirect } from 'next/navigation';
import { getSession } from '#/app/api/session/getSession';

export async function getLoanTransactions({ id }: { id: string }) {
  const { accessToken } = await getSession();

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

  const pastTranactions = await pastTransactionsResponse.json();
  const futureTransactions = await futureTransactionsResponse.json();

  return {
    docs: [...pastTranactions.docs, ...futureTransactions.data],
    data: {
      history: pastTranactions.docs,
      scheduled: futureTransactions.data,
      first: pastTranactions.docs[0] || futureTransactions.data[0],
      last:
        futureTransactions.data[futureTransactions.data.length - 1] ||
        pastTranactions.docs[pastTranactions.docs.length - 1],
      next: futureTransactions[0],
    },
  };
}
