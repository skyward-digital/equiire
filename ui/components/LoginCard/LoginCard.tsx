import clsx from 'clsx';
import { Logo } from '#/ui/assets/Logo';
import { BackButton } from '#/ui/components/BackButton';

type LoginCardProps = {
  title: string | React.ReactNode;
  description?: string;
  back?: string | (() => void);
  children: React.ReactNode;
  showLogo?: boolean;
  className?: string;
};

export function LoginCard({
  title,
  description,
  back,
  children,
  showLogo,
  className,
}: LoginCardProps) {
  return (
    <section
      className={clsx(
        className,
        'mx-auto max-w-2xl rounded-lg bg-white px-7 pb-16 pt-10 shadow-sm dark:border dark:border-gray-600 dark:bg-black',
      )}
    >
      <div className="flex flex-col items-start sm:flex-row sm:gap-3">
        {back && <BackButton back={back} />}
        <div className="mx-auto w-full max-w-lg">
          <h1 className="text-brand-secondary font-brand my-6 text-center text-3xl font-bold dark:text-gray-300">
            {title}
          </h1>
          <p className="mb-8 text-center text-base text-gray-600 dark:text-gray-300">
            {description}
          </p>

          {children}

          {showLogo && (
            <Logo className="mx-auto mt-16" width="288" height="74" />
          )}
        </div>
      </div>
    </section>
  );
}
