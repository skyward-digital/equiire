'use client';
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
  value?: string;
  placeholder?: string;
  size?: number;
  maxLength?: number;
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
    | 'cc-csc' // card security code, aka cvc
    | 'cc-type';
  inputMode?: 'text' | 'none' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal';
  className?: string;
  register?: any;
  required?: string;
  validate?: any;
  pattern?: { value: string | RegExp; message: string };
  error?: any;
  hint?: string;
  Icon?: any;
  disabled?: boolean;
  defaultValue?: any;
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
      className="focus:ring-brand-100 focus:border-brand-300 absolute right-0 top-1/2 mr-3 -translate-y-1/2 rounded-full border border-transparent focus:outline-none focus:ring-2 "
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
  value,
  placeholder,
  size,
  autocomplete,
  inputMode,
  maxLength,
  className,
  register,
  required,
  validate,
  pattern,
  error,
  hint,
  Icon,
  disabled,
  defaultValue,
}: InputProps) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const inputType =
    type === 'password' ? (passwordShown ? 'text' : 'password') : type;

  const LeftIcon = Icon ? Icon : iconMap[type];

  const RightIcon = error ? (
    <InformationCircleIcon className="text-error absolute right-0 top-1/2 mr-3 h-5 w-5 -translate-y-1/2" />
  ) : type === 'password' ? (
    <PasswordVisibilityToggle
      passwordIsVisible={passwordShown}
      onClick={() => setPasswordShown(!passwordShown)}
    />
  ) : null;

  const hookFormRegister = register
    ? register(id, { value, required, validate, pattern })
    : undefined;

  return (
    <div className={clsx(className)}>
      <label
        htmlFor={id}
        className="mb-2 block text-base font-semibold text-gray-600 dark:text-gray-400"
      >
        {label}
      </label>
      <div className="relative mb-5">
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          size={size}
          defaultValue={defaultValue}
          inputMode={inputMode}
          maxLength={maxLength}
          autoComplete={autocomplete}
          className={clsx(
            'shadow-xs focus:ring-brand-100 focus:border-brand-300 inline-flex w-full gap-x-2 rounded-lg border bg-white py-2 pl-10 pr-3 text-base text-gray-600 no-underline placeholder:text-gray-300 focus:outline-none focus:ring-4 dark:bg-black dark:text-gray-100 placeholder:dark:text-gray-600',
            LeftIcon ? 'pl-10' : 'pl-3',
            RightIcon ? 'pr-10' : 'pr-3',
            error ? 'border-error' : 'border-gray-300',
          )}
          disabled={disabled}
          {...hookFormRegister}
        />
        {LeftIcon && (
          <LeftIcon className="absolute top-1/2 ml-3 h-5 w-5 -translate-y-1/2  text-gray-500 dark:text-gray-400" />
        )}
        {RightIcon}
      </div>
      {error?.message || hint ? (
        <p
          className={clsx(
            '-mt-3 mb-2 text-sm',
            error && 'text-error',
            hint && !error && 'dark:text-brand-secondary text-gray-600',
            !hint && !error && 'h-5',
          )}
        >
          {error?.message ?? hint ?? ' '}
        </p>
      ) : null}
    </div>
  );
};
