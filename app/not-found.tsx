import { Metadata } from 'next';
import { useRouter } from 'next/navigation';

import { VectorLogoE } from '#/ui/assets/VectorLogoE';
import { LoginCard } from '#/ui/components/LoginCard';
import { Button } from '#/ui/components/Button';
import { getOptionalServerSession } from '#/app/api/session';

export const metadata: Metadata = {
  title: 'Page not found',
};

export default async function NotFound() {
  const { user } = await getOptionalServerSession();
  const router = useRouter();
  const description = user
    ? "Unfortunately that page doesn't exist."
    : "Unfortunately that page doesn't exist. You may need to log back in.";
  const buttonText = user ? 'Return Home' : 'Log In';
  return (
    <>
      <VectorLogoE className="fixed top-0 -z-10 hidden h-screen w-full max-w-full overflow-auto sm:block" />
      <div className="sm:my-40">
        <LoginCard
          className="text-center"
          title="Page not found"
          description={description}
        >
          {/* Adding a href here when logged in doesn't navigate to the page - needs debugging (potential Next.js issue) */}
          <Button className="w-full max-w-xs" onClick={() => router.push('/')}>
            {buttonText}
          </Button>
        </LoginCard>
      </div>
    </>
  );
}
