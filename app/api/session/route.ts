import { getServerSession } from 'next-auth';
import { authOptions, AuthSession } from '#/lib/auth';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const session = (await getServerSession(authOptions)) as AuthSession;

  return NextResponse.json({
    authenticated: !!session,
    session,
  });
}
