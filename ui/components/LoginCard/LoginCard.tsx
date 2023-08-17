import clsx from 'clsx';
import { BackButton } from '#/ui/components/BackButton';

type LoginCardProps = {
  title: string | React.ReactNode;
  description?: string;
  back?: string | (() => void);
  children: React.ReactNode;
  className?: string;
};

export function LoginCard({
  title,
  description,
  back,
  children,
  className,
}: LoginCardProps) {
  return (
    <section
      className={clsx(
        className,
        'mx-auto max-w-2xl rounded-lg bg-white px-7 pb-16 pt-10 dark:border-gray-600 dark:bg-black sm:shadow-sm dark:sm:border',
      )}
    >
      <div className="relative flex flex-col items-start sm:flex-row sm:gap-3">
        {back && <BackButton back={back} className="absolute left-0 top-0" />}
        <div className="mx-auto w-full max-w-lg">
          <h1 className="text-brand-secondary font-brand my-6 mb-8 text-center text-3xl font-bold dark:text-gray-300">
            {title}
          </h1>
          {description && (
            <p className="mb-8 text-center text-base text-gray-600 dark:text-gray-300">
              {description}
            </p>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
