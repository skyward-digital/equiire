import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export interface ButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'link';
  size?: 'sm' | 'md' | 'lg';
  Icon?: React.ElementType;
  arrow?: boolean;
  className?: string;
}

export interface ButtonLinkProps extends ButtonBaseProps, LinkProps {
  children: string;
}

export interface ButtonElementProps
  extends ButtonBaseProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export type ButtonProps = ButtonLinkProps | ButtonElementProps;

export const Button = ({
  variant = 'primary',
  size = 'md',
  Icon,
  arrow,
  className,
  children,
  ...props
}: ButtonProps) => {
  const { href } = props as ButtonLinkProps;
  const Component = href ? Link : 'button';

  return (
    <Component
      href={href}
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-full font-semibold no-underline outline-none transition duration-200 ease-in-out focus:ring-2 focus:ring-gray-600 focus:ring-offset-2',
        // Style
        variant === 'primary' &&
          'bg-brand shadow-xs hover:bg-brand-600 text-white hover:text-white disabled:bg-gray-200 disabled:text-white dark:disabled:bg-gray-800 dark:disabled:text-gray-500',
        variant === 'secondary' &&
          'shadow-xs border border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-black disabled:bg-gray-100 disabled:text-gray-400 dark:hover:border-white dark:hover:bg-transparent dark:hover:text-white dark:disabled:bg-gray-800',
        variant === 'link' &&
          'text-brand hover:text-brand-600 py-2 disabled:text-gray-400',
        // Size
        size === 'sm' && 'px-2 py-1 text-sm',
        size === 'md' && 'px-6 py-3 text-base',
        size === 'lg' && 'px-9 py-3 text-lg',
        className,
      )}
      {...props}
    >
      {Icon && <Icon className="h-5 w-5" />}
      {children}
      {arrow ? <ArrowRightIcon className="h-5 w-5" /> : null}
    </Component>
  );
};
