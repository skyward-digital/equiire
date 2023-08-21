import clsx from 'clsx';
import { BackButton } from '#/ui/components/BackButton';
import { Button } from '../Button';

type LoginCardProps = {
  title: string | React.ReactNode;
  description?: string;
  back?: string | (() => void);
  children: React.ReactNode;
  className?: string;
  skip?: boolean;
};

export function LoginCard({
  title,
  description,
  back,
  children,
  className,
  skip,
}: LoginCardProps) {
  return (
    <section
      className={clsx(
        className,
        'mx-auto flex max-w-2xl flex-col items-start rounded-lg bg-white px-7 pb-16 pt-10 dark:border-gray-600 dark:bg-black sm:shadow-sm dark:sm:border',
      )}
    >
      <div className="flex w-full justify-between">
        {back && <BackButton back={back} className="" />}
        {skip && (
          <Button variant="tertiary" arrow>
            Skip
          </Button>
        )}
      </div>
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
    </section>
  );
}
