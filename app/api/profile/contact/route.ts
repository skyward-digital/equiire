// This file is for updating the delegated contact field, but as we're not using that right now it's commented out.

// import { NextResponse } from 'next/server';
// import { redirect } from 'next/navigation';
// import { getServerSession } from '#/app/api/session';
// import { User } from '#/app/api/profile/user';

// export async function PATCH(request: Request) {
//   const { accessToken } = await getServerSession();
//   const { contact } = await request.json();

//   const res = await fetch(
//     `${process.env.API_URL}/profile/contact?access_token=${accessToken}`,
//     {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         contact,
//       }),
//     },
//   );

//   if (res.status === 401) redirect('/login');
//   if (!res.ok) throw new Error("Failed to update user's contact");

//   const user = (await res.json()) as { data: User };

//   return NextResponse.json({ data: user.data });
// }
