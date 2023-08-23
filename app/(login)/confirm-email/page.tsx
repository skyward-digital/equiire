import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { setConfirmRegistration } from '#/app/api/auth/signup/setConfirmRegistration';
import { LoginCard } from '#/ui/components/LoginCard';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { Button } from '#/ui/components/Button';

export const metadata: Metadata = {
  title: 'Confirm your email',
};

export default async function ConfirmEmail({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | null;
  };
}) {
  const email = searchParams['email'];
  const verification = searchParams['code'];

  if (!email || !verification) {
    redirect('/sign-up');
  }

  await setConfirmRegistration({ email, verification });

  return (
    <LoginCard
      title="Email Confirmed"
      description="Your email address has now been confirmed."
    >
      <CheckCircleIcon className="mx-auto h-12 w-12 text-gray-400" />

      <div className="mt-3 text-center">
        <Button href="/login" className="mt-10">
          Login
        </Button>
      </div>
    </LoginCard>
  );
}
