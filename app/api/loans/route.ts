import { NextResponse } from 'next/server';
import type { Loan, Loans } from './loans';

// export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get('id');

  if (id) {
    // fetch the loan
    const res = await fetch(`${process.env.API_URL}/loans/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
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
