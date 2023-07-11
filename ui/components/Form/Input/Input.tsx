import { useState } from 'react';
import clsx from 'clsx';
import {
  KeyIcon,
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';

type InputProps = {
  id: string;
  type?: 'text' | 'email' | 'tel' | 'password';
  label: string;
  placeholder?: string;
  size?: number;
  autocomplete?: // https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
  | 'off'
    | 'on'
    | 'given-name' // first name
    | 'family-name' // last name
    | 'name' // full name
    | 'username'
    | 'email'
    | 'organization'
    | 'address-line1'
    | 'address-line2'
    | 'address-line3'
    | 'address-level3'
    | 'address-level2' // city / town
    | 'address-level1' // state / province / county
    | 'country' // Country Code
    | 'country-name' // Country Name
    | 'postal-code'
    | 'tel' // full phone number including telephone country code
    | 'new-password'
    | 'current-password'
    | 'one-time-code'
    // Credit Card
    | 'cc-name'
    | 'cc-given-name'
    | 'cc-additional-name'
    | 'cc-family-name'
    | 'cc-number'
    | 'cc-exp'
    | 'cc-exp-month'
    | 'cc-exp-year'
    | 'cc-csc'
    | 'cc-type';
  className?: string;
  register?: any;
  required?: string;
  validate?: any;
  pattern?: string | { value: string | RegExp; message: string };
  error?: any;
  hint?: string;
};

const iconMap = {
  text: null,
  tel: null,
  email: EnvelopeIcon,
  password: KeyIcon,
};

const PasswordVisibilityToggle = ({
  passwordIsVisible,
  onClick,
}: {
  passwordIsVisible: boolean;
  onClick: () => void;
}) => {
  const Icon = passwordIsVisible ? EyeIcon : EyeSlashIcon;
  return (
    <button
      className="absolute right-0 top-1/2 mr-3 -translate-y-1/2"
      onClick={onClick}
      aria-label={passwordIsVisible ? 'Hide password' : 'Show password'}
      type="button"
    >
      <Icon className="h-4 w-4 cursor-pointer text-gray-600 dark:text-gray-400" />
    </button>
  );
};

export const Input = ({
  id,
  type = 'text',
  label,
  placeholder,
  size,
  autocomplete,
  className,
  register,
  required,
  validate,
  pattern,
  error,
  hint,
}: InputProps) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const inputType =
    type === 'password' ? (passwordShown ? 'text' : 'password') : type;

  const LeftIcon = iconMap[type];

  const RightIcon = error ? (
    <InformationCircleIcon className="text-semantic-error absolute right-0 top-1/2 mr-3 h-5 w-5 -translate-y-1/2" />
  ) : type === 'password' ? (
    <PasswordVisibilityToggle
      passwordIsVisible={passwordShown}
      onClick={() => setPasswordShown(!passwordShown)}
    />
  ) : null;

  const hookFormRegister = register
    ? register(id, { required, validate, pattern })
    : undefined;

  return (
    <div className={clsx(className)}>
      <label
        htmlFor={id}
        className="dark:text-brand-secondary mb-2 block text-base font-semibold text-gray-600"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          size={size}
          autoComplete={autocomplete}
          className={clsx(
            'shadow-xs  inline-flex w-full gap-x-2 rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-base text-gray-600 no-underline placeholder:text-gray-300 dark:bg-black dark:text-gray-100 placeholder:dark:text-gray-600',
            LeftIcon ? 'pl-10' : 'pl-3',
            RightIcon ? 'pr-10' : 'pr-3',
            error && 'border-semantic-error',
          )}
          {...hookFormRegister}
        />
        {LeftIcon && (
          <LeftIcon className="absolute top-1/2 ml-3 h-5 w-5 -translate-y-1/2  text-gray-500 dark:text-gray-400" />
        )}
        {RightIcon}
      </div>
      <p
        className={clsx(
          'mt-2 text-sm',
          error && 'text-semantic-error',
          hint && !error && 'dark:text-brand-secondary text-gray-600',
          !hint && !error && 'h-5',
        )}
      >
        {error ? error.message : hint}
      </p>
    </div>
  );
};
