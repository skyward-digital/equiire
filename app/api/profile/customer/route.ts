import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation';
import { getServerSession } from '#/app/api/session';
import { User } from '#/app/api/profile/user';

export async function PATCH(request: Request) {
  const { accessToken } = await getServerSession();
  const {
    // I have to set defaults for the fields, as they aren't present in /profile until they're set
    fullLegalName = '',
    // todo: date should NOT be set to today if not saved to the user
    dateOfBirth = new Date(),
    residentialAddress = {},
    phone = '',
    ssn = '',
  } = await request.json();

  const {
    addressLine1 = '',
    addressLine2 = '',
    city = '',
    state = '',
    postalCode = '',
  } = residentialAddress;
  const res = await fetch(
    `${process.env.API_URL}/profile/customer?access_token=${accessToken}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullLegalName,
        dateOfBirth: dateOfBirth,
        residentialAddress: {
          addressLine1,
          addressLine2,
          city,
          state,
          postalCode,
          country: 'United States',
        },
        phone,
        ssn,
      }),
    },
  );

  if (res.status === 401) redirect('/login');
  if (!res.ok) throw new Error('Failed to update customer information');

  const user = (await res.json()) as { data: User };

  return NextResponse.json({ data: user.data });
}
