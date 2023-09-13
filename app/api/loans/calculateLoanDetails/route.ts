import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation';

export async function POST(request: Request) {
  const { amount, length } = await request.json();

  const res = await fetch(
    `${process.env.API_URL}/loans/calculate-payment-details?type=CREDIT_BUILDER&amount=${amount}&length=${length}`,
    {
      method: 'GET',
      headers: {
        // Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    },
  );

  if (res.status === 401) redirect('/login');
  if (!res.ok) throw new Error('Failed to calculate loan details');

  const loanDetails = await res.json();

  return NextResponse.json({ data: loanDetails.data });
}
