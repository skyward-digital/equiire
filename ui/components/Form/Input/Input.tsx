import clsx from 'clsx';
import { KeyIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

type InputProps = {
  id: string;
  type?: 'text' | 'email' | 'tel' | 'password';
  label: string;
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

export const Input = ({
  id,
  type = 'text',
  label,
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
}: InputProps) => {
  const Icon = iconMap[type];

  const hookFormRegister = register
    ? register(id, { required, validate, pattern })
    : undefined;

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="dark:text-brand-secondary mb-2 block text-gray-600"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          size={size}
          inputMode={inputMode}
          maxLength={maxLength}
          autoComplete={autocomplete}
          className={clsx(
            'shadow-xs dark:border-brand-secondary inline-flex w-full gap-x-2 rounded-lg border border-gray-300 py-2 pl-10 pr-3 text-base text-gray-600 no-underline placeholder:text-gray-300 dark:bg-black dark:text-gray-100 placeholder:dark:text-gray-400',
            Icon ? 'pl-10' : 'pl-3',
          )}
          {...hookFormRegister}
        />
        {Icon && (
          <Icon className="absolute top-3 ml-3 h-[20px] w-[20px] text-gray-600 dark:text-gray-100" />
        )}
      </div>
      <div className="dark:text-brand-secondary mt-2 text-sm text-gray-600">
        {hint && hint}
      </div>
      {error && <span>{error.message}</span>}
    </div>
  );
};
