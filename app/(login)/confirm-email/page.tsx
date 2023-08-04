import { redirect } from 'next/navigation';
import { confirmEmail } from '#/app/api/signup/confirmEmail';
import { LoginCard } from '#/ui/components/LoginCard';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { Button } from '#/ui/components/Button';

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

  await confirmEmail({ email, verification });

  return (
    <LoginCard
      title="Email Confirmed"
      description="Your email address has now been confirmed."
      className="sm:mt-40"
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
