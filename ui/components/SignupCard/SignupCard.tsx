import clsx from 'clsx';
import { SignupForm } from '#/ui/components/SignupForm';
import Link from 'next/link';
import { BackButton } from '#/ui/components/BackButton';

export function SignupCard({ className }: { className?: string }) {
  return (
    <section
      className={clsx(
        className,
        'mx-auto max-w-screen-sm rounded-lg border border-gray-300 bg-white px-7 py-12 shadow-sm dark:border-gray-600 dark:bg-black sm:pl-14 sm:pr-24',
      )}
    >
      <div className="flex flex-col items-start sm:flex-row sm:gap-3">
        <BackButton />
        <div>
          <h1 className="text-brand-secondary font-brand mb-10 text-center text-3xl font-bold">
            Complete your loan application
          </h1>
          <SignupForm />
          <p className="mt-10 text-center text-sm text-gray-600 dark:text-gray-300">
            By signing up, you agree to our{' '}
            <Link href="/" className="text-brand-primary underline">
              Terms & Privacy Statement
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
