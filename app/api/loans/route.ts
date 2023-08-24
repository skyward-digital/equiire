import { getServerSession } from '#/app/api/session';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';
import type { Loan, Loans } from '.';

// export const runtime = 'edge';

export async function GET(request: Request) {
  const { accessToken } = await getServerSession();

  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    // fetch the loan
    const res = await fetch(`${process.env.API_URL}/loans/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    const loan: Loan = await res.json();

    return NextResponse.json(JSON.stringify(loan ?? null), {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    });
  } else {
    // fetch all loans
    const res = await fetch(`${process.env.API_URL}/loans`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    });

    const loans: Loans = await res.json();

    return NextResponse.json(JSON.stringify(loans ?? null), {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}

export async function POST(request: Request) {
  const { accessToken } = await getServerSession();
  const data = await request.json();

  const res = await fetch(`${process.env.API_URL}/loans`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });

  if (res.status === 401) redirect('/login');
  if (!res.ok) throw new Error('Failed to create a new loan');

  const loan = (await res.json()) as { data: Loan };

  return NextResponse.json({ data: loan.data });
}
