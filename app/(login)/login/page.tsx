import { LoginForm } from '#/ui/components/LoginForm';
import { LoginCard } from '#/ui/components/LoginCard';
import { Logo } from '#/ui/assets/Logo';

export default function Page() {
  return (
    <LoginCard
      title={
        <>
          <span className="text-brand">Smart and Flexible</span> Loans
        </>
      }
      className="sm:mt-20"
      showLogo
    >
      <LoginForm className="px-3" />

      <Logo className="mx-auto mt-16" width="288" height="74" />
    </LoginCard>
  );
}
