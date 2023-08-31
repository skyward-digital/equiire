import { Metadata } from 'next';
import { LoginForm } from '#/ui/components/LoginForm';
import { LoginCard } from '#/ui/components/LoginCard';
import { Logo } from '#/ui/assets/Logo';

export const metadata: Metadata = {
  title: 'Login',
};

export default function Page({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | null;
  };
}) {
  const email = searchParams['email'];
  return (
    <LoginCard
      title={
        <>
          <span className="text-brand">Smart and Flexible</span> Loans
        </>
      }
    >
      <LoginForm email={email} className="px-3" />

      <Logo className="mx-auto mt-16" width="288" height="74" />
    </LoginCard>
  );
}
