import { LoginForm } from '#/ui/components/LoginForm';
import { LoginCard } from '#/ui/components/LoginCard';

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
    </LoginCard>
  );
}
