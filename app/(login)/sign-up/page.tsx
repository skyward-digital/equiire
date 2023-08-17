import { Metadata } from 'next';
import { getOptionalServerSession } from '#/app/api/session';
import { SignUp } from './SignUp';

export const metadata: Metadata = {
  title: 'Sign up',
};

export default async function Page() {
  const { user } = await getOptionalServerSession();
  return <SignUp user={user} />;
}
