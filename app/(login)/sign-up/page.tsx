import { Metadata } from 'next';
import { getOptionalServerSession } from '#/app/api/session';
import { setResendRegistrationCode } from '#/app/api/auth/signup/setResendRegistrationCode';
import { SignUp } from './SignUp';

export const metadata: Metadata = {
  title: 'Sign up',
};

export default async function Page({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | null;
  };
}) {
  const { user } = await getOptionalServerSession();
  const resendEmail = searchParams['resendEmail'];

  // Resends email registration code when redirected from login
  if (!user && resendEmail) {
    await setResendRegistrationCode({ resendEmail });
  }

  return <SignUp user={user} resendEmail={resendEmail} />;
}
