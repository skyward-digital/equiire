import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation';
import { getServerSession } from '#/app/api/session';

export async function GET(request: Request) {
  const { accessToken } = await getServerSession();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  const res = await fetch(
    `${process.env.API_URL}/loans/${id}/download-signed-document`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/pdf',
      },
    },
  );

  if (res.status === 401) redirect('/login');
  if (!res.ok) throw new Error('Failed to get loan agreement document');

  return new Response(res.body, {
    headers: {
      ...res.headers, // copy the previous headers
      'content-disposition': `attachment; filename="${id}-loan-agreement.pdf"`,
    },
  });
}
