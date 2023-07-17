import clsx from 'clsx';
import Link from 'next/link';
import { BackButton } from '#/ui/components/BackButton';

export function SignupCard({
  className,
  children,
  back,
  step,
}: {
  className?: string;
  children?: React.ReactNode;
  back: any;
  step: number;
}) {
  return (
    <section
      className={clsx(
        className,
        'mx-auto max-w-screen-sm rounded-lg border border-gray-300 bg-white px-7 py-12 shadow-sm dark:border-gray-600 dark:bg-black sm:pl-14 sm:pr-20',
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4">
        {step > 0 ? <BackButton back={back} /> : <p className="h-9 w-9"></p>}
        <div className="mt-8 max-w-md">
          <h1 className="text-brand-secondary font-brand mb-10 mt-5 text-center text-3xl font-bold dark:text-gray-300">
            Complete your loan application
          </h1>
          {children}
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
