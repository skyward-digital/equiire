import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation';
import { getServerSession } from '#/app/api/session';
import { User } from '#/app/api/profile/user';

export async function PATCH(request: Request) {
  const { accessToken } = await getServerSession();
  const {
    // I have to set defaults for the fields, as they aren't present in /profile until they're set
    legalBusinessName = '',
    company = '',
    ein = '',
    entityType = '',
    businessAddress = {},
    businessPhone = '',
    // todo: API should allow a blank date, we shouldn't be defaulting to today's date
    formationDate = new Date(),
    website = '',
    industry = '',
  } = await request.json();
  const {
    addressLine1 = '',
    addressLine2 = '',
    city = '',
    state = '',
    postalCode = '',
  } = businessAddress;

  const res = await fetch(
    `${process.env.API_URL}/profile/business?access_token=${accessToken}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        legalBusinessName,
        company,
        ein,
        entityType,
        businessAddress: {
          addressLine1,
          addressLine2,
          city,
          state,
          postalCode,
          country: 'US',
        },
        businessPhone,
        formationDate,
        website,
        industry,
      }),
    },
  );

  if (res.status === 401) redirect('/login');
  if (!res.ok) throw new Error('Failed to update business information');

  const user = (await res.json()) as { data: User };

  return NextResponse.json({ data: user.data });
}
