import { NextResponse } from 'next/server';
import { notFound } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '#/lib/auth';
import { AuthSession } from '#/lib/auth';

export async function POST(request: Request) {
  const session = (await getServerSession(authOptions)) as AuthSession;
  const { accessToken } = session.tokens;
  if (!accessToken) notFound();

  const { id } = await request.json();

  // input validation
  if (!id) {
    return NextResponse.json(
      {
        error: 'Loan ID is required',
      },
      { status: 400 },
    );
  }

  const res = await fetch(
    `${process.env.API_URL}/loans/${id}/create-sign-request?access_token=${accessToken}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    },
  );

  const data = await res.json();

  if (res.status === 200) {
    return NextResponse.json({ data });
  } else {
    return new Error('Loan signature request failed: ' + data.message);
  }
}
