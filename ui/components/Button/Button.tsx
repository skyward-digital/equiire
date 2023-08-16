import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export interface ButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'secondary-brand' | 'link';
  size?: 'sm' | 'md' | 'lg';
  Icon?: React.ElementType;
  arrow?: boolean;
  className?: string;
}

export interface ButtonLinkProps extends ButtonBaseProps, LinkProps {
  children: string;
  onClick?: never;
}

export interface ButtonElementProps
  extends ButtonBaseProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
  onClick?: any;
}

export type ButtonProps = ButtonLinkProps | ButtonElementProps;

export const Button = ({
  variant = 'primary',
  size = 'lg',
  Icon,
  arrow,
  className,
  children,
  onClick,
  ...props
}: ButtonProps) => {
  const { href } = props as ButtonLinkProps;
  const { type, disabled } = props as ButtonElementProps;
  const Component = href ? Link : 'button';

  return (
    <Component
      href={href}
      onClick={onClick}
      className={clsx(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold no-underline outline-none transition duration-200 ease-in-out focus:ring-2 focus:ring-gray-600 focus:ring-offset-2',
        // Style
        variant === 'primary' &&
          'border-brand hover:border-brand-600 group-hover:border-brand-600 bg-brand shadow-xs hover:bg-brand-600 group-hover:bg-brand-600 border text-white hover:-translate-y-0.5 hover:text-white focus:-translate-y-0.5 disabled:border-gray-200 disabled:bg-gray-200 disabled:text-white group-hover:text-white dark:disabled:border-gray-800 dark:disabled:bg-gray-800 dark:disabled:text-gray-500',
        variant === 'secondary' &&
          'shadow-xs border border-gray-300 text-gray-600 hover:-translate-y-0.5 hover:text-black focus:-translate-y-0.5 disabled:bg-gray-100 disabled:text-gray-400 group-hover:text-black dark:text-gray-300 dark:hover:border-white dark:hover:bg-transparent dark:hover:text-white dark:disabled:bg-gray-800 dark:group-hover:border-white dark:group-hover:bg-transparent',
        variant === 'secondary-brand' &&
          'shadow-xs border-brand border text-gray-600 hover:-translate-y-0.5 hover:text-black focus:-translate-y-0.5 disabled:bg-gray-100 disabled:text-gray-400 group-hover:text-black dark:text-gray-300 dark:hover:border-white dark:hover:bg-transparent dark:hover:text-white dark:disabled:bg-gray-800 dark:group-hover:border-white dark:group-hover:bg-transparent',
        variant === 'link' &&
          'text-brand hover:text-brand-600 group-hover:hover:text-brand-600 py-2 disabled:text-gray-400',
        // Size
        size === 'sm' && 'px-2.5 py-2 text-sm sm:py-1',
        size === 'md' && 'px-3 py-1.5 text-base',
        size === 'lg' && 'px-6 py-3 text-base',
        className,
      )}
      type={type}
      disabled={disabled}
    >
      {Icon && <Icon className="h-5 w-5" />}
      {children}
      {arrow ? <ArrowRightIcon className="h-5 w-5" /> : null}
    </Component>
  );
};
