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
  register: any;
  required?: string;
  validate?: any;
  pattern?: string | { value: string | RegExp; message: string };
  error?: any;
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
}: InputProps) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1 block">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        size={size}
        autoComplete={autocomplete}
        className="inline-flex w-full gap-x-2 rounded px-3 py-1 text-sm font-medium no-underline dark:bg-gray-700 dark:text-gray-100"
        {...register(id, {
          required,
          validate,
          pattern,
        })}
      />
      {error && <span>{error.message}</span>}
    </div>
  );
};
