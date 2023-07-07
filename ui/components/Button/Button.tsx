import Link from 'next/link';
import clsx from 'clsx';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export interface ButtonLinkProps {
  href: string;
  style: 'primary' | 'link';
  arrow?: boolean;
  children: React.ReactNode;
  className?: string;
}

export interface ButtonProps {
  style: 'primary' | 'link';
  className?: string;
  arrow?: boolean;
  children: React.ReactNode;
}

const classes = {
  generic:
    'inline-flex items-center justify-center gap-2 px-6 font-brand text-base font-semibold no-underline outline-none transition duration-200 ease-in-out focus:ring-2 focus:ring-gray-600 focus:ring-offset-2',
  primary:
    'bg-brand-primary shadow-xs hover:bg-brand-secondary rounded-full disabled:text-white disabled:dark:text-gray-500 text-black py-3 disabled:bg-gray-200 dark:disabled:bg-gray-800 dark:disabled:text-gray-500',
  link: 'text-brand-primary hover:text-gray-500 py-2',
};

export const Button = ({
  style,
  arrow,
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps) => {
  return (
    <button
      className={clsx(
        className,
        classes.generic,
        style === 'primary' && classes.primary,
        style === 'link' && classes.link,
      )}
      {...props}
    >
      <span className="-mb-1.5 -mt-1">{children}</span>
      {arrow ? <ArrowRightIcon className="h-5 w-5" /> : null}
    </button>
  );
};

export const ButtonLink = ({
  href,
  style,
  arrow,
  className,
  children,
}: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      className={clsx(
        className,
        classes.generic,
        style === 'primary' && classes.primary,
        style === 'link' && classes.link,
      )}
    >
      <span className="-mb-1.5 -mt-1">{children}</span>
      {arrow ? <ArrowRightIcon className="h-5 w-5" /> : null}
    </Link>
  );
};
